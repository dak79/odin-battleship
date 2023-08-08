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

;// CONCATENATED MODULE: ./src/assets/icons/linkedin.svg
const linkedin_namespaceObject = __webpack_require__.p + "assets/imgs/4bc2ae884215d6dfdaec.svg";
;// CONCATENATED MODULE: ./src/assets/icons/github.svg
const github_namespaceObject = __webpack_require__.p + "assets/imgs/f902e1244b7397444de8.svg";
;// CONCATENATED MODULE: ./src/dom/DOM.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



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
    var _ref2 = _slicedToArray(_ref, 2),
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

/**
 * Create and append element.
 * @param {String} type - Element tag
 * @param {Object} attributes - Element attributes
 * @param {String|null} textContent - Element text content
 * @param {Node} parent - Node to attach element.
 * @returns HTML Element.
 */
var createAndRenderElement = function createAndRenderElement(type) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var textContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var parent = arguments.length > 3 ? arguments[3] : undefined;
  var element = createElement(type, attributes, textContent);
  renderElement(parent, element);
  return element;
};

/**
 * Create the structure of body element.
 * @param {Node} hook
 * @returns
 */
var createStructureBody = function createStructureBody(hook) {
  return {
    header: createAndRenderElement('header', {
      id: 'body-header',
      "class": 'body-header'
    }, null, hook),
    main: createAndRenderElement('main', {
      id: 'body-main',
      "class": 'body-main'
    }, null, hook),
    footer: createAndRenderElement('footer', {
      id: 'body-footer',
      "class": 'body-footer'
    }, null, hook)
  };
};

/**
 * Render the page title
 * @param {Node} header
 */
var renderTitle = function renderTitle(header) {
  createAndRenderElement('h1', {
    "class": 'header-title'
  }, 'Battleship', header);
};

/**
 * Render the controllers section
 * @param {Node} section
 * @returns
 */
var renderControllers = function renderControllers(section) {
  return createAndRenderElement('div', {
    id: 'controllers',
    "class": 'instructions'
  }, null, section);
};

/**
 * Render the message section.
 * @param {Node} section
 * @returns
 */
var renderMessage = function renderMessage(section) {
  return createAndRenderElement('div', {
    id: 'message-field',
    "class": 'messages message-field'
  }, 'Place your ships', section);
};
var _setMessage = function setMessage(message) {
  var messageField = document.querySelector('#message-field');
  console.log(messageField);
  messageField.textContent = message;
};

/**
 * Render start button.
 * @param {Node} section
 * @returns
 */
var renderButton = function renderButton(section) {
  return createAndRenderElement('button', {
    type: 'button',
    id: 'button-start',
    "class": 'buttons'
  }, 'Start', section);
};

/**
 * Render player name
 * @param {Node} section
 * @param {String} name
 * @returns
 */
var renderPlayerName = function renderPlayerName(section, name) {
  return createAndRenderElement('div', {
    id: 'player-one-name',
    "class": 'players-name player-one-name'
  }, name, section);
};

/**
 * Render Cpu name
 * @param {Node} section
 * @param {String} name
 * @returns
 */
var renderCpuName = function renderCpuName(section, name) {
  return createAndRenderElement('div', {
    id: 'player-two-name',
    "class": 'players-name player-two-name'
  }, name, section);
};

/**
 * Render board container for player
 * @param {Node} section
 * @returns
 */
var renderBoardPlayer = function renderBoardPlayer(section) {
  return createAndRenderElement('div', {
    id: 'board-player',
    "class": 'player-board'
  }, null, section);
};

/**
 * Render the board container for rival
 * @param {Node} section
 * @returns
 */
var renderBoardRival = function renderBoardRival(section) {
  return createAndRenderElement('div', {
    id: 'board-rival',
    "class": 'rival-board'
  }, null, section);
};

/**
 * Render board
 * @param {Node} parent
 * @param {Array[]} board
 */
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

/**
 * Render the ship on board
 * @param {Array[]} board
 */
var renderPlayerShips = function renderPlayerShips(board, table) {
  // const table = document.querySelector('#board-player-table');
  var rows = Array.from(table.rows);
  rows.forEach(function (row, rowIndex) {
    var cells = Array.from(row.cells);
    cells.forEach(function (td, colIndex) {
      var cell = board[rowIndex][colIndex];
      if (cell !== null) {
        td.classList.add('ship-placed');
      }
    });
  });
};

