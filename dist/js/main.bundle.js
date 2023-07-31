/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
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
      name: 'Cpu'
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
;// CONCATENATED MODULE: ./src/components/ships.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var MIN_LENGTH = 2;
var MAX_LENGTH = 5;
/**
 * Check if the length is between 1 and 4.
 * @param {Number|false} input - length
 * @returns {Number|false}
 */
var validateShipLength = function validateShipLength(input) {
  return input > MAX_LENGTH || input < MIN_LENGTH ? false : input;
};

/**
 * Add an hit.
 * @param {Object} obj
 * @returns {Object} With hits updated.
 */
var addHit = function addHit(obj) {
  return _objectSpread(_objectSpread({}, obj), {}, {
    hits: obj.hits + 1
  });
};

/**
 * Set sunked property
 * @param {Object} obj
 * @returns {Object} with sunked updated.
 */
var setSunk = function setSunk(obj) {
  return _objectSpread(_objectSpread({}, obj), {}, {
    sunked: obj.len === obj.hits
  });
};
var Ship = function Ship(len) {
  /**
   * Set the length of ship.
   */
  var setLength = function setLength() {
    return util_pipe(function () {
      return input(len);
    }, function (_int) {
      return validateShipLength(_int);
    })(len);
  };
  var init = {
    len: setLength(),
    hits: 0,
    sunked: false
  };

  /**
   * Hit the ship.
   * @param {Object} obj
   */
  var hit = function hit() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    return util_pipe(addHit, setSunk)(obj);
  };

  /**
   * Get the length of ship init.
   * @param {Object} obj
   * @returns
   */
  var getLength = function getLength() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    return obj.len;
  };

  /**
   * Get sunked from ship init.
   * @param {Object} obj
   * @returns
   */
  var isSunk = function isSunk() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    return obj.sunked;
  };
  return {
    init: init,
    getLength: getLength,
    hit: hit,
    isSunk: isSunk
  };
};
/* harmony default export */ const ships = (Ship);
;// CONCATENATED MODULE: ./src/components/game.js



var createNewPlayers = function createNewPlayers() {
  var playerOne = players();
  playerOne.setIsHuman(true);
  playerOne.setPlayerName('Player 1');
  var playerTwo = players();
  playerTwo.setIsHuman(false);
  playerTwo.setPlayerName('Cpu');
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
var createShips = function createShips(type) {
  return Array.from({
    length: type.number
  }, function () {
    return {
      body: ships(type.size),
      size: type.size
    };
  });
};
var shipsPlayers = function shipsPlayers() {
  var carrier = {
    number: 1,
    size: 5
  };
  var battleship = {
    number: 2,
    size: 4
  };
  var submarine = {
    number: 3,
    size: 3
  };
  var destroyer = {
    number: 4,
    size: 2
  };
  return {
    carrier: createShips(carrier),
    battleships: createShips(battleship),
    submarines: createShips(submarine),
    destroyers: createShips(destroyer)
  };
};
var game = function () {
  var initialState = init();
  var ships = shipsPlayers();
  console.log(ships);
  return {
    initialState: initialState,
    ships: ships
  };
}();
/* harmony default export */ const components_game = (game);

/* TODO:
 *  - Ship creation
 *      - chose numebers and create it for each player.
 *      - Render ships in a card under or on the left of boards.
 *  - Ship placement:
 *    - Placement for player throught injecting coords.
 *    - Visualization of ships in player board.
 *    - Check if the cell contain effectivly a ship object.
 *    - Placement for cpu random
 *    - Check if effectivly the cells contain ship object.
 *  - Code review
 *  - Functional style review
 *
 *  Tips: game as to contain only game loop and using other object, if logic is
 *  needed put the logic in the right file and develop it in TDD.
 */
;// CONCATENATED MODULE: ./src/assets/icons/linkedin.svg
const linkedin_namespaceObject = __webpack_require__.p + "assets/imgs/4bc2ae884215d6dfdaec.svg";
;// CONCATENATED MODULE: ./src/assets/icons/github.svg
const github_namespaceObject = __webpack_require__.p + "assets/imgs/f902e1244b7397444de8.svg";
;// CONCATENATED MODULE: ./src/components/DOM.js
function DOM_slicedToArray(arr, i) { return DOM_arrayWithHoles(arr) || DOM_iterableToArrayLimit(arr, i) || DOM_unsupportedIterableToArray(arr, i) || DOM_nonIterableRest(); }
function DOM_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function DOM_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DOM_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DOM_arrayLikeToArray(o, minLen); }
function DOM_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function DOM_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function DOM_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var hook = document.querySelector('#hook');

/**
 * Create an HTML element.
 * @param {String} type - Element tag
 * @param {Object} attributes - Element attributes
 * @param {String|null} textContent - Element text content
 * @returns {HTMLElement}
 */
var createElement = function createElement(type) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var textContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var element = document.createElement(type);
  Object.entries(attributes).forEach(function (_ref) {
    var _ref2 = DOM_slicedToArray(_ref, 2),
      attr = _ref2[0],
      value = _ref2[1];
    element.setAttribute(attr, value);
  });
  if (textContent) element.textContent = textContent;
  return element;
};

