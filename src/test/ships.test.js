import { Ship } from '../components/ships.js';

describe('Ships', () => {
  it('must have a length', () => {
    const ship = Ship();
    expect(ship.getLength()).toBe(false);
  });

  it('length must be only an integer', () => {
    const int = Ship(2);
    const str = Ship('n');
    const strInt = Ship('2');
    const obj = Ship({});
    const arr = Ship([]);
    const bool = Ship(true);
    const nan = Ship(NaN);
    const und = Ship(undefined);
    const nu = Ship(null);
    expect(int.getLength()).toBe(2);
    expect(str.getLength()).toBe(false);
    expect(strInt.getLength()).toBe(2);
    expect(obj.getLength()).toBe(false);
    expect(arr.getLength()).toBe(false);
    expect(bool.getLength()).toBe(false);
    expect(nan.getLength()).toBe(false);
    expect(und.getLength()).toBe(false);
    expect(nu.getLength()).toBe(false);
  });

  it('can have length between 2 and 4', () => {
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

  it('is not sunked if there are no damage', () => {
    const ship = Ship(4);
    expect(ship.isSunk()).toBe(false);
  });

  it('has length 3 and is not sunked if it has been hit once', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  it('has length 3 and is not sunked if it has been hit twice', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  it('has length 3 and is sunked if it has been hit three times', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it('has length 4 and is sunked if it has been hit four times', () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
