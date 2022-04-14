

export default class {

    constructor(data) {
        if (data.id === undefined) this.id = uuidv4();
        this.behavior = null;
        this.dummyIsActive = false;
        this.dummy = false;
        this.cards = [];
        this.card_deck = data.cards || [];
        this.bid = null;
        this.last_bid = null;
        this.partner = {};
        if (data) {
            Object.assign(this, data);
        }
    }

    addPartner(p) {
        this.partner = p;
    }

    setDummy(v) {
        // Activate dummy status
        this.dummy = Boolean(v);
    }

    activateDummy() {
        // Activate dummy status
        this.dummyIsActive = this.dummy ? true : false;
    }

    deactivateDummy() {
        // Dectivate dummy status
        this.dummyIsActive = false;
    }

    resetDummy() {
        // Reset dummy status
        this.dummy = false;
        this.dummyIsActive = false;
    }
    
    memorizeCardToPlay(card) {
        // Memorize card to play
        this.next_card = card;
    }

    hasMemorizedCard() {
        // Memorize card to play
        return this.next_card || null;
    }

    memorizedCard() {
        // Return memorized card
        card = this.next_card;
        this.next_card = null;
        return card;
    }

    dropPlayedCard(card) {
        this.cards = this.cards.filter(c => c.card_id != card.card_id);
    }

}
