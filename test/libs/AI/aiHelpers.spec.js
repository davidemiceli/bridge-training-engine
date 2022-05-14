import AiHelpers from '@/libs/AI/aiHelpers';
import GameHelpers from '@/libs/gameHelpers';
import Rule from '@/libs/rules/rules';
import RuleExamples from '@/libs/rules/examples';
import GameEngine from '@/libs/gameEngine';


describe('AiHelpers', () => {
  test('can get the order of suits to play', async () => {
      const gameCustoms = GameHelpers.getGameCustoms();
      const rule = RuleExamples[6].rule;
      gameCustoms.cards = await Rule.translate(rule);
      const gameState = GameEngine.new(gameCustoms);
      const { players, cards } = gameState;
      const playerId = GameHelpers.getTopTeamPlayer(gameCustoms.cards);
      const player = GameHelpers.getPlayer(players, playerId);
      const startingTeamCards = GameHelpers.getTeamCards(playerId, cards);
      const teamCards = startingTeamCards;
      const opponentCards = GameHelpers.getOpponentCards(playerId, players);
      const suitOrder = AiHelpers.getSuitOrder(player, startingTeamCards, teamCards, opponentCards, 'notrump');
      const expected = [ 'clubs', 'diamonds', 'hearts', 'spades' ];
      expect(suitOrder).toEqual(expected);
  })
});
