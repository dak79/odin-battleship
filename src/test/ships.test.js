import Ship from '../components/ships.js';

describe('Ship', () => {
  it('has the method .getLength()', () => {
    const ship = Ship(2);
    expect(ship).toHaveProperty('getLength');
  });

  it('has method .hit()', () => {
    const ship = Ship(3);
    expect(ship).toHaveProperty('hit');
  });

  it('has method .isSunk()', () => {
    const ship = Ship(4);
    expect(ship).toHaveProperty('isSunk');
  });
});

describe('The .getLength() method', () => {
  it('returns false if argument in factory is missed', () => {
    const ship = Ship();
    expect(ship.getLength()).toBe(false);
  });

  it('returns false if argument is not an integer or a parsed string', () => {
    const values = ['n', {}, [], true, NaN, undefined, null];

    values.forEach((value) => {
      const ship = Ship(value);
      expect(ship.getLength()).toBe(false);
    });
  });

  it('returns false if length is out of min (2) or max (5)', () => {
    const values = [0, 1, 6, 10];

    values.forEach((value) => {
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
