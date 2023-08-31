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

;// CONCATENATED MODULE: ./src/dom/domUtil.js
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
/* harmony default export */ const domUtil = (createAndRenderElement);
;// CONCATENATED MODULE: ./src/dom/renders/header.js


/**
 * Render the page title
 * @param {Node} header
 */
var renderTitle = function renderTitle(header) {
  domUtil('h1', {
    "class": 'header-title'
  }, 'Battleship', header);
};

/**
 * Render Header Content
 * @param {Node} parent
 */
var renderHeaderContent = function renderHeaderContent(parent) {
  renderTitle(parent);
};
/* harmony default export */ const header = (renderHeaderContent);
;// CONCATENATED MODULE: ./src/dom/renders/body.js


/**
 * Create the structure of body element.
 * @param {Node} hook
 * @returns
 */
var createStructureBody = function createStructureBody(hook) {
  return {
    header: domUtil('header', {
      id: 'body-header',
      "class": 'body-header'
    }, null, hook),
    main: domUtil('main', {
      id: 'body-main',
      "class": 'body-main'
    }, null, hook),
    footer: domUtil('footer', {
      id: 'body-footer',
      "class": 'body-footer'
    }, null, hook)
  };
};
/* harmony default export */ const renders_body = (createStructureBody);
;// CONCATENATED MODULE: ./src/dom/renders/controllers.js


/**
 * Render the controllers section
 * @param {Node} section
 * @returns
 */
