/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/DOM.js":
/*!*******************************!*\
  !*** ./src/components/DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/components/game.js");

var DOM = function DOM() {
  console.log(_game__WEBPACK_IMPORTED_MODULE_0__["default"].initialState.playerOne);
  console.log(_game__WEBPACK_IMPORTED_MODULE_0__["default"].initialState.playerTwo);
  console.log(_game__WEBPACK_IMPORTED_MODULE_0__["default"].initialState.playerOneGameboard);
  console.log(_game__WEBPACK_IMPORTED_MODULE_0__["default"].initialState.playerTwoGameboard);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/components/game.js":
/*!********************************!*\
  !*** ./src/components/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ "./src/components/players.js");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/components/gameBoard.js");


var createNewPlayers = function createNewPlayers() {
  var playerOne = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  playerOne.setIsHuman(true);
  playerOne.setPlayerName('Player 1');
  var playerTwo = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  playerTwo.setIsHuman(false);
  playerTwo.setPlayerName('cpu');
  return Object.assign({}, {
    playerOne: playerOne
  }, {
    playerTwo: playerTwo
  });
};
var createNewGameboards = function createNewGameboards() {
  var playerOneGameboard = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var playerTwoGameboard = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
var game = function () {
  var initialState = init();
  return {
    initialState: initialState
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

/***/ }),

/***/ "./src/components/gameBoard.js":
/*!*************************************!*\
  !*** ./src/components/gameBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/input */ "./src/util/input.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ "./src/util/pipe.js");
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
  return [(0,_util_input__WEBPACK_IMPORTED_MODULE_0__["default"])(x), (0,_util_input__WEBPACK_IMPORTED_MODULE_0__["default"])(y)];
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
  var validation = (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/components/players.js":
/*!***********************************!*\
  !*** ./src/components/players.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/util/input.js":
/*!***************************!*\
  !*** ./src/util/input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ "./src/util/pipe.js");


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
  return (0,_pipe__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return parseInput(input);
  }, function (parsedInput) {
    return validateInt(parsedInput);
  })(input);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInput);

/***/ }),

/***/ "./src/util/pipe.js":
/*!**************************!*\
  !*** ./src/util/pipe.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pipe);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DOM */ "./src/components/DOM.js");
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game */ "./src/components/game.js");



