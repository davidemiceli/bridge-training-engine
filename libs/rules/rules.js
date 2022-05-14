import jsep from 'jsep';
import { sum } from 'lodash';
import GameHelpers from '@/libs/gameHelpers';
import HandGenerator from '@/libs/rules/handGenerator';
import RuleError from '@/libs/rules/errors';


export default new class {

    constructor() {
        this.cardSymbols = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        // Common configurations
        const Exps = ['-', '+', '==', '='];
        for (const exp of Exps) {
            jsep.removeBinaryOp(exp);
            jsep.removeUnaryOp(exp);
        }
        jsep.addUnaryOp('+');
        jsep.addUnaryOp('-');
    }

    cardsToRule(cards) {
        const { cardSymbols } = this;
        const suits = GameHelpers.suits();
        const players = GameHelpers.players();
        const ruleData = players.map(p => {
            const playerRule = suits.map(s => {
                const strCards = cards.filter(c => c.player_id == p && c.suit == s).sort((a,b) => b.value - a.value).map(c => cardSymbols[c.value-2]).join('');
                return `.${s}(+${strCards})`
            });
            const pRuleStr = playerRule.join('');
            return p + pRuleStr;
        });
        return ruleData.join('\n');
    }

    ruleCards(cards) {
        const { cardSymbols } = this;
        const choosenCardValues = cardSymbols.filter(cs => new RegExp(cs).test(cards)).map(cs => cardSymbols.indexOf(cs)+2).sort((a,b) => b - a);
        return choosenCardValues.map(Number);
    }

    ruleSuit(suit, player_id, rules, norms) {
        const [ low, high ] = rules.filter(r => typeof(r) == 'number');
        // Included cards
        const cardsInclude = rules.filter(r => typeof(r) == 'string' && /^\+/.test(r) && r.replace('+', ''))[0];
        const include = cardsInclude ? this.ruleCards(cardsInclude) : [];
        // Excluded cards
        const cardsExclude = rules.filter(r => typeof(r) == 'string' && /^-/.test(r) && r.replace('-', ''))[0];
        const exclude = cardsExclude ? this.ruleCards(cardsExclude) : [];
        // Validations
        if (include.some(v => exclude.includes(v))) throw Error(`${player_id}.${suit} rule does not allow excluded and included overlapping cards.`);
        const includeCount = include.length;
        const excludeCount = exclude.length;
        const exclusionRemaining = 13 - excludeCount;
        let min = 0, max = 13;
        if (low > 13 || high > 13) throw Error(`${player_id}.${suit} rule allows only 13 as maximum range value.`);
        if (low != undefined && high != undefined && low > high) throw Error(`${player_id}.${suit} rule has an inconsistent range ${low}-${high}.`);
        if (excludeCount > 0) {
            if (low != undefined && low >= exclusionRemaining) throw Error(`${player_id}.${suit} rule, ${cardsExclude} are more than ${high} cards.`);
        }
        if (includeCount > 0) {
            if (high != undefined && includeCount > high) throw Error(`${player_id}.${suit} rule, ${cardsInclude} are more than ${high} cards.`);
            if (high == undefined && low != undefined && includeCount > low) throw Error(`${player_id}.${suit} rule, ${cardsInclude} are more than ${low} cards.`);
        }
        min = low == undefined ? 0 : low;
        max = high == undefined ? (low == undefined ? 13 : low) : high;
        norms[player_id][suit] = Object.assign(norms[player_id][suit], {min, max, include, exclude});
        return norms;
    }

    interpret(player_id, rules, norms) {
        const suits = GameHelpers.suits();
        for (const s of suits) {
            // north.spades(3,5,+KJ10,-Q9) or also north.spades(3)
            if (rules[s]) norms = this.ruleSuit(s, player_id, rules[s], norms);
        }
        return norms;
    }

    validate(norms) {
        const suits = GameHelpers.suits();
        const players = GameHelpers.players();
        // Check suit cards are less than the maximum
        const suitCount = suits.map(s => [s, sum(players.map(p => norms[p][s].min))]);
        for (const s of suitCount) {
            const [suit, count] = s;
            if (count > 13) throw Error(`total defined ${suit} cards are ${count} cards, but 13 is the maximum.`);
        }
        // Check include cards
        for (const s of suits) {
            const included = players.reduce((a,p) => { a.push(...norms[p][s].include); return a; }, []);
            const uniqueCount = new Set(included).size;
            if (included.length != uniqueCount) throw Error(`more players hold one or more ${s} cards with the same value.`);
        }
        // Check total distribution player cards
        for (const p of players) {
            const total = sum(suits.map(s => norms[p][s].min));
            if (total > 13) throw Error(`player ${p} can not have more than 13 cards.`);
        }
    }

    groupRuleByPlayer(rulesByPlayers, rule, acc) {
        const suits = GameHelpers.suits();
        const players = GameHelpers.players();
        const allowedProps = [...suits]; // Add here new properties in the future
        switch(true) {
            case (rule.type == 'CallExpression'):
                const args = rule.arguments;
                const prop = rule.callee.property.name;
                if (!allowedProps.includes(prop)) throw Error('not valid player property.');
                acc[prop] = args.map(v => {
                    if (v.type == 'UnaryExpression' && v.operator && ['+', '-'].includes(v.operator)) {
                        return v.operator + String(v.argument.value || v.argument.name);
                    }
                    return v.value || v.name;
                });
                if (rule.callee.object.name) {
                    const playerId = rule.callee.object.name;
                    if (!players.includes(playerId)) throw Error('not valid or unspecified player id.');
                    rulesByPlayers[playerId] = Object.assign(rulesByPlayers[playerId], acc);
                    return rulesByPlayers;
                } else {
                    rulesByPlayers = this.groupRuleByPlayer(rulesByPlayers, rule.callee.object, acc);
                }
                return rulesByPlayers;
            default:
                return rulesByPlayers;
        }
    }

    traverse(rule) {
        const suits = GameHelpers.suits();
        const players = GameHelpers.players();
        // Parse rules by player
        let rulesByPlayers = players.reduce((acc, p) => { acc[p] = []; return acc; }, {});
        rule.forEach(r => {
            this.groupRuleByPlayer(rulesByPlayers, r, {});
        });
        // Interpret rules as norms
        let norms = players.reduce((a,p) => {
            a[p] = suits.reduce((as,s) => { as[s] = {min: 0, max: 13, include: [], exclude: []}; return as; }, {});
            return a;
        }, {});
        for (const [playerId, rules] of Object.entries(rulesByPlayers)) {
            norms = this.interpret(playerId, rules, norms);
        }
        return norms;
    }

    replacePlaceholders(rule) {
        const placeholders = ['x', 'y', 'z', 't'];
        const suits = GameHelpers.shuffleArray(GameHelpers.suits());
        const assignedSuits = placeholders.map((v,i) => [v, suits[i]]);
        for (const s of assignedSuits) {
            const [plchl, suit] = s;
            rule = rule.replaceAll(`.${plchl}(`, `.${suit}(`);
        }
        return rule;
    }

    async translate(rule) {
        const ruleToParse = this.replacePlaceholders(rule);
        const parserTree = jsep(ruleToParse);
        let hand = [];
        try {
            const ruleval = ((parserTree.type === 'Compound') ? parserTree.body : [parserTree]) || [];
            const norms = this.traverse(ruleval);
            this.validate(norms);
            hand = await HandGenerator.applyNorms(norms);
        } catch(err) {
            console.log(err.stack);
            throw new RuleError(`Invalid rule: ${err.message}`);
        }
        hand = hand.sort((a, b) => a.suit.localeCompare(b.suit) || (b.value - a.value));
        return hand;
    };
}