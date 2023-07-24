const isBoolean = (value) => typeof value === 'boolean';
const Player = () => {
  const init = {};

  const setIsHuman = (value) =>
    isBoolean(value)
      ? Object.assign(init, { isHuman: value })
      : 'Invalid setting';

  const getIsHuman = () => init.isHuman;

  const setPlayerName = (value) =>
    getIsHuman()
      ? Object.assign(init, { name: `${value === undefined ? '' : value}` })
      : Object.assign(init, { name: 'cpu' });

  const getPlayerName = () => init.name;

  const setPlayerTurn = (value) =>
    isBoolean(value)
      ? Object.assign(init, { isPlaying: value })
      : 'Invalid setting';

  const getPlayerTurn = () => init.isPlaying;
  return {
    setIsHuman,
    getIsHuman,
    setPlayerName,
    getPlayerName,
    setPlayerTurn,
    getPlayerTurn
  };
};

export default Player;
