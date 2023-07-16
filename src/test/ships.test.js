import { Ship } from '../components/ships.js';

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
    const str = Ship('n');
    const obj = Ship({});
    const arr = Ship([]);
    const bool = Ship(true);
    const nan = Ship(NaN);
    const und = Ship(undefined);
    const nu = Ship(null);
    expect(str.getLength()).toBe(false);
    expect(obj.getLength()).toBe(false);
    expect(arr.getLength()).toBe(false);
    expect(bool.getLength()).toBe(false);
    expect(nan.getLength()).toBe(false);
    expect(und.getLength()).toBe(false);
    expect(nu.getLength()).toBe(false);
  });

  it('returns a value inside min and max length (between 2 and 4)', () => {
    const shipZero = Ship(0);
    const shipOne = Ship(1);
    const shipTwo = Ship(2);
    const shipThree = Ship(3);
    const shipFour = Ship(4);
    const shipFive = Ship(5);
    expect(shipZero.getLength()).toBe(false);
    expect(shipOne.getLength()).toBe(false);
    expect(shipTwo.getLength()).toBe(2);
    expect(shipThree.getLength()).toBe(3);
    expect(shipFour.getLength()).toBe(4);
    expect(shipFive.getLength()).toBe(false);
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
