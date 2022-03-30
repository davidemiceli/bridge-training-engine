

export default class {

    constructor(id, cards) {
        this.id = id;
        this.behavior = null;
        this.dummyIsActive = false;
        this.dummy = false;
        this.cards = cards || [];
        this.card_deck = cards || [];
        this.bid = null;
        this.last_bid = null; 
    }

    activateDummy() {
        // Activate dummy status
        this.dummyIsActive = this.dummy ? true : false;
    }

    deactivateDummy(self) {
        // Activate dummy status
        self.dummyIsActive = false;
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
}
