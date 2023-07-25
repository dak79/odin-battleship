/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/players.js
var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};
var Player = function Player() {
  var init = {};
  var setIsHuman = function setIsHuman(value) {
    return isBoolean(value) ? Object.assign(init, {
      isHuman: value
    }) : 'Invalid setting';
  };
  var getIsHuman = function getIsHuman() {
    return init.isHuman;
  };
  var setPlayerName = function setPlayerName(value) {
    return getIsHuman() ? Object.assign(init, {
      name: "".concat(value === undefined ? '' : value)
    }) : Object.assign(init, {
      name: 'cpu'
    });
  };
  var getPlayerName = function getPlayerName() {
    return init.name;
  };
  var setPlayerTurn = function setPlayerTurn(value) {
    return isBoolean(value) ? Object.assign(init, {
      isPlaying: value
    }) : 'Invalid setting';
  };
  var getPlayerTurn = function getPlayerTurn() {
    return init.isPlaying;
  };
  var generateRandomCoordinates = function generateRandomCoordinates() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  };
  return {
    setIsHuman: setIsHuman,
    getIsHuman: getIsHuman,
    setPlayerName: setPlayerName,
    getPlayerName: getPlayerName,
    setPlayerTurn: setPlayerTurn,
    getPlayerTurn: getPlayerTurn,
    generateRandomCoordinates: generateRandomCoordinates
  };
};
/* harmony default export */ const players = (Player);
;// CONCATENATED MODULE: ./src/util/pipe.js
var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (args) {
    return fns.reduce(function (p, fn) {
      return fn(p);
    }, args);
  };
};
/* harmony default export */ const util_pipe = (pipe);
;// CONCATENATED MODULE: ./src/util/input.js


/**
 * Check if the input is a string that can be parsed in a valid integer.
 * @param {*} input - length
 * @returns {*} input
 */
var parseInput = function parseInput(input) {
  return typeof input === 'string' ? parseInt(input) : input;
};

/**
 * Check if input is a valid integer.
 * @param {*} input - length
 * @returns {Number|false}
 */
var validateInt = function validateInt(input) {
  return Number.isFinite(input) ? input : false;
};
var validateInput = function validateInput(input) {
  return util_pipe(function () {
    return parseInput(input);
  }, function (parsedInput) {
    return validateInt(parsedInput);
  })(input);
};
/* harmony default export */ const input = (validateInput);
;// CONCATENATED MODULE: ./src/components/gameBoard.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var MAX_BOARD_SIZE = 10;
var createEmptyBoard = function createEmptyBoard() {
  return Array.from({
    length: MAX_BOARD_SIZE
  }, function () {
    return Array(MAX_BOARD_SIZE).fill(null);
  });
};
var isValidCoordinate = function isValidCoordinate(coord) {
  return coord >= 0 && coord < MAX_BOARD_SIZE ? coord : false;
};
var getCoord = function getCoord(x, y, length, direction) {
  var xCoord = direction ? x : x + length;
  var yCoord = direction ? y + length : y;
  return [xCoord, yCoord];
};
/**
 * Check if ship coordinates are inside the board.
 * @param {Object} ship - The ship object.
 * @param {Number} x - x coord of ship starting position.
 * @param {Number} y - y coord of ship starting position.
 * @param {Boolean} direction true Ver | false Hor.
 * @returns {Boolean}
 */
var isInBoard = function isInBoard(ship, x, y, direction) {
  var length = ship.getLength();
  var _getCoord = getCoord(x, y, length, direction),
    _getCoord2 = _slicedToArray(_getCoord, 2),
    xCoord = _getCoord2[0],
    yCoord = _getCoord2[1];
  return [isValidCoordinate(x), isValidCoordinate(y), isValidCoordinate(xCoord), isValidCoordinate(yCoord)].every(function (value) {
    return value !== false;
  });
};
var isCellEmpty = function isCellEmpty(board, x, y) {
  return !board[x][y];
};