var renderControllers = function renderControllers(section) {
  return domUtil('div', {
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
  return domUtil('div', {
    id: 'message-field',
    "class": 'messages message-field'
  }, 'Welcome! Press start to play', section);
};

/**
 * Render start button.
 * @param {Node} section
 * @returns
 */
var renderButton = function renderButton(section) {
  return domUtil('button', {
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
  return domUtil('div', {
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
  return domUtil('div', {
    id: 'player-two-name',
    "class": 'players-name player-two-name'
  }, name, section);
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
/* harmony default export */ const controllers = (renderControllersContent);
;// CONCATENATED MODULE: ./src/dom/renders/gameContent.js


/**
 * Render board container for player
 * @param {Node} section
 * @returns
 */
var renderBoardPlayer = function renderBoardPlayer(section) {
  return domUtil('div', {
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
  return domUtil('div', {
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
  var table = domUtil('table', {
    id: "".concat(parent.id, "-table"),
    "class": 'boards'
  }, null, parent);
  var tbody = domUtil('tbody', {
    id: "".concat(parent.id, "-tbody")
  }, null, table);
  board.forEach(function (row, rowIndex) {
    var tr = domUtil('tr', {
      "class": 'board-row'
    }, null, tbody);
    row.forEach(function (_, colIndex) {
      domUtil('td', {
        "class": 'cell-size cell-border',
        'data-x': rowIndex,
        'data-y': colIndex
      }, null, tr);
    });
  });
};

/**
 * Render game contents
 * @param {Node} parent
 * @param {*} game
 */
var gameContent_renderBoards = function renderBoards(parent, game) {
  var boardPlayer = renderBoardPlayer(parent);
  renderBoard(boardPlayer, game.playerOneGameboard.board);
  var boardRival = renderBoardRival(parent);
  renderBoard(boardRival, game.playerTwoGameboard.board);
};
var gameContent_removeBoards = function removeBoards(parent) {
  var elements = [parent.querySelector('#board-player'), parent.querySelector('#board-rival')];
  elements.forEach(function (element) {
    return element.remove();
  });
};

;// CONCATENATED MODULE: ./src/assets/icons/linkedin.svg
const linkedin_namespaceObject = __webpack_require__.p + "assets/imgs/4bc2ae884215d6dfdaec.svg";
;// CONCATENATED MODULE: ./src/assets/icons/github.svg
const github_namespaceObject = __webpack_require__.p + "assets/imgs/f902e1244b7397444de8.svg";
;// CONCATENATED MODULE: ./src/dom/renders/footer.js




/**
 * Render container for footer elments
 * @param {Node} footer
 * @returns
 */
var createFooterStructure = function createFooterStructure(footer) {
  return {
    credits: domUtil('div', {
      "class": 'credits'
    }, 'Daniele Campari - 2023', footer),
    icons: domUtil('div', {
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
    linkedin: domUtil('a', {
      href: 'https://www.linkedin.com/in/daniele-campari-33757593/'
    }, null, div),
    github: domUtil('a', {
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
  return domUtil('img', {
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
  return domUtil('img', {
    src: github_namespaceObject,
    alt: 'GitHub link',
    "class": 'icons-size'
  }, null, link);
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
/* harmony default export */ const footer = (renderFooterContent);
;// CONCATENATED MODULE: ./src/dom/DOM.js






/**
 * Render the web page
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
var renderPage = function renderPage(hook, game) {
  var body = renders_body(hook);
  header(body.header);
  controllers(body.main, game);
  gameContent_renderBoards(body.main, game);
  footer(body.footer);
  return body;
};

/**
 * Export DOM object
 */
var DOM = function DOM() {
  return {
    render: function render(hook, game) {
      return renderPage(hook, game);
    },
    renderBoards: function renderBoards(parent, game) {
      return gameContent_renderBoards(parent, game);
    },
    removeBoards: function removeBoards(parent) {
      return gameContent_removeBoards(parent);
    }
  };
};
/* harmony default export */ const dom_DOM = (DOM);
;// CONCATENATED MODULE: ./src/dom/updateDOM.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function updateDOM_slicedToArray(arr, i) { return updateDOM_arrayWithHoles(arr) || updateDOM_iterableToArrayLimit(arr, i) || updateDOM_unsupportedIterableToArray(arr, i) || updateDOM_nonIterableRest(); }
function updateDOM_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function updateDOM_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return updateDOM_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return updateDOM_arrayLikeToArray(o, minLen); }
function updateDOM_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function updateDOM_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function updateDOM_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * Remove element from DOM
 * @param {Node} element
 */
var _removeElement = function removeElement(element) {
  if (element) {
    element.remove();
  }
};

/**
 * Set a message in the message field
 * @param {String} message
 */
var _setMessage = function setMessage(message) {
  var messageField = document.querySelector('#message-field');
  messageField.textContent = message;
};

/**
 * Get the message
 * @param {Boolean} isPlayerOne
 * @returns
 */
var getMessage = function getMessage(isPlayerOne) {
  return isPlayerOne ? 'Attack enemy board' : 'Enemy attacks your ships';
};

/**
 * Set text content of an element.
 * @param {Node} btn
 */
var _setTextContent = function setTextContent(element, text) {
  element.textContent = text;
};
var addShotClasses = function addShotClasses(cell, isHit) {
  var hitClass = isHit ? 'ship-hit' : 'missed-hit';
  var otherClass = isHit ? 'missed-hit' : 'ship-hit';
  if (!cell.classList.contains(hitClass)) {
    cell.classList.add(hitClass);
  }
  if (cell.classList.contains(otherClass)) {
    cell.classList.remove(otherClass);
  }
};

/**
 * Render attack result on boards
 * @param {Node} table
 * @param {String} x
 * @param {String} y
 * @param {Boolean} isHit
 */
var _renderShot = function renderShot(table, x, y, isHit) {
  var rows = Array.from(table.rows);
  rows.forEach(function (row) {
    var td = Array.from(row.cells).find(function (td) {
      return td.dataset.x === x && td.dataset.y === y;
    });
    if (td) {
      addShotClasses(td, isHit);
    }
  });
};

/**
 * Get the selector for icon.
 * @param {Boolean} isPlayerOne
 * @param {Object} shipType - Ship object
 * @returns
 */
var getIconSelector = function getIconSelector(isPlayerOne, shipType) {
  return isPlayerOne ? "#body-main #ships-rival #".concat(shipType) : "#body-main #ships-player #".concat(shipType);
};

/**
 * Render icon as sunked ship.
 * @param {Node} container
 */
var _renderSunkedShip = function renderSunkedShip(container) {
  var icons = Array.from(container.children);
  var icon = icons.find(function (icon) {
    return !icon.classList.contains('ship-sunked');
  });
  if (icon) {
    icon.classList.add('ship-sunked');
  }
};

/**
 * Get the table element
 * @param {Boolean} isPlayerOne
 * @returns
 */
var getTableSelector = function getTableSelector(isPlayerOne) {
  return isPlayerOne ? '#body-main #board-rival #board-rival-table' : '#body-main #board-player #board-player-table';
};

// Delay
var ATTACK_DELAY = 1000;

/**
 * Timer
 * @param {Number} ms
 * @returns
 */
var timer = function timer(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

// Store ship hit by cpu
var shipsHits = [];

// Delete the ship in the array
var clearShipsHits = function clearShipsHits() {
  shipsHits.splice(0, 1);
};

// Random coordinate for cpu attack
var generateRandomCoordinates = function generateRandomCoordinates() {
  return [Math.floor(Math.random() * 10).toString(), Math.floor(Math.random() * 10).toString()];
};

/**
 * Generate coordinate for attack. If cpu hit a ship will stick around that
 * until is sunked.
 * @returns {Array} Coordinate for attack
 */
var cpuAttack = function cpuAttack() {
  if (shipsHits.length) {
    var coord = shipsHits[0].adjacentSlot[Math.floor(Math.random() * shipsHits[0].adjacentSlot.length)];
    var _coord = updateDOM_slicedToArray(coord, 2),
      adjRow = _coord[0],
      adjCol = _coord[1];
    return [adjRow.toString(), adjCol.toString()];
  }
  return generateRandomCoordinates();
};

/**
 * Store the ship in the array with adjacent slot to try to hit
 * @param {String} row
 * @param {String} col
 * @param {Object} shipHit
 */
var setShipsHits = function setShipsHits(row, col, shipHit) {
  var foundShip = shipsHits.find(function (ship) {
    return ship.stats.init.id === shipHit.init.id;
  });
  var parsedRow = parseInt(row);
  var parsedCol = parseInt(col);
  if (!foundShip) {
    shipsHits.push({
      stats: shipHit,
      hit: [[parsedRow, parsedCol]],
      adjacentSlot: [[parsedRow + 1, parsedCol], [parsedRow - 1, parsedCol], [parsedRow, parsedCol + 1], [parsedRow, parsedCol - 1]]
    });
  } else {
    var index = shipsHits.indexOf(foundShip);
    if (!shipsHits[index].stats.init.sunked) {
      shipsHits[index].hit.push([parsedRow, parsedCol]);
      updateAdjacences(shipsHits[index].stats.init.isHorizontal, index);
    } else {
      clearShipsHits();
    }
  }
};
var updateAdjacences = function updateAdjacences(isHorizontal, index) {
  var hits = shipsHits[index].hit;
  shipsHits[index].adjacentSlot = hits.flatMap(function (coord) {
    var _coord2 = updateDOM_slicedToArray(coord, 2),
      row = _coord2[0],
      col = _coord2[1];
    var newCoords = isHorizontal ? [[row, col + 1], [row, col - 1]] : [[row + 1, col], [row - 1, col]];
    return newCoords.filter(function (newCoord) {
      return !hits.some(function (hitCoord) {
        return hitCoord[0] === newCoord[0] && hitCoord[1] === newCoord[1];
      });
    });
  });
};

/**
 * Render attack on boards
 * @param {Object} attacker
 * @param {Object} opponent
 * @param {Boolean} isPlayerOne
 */
var _renderPlayerAttack = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(opponent, isPlayerOne) {
    var events, body, tableSelector, table, validAttack, _ref2, _ref3, row, col, ship, iconSelector, shipIcons;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          events = dom_eventListeners();
          body = document.querySelector('#hook');
          tableSelector = getTableSelector(isPlayerOne);
          table = body.querySelector(tableSelector);
          _setMessage(getMessage(isPlayerOne));
          validAttack = false;
        case 6:
          if (validAttack) {
            _context.next = 26;
            break;
          }
          if (!isPlayerOne) {
            _context.next = 13;
            break;
          }
          _context.next = 10;
          return events.addClicks(body, false);
        case 10:
          _context.t0 = _context.sent;
          _context.next = 14;
          break;
        case 13:
          _context.t0 = cpuAttack();
        case 14:
          _ref2 = _context.t0;
          _ref3 = updateDOM_slicedToArray(_ref2, 2);
          row = _ref3[0];
          col = _ref3[1];
          validAttack = opponent.receiveAttack(opponent.board, row, col);
          if (!validAttack) {
            _context.next = 24;
            break;
          }
          if (isPlayerOne) {
            _context.next = 23;
            break;
          }
          _context.next = 23;
          return timer(ATTACK_DELAY);
        case 23:
          if (opponent.board[row][col]) {
            if (!isPlayerOne) {
              setShipsHits(row, col, opponent.board[row][col]);
            }
            _renderShot(table, row, col, true);
            ship = opponent.board[row][col];
            if (ship.init.sunked) {
              iconSelector = getIconSelector(isPlayerOne, ship.init.type);
              shipIcons = body.querySelector(iconSelector);
              _renderSunkedShip(shipIcons);
            }
          } else {
            _renderShot(table, row, col, false);
          }
        case 24:
          _context.next = 6;
          break;
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderPlayerAttack(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Render winning message.
 * @param {Boolean} isPlayerOneWinner
 * @returns
 */
var _renderWinningState = function renderWinningState(isPlayerOneWinner) {
  return isPlayerOneWinner ? _setMessage('Player 1 Wins') : _setMessage('Computer Wins');
};

/*
 * Export updateDOM object
 */
var updateDOM = function updateDOM() {
  return {
    setMessage: function setMessage(message) {
      return _setMessage(message);
    },
    removeElement: function removeElement(element) {
      return _removeElement(element);
    },
    setTextContent: function setTextContent(btn, text) {
      return _setTextContent(btn, text);
    },
    renderShot: function renderShot(table, row, col, isHit) {
      return _renderShot(table, row, col, isHit);
    },
    renderSunkedShip: function renderSunkedShip(ship) {
      return _renderSunkedShip(ship);
    },
    renderPlayerAttack: function renderPlayerAttack(attacker, opponent, isPlayerOne) {
      return _renderPlayerAttack(attacker, opponent, isPlayerOne);
    },
    renderWinningState: function renderWinningState(isPlayerOneWinner) {
      return _renderWinningState(isPlayerOneWinner);
    }
  };
};
/* harmony default export */ const dom_updateDOM = (updateDOM);
;// CONCATENATED MODULE: ./src/dom/eventListeners.js
function eventListeners_typeof(obj) { "@babel/helpers - typeof"; return eventListeners_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, eventListeners_typeof(obj); }
function eventListeners_slicedToArray(arr, i) { return eventListeners_arrayWithHoles(arr) || eventListeners_iterableToArrayLimit(arr, i) || eventListeners_unsupportedIterableToArray(arr, i) || eventListeners_nonIterableRest(); }
function eventListeners_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function eventListeners_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return eventListeners_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eventListeners_arrayLikeToArray(o, minLen); }
function eventListeners_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function eventListeners_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function eventListeners_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function eventListeners_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ eventListeners_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == eventListeners_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function eventListeners_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function eventListeners_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { eventListeners_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { eventListeners_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/**
 * Add listener to button start for starting placement
 * @param {Node} body
 */
var startGame = function startGame(body) {
  var btnStart = body.querySelector('#body-main #controllers #button-start');
  btnStart.addEventListener('click', startPlacement);
};

/**
 * Remove listener for starting placement.
 * @param {Node} btn
 * @returns
 */
var startPlacementRemove = function startPlacementRemove(btn) {
  return btn.removeEventListener('click', startPlacement);
};

/**
 * Start placement fase.
 * @param {Event} event
 */
var startPlacement = /*#__PURE__*/function () {
  var _ref = eventListeners_asyncToGenerator( /*#__PURE__*/eventListeners_regeneratorRuntime().mark(function _callee(event) {
    var body, name, btn, newGame;
    return eventListeners_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body = document.querySelector('#hook');
          name = body.querySelector('#body-main #player-one-name');
          btn = name.querySelector('#btn-rotate');
          dom_updateDOM().setMessage('Place your ships');
          dom_updateDOM().setTextContent(event.target, 'Quit');
          startPlacementRemove(event.target);
          quitGame(event.target);
          newGame = game_game.init();
          _context.next = 10;
          return game_game.placement(newGame);
        case 10:
          dom_updateDOM().removeElement(btn);
          dom_updateDOM().setTextContent(name, 'Player 1');
          game_game.playGame(newGame);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function startPlacement(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Add listener for quit game.
 * @param {Node} btn
 */
var quitGame = function quitGame(btn) {
  btn.addEventListener('click', quitGameLoop);
};

/**
 * Quit game and reset.
 * @param {Event} event
 */
var quitGameLoop = function quitGameLoop(event) {
  var body = document.querySelector('#hook');
  var name = body.querySelector('#body-main #player-one-name');
  var btn = name.querySelector('#btn-rotate');
  var newGameInit = game_game.init();
  removeQuitGame(event.target);
  dom_updateDOM().setTextContent(event.target, 'Start');
  var main = body.querySelector('#body-main');
  dom_DOM().removeBoards(main);
  dom_placementDOM().removeShipsSummary(main);
  dom_updateDOM().removeElement(btn);
  dom_updateDOM().setTextContent(name, 'Player 1');
  dom_DOM().renderBoards(main, newGameInit);
  startGame(body);
  dom_updateDOM().setMessage('Welcome! Press start to play');
};

/**
 * Remove listener from quit button.
 * @param {Node} btn
 */
var removeQuitGame = function removeQuitGame(btn) {
  btn.removeEventListener('click', quitGameLoop);
};

/**
 * Add listener to Rotate button.
 * @param {Node} btn
 * @param {Object} ship
 * @returns
 */
var _btnRotate = function btnRotate(btn, ship) {
  return btn.addEventListener('click', rotateShip.bind(null, ship));
};

/**
 * Handle rotate
 * @param {Object} ship
 * @returns
 */
var rotateShip = function rotateShip(ship) {
  return ship.body.init.isHorizontal ? ship.body.setDirection(false) : ship.body.setDirection(true);
};

/**
 * Add listener for mouse to player board
 * @param {Node} table
 * @param {Boolean} isAdding
 */
var _mouseListener = function mouseListener(table, isAdding) {
  var rows = Array.from(table.rows);
  rows.forEach(function (row) {
    var cells = Array.from(row.cells);
    cells.forEach(function (td) {
      if (isAdding) {
        td.addEventListener('mouseover', mouseHandler);
        td.addEventListener('mouseleave', mouseHandler);
      } else {
        td.removeEventListener('mouseover', mouseHandler);
        td.removeEventListener('mouseleave', mouseHandler);
      }
    });
  });
};
var activeShip = null;

/**
 * Set ship active
 * @param {Object} ship
 */
var _setActiveShip = function setActiveShip(ship) {
  activeShip = ship;
};

/**
 * Get the active ship
 * @returns Ship object
 */
var getActiveShip = function getActiveShip() {
  return activeShip;
};

/**
 * Clear activeShip variable
 */
var _clearActiveShip = function clearActiveShip() {
  activeShip = null;
};

/**
 * Get ship coordinates
 * @param {Number} row
 * @param {Number} col
 * @param {Boolean} direction
 * @param {Number} value
 * @returns
 */
var getCoord = function getCoord(row, col, direction, value) {
  return [direction ? row : row + value, direction ? col + value : col];
};

/**
 * Check if all ship is inside board
 * @param {Object} ship
 * @returns {Boolean}
 */
var validateCells = function validateCells(ship) {
  return ship.map(function (coords) {
    var _coords = eventListeners_slicedToArray(coords, 2),
      row = _coords[0],
      col = _coords[1];
    if (row < 0 || row > 9 || col < 0 || col > 9 || document.querySelector("[data-x='".concat(row, "'][data-y='").concat(col, "']")).classList.contains('ship-placed')) {
      return false;
    }
    return true;
  });
};

/**
 * Handle mouse event on player board.
 * @param {Event} event
 */
var mouseHandler = function mouseHandler(event) {
  event.stopPropagation();
  var ship = getActiveShip();
  var shipDir = ship.body.init.isHorizontal;
  var targetX = parseInt(event.target.dataset.x);
  var targetY = parseInt(event.target.dataset.y);
  if (document.querySelector("[data-x='".concat(targetX, "'][data-y='").concat(targetY, "']"))) {
    var range = Array.from({
      length: ship.body.init.len
    }, function (_, i) {
      return i;
    });
    var shipCoord = range.map(function (cell) {
      return getCoord(targetX, targetY, shipDir, cell);
    });
    var className = validateCells(shipCoord).some(function (value) {
      return value === false;
    }) ? 'ship-shadow-invalid' : 'ship-shadow';
    range.forEach(function (cell) {
      var _getCoord = getCoord(targetX, targetY, shipDir, cell),
        _getCoord2 = eventListeners_slicedToArray(_getCoord, 2),
        cellX = _getCoord2[0],
        cellY = _getCoord2[1];
      var td = document.querySelector("[data-x='".concat(cellX, "'][data-y='").concat(cellY, "']"));
      if (td) {
        if (event.type === 'mouseover' && !td.classList.contains('ship-placed')) {
          td.classList.add(className);
        }
        if (event.type === 'mouseleave') {
          td.classList.remove(className);
        }
      }
    });
  }
};

/**
 * Add click listener to cpu board.
 * @param {HTMLElement} table
 * @param {Boolean} isPlayerBoard
 * @returns
 */
var _addClicks = function addClicks(body, isPlayerBoard) {
  return new Promise(function (resolve) {
    var table = isPlayerBoard ? body.querySelector('#body-main #board-player #board-player-table') : body.querySelector('#body-main #board-rival #board-rival-table');
    var cells = table.querySelectorAll('td');
    var clicks = function clicks(event) {
      var _parseCoords = parseCoords(event),
        _parseCoords2 = eventListeners_slicedToArray(_parseCoords, 2),
        row = _parseCoords2[0],
        col = _parseCoords2[1];
      resolve([row, col]);
    };
    cells.forEach(function (cell) {
      return cell.addEventListener('click', clicks);
    });
  });
};
var parseCoords = function parseCoords(event) {
  return [event.target.dataset.x, event.target.dataset.y];
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
    quitBtn: function quitBtn(btn) {
      return quitGame(btn);
    },
    btnRotate: function btnRotate(btn, ship) {
      return _btnRotate(btn, ship);
    },
    addClicks: function addClicks(body, isPlayerBoard) {
      return _addClicks(body, isPlayerBoard);
    },
    setActiveShip: function setActiveShip(ship) {
      return _setActiveShip(ship);
    },
    clearActiveShip: function clearActiveShip() {
      return _clearActiveShip();
    },
    mouseListener: function mouseListener(table, isAdding) {
      return _mouseListener(table, isAdding);
    }
  };
};
/* harmony default export */ const dom_eventListeners = (eventListeners);
;// CONCATENATED MODULE: ./src/dom/placementDOM.js
function placementDOM_typeof(obj) { "@babel/helpers - typeof"; return placementDOM_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, placementDOM_typeof(obj); }
function placementDOM_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ placementDOM_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == placementDOM_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function placementDOM_slicedToArray(arr, i) { return placementDOM_arrayWithHoles(arr) || placementDOM_iterableToArrayLimit(arr, i) || placementDOM_unsupportedIterableToArray(arr, i) || placementDOM_nonIterableRest(); }
function placementDOM_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function placementDOM_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function placementDOM_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = placementDOM_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function placementDOM_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return placementDOM_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return placementDOM_arrayLikeToArray(o, minLen); }
function placementDOM_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function placementDOM_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function placementDOM_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { placementDOM_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { placementDOM_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Render button rotate on DOM
 * @param {Node} parent
 * @returns
 */
var _renderBtnRotate = function renderBtnRotate(parent) {
  return domUtil('button', {
    id: 'btn-rotate',
    "class": 'buttons'
  }, 'Rotate', parent);
};
var removeBtn = function removeBtn(btn) {
  return btn.remove();
};

/**
 * Change text comment of an element.
 * @param {HTMLElement} element
 * @returns
 */
var _clearTxtContent = function clearTxtContent(element) {
  return element.textContent = '';
};

/**
 * Render the ship on board
 * @param {Array[]} board
 * @param {Node} table
 */
var renderPlayerShips = function renderPlayerShips(board, table) {
  var rows = Array.from(table.rows);
  rows.forEach(function (row, rowIndex) {
    var cells = Array.from(row.cells);
    cells.forEach(function (td, colIndex) {
      var cell = board[rowIndex][colIndex];
      if (cell !== null) {
        if (td.classList.contains('ship-shadow')) {
          td.classList.remove('ship-shadow');
        }
        td.classList.add('ship-placed');
      }
    });
  });
};

/**
 * Render container for cpu ship icon.
 * @param {Node} section
 * @returns
 */
var renderShipsRivalContainer = function renderShipsRivalContainer(section) {
  return domUtil('div', {
    id: 'ships-rival',
    "class": 'ships-container rival-ships'
  }, null, section);
};

/**
 * Render container for player ship icon.
 * @param {Node} section
 * @returns
 */
var _renderShipsPlayerContainer = function renderShipsPlayerContainer(section) {
  return domUtil('div', {
    id: 'ships-player',
    "class": 'ships-container player-ships'
  }, null, section);
};

/**
 * Render icon for ships
 * @param {Node} section
 * @param {Object} ships
 */
var renderShipIcons = function renderShipIcons(section, ship) {
  if (!section.querySelector("#".concat(ship.body.init.type))) {
    domUtil('div', {
      id: ship.body.init.type
    }, null, section);
  }
  var div = section.querySelector("#".concat(ship.body.init.type));
  domUtil('img', {
    src: ship.icon,
    alt: "".concat(ship.body.init.type, " icon"),
    "class": 'icons-size'
  }, null, div);
};

/**
 * Render icon for cpu ships
 * @param {Node} section
 * @param {Object} ships
 */
var renderShipIconsRival = function renderShipIconsRival(section, ships) {
  for (var ship in ships) {
    ships[ship].forEach(function (ship) {
      renderShipIcons(section, ship);
    });
  }
};

/**
 * Render container and icons for cpu
 * @param {Node} main
 * @param {Object} ships
 */
var _renderShipsSummaryRival = function renderShipsSummaryRival(main, ships) {
  var shipsContainerRival = renderShipsRivalContainer(main);
  renderShipIconsRival(shipsContainerRival, ships.playerTwoShips);
};

/**
 * Remove icons and icon containers
 * @param {Node} parent
 */
var _removeShipsSummary = function removeShipsSummary(parent) {
  var elements = [parent.querySelector('#ships-player'), parent.querySelector('#ships-rival')];
  elements.forEach(function (element) {
    if (element) {
      element.remove();
    }
  });
};

/**
 * Render placement.
 * @param {Object} ships
 * @param {Object} gameboard
 * @returns
 */
var _renderPlacement = /*#__PURE__*/function () {
  var _ref = placementDOM_asyncToGenerator( /*#__PURE__*/placementDOM_regeneratorRuntime().mark(function _callee(ships, gameboard) {
    var events, body, iconContainer, tablePlayer, name, arrShips, _i, _arrShips, shipType, _iterator, _step, ship, validPlacement, btnRotate, coord, _coord, row, col;
    return placementDOM_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          events = dom_eventListeners();
          body = document.querySelector('#hook');
          iconContainer = body.querySelector('#body-main #ships-player');
          tablePlayer = body.querySelector('#body-main #board-player #board-player-table');
          name = body.querySelector('#body-main #player-one-name');
          _clearTxtContent(name);
          arrShips = Object.values(ships);
          events.mouseListener(tablePlayer, true);
          _i = 0, _arrShips = arrShips;
        case 9:
          if (!(_i < _arrShips.length)) {
            _context.next = 45;
            break;
          }
          shipType = _arrShips[_i];
          _iterator = _createForOfIteratorHelper(shipType);
          _context.prev = 12;
          _iterator.s();
        case 14:
          if ((_step = _iterator.n()).done) {
            _context.next = 34;
            break;
          }
          ship = _step.value;
          validPlacement = false;
          btnRotate = _renderBtnRotate(name);
          events.btnRotate(btnRotate, ship);
          events.setActiveShip(ship);
        case 20:
          if (validPlacement) {
            _context.next = 28;
            break;
          }
          _context.next = 23;
          return events.addClicks(body, true);
        case 23:
          coord = _context.sent;
          _coord = placementDOM_slicedToArray(coord, 2), row = _coord[0], col = _coord[1];
          validPlacement = gameboard.placeShip(gameboard.board, ship.body, parseInt(row), parseInt(col), ship.body.init.isHorizontal);
          _context.next = 20;
          break;
        case 28:
          renderPlayerShips(gameboard.board, tablePlayer);
          renderShipIcons(iconContainer, ship);
          removeBtn(btnRotate);
          events.clearActiveShip();
        case 32:
          _context.next = 14;
          break;
        case 34:
          _context.next = 39;
          break;
        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](12);
          _iterator.e(_context.t0);
        case 39:
          _context.prev = 39;
          _iterator.f();
          return _context.finish(39);
        case 42:
          _i++;
          _context.next = 9;
          break;
        case 45:
          events.mouseListener(tablePlayer, false);
          return _context.abrupt("return", gameboard);
        case 47:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[12, 36, 39, 42]]);
  }));
  return function renderPlacement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Export placementDOM methods
 */
var placementDOM = function placementDOM() {
  return {
    renderShipsSummaryRival: function renderShipsSummaryRival(main, ships) {
      return _renderShipsSummaryRival(main, ships);
    },
    renderShipsPlayerContainer: function renderShipsPlayerContainer(main) {
      return _renderShipsPlayerContainer(main);
    },
    renderPlacement: function () {
      var _renderPlacement2 = placementDOM_asyncToGenerator( /*#__PURE__*/placementDOM_regeneratorRuntime().mark(function _callee2(ships, gameboard) {
        return placementDOM_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _renderPlacement(ships, gameboard));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function renderPlacement(_x3, _x4) {
        return _renderPlacement2.apply(this, arguments);
      }
      return renderPlacement;
    }(),
    clearTxtContent: function clearTxtContent(element) {
      return _clearTxtContent(element);
    },
    renderBtnRotate: function renderBtnRotate(parent) {
      return _renderBtnRotate(parent);
    },
    removeShipsSummary: function removeShipsSummary(parent) {
      return _removeShipsSummary(parent);
    }
  };
};
/* harmony default export */ const dom_placementDOM = (placementDOM);
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
  var setPlayerName = function setPlayerName() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return getIsHuman() ? Object.assign(init, {
      name: "".concat(value)
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
  return {
    setIsHuman: setIsHuman,
    setPlayerName: setPlayerName,
    getPlayerName: getPlayerName,
    setPlayerTurn: setPlayerTurn
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
var gameBoard_getCoord = function getCoord(row, col, length, direction) {
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
  var _getCoord = gameBoard_getCoord(row, col, length - 1, direction),
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
    var _getCoord3 = gameBoard_getCoord(row, col, index, direction),
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
  return Object.assign({}, ship, {
    init: init
  });
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
  var ships = [];
  var addShipToShips = function addShipToShips(ship) {
    ships.push(ship);
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
      var _getCoord5 = gameBoard_getCoord(row, col, index, direction),
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
      if (board[rowShot][colShot] !== null) {
        hitShip(board, rowShot, colShot);
      }
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
    shots: shots,
    allShipSunked: allShipSunked
  };
};
/* harmony default export */ const gameBoard = (Gameboard);
;// CONCATENATED MODULE: ./src/components/game/init.js



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

;// CONCATENATED MODULE: ./src/components/ships.js
function ships_typeof(obj) { "@babel/helpers - typeof"; return ships_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ships_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return ships_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (ships_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ships_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var MIN_LENGTH = 2;
var MAX_LENGTH = 5;
/**
 * Check if the length is between 1 and 4.
 * @param {Number|false} input - length
 * @returns {Number|false} Length or false if is invalid.
 */
var validateShipLength = function validateShipLength(input) {
  return input > MAX_LENGTH || input < MIN_LENGTH ? false : input;
};

/**
 * Add an hit.
 * @param {Object} obj
 * @returns {Object} init hits updated.
 */
var addHit = function addHit(obj) {
  return _objectSpread(_objectSpread({}, obj), {}, {
    hits: obj.hits + 1
  });
};

/**
 * Set sunked property
 * @param {Object} obj
 * @returns {Object} init sunked updated.
 */
var setSunk = function setSunk(obj) {
  return _objectSpread(_objectSpread({}, obj), {}, {
    sunked: obj.len === obj.hits
  });
};
var Ship = function Ship(len, id) {
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

  /**
   * Hit the ship.
   * @param {Object} obj
   * @returns {Object} Update ship object
   */
  var hit = function hit() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    return util_pipe(addHit, setSunk)(obj);
  };

  /**
   * Get the length of ship init.
   * @param {Object} obj
   * @returns {Number} Ship length
   */
  var getLength = function getLength() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    return obj.len;
  };

  /**
   * Get sunked from ship init.
   * @param {Object} obj
   * @returns {Boolean} Ship sunked?
   */
  var isSunk = function isSunk() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    return obj.sunked;
  };
  var setDirection = function setDirection(value) {
    return init.isHorizontal = value;
  };
  var init = {
    id: id,
    len: setLength(),
    isHorizontal: true,
    type: len === 5 ? 'carrier' : len === 4 ? 'battleships' : len === 3 ? 'submarines' : 'destroyers',
    hits: 0,
    sunked: false
  };
  return {
    init: init,
    setDirection: setDirection,
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
;// CONCATENATED MODULE: ./src/components/game/placement.js






/**
 * Create ships
 * @param {Object} type - Type of ship
 * @returns An Object with ships
 */
var createShips = function createShips(type) {
  return Array.from({
    length: type.number
  }, function (_, i) {
    return {
      body: ships(type.size, type.id[i]),
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
    id: [0],
    icon: carrier_namespaceObject
  },
  battleships: {
    number: 2,
    size: 4,
    id: [1, 2],
    icon: battleship_namespaceObject
  },
  submarines: {
    number: 3,
    size: 3,
    id: [3, 4, 5],
    icon: submarine_namespaceObject
  },
  destroyers: {
    number: 4,
    size: 2,
    id: [6, 7, 8, 9],
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
var createPlayersShips = function createPlayersShips() {
  return {
    playerOneShips: createShipPlayers(),
    playerTwoShips: createShipPlayers()
  };
};

/**
 * Place randomly ship on opponent board.
 * @param {Object} ships
 * @param {Object} gameboard
 */
var placementRival = function placementRival(ships, gameboard) {
  var MAX_BOARD_SIZE = 10;
  Object.values(ships).forEach(function (typeOfShips) {
    return typeOfShips.forEach(function (ship) {
      var placed = false;
      while (!placed) {
        placed = gameboard.placeShip(gameboard.board, ship.body, Math.floor(Math.random() * MAX_BOARD_SIZE), Math.floor(Math.random() * MAX_BOARD_SIZE), Math.random() < 0.5);
      }
    });
  });
  return gameboard;
};

;// CONCATENATED MODULE: ./src/components/game/game.js
function game_typeof(obj) { "@babel/helpers - typeof"; return game_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, game_typeof(obj); }
function game_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ game_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == game_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function game_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function game_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { game_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { game_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function game_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function game_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? game_ownKeys(Object(source), !0).forEach(function (key) { game_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : game_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function game_defineProperty(obj, key, value) { key = game_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function game_toPropertyKey(arg) { var key = game_toPrimitive(arg, "string"); return game_typeof(key) === "symbol" ? key : String(key); }
function game_toPrimitive(input, hint) { if (game_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (game_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





// Initialize game.
var _init = function init() {
  var players = createNewPlayers();
  var gameboards = createNewGameboards();
  return game_objectSpread(game_objectSpread({}, players), gameboards);
};

// Place ships.
var _placement = /*#__PURE__*/function () {
  var _ref = game_asyncToGenerator( /*#__PURE__*/game_regeneratorRuntime().mark(function _callee(init) {
    var main, ships;
    return game_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          main = document.querySelector('#body-main');
          ships = createPlayersShips();
          dom_placementDOM().renderShipsPlayerContainer(main);
          _context.next = 5;
          return dom_placementDOM().renderPlacement(ships.playerOneShips, init.playerOneGameboard);
        case 5:
          placementRival(ships.playerTwoShips, init.playerTwoGameboard);
          dom_placementDOM().renderShipsSummaryRival(main, ships);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function placement(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Game Loop.
var gameLoop = /*#__PURE__*/function () {
  var _ref2 = game_asyncToGenerator( /*#__PURE__*/game_regeneratorRuntime().mark(function _callee2(data) {
    return game_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!data.playerOneGameboard.allShipSunked() && !data.playerTwoGameboard.allShipSunked())) {
            _context2.next = 9;
            break;
          }
          if (data.playerOneGameboard.allShipSunked()) {
            _context2.next = 4;
            break;
          }
          _context2.next = 4;
          return dom_updateDOM().renderPlayerAttack(data.playerTwoGameboard, true);
        case 4:
          if (data.playerTwoGameboard.allShipSunked()) {
            _context2.next = 7;
            break;
          }
          _context2.next = 7;
          return dom_updateDOM().renderPlayerAttack(data.playerOneGameboard, false);
        case 7:
          _context2.next = 0;
          break;
        case 9:
          dom_updateDOM().renderWinningState(data.playerTwoGameboard.allShipSunked());
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function gameLoop(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Export the game object
 */
var game = {
  init: function init() {
    return _init();
  },
  placement: function () {
    var _placement2 = game_asyncToGenerator( /*#__PURE__*/game_regeneratorRuntime().mark(function _callee3(init) {
      return game_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _placement(init));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function placement(_x3) {
      return _placement2.apply(this, arguments);
    }
    return placement;
  }(),
  playGame: function () {
    var _playGame = game_asyncToGenerator( /*#__PURE__*/game_regeneratorRuntime().mark(function _callee4(data) {
      return game_regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", gameLoop(data));
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    function playGame(_x4) {
      return _playGame.apply(this, arguments);
    }
    return playGame;
  }()
};
/* harmony default export */ const game_game = (game);
;// CONCATENATED MODULE: ./src/index.js




var hook = document.querySelector('#hook');
var initGame = game_game.init();
dom_DOM().render(hook, initGame);
dom_eventListeners().startBtn(hook);
/******/ })()
;