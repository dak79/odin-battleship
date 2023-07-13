import { Ship } from '../components/ships.js';

const shipTwo = Ship(2);
const shipThree = Ship('3');
const shipFour = Ship(4);

describe('Ship', () => {
  it('has the method .getLength()', () => {
    expect(shipTwo).toHaveProperty('getLength');
  });

  it('has method .hit()', () => {
    expect(shipThree).toHaveProperty('hit');
  });

  it('has method .isSunk()', () => {
    expect(shipFour).toHaveProperty('isSunk');
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
    expect(shipFour.isSunk()).toBe(false);
  });

  it('returns false: it has been hit once and has length 4', () => {
    shipFour.hit();
    expect(shipThree.isSunk()).toBe(false);
  });

  it('has length 3 and it is not sunked: it has been only hit twice', () => {
    shipThree.hit();
    shipThree.hit();
    expect(shipThree.isSunk()).toBe(false);
  });

  it('has length 3 and it is sunked: it has been hit three times', () => {
    shipThree.hit();
    expect(shipThree.isSunk()).toBe(true);
  });

  it('has length 4 and it is sunked: it has been hit four times', () => {
    shipFour.hit();
    shipFour.hit();
    shipFour.hit();
    expect(shipFour.isSunk()).toBe(true);
  });
});
