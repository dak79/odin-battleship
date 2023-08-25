const isBoolean = (value) => typeof value === 'boolean';

const Player = () => {
  const init = {};

  const setIsHuman = (value) =>
    isBoolean(value)
      ? Object.assign(init, { isHuman: value })
      : 'Invalid setting';

  const getIsHuman = () => init.isHuman;

  const setPlayerName = (value = '') =>
    getIsHuman()
      ? Object.assign(init, { name: `${value}` })
      : Object.assign(init, { name: 'Cpu' });

  const getPlayerName = () => init.name;

  const setPlayerTurn = (value) =>
    isBoolean(value)
      ? Object.assign(init, { isPlaying: value })
      : 'Invalid setting';

  const generateRandomCoordinates = () => [
    Math.floor(Math.random() * 10).toString(),
    Math.floor(Math.random() * 10).toString()
  ];

  return {
    setIsHuman,
    setPlayerName,
    getPlayerName,
    setPlayerTurn,
    generateRandomCoordinates
  };
};

export default Player;