/**
 * Render container for player ship icon.
 * @param {Node} section
 * @returns
 */
var renderShipsPlayerContainer = function renderShipsPlayerContainer(section) {
  return createAndRenderElement('div', {
    id: 'ships-player',
    "class": 'ships-container player-ships'
  }, null, section);
};

/**
 * Render container for cpu ship icon.
 * @param {Node} section
 * @returns
 */
var renderShipsRivalContainer = function renderShipsRivalContainer(section) {
  return createAndRenderElement('div', {
    id: 'ships-rival',
    "class": 'ships-container rival-ships'
  }, null, section);
};

/**
 * Render icon for ships
 * @param {Node} section
 * @param {Object} ships
 */
var renderShipIcons = function renderShipIcons(section, ships) {
  Object.entries(ships).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      ship = _ref4[0],
      descriptions = _ref4[1];
    var div = createAndRenderElement('div', {
      id: ship
    }, null, section);
    descriptions.forEach(function (description, index) {
      var span = createAndRenderElement('span', {
        id: "".concat(ship, "-").concat(index),
        "class": 'container'
      }, null, div);
      createAndRenderElement('img', {
        src: description.icon,
        alt: "".concat(ship, "-icon"),
        "class": 'icons-size'
      }, null, span);
    });
  });
};

/**
 * Render container for footer elments
 * @param {Node} footer
 * @returns
 */
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

/**
 * Create links for GitHub and LinkedIn
 * @param {Node} div
 * @returns
 */
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

/**
 * Render Linkedin Icon
 * @param {Node} link
 * @returns
 */
var renderLnIcon = function renderLnIcon(link) {
  return createAndRenderElement('img', {
    src: linkedin_namespaceObject,
    alt: 'LinkedIn link',
    "class": 'icons-size'
  }, null, link);
};

/**
 * Render GitHub icon
 * @param {Node} link
 * @returns
 */
var renderGhIcon = function renderGhIcon(link) {
  return createAndRenderElement('img', {
    src: github_namespaceObject,
    alt: 'GitHub link',
    "class": 'icons-size'
  }, null, link);
};

/**
 * Render Header Content
 * @param {Node} parent
 */
var renderHeaderContent = function renderHeaderContent(parent) {
  renderTitle(parent);
};

/**
 * Render controllers content
 * @param {Node} parent
 * @param {*} game
 */
var renderControllersContent = function renderControllersContent(parent, game) {
  var controllers = renderControllers(parent);
  renderMessage(controllers);
  renderButton(controllers);
  renderPlayerName(parent, game.playerOne.getPlayerName());
  renderCpuName(parent, game.playerTwo.getPlayerName());
};

/**
 * Render game contents
 * @param {Node} parent
 * @param {*} game
 */
var renderGameContent = function renderGameContent(parent, game) {
  var boardPlayer = renderBoardPlayer(parent);
  renderBoard(boardPlayer, game.playerOneGameboard.board);
  var boardRival = renderBoardRival(parent);
  renderBoard(boardRival, game.playerTwoGameboard.board);
  var shipsContainerPlayer = renderShipsPlayerContainer(parent);
  renderShipIcons(shipsContainerPlayer, game.shipsPlayer);
  var tablePlayer = document.querySelector('#board-player-table');
  renderPlayerShips(game.playerOneGameboard.board, tablePlayer);
  var tableRival = document.querySelector('#board-rival-table');
  renderPlayerShips(game.playerTwoGameboard.board, tableRival);
  var shipsContainerRival = renderShipsRivalContainer(parent);
  renderShipIcons(shipsContainerRival, game.shipsPlayer);
};

/**
 * Render footer content
 * @param {Node} parent
 */
var renderFooterContent = function renderFooterContent(parent) {
  var footer = createFooterStructure(parent);
  var links = createLinks(footer.icons);
  renderLnIcon(links.linkedin);
  renderGhIcon(links.github);
};

