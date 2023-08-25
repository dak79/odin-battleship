import Ship from '../components/ships.js';

describe('Ship', () => {
  it('has the method .getLength()', () => {
    expect(Ship(2)).toHaveProperty('getLength');
  });

  it('has method .hit()', () => {
    expect(Ship(3)).toHaveProperty('hit');
  });

  it('has method .isSunk()', () => {
    expect(Ship(4)).toHaveProperty('isSunk');
  });

  it('has property init', () => {
    expect(Ship(4)).toHaveProperty('init');
  });

  it('has method setDirection()', () => {
    expect(Ship(4)).toHaveProperty('setDirection');
  });
});

describe('The ship object', () => {
  it('initializes len to ship length', () => {
    const range = Array.from({ length: 4 }, (_, i) => i + 2);
    range.map((len) => {
      let ship = Ship(len);
      expect(ship.init.len).toBe(len);
    });
  });

  it('initializes hits to 0', () => {
    const range = Array.from({ length: 4 }, (_, i) => i + 2);
    range.map((len) => {
      let ship = Ship(len);
      expect(ship.init.hits).toBe(0);
    });
  });

  it('initializes correctly types', () => {
    const range = Array.from({ length: 4 }, (_, i) => i + 2);
    const types = ['destroyers', 'submarines', 'battleships', 'carrier'];
    range.map((len, index) => {
      let ship = Ship(len);
      expect(ship.init.type).toBe(types[index]);
    });
  });

  it('initializes sunked to false', () => {
    const range = Array.from({ length: 4 }, (_, i) => i + 2);
    range.map((len) => {
      let ship = Ship(len);
      expect(ship.init.sunked).toBe(false);
    });
  });

  it('initializes isHorizontal to true', () => {
    const range = Array.from({ length: 4 }, (_, i) => i + 2);
    range.map((len) => {
      let ship = Ship(len);
      expect(ship.init.isHorizontal).toBe(true);
    });
  });
});

describe('The .getLength() method', () => {
  it('returns false if argument in factory is missed', () => {
    const ship = Ship();
    expect(ship.getLength()).toBe(false);
  });

  it('returns false if argument is not an integer or a parsed string', () => {
    const values = ['n', {}, [], true, NaN, undefined, null];

    values.map((value) => {
      const ship = Ship(value);
      expect(ship.getLength()).toBe(false);
    });
  });

  it('returns false if length is out of min (2) or max (5)', () => {
    const values = [0, 1, 6, 10];

    values.map((value) => {
      const ship = Ship(value);
      expect(ship.getLength()).toBe(false);
    });
  });
});

describe('The method .isSunk()', () => {
  it('returns false, no damage on ship', () => {
    const ship = Ship(4);
    expect(ship.isSunk()).toBe(false);
  });

  it('returns false: it has been hit once and has length 4', () => {
    const ship = Ship(4);
    const firstHit = ship.hit();
    expect(ship.isSunk(firstHit)).toBe(false);
  });

  it('has length 3 and it is not sunked: it has been only hit twice', () => {
    const ship = Ship(3);
    const firstHit = ship.hit();
    const secondHit = ship.hit(firstHit);
    expect(ship.isSunk(secondHit)).toBe(false);
  });

  it('has length 3 and it is sunked: it has been hit three times', () => {
    const ship = Ship(3);
    const firstHit = ship.hit();
    const secondHit = ship.hit(firstHit);
    const thirdHit = ship.hit(secondHit);
    expect(ship.isSunk(thirdHit)).toBe(true);
  });

  it('has length 4 and it is sunked: it has been hit four times', () => {
    const ship = Ship(4);
    const firstHit = ship.hit();
    const secondHit = ship.hit(firstHit);
    const thirdHit = ship.hit(secondHit);
    const fourthHit = ship.hit(thirdHit);
    expect(ship.isSunk(fourthHit)).toBe(true);
  });
});

describe('The method .setDirection()', () => {
  it('set direction of ship vertical (false)', () => {
    const ship = Ship(3);
    ship.setDirection(true);
    expect(ship.init.isHorizontal).toBe(true);
  });

  it('set direction to ship back to horizontal (false)', () => {
    const ship = Ship(2);
    ship.setDirection(true);
    ship.setDirection(false);
    expect(ship.init.isHorizontal).toBe(false);
  });
});
