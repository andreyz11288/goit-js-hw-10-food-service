/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"// extracted by mini-css-extract-plugin\\nexport {};\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/images/icon-close.svg":
/*!***********************************!*\
  !*** ./src/images/icon-close.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\\\" fill=\\\"#fff\\\"></path><path d=\\\"M0 0h24v24H0z\\\" fill=\\\"none\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/images/icon-close.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isOpen\", function() { return isOpen; });\n/* harmony import */ var _images_icon_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon-close.svg */ \"./src/images/icon-close.svg\");\n/* harmony import */ var _images_icon_close_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_icon_close_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gallery-items.js */ \"./src/js/gallery-items.js\");\n/* harmony import */ var _js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/querySelector.js */ \"./src/js/querySelector.js\");\n\n\n\n // const ulRef = document.querySelector('.js-gallery');\n// const divEl = document.querySelector('.js-lightbox');\n// const btnEl = document.querySelector('button[data-action =\"close-lightbox\"]');\n// const divModalEl = document.querySelector('.lightbox__content');\n// const overEl = document.querySelector('.lightbox__overlay');\n\nvar newStringEl = _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reduce(function (acc, _ref) {\n  var preview = _ref.preview,\n      description = _ref.description,\n      original = _ref.original;\n  return acc += \"<li class=\\\"gallery__item\\\">\\n  <a class=\\\"gallery__link\\\" href=\\\"\".concat(original, \"\\\" >\\n  <img class=\\\"gallery__image\\\"\\n  src=\\\"\").concat(preview, \"\\\"\\n  alt=\\\"\").concat(description, \"\\\"\\n  />\\n  </a>\\n  </li>\");\n}, '');\n_js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"ulRef\"].innerHTML = newStringEl;\nvar imgEl = document.querySelector('.gallery__image');\n_js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"ulRef\"].addEventListener('click', e);\nvar element;\n\nfunction e(eve) {\n  eve.preventDefault();\n\n  if (eve.target.className !== imgEl.className) {\n    return;\n  }\n\n  var bigImgEl = eve.target.alt;\n\n  for (var i = 0; i < _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length; i++) {\n    if (_js_gallery_items_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][i].description === bigImgEl) {\n      element = _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][i].original;\n    }\n  }\n\n  _js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"divEl\"].classList.add('is-open');\n  _js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"divModalEl\"].innerHTML = \"<img class=\\\"lightbox__image\\\"\\n    src=\\\"\".concat(element, \"\\\"\\n    alt=\\\"\").concat(bigImgEl, \"\\\"\\n  />\");\n}\n\n_js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"btnEl\"].addEventListener('click', function () {\n  _js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"divEl\"].classList.remove('is-open');\n}); // Очистка пути после закрытия модалки//\n\nfunction isOpen() {\n  var divCloseModal = document.querySelector('.lightbox__image');\n  _js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"divEl\"].classList.remove('is-open');\n  divCloseModal.alt = '';\n  divCloseModal.src = '';\n}\n // const closeModalEl = document.querySelector('[data-action=\"close-lightbox\"]');\n\n_js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"closeModalEl\"].addEventListener('click', isOpen);\n_js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"overEl\"].addEventListener('click', isOpen); // Управление кнопками //\n\ndocument.addEventListener('keydown', function (eve) {\n  var divCloseModal = document.querySelector('.lightbox__image'); // Кнопка Esc //\n\n  if (eve.code === 'Escape') {\n    isOpen();\n  }\n\n  if (_js_querySelector_js__WEBPACK_IMPORTED_MODULE_3__[\"divEl\"].className.includes('is-open')) {\n    var mapDefEl = _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (value) {\n      return value.original;\n    });\n    var indElNum = Number(mapDefEl.indexOf(divCloseModal.src)); // Кнопка влево, вверх //\n\n    var mapDelLight = Number(mapDefEl.length) - 1;\n\n    if (eve.code === 'ArrowLeft' || eve.code === 'ArrowUp') {\n      if (eve.target.className === imgEl.className) {\n        return;\n      }\n\n      var indLeftEl = indElNum - 1;\n      divCloseModal.src = mapDefEl[indLeftEl];\n\n      if (indElNum === 0) {\n        divCloseModal.src = mapDefEl[mapDelLight];\n      }\n    } // Кнопка вправо, вниз //\n\n\n    if (eve.code === 'ArrowRight' || eve.code === 'ArrowDown' || eve.code === 'Space') {\n      if (eve.target.className === imgEl.className) {\n        return;\n      }\n\n      var indEl = indElNum + 1;\n      divCloseModal.src = mapDefEl[indEl];\n\n      if (indEl === mapDefEl.length) {\n        divCloseModal.src = mapDefEl[0];\n      }\n    }\n  }\n}); // import  keysRef  from './js/key.js'\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/gallery-items.js":
/*!*********************************!*\
  !*** ./src/js/gallery-items.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  preview: \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg\",\n  description: \"Hokkaido Flower\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg\",\n  description: \"Container Haulage Freight\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg\",\n  description: \"Aerial Beach View\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg\",\n  description: \"Flower Blooms\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg\",\n  description: \"Alpine Mountains\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg\",\n  description: \"Mountain Lake Sailing\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg\",\n  description: \"Alpine Spring Meadows\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg\",\n  description: \"Nature Landscape\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg\",\n  description: \"Lighthouse Coast Sea\"\n}]);\n\n//# sourceURL=webpack:///./src/js/gallery-items.js?");

/***/ }),

/***/ "./src/js/querySelector.js":
/*!*********************************!*\
  !*** ./src/js/querySelector.js ***!
  \*********************************/
/*! exports provided: ulRef, divEl, btnEl, divModalEl, overEl, imgEl, closeModalEl, divCloseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ulRef\", function() { return ulRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divEl\", function() { return divEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnEl\", function() { return btnEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divModalEl\", function() { return divModalEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"overEl\", function() { return overEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imgEl\", function() { return imgEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModalEl\", function() { return closeModalEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divCloseModal\", function() { return divCloseModal; });\nvar ulRef = document.querySelector('.js-gallery');\nvar divEl = document.querySelector('.js-lightbox');\nvar btnEl = document.querySelector('button[data-action =\"close-lightbox\"]');\nvar divModalEl = document.querySelector('.lightbox__content');\nvar overEl = document.querySelector('.lightbox__overlay');\nvar imgEl = document.querySelector('.gallery__image');\nvar closeModalEl = document.querySelector('[data-action=\"close-lightbox\"]');\nvar divCloseModal = document.querySelector('.lightbox__image');\n\n//# sourceURL=webpack:///./src/js/querySelector.js?");

/***/ })

/******/ });