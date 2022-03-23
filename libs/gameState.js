'use strict';

import GameHelpers from '@/libs/gameHelpers';

const players = GameHelpers.players();

const GameState = (id, settings) => ({
    id: id,
    settings,
    // settings: {
    //     bidding: 'auto',
    //     cards: [
    //         // { "card_id": "spades12", "suit": "spades", "value": 12, "rank": 49, "player_id": "south" }
    //     ],
    //     playground: 'classic-playground',
    //     display_cards_top_team: false,
    //     display_cards_contract_team: true,
    //     players: {
    //         south: {
    //             show_cards: 'no',
    //             show_points: 'no'
    //         },
    //         // ...
    //     },
    //     show_cards_top_team_player: 'west'
    // },
    status_msg: [],
    players: players.map(p => ({
        id: p,
        behavior: null,
        dummyIsActive: false,
        dummy: false,
        vulnerable: false,
        cards: [], // [{ "card_id": "spades12", "suit": "spades", "value": 12, "rank": 49, "player_id": "south" }, ...]
        card_deck: [],
        bid: null,
        last_bid: null
    })),
    bids: [],
    contract: null,
    cards: [],
    tricks: [],
    score: [],
    loop_players: [], // ['east', 'south', 'west', 'north'],
    current_player: 'east',
    contract_was_defined: false,
    loop_cards: []
});

export default GameState;