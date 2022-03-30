'use strict';

import { v4 as uuidv4 } from 'uuid';
import GameState from '@/libs/gameState';
import GameHelpers from '@/libs/gameHelpers';
import Player from '@/libs/classes/player';


class GameEngine {

    constructor() { }

    new(data) {
        const gameId = uuidv4();
        console.log(data);
        const s = new GameState(gameId, data);
        // Initialize players
        s.players = GameHelpers.players().map(id => {
            const cards = data.cards.filter(c => c.player_id == id);
            return new Player(id, cards);
        });
        // Initialize first player to play and game loop
        const [loop_players, player_id] = this.getNextPlayerToPlay(s);
        s.setCurrentPlayer(player_id);
        s.setCurrentLoop(loop_players);
        console.log(s);
        return s;
    }

    load() { }

    undo(steps) { }

    play({card, bid, auto}) { }

    nextStep(runs) { }

    getNextPlayerToPlay(s) {
        // Get next player that will play
        const cards_count = s.cards.length;
        const bid_count = s.bids.length;
        const { loop_cards, tricks_count, tricks } = s;
        let player_id, loop;
        if (!s.contract && bid_count == 0) {
            player_id = s.current_player ? str(s.current_player) : GameHelpers.randomItemFromArray(s.players).id;
            loop = GameHelpers.loopNextPlayer(player_id);
        } else if (!s.contract && bid_count > 0) {
            player_id = GameHelpers.getNextPlayer(s.bids[-1].player_id).id;
            loop = GameHelpers.loopNextPlayer(s.bids[0].player_id, s.players);
        } else if (s.contract && cards_count == 0) {
            player_id = GameHelpers.getNextPlayer(s.contract.player_id).id;
            loop = GameHelpers.loopNextPlayer(player_id);
        } else if (s.contract && cards_count > 0) {
            const loop_cards_count = loop_cards.length;
            if (tricks_count > 0 && (loop_cards_count == 0 || loop_cards_count == 4)) {
                player_id = GameHelpers.get_trick_winner(tricks[-1]);
                loop = GameHelpers.loopNextPlayer(player_id);
            } else {
                player_id = GameHelpers.getNextPlayer(loop_cards[-1].player_id).id;
                loop = GameHelpers.loopNextPlayer(loop_cards[0].player_id);
            }
        }
        loop = loop.map(p => p.id);
        return [loop, player_id];
    }

}

export default new GameEngine();