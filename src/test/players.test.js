import Player from '../components/players';

describe('Player', () => {
  const player = Player();
  it('has setIsHuman() method', () => {
    expect(player).toHaveProperty('setIsHuman');
  });

  it('has setPlayerName() method', () => {
    expect(player).toHaveProperty('setPlayerName');
  });

  it('has getPlayerName() method', () => {
    expect(player).toHaveProperty('getPlayerName');
  });

  it('has setPlayerTurn() method', () => {
    expect(player).toHaveProperty('setPlayerTurn');
  });

  it('has the property generateRandomCoordinates()', () => {
    expect(player).toHaveProperty('generateRandomCoordinates');
  });
});

describe('The method setIsHuman()', () => {
  const player = Player();
  it('does not accept empty argument', () => {
    expect(player.setIsHuman()).toBe('Invalid setting');
  });

  it('accept only true or false has parameter', () => {
    const values = [
      'true',
      'false',
      0,
      1,
      {},
      [],
      { isHuman: true },
      { isHuman: false },
      [true],
      [false],
      NaN,
      null,
      undefined
    ];
    values.forEach((value) =>
      expect(player.setIsHuman(value)).toBe('Invalid setting')
    );
  });
});

describe('The method setPlayerName()', () => {
  const player = Player();
  it('set a string as player one name', () => {
    const values = [
      'David',
      true,
      ['undefined'],
      { key: 'value' },
      [],
      {},
      123,
      NaN,
      null
    ];

    values.forEach((value) => {
      player.setIsHuman(true);
      player.setPlayerName(value);
      expect(player.getPlayerName()).toBe(`${value}`);
    });
  });

  it('set an empty name if the value is an empty string', () => {
    player.setIsHuman(true);
    player.setPlayerName('');
    expect(player.getPlayerName()).toBe('');
  });

  it('set an empty string if the value is undefined', () => {
    player.setIsHuman(true);
    player.setPlayerName();
    expect(player.getPlayerName()).toBe('');
  });

  it(`set 'cpu' as player two name`, () => {
    player.setIsHuman(false);
    player.setPlayerName();
    expect(player.getPlayerName()).toBe('Cpu');

    const values = [
      'David',
      true,
      ['undefined'],
      { key: 'value' },
      [],
      {},
      123,
      NaN,
      null,
      undefined
    ];

    values.forEach((value) => {
      player.setPlayerName(`${value}`);
      expect(player.getPlayerName()).toBe('Cpu');
    });
  });
});

describe('The method getPlayerName()', () => {
  const player = Player();
  it('get the name of player one', () => {
    player.setIsHuman(true);
    player.setPlayerName('Smith');
    expect(player.getPlayerName()).toBe('Smith');
  });

  it(`get 'cpu' as the name of player two`, () => {
    player.setIsHuman(false);
    player.setPlayerName('Smith');
    expect(player.getPlayerName()).toBe('Cpu');
  });
});

describe('The method setPlayerTurn()', () => {
  const player = Player();
  it('does not accept empty argument', () => {
    expect(player.setPlayerTurn()).toBe('Invalid setting');
  });

  it('accept only true or false has parameter', () => {
    const values = [
      'true',
      'false',
      0,
      1,
      {},
      [],
      { isHuman: true },
      { isHuman: false },
      [true],
      [false],
      NaN,
      null,
      undefined
    ];
    values.forEach((value) =>
      expect(player.setPlayerTurn(value)).toBe('Invalid setting')
    );
  });
});

describe('The method generateRandomCoordinates()', () => {
  const player = Player();
  it('generate coordinates with x and y inside 0 - 9 range', () => {
    for (let i = 0; i < 100; i++) {
      let [x, y] = player.generateRandomCoordinates();
      expect(parseInt(x)).toBeGreaterThanOrEqual(0);
      expect(parseInt(x)).toBeLessThanOrEqual(9);
      expect(parseInt(y)).toBeGreaterThanOrEqual(0);
      expect(parseInt(y)).toBeLessThanOrEqual(9);
    }
  });
});
