/* Use suits (clubs, diamonds, hearts, spades) or placeholders (x, y, z, t)
Blank template example:
north.clubs(+).diamonds(+).hearts(+).spades(+)
south.clubs(+).diamonds(+).hearts(+).spades(+)
east.clubs(+).diamonds(+).hearts(+).spades(+)
west.clubs(+).diamonds(+).hearts(+).spades(+)*/

export default [
    {
        name: 'N having 4333 with KJ and without Q, S having 52## and E 6331',
        description: 'N having 4333 with KJ and without Q, S having 52## and E 6331',
        contracts: [],
        rule: `
        north.x(4).y(3,5,+KJ,-Q7).z(3).t(3)
        south.z(2).t(5)
        east.z(6).t(3).x(3).y(1)`
    },
    {
        name: 'NS having trump 7+3 cards',
        description: 'Deck 10 trump cards with distributions of NS 4333-7222 and EW 4441-####',
        contracts: [{player_id: 'south', bid: '5 x'}],
        rule: `
        north.x(+754).y(+K643).z(+J65).t(+J74)
        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)
        east.x(+2).y(+10852).z(+AKQ2).t(+Q652)`
    },
    {
        name: 'NS having trump 7+3 cards and EW with random distrubuted cards',
        description: 'Deck 10 trump cards with NS 4333-7222, instead the opponent team with random cards',
        contracts: [{player_id: 'south', bid: '5 x'}],
        rule: `
        north.x(+754).y(+K643).z(+J65).t(+J74)
        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)`
    },
    {
        name: '3NT Ovest-East, with quite balanced cards',
        description: 'Decks with EW 5431-4333 and NS 5422-5431',
        contracts: [{player_id: 'west', bid: '3 notrump'}],
        rule: `
        north.clubs(+9742).diamonds(+J10964).hearts(+Q4).spades(+J4)
        south.clubs(+A).diamonds(+875).hearts(+KJ107).spades(+Q10972)
        east.clubs(+J10653).diamonds(+A).hearts(+9652).spades(+863)
        west.clubs(+KQ8).diamonds(+KQ32).hearts(+A83).spades(+K5)`
    },
    {
        name: 'Trump 6 spades with other players quite balanced',
        description: 'Decks with trump 6+3 spades for EW team, with EW 4432-6322 and NS 4333-5431',
        contracts: [{player_id: 'west', bid: '6 spades'}],
        rule: `
        north.clubs(+Q72).diamonds(+QJ102).hearts(+1075).spades(+932)
        south.clubs(+J10643).diamonds(+K95).hearts(+QJ92).spades(+4)
        east.clubs(+A5).diamonds(+8764).hearts(+863).spades(+Q75)
        west.clubs(+K98).diamonds(+A3).hearts(+AK).spades(+AKJ1086)`
    },
    {
        name: '3NT for NS team, with NS 6322-4432 and EW 4432-5332',
        description: 'Decks with trump 5+3 spades for EW team, with NS 6322-4432 and EW 4432-5332',
        contracts: [{player_id: 'south', bid: '3 notrump'}],
        rule: `
        north.clubs(+754).diamonds(+AQJ943).hearts(+K5).spades(+J10)
        south.clubs(+AK86).diamonds(+102).hearts(+AQ63).spades(+Q95)
        east.clubs(+Q932).diamonds(+K6).hearts(+J1098).spades(+K64)
        west.clubs(+J10).diamonds(+875).hearts(+742).spades(+A8732)`
    },
    {
        name: '3NT for NS team with both decks balanced',
        description: '3NT for NS team, having 26 points and both decks balanced, NS 4333-4432 and EW 5332-4333',
        contracts: [{player_id: 'south', bid: '3 notrump'}],
        rule: `
        north.clubs(+AJ43).diamonds(+K102).hearts(+KJ5).spades(+A108)
        south.clubs(+962).diamonds(+QJ96).hearts(+AQ107).spades(+J3)
        east.clubs(+1085).diamonds(+874).hearts(+92).spades(+K9642)
        west.clubs(+KQ7).diamonds(+A53).hearts(+8643).spades(+Q75)`
    },
    {
        name: 'Trump hand where it is easy to make mistakes',
        description: 'A 4 spades West hand where it is easy to make mistakes, with decks NS 5332-5431 and EW 4432-6331',
        contracts: [{player_id: 'west', bid: '4 spades'}],
        rule: `
        north.clubs(+J8743).diamonds(+Q4).hearts(+J86).spades(+974)
        south.clubs(+Q65).diamonds(+K932).hearts(+AQ74).spades(+10)
        east.clubs(+K9).diamonds(+AJ107).hearts(+K1053).spades(+AJ8)
        west.clubs(+A102).diamonds(+865).hearts(+2).spades(+KQ6532)`
    },
    {
        name: 'Trump 10+1 lowest cards N and the S distribution 5431',
        description: 'Team NS 9###-5431 with 8 points but a longest trump of N 10 + S 1 lowest cards',
        contracts: [{player_id: 'north', bid: '4 x'}],
        rule: `
        north.x(+1098765432)
        south.x(+J).y(+A10873).z(+J932).t(+Q54)`
    },
    {
        name: 'Trump with 4+3 cards NS',
        description: 'Team NS 5332-4333 with trump 4+3 with opponent random cards',
        contracts: [{player_id: 'north', bid: '1 x'}],
        rule: `
        north.x(+KQJ98).y(+1042).z(+AQ).t(+975)
        south.x(+632).y(+KQ63).z(+K82).t(+432)`
    },
    {
        name: 'Trump with random 5+5 cards NS',
        description: 'Team NS 5332-5332 with trump 5+5 with random cards',
        contracts: [{player_id: 'north', bid: '4 x'}],
        rule: `
        north.x(5).y(3).t(3).z(2)
        south.x(5).y(3).t(2).z(3)`
    },
    {
        name: 'Trump with random 6+4 cards NS',
        description: 'Team NS 6322+4333 with trump 6+4 with random cards',
        contracts: [{player_id: 'north', bid: '4 x'}],
        rule: `
        north.x(6).y(2).t(2).z(3)
        south.x(4).y(3).t(3).z(3)`
    },
    {
        name: 'Trump with random 6+3 cards NS',
        description: 'Team NS 6322+4333 with trump 6+3 with random cards',
        contracts: [{player_id: 'north', bid: '4 x'}],
        rule: `
        north.x(6).y(2).t(2).z(3)
        south.x(3).y(4).t(3).z(3)`
    },
    {
        name: 'Trump with random 7+3 cards NS',
        description: 'Team NS 7222+4333 with trump 7+3 with random cards',
        contracts: [{player_id: 'north', bid: '4 x'}],
        rule: `
        north.x(7).y(2).t(2).z(2)
        south.x(3).y(4).t(3).z(3)`
    },
    {
        name: 'Trump with random 8+2 cards NS',
        description: 'Team NS 8221-4432 with trump 8+2 with random cards',
        contracts: [{player_id: 'north', bid: '4 x'}],
        rule: `
        north.x(8).y(2).t(2).z(1)
        south.x(2,3).y(4).t(2,3).z(4)`
    },
    {
        name: 'NS random cards with 12+12 points but no A and 10',
        description: 'Team NS will have 24 points distributed as 12+12, without A and 10 and with random cards',
        contracts: [{player_id: 'south', bid: '2 notrump'}],
        rule: `
        north.x(+KJ,-A10).y(+QJ,-A10).t(+KQ,-A10).z(-A10)
        south.x(+Q,-A10).y(+K,-A10).t(+J,-A10).z(+KQJ,-A10)`
    },
    {
        name: 'Random cards with 20 points for each team alternating all honors',
        description: 'Random cards with 20 points for each team alternating all combinations of honors',
        contracts: [{player_id: 'south', bid: '1 notrump'}],
        rule: `
        north.x(+K).y(+Q).t(+A).z(+K)
        south.x(+J).y(+A).t(+J10).z(+Q)
        east.x(+A).y(+J).t(+Q).z(+A)
        west.x(+Q).y(+K).t(+K).z(+J)`
    },
    {
        name: 'NS team having inverted unbalanced decks',
        description: 'Team NS 8320-8320 and having them random 8 cards in the opposite suit',
        contracts: [],
        rule: `
        north.x(8).t(2).z(3)
        south.y(8).t(3).z(2)`
    },
    {
        name: 'EW team having a 2 level fit of diamonds',
        description: 'Team EW 6331-5422 and having them 7 cards (4+3) of diamonds, playable also with 2 spades but diamonds is more correct.',
        contracts: [{player_id: 'west', bid: '2 diamonds'}],
        rule: `
        north.clubs(+J10632).diamonds(+1032).hearts(+32).spades(+Q72)
        south.clubs(+AK).diamonds(+J64).hearts(+QJ10765).spades(+65)
        east.clubs(+7).diamonds(+AQ8).hearts(+A98).spades(+AKJ1098)
        west.clubs(+Q9854).diamonds(+K975).hearts(+K4).spades(+43)`
    },
    {
        name: 'EW team having a 2 level fit of hearts',
        description: 'Team EW 5431-5422 and having them 8 cards (4+4) of hearts, playable also with 1 spades but hearts is more correct.',
        contracts: [{player_id: 'east', bid: '2 hearts'}],
        rule: `
        north.clubs(+J876).diamonds(+Q102).hearts(+AQ10).spades(+1094)
        south.clubs(+KQ109).diamonds(+A943).hearts(+J6).spades(+J85)
        east.clubs(+A54).diamonds(+5).hearts(+432).spades(+AKQ76)
        west.clubs(+32).diamonds(+KJ876).hearts(+K987).spades(+32)`
    }
];