/**
 * Append element to DOM.
 * @param {HTMLElement} parent - parent element
 * @param {HTMLElement} element - element to append
 */
var renderElement = function renderElement(parent, element) {
  parent.appendChild(element);
};
var createAndRenderElement = function createAndRenderElement(type) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var textContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : hook;
  var element = createElement(type, attributes, textContent);
  renderElement(parent, element);
  return element;
};
var createStructureBody = function createStructureBody() {
  return {
    header: createAndRenderElement('header', {
      id: 'body-header',
      "class": 'body-header'
    }),
    main: createAndRenderElement('main', {
      id: 'body-main',
      "class": 'body-main'
    }),
    footer: createAndRenderElement('footer', {
      id: 'body-footer',
      "class": 'body-footer'
    })
  };
};
var renderTitle = function renderTitle(header) {
  createAndRenderElement('h1', {
    "class": 'header-title'
  }, 'Battleship', header);
};
var renderMessage = function renderMessage(section) {
  return createAndRenderElement('div', {
    id: 'message-field',
    "class": 'messages'
  }, 'Place your ships', section);
};
var renderPlayerName = function renderPlayerName(section) {
  return createAndRenderElement('div', {
    id: 'player-one-name',
    "class": 'players-name player-one-name'
  }, components_game.initialState.playerOne.getPlayerName(), section);
};
var renderCpuName = function renderCpuName(section) {
  return createAndRenderElement('div', {
    id: 'player-two-name',
    "class": 'players-name player-two-name'
  }, components_game.initialState.playerTwo.getPlayerName(), section);
};
var renderBoardPlayer = function renderBoardPlayer(section) {
  return createAndRenderElement('div', {
    id: 'board-player',
    "class": 'player-board'
  }, null, section);
};
var renderBoardRival = function renderBoardRival(section) {
  return createAndRenderElement('div', {
    id: 'board-rival',
    "class": 'rival-board'
  }, null, section);
};
var renderBoard = function renderBoard(parent, board) {
  var table = createAndRenderElement('table', {
    id: "".concat(parent.id, "-table"),
    "class": 'boards'
  }, null, parent);
  var tbody = createAndRenderElement('tbody', {
    id: "".concat(parent.id, "-tbody")
  }, null, table);
  board.forEach(function (row, rowIndex) {
    var tr = createAndRenderElement('tr', {
      "class": 'board-row'
    }, null, tbody);
    row.forEach(function (_, colIndex) {
      createAndRenderElement('td', {
        "class": 'cell-size cell-border',
        'data-x': rowIndex,
        'data-y': colIndex
      }, null, tr);
    });
  });
};
var renderShipsPlayer = function renderShipsPlayer(section) {
  return createAndRenderElement('div', {
    id: 'ships-player',
    "class": 'ships-container player-ships'
  }, null, section);
};
var renderShipsRival = function renderShipsRival(section) {
  return createAndRenderElement('div', {
    id: 'ships-rival',
    "class": 'ships-container rival-ships'
  }, null, section);
};
var createFooterStructure = function createFooterStructure(footer) {
  return {
    credits: createAndRenderElement('div', {
      "class": 'credits'
    }, 'Daniele Campari - 2023', footer),
    icons: createAndRenderElement('div', {
      "class": 'footer-icons'
    }, null, footer)
  };
};
var createLinks = function createLinks(div) {
  return {
    linkedin: createAndRenderElement('a', {
      href: 'https://www.linkedin.com/in/daniele-campari-33757593/'
    }, null, div),
    github: createAndRenderElement('a', {
      href: 'https://github.com/dak79/'
    }, null, div)
  };
};
var renderLnIcon = function renderLnIcon(link) {
  return createAndRenderElement('img', {
    src: linkedin_namespaceObject,
    alt: 'LinkedIn link',
    "class": 'icons-size'
  }, null, link);
};
var renderGhIcon = function renderGhIcon(link) {
  return createAndRenderElement('img', {
    src: github_namespaceObject,
    alt: 'GitHub link',
    "class": 'icons-size'
  }, null, link);
};
var renderPage = function renderPage() {
  var body = createStructureBody();
  renderTitle(body.header);
  renderMessage(body.main);
  renderPlayerName(body.main);
  renderCpuName(body.main);
  var boardPlayer = renderBoardPlayer(body.main);
  renderBoard(boardPlayer, components_game.initialState.playerOneGameboard.board);
  var boardRival = renderBoardRival(body.main);
  renderBoard(boardRival, components_game.initialState.playerTwoGameboard.board);
  var shipsPlayer = renderShipsPlayer(body.main);
  var shipsRival = renderShipsRival(body.main);
  var footer = createFooterStructure(body.footer);
  var links = createLinks(footer.icons);
  renderLnIcon(links.linkedin);
  renderGhIcon(links.github);
};
var DOM = function DOM() {
  renderPage();
};
/* harmony default export */ const components_DOM = (DOM);
;// CONCATENATED MODULE: ./src/index.js




//game;
components_DOM();
/******/ })()
;