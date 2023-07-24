import Player from '../components/players';

describe('Player', () => {
  it.todo('has setPlayerName() method');
  it.todo('has getPlayerName() method');
  it.todo('has setIsHuman() method');
  it.todo('has getIsHuman() method');
  it.todo('has the getPlayerTurn() method');
  it.todo('has the setPlayerTurn() method');
});

describe('The method setPlayerName()', () => {
  it.todo('set a string as player one name');
  it.todo(`set 'cpu' as player two name`);
});

describe('The method getPlayerName()', () => {
  it.todo('get the name of player one');
  it.todo(`get 'cpu' as the name of player two`);
});

describe('The method setIsHuman()', () => {
  it.todo('does not accept empty argument');
  it.todo(`accept only 'cpu' or 'human' has parameter`);
  it.todo(`set correctly 'human'`);
  it.todo(`set correctly 'cpu'`);
});

describe('The method getIsHuman()', () => {
  it.todo('get correctly isHuman from player one (human)');
  it.todo('get correctly isHuman from player two (cpu)');
});

describe('The method getPlayerTurn()', () => {
  it.todo('get the initial value for player one (true)');
  it.todo('get the initial value for player two (false)');
  it.todo('get the correct value after switching turn for player one (false)');
  it.todo(
    'get the correct value after switching the turn for player two (true)'
  );
});

describe('The method setPlayerTurn()', () => {
  it.todo('set a new value for player one (true)');
  it.todo('set new value for player two (false)');
});

describe('Requirement for player factory', () => {
  it.todo('can switch the turn');
  it.todo('create a player computer capable of making random, but valid play');
});
