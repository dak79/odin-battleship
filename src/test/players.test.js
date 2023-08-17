import Player from '../components/players';

describe('Player', () => {
  it('has setIsHuman() method', () => {
    const player = Player();
    expect(player).toHaveProperty('setIsHuman');
  });

  it('has setPlayerName() method', () => {
    const player = Player();
    expect(player).toHaveProperty('setPlayerName');
  });

  it('has getPlayerName() method', () => {
    const player = Player();
    expect(player).toHaveProperty('getPlayerName');
  });

  it('has setPlayerTurn() method', () => {
    const player = Player();
    expect(player).toHaveProperty('setPlayerTurn');
  });

  it('has the property generateRandomCoordinates()', () => {
    const player = Player();
    expect(player).toHaveProperty('generateRandomCoordinates');
  });
});

describe('The method setIsHuman()', () => {
  it('does not accept empty argument', () => {
    const player = Player();
    expect(player.setIsHuman()).toBe('Invalid setting');
  });

  it('accept only true or false has parameter', () => {
    const player = Player();
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
  it('set a string as player one name', () => {
    const player = Player();
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
    const player = Player();
    player.setIsHuman(true);
    player.setPlayerName('');
    expect(player.getPlayerName()).toBe('');
  });

  it('set an empty string if the value is undefined', () => {
    const player = Player();
    player.setIsHuman(true);
    player.setPlayerName();
    expect(player.getPlayerName()).toBe('');
  });

  it(`set 'cpu' as player two name`, () => {
    const player = Player();
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
  it('get the name of player one', () => {
    const player = Player();
    player.setIsHuman(true);
    player.setPlayerName('Smith');
    expect(player.getPlayerName()).toBe('Smith');
  });

  it(`get 'cpu' as the name of player two`, () => {
    const player = Player();
    player.setIsHuman(false);
    player.setPlayerName('Smith');
    expect(player.getPlayerName()).toBe('Cpu');
  });
});

describe('The method setPlayerTurn()', () => {
  it('does not accept empty argument', () => {
    const player = Player();
    expect(player.setPlayerTurn()).toBe('Invalid setting');
  });

  it('accept only true or false has parameter', () => {
    const player = Player();
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
  it('generate coordinates with x and y inside 0 - 9 range', () => {
    const player = Player();
    for (let i = 0; i < 100; i++) {
      let [x, y] = player.generateRandomCoordinates();
      expect(parseInt(x)).toBeGreaterThanOrEqual(0);
      expect(parseInt(x)).toBeLessThanOrEqual(9);
      expect(parseInt(y)).toBeGreaterThanOrEqual(0);
      expect(parseInt(y)).toBeLessThanOrEqual(9);
    }
  });
});
