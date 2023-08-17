import game from '../components/game/game';

describe('Game Object', () => {
  it('has init method', () => {
    expect(game).toHaveProperty('init');
  });

  it('has placement method', () => {
    expect(game).toHaveProperty('placement');
  });
  it('has playGame method', () => {
    expect(game).toHaveProperty('playGame');
  });
});