/**
 * Check if there is enough space on board for a ship.
 * @param {Object} ship - The ship object.
 * @param {Number} x - x coord of ship starting position.
 * @param {Number} y - y coord of ship starting position.
 * @param {Boolean} direction true Ver | false Hor
 * @returns {Boolean}
 */
var isSpaceAvailable = function isSpaceAvailable(board, ship, x, y, direction) {
  var length = ship.getLength();
  for (var i = 0; i < length; i++) {
    var _getCoord3 = getCoord(x, y, i, direction),
      _getCoord4 = _slicedToArray(_getCoord3, 2),
      xCoord = _getCoord4[0],
      yCoord = _getCoord4[1];
    if (!isCellEmpty(board, xCoord, yCoord)) return false;
  }
  return true;
};

/**
 * Check if a ship placement is valid on board.
 * @param {Object} ship - The ship object.
 * @param {Number} x - x coord of ship starting position.
 * @param {Number} y - y coord of ship starting position.
 * @param {Boolean} direction true Ver | false Hor.
 * @returns {Boolean}
 */
var isValidPlacement = function isValidPlacement(board, ship, x, y, direction) {
  return isInBoard(ship, x, y, direction) && isSpaceAvailable(board, ship, x, y, direction);
};

/**
 * Check if attack input is a valid integer
 * @param {Array} - Parsed input | input
 * @returns {Array} Valid integers or up to two false value.
 */
var validAttackCoord = function validAttackCoord(x, y) {
  return [input(x), input(y)];
};

/**
 * Check if the attack is inside the board.
 * @param {Array} - Valid integers or up to two false value.
 * @returns {Array|false} - Attack coordinate | false.
 */

var attackInBoard = function attackInBoard(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    x = _ref2[0],
    y = _ref2[1];
  return [isValidCoordinate(x), isValidCoordinate(y)];
};

/**
 * Check if the attack is already done.
 * @param {Array} arr - x and y coordinates
 * @returns {Boolean}
 */
var isAlreadyAttacked = function isAlreadyAttacked(shots, _ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    x = _ref4[0],
    y = _ref4[1];
  return shots.some(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      xCoord = _ref6[0],
      yCoord = _ref6[1];
    return xCoord === x && yCoord === y;
  });
};
var validAttack = function validAttack(x, y, shots) {
  var validation = util_pipe(function () {
    return validAttackCoord(x, y);
  }, function (validInt) {
    return attackInBoard(validInt);
  }, function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      x = _ref8[0],
      y = _ref8[1];
    return isAlreadyAttacked(shots, [x, y]) ? [false] : [x, y];
  })(x, y);
  return validation.some(function (value) {
    return value === false;
  }) ? false : validation;
};

/**
 * Attack find a ship
 * @param {Array[]} board - Board state
 * @param {*} x - x coordinate of attack
 * @param {*} y - y coordinate of attack
 * @returns {Object} - Ship object with updated hits
 */