/**
 * Render the web page
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
var renderPage = function renderPage(hook, game) {
  var body = createStructureBody(hook);
  renderHeaderContent(body.header);
  renderControllersContent(body.main, game);
  renderGameContent(body.main, game);
  renderFooterContent(body.footer);
  return body;
};

/**
 * Export DOM object
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
var DOM = function DOM() {
  return {
    render: function render(hook, game) {
      return renderPage(hook, game);
    },
    setMessage: function setMessage(message) {
      return _setMessage(message);
    }
  };
};
/* harmony default export */ const dom_DOM = (DOM);
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || gameBoard_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return gameBoard_arrayLikeToArray(arr); }
function gameBoard_slicedToArray(arr, i) { return gameBoard_arrayWithHoles(arr) || gameBoard_iterableToArrayLimit(arr, i) || gameBoard_unsupportedIterableToArray(arr, i) || gameBoard_nonIterableRest(); }
function gameBoard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function gameBoard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return gameBoard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gameBoard_arrayLikeToArray(o, minLen); }
function gameBoard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function gameBoard_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function gameBoard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


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
var getCoord = function getCoord(row, col, length, direction) {
  var rowCoord = direction ? row : row + length;
  var colCoord = direction ? col + length : col;
  return [rowCoord, colCoord];
};
/**
 * Check if ship coordinates are inside the board.
 * @param {Object} ship - The ship object.
 * @param {Number} row - row coord of ship starting position.
 * @param {Number} col - col coord of ship starting position.
 * @param {Boolean} direction true hor | false ver.
 * @returns {Boolean}
 */
var isInBoard = function isInBoard(ship, row, col, direction) {
  var length = ship.getLength();
  var _getCoord = getCoord(row, col, length - 1, direction),
    _getCoord2 = gameBoard_slicedToArray(_getCoord, 2),
    rowCoord = _getCoord2[0],
    colCoord = _getCoord2[1];
  return [isValidCoordinate(row), isValidCoordinate(col), isValidCoordinate(rowCoord), isValidCoordinate(colCoord)].every(function (value) {
    return value !== false;
  });
};
var isCellEmpty = function isCellEmpty(board, row, col) {
  return !board[row][col];
};

/**
 * Check if there is enough space on board for a ship.
 * @param {Object} ship - The ship object.
 * @param {Number} row - row coord of ship starting position.
 * @param {Number} col - col coord of ship starting position.
 * @param {Boolean} direction true hor | false ver
 * @returns {Boolean}
 */
