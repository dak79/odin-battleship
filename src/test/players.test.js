import Player from '../components/players';

describe('Player', () => {
  it('has setIsHuman() method', () => {
    const player = Player();
    expect(player).toHaveProperty('setIsHuman');
  });

  it('has getIsHuman() method', () => {
    const player = Player();
    expect(player).toHaveProperty('getIsHuman');
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

  it('has getPlayerTurn() method', () => {
    const player = Player();
    expect(player).toHaveProperty('getPlayerTurn');
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

  it('set correctly true', () => {
    const player = Player();
    player.setIsHuman(true);
    expect(player.getIsHuman()).toBe(true);
  });

  it('set correctly false', () => {
    const player = Player();
    player.setIsHuman(false);
    expect(player.getIsHuman()).toBe(false);
  });
});

describe('The method getIsHuman()', () => {
  it('get correctly the value of isHuman if is valid', () => {
    const playerOne = Player();
    const playerTwo = Player();
    playerOne.setIsHuman(true);
    expect(playerOne.getIsHuman()).toBe(true);
    playerTwo.setIsHuman(false);
    expect(playerTwo.getIsHuman()).toBe(false);
  });

  it('get undefined if the value of isHuman property was invalid', () => {
    const playerOne = Player();
    const playerTwo = Player();
    playerOne.setIsHuman();
    expect(playerOne.getIsHuman()).toBeUndefined();
    playerTwo.setIsHuman('true');
    expect(playerTwo.getIsHuman()).toBeUndefined();
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

  it('set correctly true', () => {
    const player = Player();
    player.setPlayerTurn(true);
    expect(player.getPlayerTurn()).toBe(true);
  });

  it('set correctly false', () => {
    const player = Player();
    player.setPlayerTurn(false);
    expect(player.getPlayerTurn()).toBe(false);
  });
});

describe('The method getPlayerTurn()', () => {
  it('get correctly the value of isPlaying if is valid', () => {
    const playerOne = Player();
    const playerTwo = Player();
    playerOne.setPlayerTurn(true);
    expect(playerOne.getPlayerTurn()).toBe(true);
    playerTwo.setPlayerTurn(false);
    expect(playerTwo.getPlayerTurn()).toBe(false);
  });

  it('get undefined if the value of isPlaying property was invalid', () => {
    const playerOne = Player();
    const playerTwo = Player();
    playerOne.setPlayerTurn();
    expect(playerOne.getPlayerTurn()).toBeUndefined();
    playerTwo.setPlayerTurn('false');
    expect(playerTwo.getPlayerTurn()).toBeUndefined();
  });
});

describe('The method generateRandomCoordinates()', () => {
  it('generate coordinates with x and y inside 0 - 9 range', () => {
    const player = Player();
    for (let i = 0; i < 100; i++) {
      let [x, y] = player.generateRandomCoordinates();
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(9);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(9);
    }
  });
});