//game;
(0,_components_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFBQyxTQUFBLENBQUF4RixNQUFBLEVBQ0p5RixHQUFHLE9BQUEzRixLQUFBLENBQUF5RixJQUFBLEdBQUFHLElBQUEsTUFBQUEsSUFBQSxHQUFBSCxJQUFBLEVBQUFHLElBQUE7SUFBSEQsR0FBRyxDQUFBQyxJQUFBLElBQUFGLFNBQUEsQ0FBQUUsSUFBQTtFQUFBO0VBQUEsT0FDUCxVQUFDQyxJQUFJO0lBQUEsT0FDSEYsR0FBRyxDQUFDRyxNQUFNLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxFQUFFO01BQUEsT0FBS0EsRUFBRSxDQUFDRCxDQUFDLENBQUM7SUFBQSxHQUFFRixJQUFJLENBQUM7RUFBQTtBQUFBO0FBRXRDLGlFQUFlaEcsSUFBSTs7Ozs7O1VDTG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0U7O0FBRXJDO0FBQ0FwQiwyREFBRyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWwvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlsL3BpcGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgRE9NID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhnYW1lLmluaXRpYWxTdGF0ZS5wbGF5ZXJPbmUpO1xuICBjb25zb2xlLmxvZyhnYW1lLmluaXRpYWxTdGF0ZS5wbGF5ZXJUd28pO1xuICBjb25zb2xlLmxvZyhnYW1lLmluaXRpYWxTdGF0ZS5wbGF5ZXJPbmVHYW1lYm9hcmQpO1xuICBjb25zb2xlLmxvZyhnYW1lLmluaXRpYWxTdGF0ZS5wbGF5ZXJUd29HYW1lYm9hcmQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcnMuanMnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVCb2FyZC5qcyc7XG5jb25zdCBjcmVhdGVOZXdQbGF5ZXJzID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoKTtcbiAgcGxheWVyT25lLnNldElzSHVtYW4odHJ1ZSk7XG4gIHBsYXllck9uZS5zZXRQbGF5ZXJOYW1lKCdQbGF5ZXIgMScpO1xuXG4gIGNvbnN0IHBsYXllclR3byA9IFBsYXllcigpO1xuICBwbGF5ZXJUd28uc2V0SXNIdW1hbihmYWxzZSk7XG4gIHBsYXllclR3by5zZXRQbGF5ZXJOYW1lKCdjcHUnKTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgeyBwbGF5ZXJPbmUgfSwgeyBwbGF5ZXJUd28gfSk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdHYW1lYm9hcmRzID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHsgcGxheWVyT25lR2FtZWJvYXJkIH0sIHsgcGxheWVyVHdvR2FtZWJvYXJkIH0pO1xufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVycyA9IGNyZWF0ZU5ld1BsYXllcnMoKTtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGNyZWF0ZU5ld0dhbWVib2FyZHMoKTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcGxheWVycywgZ2FtZWJvYXJkcyk7XG59O1xuY29uc3QgZ2FtZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IGluaXQoKTtcbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsU3RhdGVcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCJpbXBvcnQgdmFsaWRhdGVJbnB1dCBmcm9tICcuLi91dGlsL2lucHV0JztcbmltcG9ydCBwaXBlIGZyb20gJy4uL3V0aWwvcGlwZSc7XG5cbmNvbnN0IE1BWF9CT0FSRF9TSVpFID0gMTA7XG5jb25zdCBjcmVhdGVFbXB0eUJvYXJkID0gKCkgPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogTUFYX0JPQVJEX1NJWkUgfSwgKCkgPT5cbiAgICBBcnJheShNQVhfQk9BUkRfU0laRSkuZmlsbChudWxsKVxuICApO1xuXG5jb25zdCBpc1ZhbGlkQ29vcmRpbmF0ZSA9IChjb29yZCkgPT5cbiAgY29vcmQgPj0gMCAmJiBjb29yZCA8IE1BWF9CT0FSRF9TSVpFID8gY29vcmQgOiBmYWxzZTtcblxuY29uc3QgZ2V0Q29vcmQgPSAoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgeENvb3JkID0gZGlyZWN0aW9uID8geCA6IHggKyBsZW5ndGg7XG4gIGNvbnN0IHlDb29yZCA9IGRpcmVjdGlvbiA/IHkgKyBsZW5ndGggOiB5O1xuXG4gIHJldHVybiBbeENvb3JkLCB5Q29vcmRdO1xufTtcbi8qKlxuICogQ2hlY2sgaWYgc2hpcCBjb29yZGluYXRlcyBhcmUgaW5zaWRlIHRoZSBib2FyZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzaGlwIC0gVGhlIHNoaXAgb2JqZWN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSB4IGNvb3JkIG9mIHNoaXAgc3RhcnRpbmcgcG9zaXRpb24uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHkgY29vcmQgb2Ygc2hpcCBzdGFydGluZyBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGlyZWN0aW9uIHRydWUgVmVyIHwgZmFsc2UgSG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzSW5Cb2FyZCA9IChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcbiAgY29uc3QgW3hDb29yZCwgeUNvb3JkXSA9IGdldENvb3JkKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKTtcblxuICByZXR1cm4gW1xuICAgIGlzVmFsaWRDb29yZGluYXRlKHgpLFxuICAgIGlzVmFsaWRDb29yZGluYXRlKHkpLFxuICAgIGlzVmFsaWRDb29yZGluYXRlKHhDb29yZCksXG4gICAgaXNWYWxpZENvb3JkaW5hdGUoeUNvb3JkKVxuICBdLmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUgIT09IGZhbHNlKTtcbn07XG5cbmNvbnN0IGlzQ2VsbEVtcHR5ID0gKGJvYXJkLCB4LCB5KSA9PiAhYm9hcmRbeF1beV07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlcmUgaXMgZW5vdWdoIHNwYWNlIG9uIGJvYXJkIGZvciBhIHNoaXAuXG4gKiBAcGFyYW0ge09iamVjdH0gc2hpcCAtIFRoZSBzaGlwIG9iamVjdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IC0geCBjb29yZCBvZiBzaGlwIHN0YXJ0aW5nIHBvc2l0aW9uLlxuICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB5IGNvb3JkIG9mIHNoaXAgc3RhcnRpbmcgcG9zaXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRpcmVjdGlvbiB0cnVlIFZlciB8IGZhbHNlIEhvclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzU3BhY2VBdmFpbGFibGUgPSAoYm9hcmQsIHNoaXAsIHgsIHksIGRpcmVjdGlvbikgPT4ge1xuICBjb25zdCBsZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeENvb3JkLCB5Q29vcmRdID0gZ2V0Q29vcmQoeCwgeSwgaSwgZGlyZWN0aW9uKTtcblxuICAgIGlmICghaXNDZWxsRW1wdHkoYm9hcmQsIHhDb29yZCwgeUNvb3JkKSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc2hpcCBwbGFjZW1lbnQgaXMgdmFsaWQgb24gYm9hcmQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2hpcCAtIFRoZSBzaGlwIG9iamVjdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IC0geCBjb29yZCBvZiBzaGlwIHN0YXJ0aW5nIHBvc2l0aW9uLlxuICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB5IGNvb3JkIG9mIHNoaXAgc3RhcnRpbmcgcG9zaXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRpcmVjdGlvbiB0cnVlIFZlciB8IGZhbHNlIEhvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5jb25zdCBpc1ZhbGlkUGxhY2VtZW50ID0gKGJvYXJkLCBzaGlwLCB4LCB5LCBkaXJlY3Rpb24pID0+XG4gIGlzSW5Cb2FyZChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pICYmXG4gIGlzU3BhY2VBdmFpbGFibGUoYm9hcmQsIHNoaXAsIHgsIHksIGRpcmVjdGlvbik7XG5cbi8qKlxuICogQ2hlY2sgaWYgYXR0YWNrIGlucHV0IGlzIGEgdmFsaWQgaW50ZWdlclxuICogQHBhcmFtIHtBcnJheX0gLSBQYXJzZWQgaW5wdXQgfCBpbnB1dFxuICogQHJldHVybnMge0FycmF5fSBWYWxpZCBpbnRlZ2VycyBvciB1cCB0byB0d28gZmFsc2UgdmFsdWUuXG4gKi9cbmNvbnN0IHZhbGlkQXR0YWNrQ29vcmQgPSAoeCwgeSkgPT4gW3ZhbGlkYXRlSW5wdXQoeCksIHZhbGlkYXRlSW5wdXQoeSldO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBhdHRhY2sgaXMgaW5zaWRlIHRoZSBib2FyZC5cbiAqIEBwYXJhbSB7QXJyYXl9IC0gVmFsaWQgaW50ZWdlcnMgb3IgdXAgdG8gdHdvIGZhbHNlIHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fGZhbHNlfSAtIEF0dGFjayBjb29yZGluYXRlIHwgZmFsc2UuXG4gKi9cblxuY29uc3QgYXR0YWNrSW5Cb2FyZCA9IChbeCwgeV0pID0+IFtpc1ZhbGlkQ29vcmRpbmF0ZSh4KSwgaXNWYWxpZENvb3JkaW5hdGUoeSldO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBhdHRhY2sgaXMgYWxyZWFkeSBkb25lLlxuICogQHBhcmFtIHtBcnJheX0gYXJyIC0geCBhbmQgeSBjb29yZGluYXRlc1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzQWxyZWFkeUF0dGFja2VkID0gKHNob3RzLCBbeCwgeV0pID0+XG4gIHNob3RzLnNvbWUoKFt4Q29vcmQsIHlDb29yZF0pID0+IHhDb29yZCA9PT0geCAmJiB5Q29vcmQgPT09IHkpO1xuXG5jb25zdCB2YWxpZEF0dGFjayA9ICh4LCB5LCBzaG90cykgPT4ge1xuICBjb25zdCB2YWxpZGF0aW9uID0gcGlwZShcbiAgICAoKSA9PiB2YWxpZEF0dGFja0Nvb3JkKHgsIHkpLFxuICAgICh2YWxpZEludCkgPT4gYXR0YWNrSW5Cb2FyZCh2YWxpZEludCksXG4gICAgKFt4LCB5XSkgPT4gKGlzQWxyZWFkeUF0dGFja2VkKHNob3RzLCBbeCwgeV0pID8gW2ZhbHNlXSA6IFt4LCB5XSlcbiAgKSh4LCB5KTtcbiAgcmV0dXJuIHZhbGlkYXRpb24uc29tZSgodmFsdWUpID0+IHZhbHVlID09PSBmYWxzZSkgPyBmYWxzZSA6IHZhbGlkYXRpb247XG59O1xuXG4vKipcbiAqIEF0dGFjayBmaW5kIGEgc2hpcFxuICogQHBhcmFtIHtBcnJheVtdfSBib2FyZCAtIEJvYXJkIHN0YXRlXG4gKiBAcGFyYW0geyp9IHggLSB4IGNvb3JkaW5hdGUgb2YgYXR0YWNrXG4gKiBAcGFyYW0geyp9IHkgLSB5IGNvb3JkaW5hdGUgb2YgYXR0YWNrXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIFNoaXAgb2JqZWN0IHdpdGggdXBkYXRlZCBoaXRzXG4gKi9cbmNvbnN0IGhpdFNoaXAgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICBjb25zdCBoaXQgPSBzaGlwLmhpdCgpO1xuICBjb25zdCBpbml0ID0gT2JqZWN0LmFzc2lnbihzaGlwLmluaXQsIGhpdCk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzaGlwLCB7IGluaXQgfSk7XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxCb2FyZCA9IGNyZWF0ZUVtcHR5Qm9hcmQoKTtcblxuICAvKipcbiAgICogVHJ5IHRvIHBsYWNlIGEgc2hpcCBvbiBib3JkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzaGlwIC0gVGhlIHNoaXAgb2JqZWN0LlxuICAgKiBAcGFyYW0ge051bWJlcn0geCAtIHggY29vcmQgb2Ygc2hpcCBzdGFydGluZyBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB5IGNvb3JkIG9mIHNoaXAgc3RhcnRpbmcgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGlyZWN0aW9uIHRydWUgVmVyIHwgZmFsc2UgSG9yXG4gICAqIEByZXR1cm5zIEEgc2hpcCBvbiBib2FyZCBvciBmYWxzZVxuICAgKi9cbiAgY29uc3QgcGxhY2VTaGlwID0gKGJvYXJkLCBzaGlwLCB4LCB5LCBkaXJlY3Rpb24pID0+XG4gICAgaXNWYWxpZFBsYWNlbWVudChib2FyZCwgc2hpcCwgeCwgeSwgZGlyZWN0aW9uKVxuICAgICAgPyBhZGRTaGlwVG9Cb2FyZChib2FyZCwgc2hpcCwgeCwgeSwgZGlyZWN0aW9uKVxuICAgICAgOiBbLi4uYm9hcmRdO1xuXG4gIGNvbnN0IHNob3RzID0gW107XG5cbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcblxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgbWlzcyBzaG90XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IC0geCBjb29yZGluYXRlIG9mIGF0dGFja1xuICAgKiBAcGFyYW0geyp9IHkgLSB5IGNvb3JkaW5hdGUgb2YgYXR0YWNrXG4gICAqL1xuICBjb25zdCBtaXNzU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgbWlzc2VkU2hvdHMucHVzaChbeCwgeV0pO1xuICB9O1xuXG4gIGNvbnN0IGdldE1pc3NlZCA9ICgpID0+IG1pc3NlZFNob3RzO1xuXG4gIGNvbnN0IGFkZFNoaXBUb1NoaXBzID0gKHNoaXApID0+IHtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgc2hpcCBvbiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzaGlwIC0gVGhlIHNoaXAgb2JqZWN0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IC0geCBjb29yZCBvZiBzaGlwIHN0YXJ0aW5nIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0geSAtIHkgY29vcmQgb2Ygc2hpcCBzdGFydGluZyBwb3NpdGlvbmsuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGlyZWN0aW9uIC0gdHJ1ZSBWZXIgfCBmYWxzZSBIb3IuXG4gICAqIEByZXR1cm5zIHtBcnJheVtdfSAtIE5ldyBib2FyZCB3aXRoIG5ldyBTaGlwLlxuICAgKi9cbiAgY29uc3QgYWRkU2hpcFRvQm9hcmQgPSAoYm9hcmQsIHNoaXAsIHgsIHksIGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4gICAgY29uc3QgdXBkYXRlQm9hcmRDZWxsID0gKGksIG5ld0JvYXJkKSA9PiB7XG4gICAgICBjb25zdCBbeENvb3JkLCB5Q29vcmRdID0gZ2V0Q29vcmQoeCwgeSwgaSwgZGlyZWN0aW9uKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRSb3cgPSBbLi4ubmV3Qm9hcmRbeENvb3JkXV07XG4gICAgICB1cGRhdGVkUm93W3lDb29yZF0gPSBzaGlwO1xuICAgICAgbmV3Qm9hcmRbeENvb3JkXSA9IHVwZGF0ZWRSb3c7XG4gICAgfTtcblxuICAgIGNvbnN0IG5ld0JvYXJkID0gWy4uLmJvYXJkXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHVwZGF0ZUJvYXJkQ2VsbChpLCBib2FyZCk7XG4gICAgfVxuXG4gICAgYWRkU2hpcFRvU2hpcHMoc2hpcCk7XG4gICAgcmV0dXJuIG5ld0JvYXJkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcXVhcmUgYXR0YWNrZWRcbiAgICogQHBhcmFtIHtBcnJheVtdfSBib2FyZCAtIEJvYXJkIHN0YXRlLlxuICAgKiBAcGFyYW0geyp9IHggLSB4IGNvb3JkaW5hdGUgb2YgYXR0YWNrXG4gICAqIEBwYXJhbSB7Kn0geSAtIHkgY29vcmRpbmF0ZSBvZiBhdHRhY2tcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGJvYXJkLCB4LCB5KSA9PiB7XG4gICAgY29uc3QgYXR0YWNrID0gdmFsaWRBdHRhY2soeCwgeSwgc2hvdHMpO1xuICAgIGlmIChhdHRhY2spIHtcbiAgICAgIGNvbnN0IFt4U2hvdCwgeVNob3RdID0gYXR0YWNrO1xuICAgICAgc2hvdHMucHVzaChbeFNob3QsIHlTaG90XSk7XG4gICAgICBib2FyZFt4U2hvdF1beVNob3RdICE9PSBudWxsXG4gICAgICAgID8gaGl0U2hpcChib2FyZCwgeFNob3QsIHlTaG90KVxuICAgICAgICA6IG1pc3NTaGlwKHhTaG90LCB5U2hvdCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcFN1bmtlZCA9ICgpID0+IHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmluaXQuc3Vua2VkID09PSB0cnVlKTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkOiBpbml0aWFsQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0TWlzc2VkLFxuICAgIHNoaXBzLFxuICAgIGFsbFNoaXBTdW5rZWQsXG4gICAgZ2V0U2hpcHNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgaW5pdCA9IHt9O1xuXG4gIGNvbnN0IHNldElzSHVtYW4gPSAodmFsdWUpID0+XG4gICAgaXNCb29sZWFuKHZhbHVlKVxuICAgICAgPyBPYmplY3QuYXNzaWduKGluaXQsIHsgaXNIdW1hbjogdmFsdWUgfSlcbiAgICAgIDogJ0ludmFsaWQgc2V0dGluZyc7XG5cbiAgY29uc3QgZ2V0SXNIdW1hbiA9ICgpID0+IGluaXQuaXNIdW1hbjtcblxuICBjb25zdCBzZXRQbGF5ZXJOYW1lID0gKHZhbHVlKSA9PlxuICAgIGdldElzSHVtYW4oKVxuICAgICAgPyBPYmplY3QuYXNzaWduKGluaXQsIHsgbmFtZTogYCR7dmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWV9YCB9KVxuICAgICAgOiBPYmplY3QuYXNzaWduKGluaXQsIHsgbmFtZTogJ2NwdScgfSk7XG5cbiAgY29uc3QgZ2V0UGxheWVyTmFtZSA9ICgpID0+IGluaXQubmFtZTtcblxuICBjb25zdCBzZXRQbGF5ZXJUdXJuID0gKHZhbHVlKSA9PlxuICAgIGlzQm9vbGVhbih2YWx1ZSlcbiAgICAgID8gT2JqZWN0LmFzc2lnbihpbml0LCB7IGlzUGxheWluZzogdmFsdWUgfSlcbiAgICAgIDogJ0ludmFsaWQgc2V0dGluZyc7XG5cbiAgY29uc3QgZ2V0UGxheWVyVHVybiA9ICgpID0+IGluaXQuaXNQbGF5aW5nO1xuXG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMgPSAoKSA9PiBbXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgc2V0SXNIdW1hbixcbiAgICBnZXRJc0h1bWFuLFxuICAgIHNldFBsYXllck5hbWUsXG4gICAgZ2V0UGxheWVyTmFtZSxcbiAgICBzZXRQbGF5ZXJUdXJuLFxuICAgIGdldFBsYXllclR1cm4sXG4gICAgZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiaW1wb3J0IHBpcGUgZnJvbSAnLi9waXBlJztcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgaW5wdXQgaXMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgcGFyc2VkIGluIGEgdmFsaWQgaW50ZWdlci5cbiAqIEBwYXJhbSB7Kn0gaW5wdXQgLSBsZW5ndGhcbiAqIEByZXR1cm5zIHsqfSBpbnB1dFxuICovXG5jb25zdCBwYXJzZUlucHV0ID0gKGlucHV0KSA9PlxuICB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQoaW5wdXQpIDogaW5wdXQ7XG5cbi8qKlxuICogQ2hlY2sgaWYgaW5wdXQgaXMgYSB2YWxpZCBpbnRlZ2VyLlxuICogQHBhcmFtIHsqfSBpbnB1dCAtIGxlbmd0aFxuICogQHJldHVybnMge051bWJlcnxmYWxzZX1cbiAqL1xuY29uc3QgdmFsaWRhdGVJbnQgPSAoaW5wdXQpID0+IChOdW1iZXIuaXNGaW5pdGUoaW5wdXQpID8gaW5wdXQgOiBmYWxzZSk7XG5cbmNvbnN0IHZhbGlkYXRlSW5wdXQgPSAoaW5wdXQpID0+XG4gIHBpcGUoXG4gICAgKCkgPT4gcGFyc2VJbnB1dChpbnB1dCksXG4gICAgKHBhcnNlZElucHV0KSA9PiB2YWxpZGF0ZUludChwYXJzZWRJbnB1dClcbiAgKShpbnB1dCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlSW5wdXQ7XG4iLCJjb25zdCBwaXBlID1cbiAgKC4uLmZucykgPT5cbiAgKGFyZ3MpID0+XG4gICAgZm5zLnJlZHVjZSgocCwgZm4pID0+IGZuKHApLCBhcmdzKTtcblxuZXhwb3J0IGRlZmF1bHQgcGlwZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERPTSBmcm9tICcuL2NvbXBvbmVudHMvRE9NJztcbmltcG9ydCBnYW1lIGZyb20gJy4vY29tcG9uZW50cy9nYW1lJztcblxuLy9nYW1lO1xuRE9NKCk7XG4iXSwibmFtZXMiOlsiZ2FtZSIsIkRPTSIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsU3RhdGUiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJwbGF5ZXJPbmVHYW1lYm9hcmQiLCJwbGF5ZXJUd29HYW1lYm9hcmQiLCJQbGF5ZXIiLCJHYW1lYm9hcmQiLCJjcmVhdGVOZXdQbGF5ZXJzIiwic2V0SXNIdW1hbiIsInNldFBsYXllck5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVOZXdHYW1lYm9hcmRzIiwiaW5pdCIsInBsYXllcnMiLCJnYW1lYm9hcmRzIiwidmFsaWRhdGVJbnB1dCIsInBpcGUiLCJNQVhfQk9BUkRfU0laRSIsImNyZWF0ZUVtcHR5Qm9hcmQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaWxsIiwiaXNWYWxpZENvb3JkaW5hdGUiLCJjb29yZCIsImdldENvb3JkIiwieCIsInkiLCJkaXJlY3Rpb24iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJpc0luQm9hcmQiLCJzaGlwIiwiZ2V0TGVuZ3RoIiwiX2dldENvb3JkIiwiX2dldENvb3JkMiIsIl9zbGljZWRUb0FycmF5IiwiZXZlcnkiLCJ2YWx1ZSIsImlzQ2VsbEVtcHR5IiwiYm9hcmQiLCJpc1NwYWNlQXZhaWxhYmxlIiwiaSIsIl9nZXRDb29yZDMiLCJfZ2V0Q29vcmQ0IiwiaXNWYWxpZFBsYWNlbWVudCIsInZhbGlkQXR0YWNrQ29vcmQiLCJhdHRhY2tJbkJvYXJkIiwiX3JlZiIsIl9yZWYyIiwiaXNBbHJlYWR5QXR0YWNrZWQiLCJzaG90cyIsIl9yZWYzIiwiX3JlZjQiLCJzb21lIiwiX3JlZjUiLCJfcmVmNiIsInZhbGlkQXR0YWNrIiwidmFsaWRhdGlvbiIsInZhbGlkSW50IiwiX3JlZjciLCJfcmVmOCIsImhpdFNoaXAiLCJoaXQiLCJpbml0aWFsQm9hcmQiLCJwbGFjZVNoaXAiLCJhZGRTaGlwVG9Cb2FyZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIm1pc3NlZFNob3RzIiwic2hpcHMiLCJtaXNzU2hpcCIsInB1c2giLCJnZXRNaXNzZWQiLCJhZGRTaGlwVG9TaGlwcyIsImdldFNoaXBzIiwidXBkYXRlQm9hcmRDZWxsIiwibmV3Qm9hcmQiLCJfZ2V0Q29vcmQ1IiwiX2dldENvb3JkNiIsInVwZGF0ZWRSb3ciLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrIiwiX2F0dGFjayIsInhTaG90IiwieVNob3QiLCJhbGxTaGlwU3Vua2VkIiwic3Vua2VkIiwiaXNCb29sZWFuIiwiaXNIdW1hbiIsImdldElzSHVtYW4iLCJuYW1lIiwiY29uY2F0IiwidW5kZWZpbmVkIiwiZ2V0UGxheWVyTmFtZSIsInNldFBsYXllclR1cm4iLCJpc1BsYXlpbmciLCJnZXRQbGF5ZXJUdXJuIiwiZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBhcnNlSW5wdXQiLCJpbnB1dCIsInBhcnNlSW50IiwidmFsaWRhdGVJbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInBhcnNlZElucHV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImZucyIsIl9rZXkiLCJhcmdzIiwicmVkdWNlIiwicCIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==