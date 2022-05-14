import GameHelpers from '@/libs/gameHelpers';


describe('GameHelpers', () => {
  test('can generate the list of suits', () => {
    const suits = GameHelpers.suits();
    const expected = [ 'diamonds', 'clubs', 'hearts', 'spades' ];
    expect(suits).toEqual(expected);
  })
});