var isSpaceAvailable = function isSpaceAvailable(board, ship, row, col, direction) {
  var length = ship.getLength();
  for (var index = 0; index < length; index++) {
    var _getCoord3 = getCoord(row, col, index, direction),
      _getCoord4 = gameBoard_slicedToArray(_getCoord3, 2),
      rowCoord = _getCoord4[0],
      colCoord = _getCoord4[1];
    if (!isCellEmpty(board, rowCoord, colCoord)) return false;
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
var isValidPlacement = function isValidPlacement(board, ship, row, col, direction) {
  return isInBoard(ship, row, col, direction) && isSpaceAvailable(board, ship, row, col, direction);
};

/**
 * Check if attack input is a valid integer
 * @param {Array} - Parsed input | input
 * @returns {Array} Valid integers or up to two false value.
 */
var validAttackCoord = function validAttackCoord(row, col) {
  return [input(row), input(col)];
};

/**
 * Check if the attack is inside the board.
 * @param {Array} - Valid integers or up to two false value.
 * @returns {Array|false} - Attack coordinate | false.
 */

var attackInBoard = function attackInBoard(_ref) {
  var _ref2 = gameBoard_slicedToArray(_ref, 2),
    row = _ref2[0],
    col = _ref2[1];
  return [isValidCoordinate(row), isValidCoordinate(col)];
};

/**
 * Check if the attack is already done.
 * @param {Array} arr - row and col coordinates
 * @returns {Boolean}
 */
var isAlreadyAttacked = function isAlreadyAttacked(shots, _ref3) {
  var _ref4 = gameBoard_slicedToArray(_ref3, 2),
    row = _ref4[0],
    col = _ref4[1];
  return shots.some(function (_ref5) {
    var _ref6 = gameBoard_slicedToArray(_ref5, 2),
      rowCoord = _ref6[0],
      colCoord = _ref6[1];
    return rowCoord === row && colCoord === col;
  });
};
var validAttack = function validAttack(row, col, shots) {
  var validation = util_pipe(function () {
    return validAttackCoord(row, col);
  }, function (validInt) {
    return attackInBoard(validInt);
  }, function (_ref7) {
    var _ref8 = gameBoard_slicedToArray(_ref7, 2),
      row = _ref8[0],
      col = _ref8[1];
    return isAlreadyAttacked(shots, [row, col]) ? [false] : [row, col];
  })(row, col);
  return validation.some(function (value) {
    return value === false;
  }) ? false : validation;
};

/**
 * Attack find a ship
 * @param {Array[]} board - Board state
 * @param {*} row - row coordinate of attack
 * @param {*} col - col coordinate of attack
 * @returns {Object} - Ship object with updated hits
 */
var hitShip = function hitShip(board, row, col) {
  var ship = board[row][col];
  var hit = ship.hit();
  var init = Object.assign(ship.init, hit);
  var updatedShip = Object.assign({}, ship, {
    init: init
  });
  return {
    ship: updatedShip,
    coord: [row, col]
  };
};
var Gameboard = function Gameboard() {
  var initialBoard = createEmptyBoard();

  /**
   * Try to place a ship on bord
   * @param {Object} ship - The ship object.
   * @param {Number} row - row coord of ship starting position.
   * @param {Number} col - col coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns A ship on board or false
   */
  var placeShip = function placeShip(board, ship, row, col, direction) {
    return isValidPlacement(board, ship, row, col, direction) ? addShipToBoard(board, ship, row, col, direction) : false;
  };
  var shots = [];
  var missedShots = [];
  var ships = [];

  /**
   * Update miss shot
   * @param {Number} row - row coordinate of attack
   * @param {*} col - col coordinate of attack
   */
  var missShip = function missShip(row, col) {
    missedShots.push([row, col]);
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
  var addShipToBoard = function addShipToBoard(board, ship, row, col, direction) {
    var length = ship.getLength();
    var updateBoardCell = function updateBoardCell(index, newBoard) {
      var _getCoord5 = getCoord(row, col, index, direction),
        _getCoord6 = gameBoard_slicedToArray(_getCoord5, 2),
        rowCoord = _getCoord6[0],
        colCoord = _getCoord6[1];
      var updatedRow = _toConsumableArray(newBoard[rowCoord]);
      updatedRow[colCoord] = ship;
      newBoard[rowCoord] = updatedRow;
    };
    var newBoard = _toConsumableArray(board);
    for (var index = 0; index < length; index++) {
      updateBoardCell(index, board);
    }
    addShipToShips(ship);
    return newBoard;
  };

  /**
   * Square attacked
   * @param {Array[]} board - Board state.
   * @param {*} row - row coordinate of attack
   * @param {*} col - col coordinate of attack
   * @returns {Boolean}
   */
  var receiveAttack = function receiveAttack(board, row, col) {
    var attack = validAttack(row, col, shots);
    if (attack) {
      var _attack = gameBoard_slicedToArray(attack, 2),
        rowShot = _attack[0],
        colShot = _attack[1];
      shots.push([rowShot, colShot]);
      board[rowShot][colShot] !== null ? hitShip(board, rowShot, colShot) : missShip(rowShot, colShot);
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
;// CONCATENATED MODULE: ./src/assets/icons/carrier.svg
const carrier_namespaceObject = __webpack_require__.p + "assets/imgs/5e92f0e04143aa95fcad.svg";
;// CONCATENATED MODULE: ./src/assets/icons/battleship.svg
const battleship_namespaceObject = __webpack_require__.p + "assets/imgs/3b85d48f7ff7c01dcfcf.svg";
;// CONCATENATED MODULE: ./src/assets/icons/submarine.svg
const submarine_namespaceObject = __webpack_require__.p + "assets/imgs/0722df29f2f27aa6f796.svg";
;// CONCATENATED MODULE: ./src/assets/icons/destroyer.svg
const destroyer_namespaceObject = __webpack_require__.p + "assets/imgs/41e0d53dad9baaf2b009.svg";
;// CONCATENATED MODULE: ./src/components/game.js
function game_typeof(obj) { "@babel/helpers - typeof"; return game_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, game_typeof(obj); }
function game_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function game_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? game_ownKeys(Object(source), !0).forEach(function (key) { game_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : game_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function game_defineProperty(obj, key, value) { key = game_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function game_toPropertyKey(arg) { var key = game_toPrimitive(arg, "string"); return game_typeof(key) === "symbol" ? key : String(key); }
function game_toPrimitive(input, hint) { if (game_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (game_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








/**
 * Create a player.
 * @param {Boolean} isHuman
 * @param {String} name
 * @param {Boolean} isPlaying
 * @returns player
 */
var createPlayer = function createPlayer(isHuman, name, isPlaying) {
  var player = players();
  player.setIsHuman(isHuman);
  player.setPlayerName(name);
  player.setPlayerTurn(isPlaying);
  return player;
};

/**
 * Initialize players
 * @returns Object with players
 */
var createNewPlayers = function createNewPlayers() {
  return {
    playerOne: createPlayer(true, 'Player 1', true),
    playerTwo: createPlayer(false, 'Cpu', false)
  };
};

/**
 * Initialize gameboards
 * @returns Object with gameboards
 */
var createNewGameboards = function createNewGameboards() {
  return {
    playerOneGameboard: gameBoard(),
    playerTwoGameboard: gameBoard()
  };
};

/**
 * Create ships
 * @param {Object} type - Type of ship
 * @returns An Object with ships
 */
var createShips = function createShips(type) {
  return Array.from({
    length: type.number
  }, function () {
    return {
      body: ships(type.size),
      size: type.size,
      icon: type.icon
    };
  });
};

/**
 * Describe ships
 */
var shipTypes = {
  carrier: {
    number: 1,
    size: 5,
    icon: carrier_namespaceObject
  },
  battleships: {
    number: 2,
    size: 4,
    icon: battleship_namespaceObject
  },
  submarines: {
    number: 3,
    size: 3,
    icon: submarine_namespaceObject
  },
  destroyers: {
    number: 4,
    size: 2,
    icon: destroyer_namespaceObject
  }
};

/**
 * Create ships for each player
 * @returns Object with ships
 */
var createShipPlayers = function createShipPlayers() {
  return Object.keys(shipTypes).reduce(function (ships, type) {
    ships[type] = createShips(shipTypes[type]);
    return ships;
  }, {});
};

/**
 * Describe coordinate and direction of ships
 */
var shipPlacement = {
  carrier: [{
    row: 0,
    col: 0,
    isHorizontal: true
  }],
  battleships: [{
    row: 4,
    col: 2,
    isHorizontal: false
  }, {
    row: 5,
    col: 5,
    isHorizontal: true
  }],
  submarines: [{
    row: 2,
    col: 3,
    isHorizontal: true
  }, {
    row: 2,
    col: 7,
    isHorizontal: false
  }, {
    row: 8,
    col: 4,
    isHorizontal: true
  }],
  destroyers: [{
    row: 4,
    col: 0,
    isHorizontal: false
  }, {
    row: 4,
    col: 4,
    isHorizontal: false
  }, {
    row: 9,
    col: 3,
    isHorizontal: true
  }, {
    row: 0,
    col: 9,
    isHorizontal: false
  }]
};

/**
 * Merge ships description and data for placement.
 * @param {Object} ships
 * @returns Object of ships with all data
 */
var setCoordShipsPlayer = function setCoordShipsPlayer(ships) {
  return Object.keys(ships).reduce(function (updatedShips, type) {
    return updatedShips[type] = ships[type].map(function (ship, shipIndex) {
      return Object.assign(ship, shipPlacement[type][shipIndex]);
    });
  }, {});
};

/**
 * Place ship on player board
 * @param {Object} ships
 * @param {Object} gameboard
 */
var initialPlacementPlayer = function initialPlacementPlayer(ships, gameboard) {
  return Object.values(ships).forEach(function (typeOfShip) {
    return typeOfShip.forEach(function (ship) {
      return gameboard.placeShip(gameboard.board, ship.body, ship.row, ship.col, ship.isHorizontal);
    });
  });
};

/**
 * Place randomly ship on opponent board.
 * @param {Object} ships
 * @param {Object} gameboard
 */
var initialPlacementRival = function initialPlacementRival(ships, gameboard) {
  var MAX_BOARD_SIZE = 10;
  Object.values(ships).forEach(function (typeOfShips) {
    return typeOfShips.forEach(function (ship) {
      var placed = false;
      while (!placed) {
        placed = gameboard.placeShip(gameboard.board, ship.body, Math.floor(Math.random() * MAX_BOARD_SIZE), Math.floor(Math.random() * MAX_BOARD_SIZE), Math.random() < 0.5);
      }
    });
  });
};

/**
 * Initialize the game;
 * @returns Object
 */
var initGame = function initGame() {
  var players = createNewPlayers();
  var gameboards = createNewGameboards();
  var shipsPlayer = createShipPlayers();
  setCoordShipsPlayer(shipsPlayer);
  initialPlacementPlayer(shipsPlayer, gameboards.playerOneGameboard);
  initialPlacementRival(shipsPlayer, gameboards.playerTwoGameboard);
  return game_objectSpread(game_objectSpread(game_objectSpread({}, players), gameboards), {}, {
    shipsPlayer: shipsPlayer
  });
};

/**
 * Export the game object
 */
var game = initGame();
/* harmony default export */ const components_game = (game);
;// CONCATENATED MODULE: ./src/components/gameLoop.js
function gameLoop_typeof(obj) { "@babel/helpers - typeof"; return gameLoop_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gameLoop_typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == gameLoop_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function gameLoop_slicedToArray(arr, i) { return gameLoop_arrayWithHoles(arr) || gameLoop_iterableToArrayLimit(arr, i) || gameLoop_unsupportedIterableToArray(arr, i) || gameLoop_nonIterableRest(); }
function gameLoop_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function gameLoop_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return gameLoop_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gameLoop_arrayLikeToArray(o, minLen); }
function gameLoop_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function gameLoop_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function gameLoop_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* TODO:
 * - Starting by pressing start:
 *   - (Hide the button start) -> it will be quit and it will reset the game.
 *   - add event listener to enemy board;
 *   - Take the input from cell (P1)
 *   - remove event listener to enemy board
 *
 *   - Random attack (CPU)
 *   - (make temporary visibile the opponent ship)
 *   - procede throught attack, with hit or miss,
 *   - if hit happen hit staff;
 *   - if miss, happen miss stuff;
 *   - switch the turn to the other player;
 *
 * - Method to take input for attack from player 2 board.
 *   - Apply an eventListener to all cells of cpu board
 *   - Create an event handler which take the click and parse an x and an y
 *    - Decide where to put event handler, maybe in a file or in game.
 *    - Carefull about IEEF game, might need a new file or module not IEFF.
 *      Maybe is better to separate handler and game IEEF.
 */
var gameLoop = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var a, updateDom, events, body, parsedAttack, _yield$events$addClic, _yield$events$addClic2, row, col;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log(components_game);
          a = components_game.playerOne.getPlayerTurn();
          updateDom = dom_DOM();
          events = dom_eventListeners();
          body = document.querySelector('#hook');
          console.log(body);
          console.log(a);
          if (!components_game.playerOne.getPlayerTurn) {
            _context.next = 26;
            break;
          }
          // player one is playing
          // Set the message
          updateDom.setMessage('Attack enemy board');
          // take the input from cell.

          // add listener to rival table.
          parsedAttack = false;
        case 10:
          if (parsedAttack) {
            _context.next = 24;
            break;
          }
          _context.next = 13;
          return events.addClicksRivalBoard(body);
        case 13:
          _yield$events$addClic = _context.sent;
          _yield$events$addClic2 = gameLoop_slicedToArray(_yield$events$addClic, 2);
          row = _yield$events$addClic2[0];
          col = _yield$events$addClic2[1];
          console.log(row, col);
          // ends it when attack is valid maybe is not needed to remove the event
          // lister, maybe de facto is inactive.
          parsedAttack = components_game.playerTwoGameboard.receiveAttack(components_game.playerTwoGameboard.board, row, col);
          console.log(parsedAttack);
          console.log(components_game.playerTwoGameboard.getMissed());
          console.log(components_game.playerTwoGameboard.getShips());
          _context.next = 10;
          break;
        case 24:
          _context.next = 27;
          break;
        case 26:
          // player two is playing
          // Set the message
          updateDom.setMessage('Enemy attacks your ships');
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function gameLoop() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const components_gameLoop = (gameLoop);
;// CONCATENATED MODULE: ./src/dom/eventHandlers.js
function eventHandlers_slicedToArray(arr, i) { return eventHandlers_arrayWithHoles(arr) || eventHandlers_iterableToArrayLimit(arr, i) || eventHandlers_unsupportedIterableToArray(arr, i) || eventHandlers_nonIterableRest(); }
function eventHandlers_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function eventHandlers_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return eventHandlers_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eventHandlers_arrayLikeToArray(o, minLen); }
function eventHandlers_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function eventHandlers_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function eventHandlers_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var parseAttackCoords = function parseAttackCoords(event) {
  var row = event.target.dataset.x;
  var col = event.target.dataset.y;
  return [row, col];
};
var attackCoords = function attackCoords(event) {
  var _parseAttackCoords = parseAttackCoords(event),
    _parseAttackCoords2 = eventHandlers_slicedToArray(_parseAttackCoords, 2),
    row = _parseAttackCoords2[0],
    col = _parseAttackCoords2[1];
  console.log(row, col);
};
var startGameLoop = function startGameLoop(event) {
  console.log(event.target);
  components_gameLoop();
};
/* harmony default export */ const dom_eventHandlers = ({
  attackCoords: attackCoords,
  parseAttackCoords: parseAttackCoords,
  startGameLoop: startGameLoop
});
;// CONCATENATED MODULE: ./src/dom/eventListeners.js
function eventListeners_slicedToArray(arr, i) { return eventListeners_arrayWithHoles(arr) || eventListeners_iterableToArrayLimit(arr, i) || eventListeners_unsupportedIterableToArray(arr, i) || eventListeners_nonIterableRest(); }
function eventListeners_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function eventListeners_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return eventListeners_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eventListeners_arrayLikeToArray(o, minLen); }
function eventListeners_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function eventListeners_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function eventListeners_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var startGame = function startGame(body) {
  var btnStart = body.main.querySelector('#controllers #button-start');
  btnStart.addEventListener('click', dom_eventHandlers.startGameLoop);
};

/**
 * Add click listener to cpu board.
 * @param {HTMLElement} table
 * @returns
 */
var _addClicksRivalBoard = function addClicksRivalBoard(body) {
  return new Promise(function (resolve) {
    var table = body.querySelector('#body-main #board-rival #board-rival-table');
    var cells = table.querySelectorAll('td');
    function attackCoords(event) {
      var _eventHandlers$parseA = dom_eventHandlers.parseAttackCoords(event),
        _eventHandlers$parseA2 = eventListeners_slicedToArray(_eventHandlers$parseA, 2),
        row = _eventHandlers$parseA2[0],
        col = _eventHandlers$parseA2[1];
      resolve([row, col]);
    }
    cells.forEach(function (cell) {
      cell.addEventListener('click', attackCoords);
    });
  });
};

/**
 * Remove click listener from cpu board
 * @param {Array[]} cells
 */
var _removeClicksRivalBoard = function removeClicksRivalBoard(cells) {
  cells.forEach(function (cell) {
    return cell.removeEventListener('click', dom_eventHandlers.parseAttackCoords);
  });
};
var startGameRemove = function startGameRemove(btn) {
  btn.removeEventListener('click', eventHandlers.startGameLoop);
};

/**
 * Remove listener from a cell.
 * @param {Array[]} cell
 * @returns
 */
var removeClickRivalBoard = function removeClickRivalBoard(cell) {
  return cell.removeEventListener('click', eventHandlers.parseAttackCoords);
};

/**
 * Initialize event listeners
 * @param {HTMLElement} body
 */
var initializeEventListeners = function initializeEventListeners(body) {
  var rivalTable = body.main.querySelector('#board-rival #board-rival-table');
  var cellsRivalBoard = clicksRivalBoard(rivalTable);

  // const startBtn = body.main.querySelector('#controllers #button-start');
  // startGame(startBtn);
};

/**
 * Export event listeners
 * @param {HTMLElement} body
 * @returns
 */
var eventListeners = function eventListeners() {
  return {
    startBtn: function startBtn(body) {
      return startGame(body);
    },
    addClicksRivalBoard: function addClicksRivalBoard(body) {
      return _addClicksRivalBoard(body);
    },
    removeClicksRivalBoard: function removeClicksRivalBoard(cells) {
      return _removeClicksRivalBoard(cells);
    }
  };
};
/* harmony default export */ const dom_eventListeners = (eventListeners);
;// CONCATENATED MODULE: ./src/index.js




var hook = document.querySelector('#hook');
var body = dom_DOM().render(hook, components_game);
dom_eventListeners().startBtn(body);
/******/ })()
;