var hitShip = function hitShip(board, x, y) {
  var ship = board[x][y];
  var hit = ship.hit();
  var init = Object.assign(ship.init, hit);
  return Object.assign({}, ship, {
    init: init
  });
};
var Gameboard = function Gameboard() {
  var initialBoard = createEmptyBoard();

  /**
   * Try to place a ship on bord
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns A ship on board or false
   */
  var placeShip = function placeShip(board, ship, x, y, direction) {
    return isValidPlacement(board, ship, x, y, direction) ? addShipToBoard(board, ship, x, y, direction) : _toConsumableArray(board);
  };
  var shots = [];
  var missedShots = [];
  var ships = [];

  /**
   * Update miss shot
   * @param {Number} x - x coordinate of attack
   * @param {*} y - y coordinate of attack
   */
  var missShip = function missShip(x, y) {
    missedShots.push([x, y]);
  };
  var getMissed = function getMissed() {
    return missedShots;
  };
  var addShipToShips = function addShipToShips(ship) {
    ships.push(ship);
  };
  var getShips = function getShips() {
    return ships;
  };
  /**
   * Add a new ship on the board.
   * @param {Object} ship - The ship object
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting positionk.
   * @param {Boolean} direction - true Ver | false Hor.
   * @returns {Array[]} - New board with new Ship.
   */
  var addShipToBoard = function addShipToBoard(board, ship, x, y, direction) {
    var length = ship.getLength();
    var updateBoardCell = function updateBoardCell(i, newBoard) {
      var _getCoord5 = getCoord(x, y, i, direction),
        _getCoord6 = _slicedToArray(_getCoord5, 2),
        xCoord = _getCoord6[0],
        yCoord = _getCoord6[1];
      var updatedRow = _toConsumableArray(newBoard[xCoord]);
      updatedRow[yCoord] = ship;
      newBoard[xCoord] = updatedRow;
    };
    var newBoard = _toConsumableArray(board);
    for (var i = 0; i < length; i++) {
      updateBoardCell(i, board);
    }
    addShipToShips(ship);
    return newBoard;
  };

  /**
   * Square attacked
   * @param {Array[]} board - Board state.
   * @param {*} x - x coordinate of attack
   * @param {*} y - y coordinate of attack
   * @returns {Boolean}
   */
  var receiveAttack = function receiveAttack(board, x, y) {
    var attack = validAttack(x, y, shots);
    if (attack) {
      var _attack = _slicedToArray(attack, 2),
        xShot = _attack[0],
        yShot = _attack[1];
      shots.push([xShot, yShot]);
      board[xShot][yShot] !== null ? hitShip(board, xShot, yShot) : missShip(xShot, yShot);
      return true;
    }
    return false;
  };
  var allShipSunked = function allShipSunked() {
    return ships.every(function (ship) {
      return ship.init.sunked === true;
    });
  };
  return {
    board: initialBoard,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    getMissed: getMissed,
    ships: ships,
    allShipSunked: allShipSunked,
    getShips: getShips
  };
};
/* harmony default export */ const gameBoard = (Gameboard);
;// CONCATENATED MODULE: ./src/components/game.js


var createNewPlayers = function createNewPlayers() {
  var playerOne = players();
  playerOne.setIsHuman(true);
  playerOne.setPlayerName('Player 1');
  var playerTwo = players();
  playerTwo.setIsHuman(false);
  playerTwo.setPlayerName('cpu');
  return Object.assign({}, {
    playerOne: playerOne
  }, {
    playerTwo: playerTwo
  });
};
var createNewGameboards = function createNewGameboards() {
  var playerOneGameboard = gameBoard();
  var playerTwoGameboard = gameBoard();
  return Object.assign({}, {
    playerOneGameboard: playerOneGameboard
  }, {
    playerTwoGameboard: playerTwoGameboard
  });
};
var init = function init() {
  var players = createNewPlayers();
  var gameboards = createNewGameboards();
  return Object.assign({}, players, gameboards);
};
var game_game = function () {
  var initialState = init();
  return {
    initialState: initialState
  };
}();
/* harmony default export */ const components_game = (game_game);
;// CONCATENATED MODULE: ./src/components/DOM.js

var hook = document.querySelector('#hook');
console.log(hook);
var renderPlayerNames = function renderPlayerNames() {
  var nameOne = game.playerOne.name;
  var nameTwo = game.playerTwo.name;
};
var DOM = function DOM() {
  console.log(components_game.initialState.playerOne);
  console.log(components_game.initialState.playerTwo);
  console.log(components_game.initialState.playerOneGameboard);
  consol.log(components_game.initialState.playerTwoGameboard);
};
/* harmony default export */ const components_DOM = (DOM);
;// CONCATENATED MODULE: ./src/index.js



//game;
components_DOM();
/******/ })()
;