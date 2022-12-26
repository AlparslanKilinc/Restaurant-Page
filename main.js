/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../GFS_Didot/GFSDidot-Regular.ttf */ "./GFS_Didot/GFSDidot-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: GFS_Didot;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  p{\r\n    margin: 0;\r\n  }\r\n  :root{\r\n    --font-Regular: GFS_Didot;\r\n    --black: #191414;\r\n    --green:#1DB954;\r\n    --gray: #f3f4f6;\r\n    --cherry: #990011ff;\r\n    \r\n}\r\nhtml,body{\r\n    height: 100%;\r\n    min-height: 100%;\r\n    margin: 0;\r\n    font-family: var(--font-Regular);\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n\r\n\r\nbody{\r\n    display: grid;\r\n    font-family: var(--font-Regular);\r\n}\r\n/* Header */ \r\n.name{\r\n    font-size: 52px;\r\n}\r\n.header{\r\n    display: flex;\r\n    max-height: 100%;\r\n    flex-direction: column;\r\n    gap: 0.6rem;\r\n    font-family: var(--font-Regular);\r\n    font-weight: bold;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    background-color: #e5e5f7;\r\n}\r\n /* Content */\r\n .home{\r\n    display: grid;\r\n    flex: 1;\r\n    grid-template-columns: 1fr 2fr 2fr 1fr ;\r\n    gap: 10px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    padding: 0.4rem;\r\n    gap: 0.2rem;\r\n    min-height: 100vh;\r\n }\r\n .menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    font-size: 28px;\r\n    padding: 1rem;\r\n    border: #191414 2px solid;\r\n    border-radius: 4px;\r\n    box-shadow: 3px 4px var(--black);\r\n    margin: 1rem;\r\n    font-family: var(--font-Regular);\r\n }\r\n\r\n h3:hover{\r\n    color: #1DB954;\r\n }\r\n\r\n img{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n }\r\n .icon{\r\n    max-width:48px;\r\n    max-height:42px;\r\n    object-Fit:cover;\r\n }\r\n\r\n\r\n\r\n \r\n/* All Buttons */ \r\nbutton{\r\n   font-family: var(--font-Regular);\r\n   margin-top: 1.5rem;\r\n   font-size: large;\r\n   width: 250px;\r\n   height: 40px;\r\n   border-radius: 2px;\r\n   background-color: transparent;\r\n}\r\n\r\nbutton:hover{\r\n   box-shadow: 3px 4px var(--black);\r\n   cursor:pointer;\r\n   color: #1DB954;\r\n}\r\nbutton:focus{\r\n    background-color: transparent;\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .name{\r\n        font-size: large;\r\n        margin-bottom: 2rem;\r\n    }\r\n    .header{\r\n      gap: 0;\r\n      justify-content: space-around;\r\n      font-size: x-small;\r\n      max-height: 100%;\r\n    }\r\n    .icon{\r\n        max-width: 24px;\r\n        max-height: 22px;\r\n    }\r\n    .home{\r\n        font-size: x-small;\r\n    }\r\n    .menuDiv{\r\n        font-size: xx-small;\r\n        gap: 0.5rem;\r\n    }\r\n    button{\r\n        width: 100%;\r\n        font-size: x-small;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAA2C;AAC/C;;;AAGA;IACI,sBAAsB;EACxB;EACA;IACE,SAAS;EACX;EACA;IACE,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,mBAAmB;;AAEvB;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,SAAS;IACT,gCAAgC;IAChC,8BAA8B;IAC9B,uBAAuB;AAC3B;;;AAGA;IACI,aAAa;IACb,gCAAgC;AACpC;AACA,WAAW;AACX;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,WAAW;IACX,gCAAgC;IAChC,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;AAC7B;CACC,YAAY;CACZ;IACG,aAAa;IACb,OAAO;IACP,uCAAuC;IACvC,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,iBAAiB;CACpB;CACA;IACG,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,gCAAgC;CACnC;;CAEA;IACG,cAAc;CACjB;;CAEA;IACG,WAAW;IACX,YAAY;IACZ,iBAAiB;CACpB;CACA;IACG,cAAc;IACd,eAAe;IACf,gBAAgB;CACnB;;;;;AAKD,gBAAgB;AAChB;GACG,gCAAgC;GAChC,kBAAkB;GAClB,gBAAgB;GAChB,YAAY;GACZ,YAAY;GACZ,kBAAkB;GAClB,6BAA6B;AAChC;;AAEA;GACG,gCAAgC;GAChC,cAAc;GACd,cAAc;AACjB;AACA;IACI,6BAA6B;AACjC;;AAEA;IACI;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;MACE,MAAM;MACN,6BAA6B;MAC7B,kBAAkB;MAClB,gBAAgB;IAClB;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,mBAAmB;QACnB,WAAW;IACf;IACA;QACI,WAAW;QACX,kBAAkB;IACtB;AACJ","sourcesContent":["@font-face {\r\n    font-family: GFS_Didot;\r\n    src: url(../GFS_Didot/GFSDidot-Regular.ttf);\r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  p{\r\n    margin: 0;\r\n  }\r\n  :root{\r\n    --font-Regular: GFS_Didot;\r\n    --black: #191414;\r\n    --green:#1DB954;\r\n    --gray: #f3f4f6;\r\n    --cherry: #990011ff;\r\n    \r\n}\r\nhtml,body{\r\n    height: 100%;\r\n    min-height: 100%;\r\n    margin: 0;\r\n    font-family: var(--font-Regular);\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n\r\n\r\nbody{\r\n    display: grid;\r\n    font-family: var(--font-Regular);\r\n}\r\n/* Header */ \r\n.name{\r\n    font-size: 52px;\r\n}\r\n.header{\r\n    display: flex;\r\n    max-height: 100%;\r\n    flex-direction: column;\r\n    gap: 0.6rem;\r\n    font-family: var(--font-Regular);\r\n    font-weight: bold;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    background-color: #e5e5f7;\r\n}\r\n /* Content */\r\n .home{\r\n    display: grid;\r\n    flex: 1;\r\n    grid-template-columns: 1fr 2fr 2fr 1fr ;\r\n    gap: 10px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    padding: 0.4rem;\r\n    gap: 0.2rem;\r\n    min-height: 100vh;\r\n }\r\n .menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    font-size: 28px;\r\n    padding: 1rem;\r\n    border: #191414 2px solid;\r\n    border-radius: 4px;\r\n    box-shadow: 3px 4px var(--black);\r\n    margin: 1rem;\r\n    font-family: var(--font-Regular);\r\n }\r\n\r\n h3:hover{\r\n    color: #1DB954;\r\n }\r\n\r\n img{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n }\r\n .icon{\r\n    max-width:48px;\r\n    max-height:42px;\r\n    object-Fit:cover;\r\n }\r\n\r\n\r\n\r\n \r\n/* All Buttons */ \r\nbutton{\r\n   font-family: var(--font-Regular);\r\n   margin-top: 1.5rem;\r\n   font-size: large;\r\n   width: 250px;\r\n   height: 40px;\r\n   border-radius: 2px;\r\n   background-color: transparent;\r\n}\r\n\r\nbutton:hover{\r\n   box-shadow: 3px 4px var(--black);\r\n   cursor:pointer;\r\n   color: #1DB954;\r\n}\r\nbutton:focus{\r\n    background-color: transparent;\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .name{\r\n        font-size: large;\r\n        margin-bottom: 2rem;\r\n    }\r\n    .header{\r\n      gap: 0;\r\n      justify-content: space-around;\r\n      font-size: x-small;\r\n      max-height: 100%;\r\n    }\r\n    .icon{\r\n        max-width: 24px;\r\n        max-height: 22px;\r\n    }\r\n    .home{\r\n        font-size: x-small;\r\n    }\r\n    .menuDiv{\r\n        font-size: xx-small;\r\n        gap: 0.5rem;\r\n    }\r\n    button{\r\n        width: 100%;\r\n        font-size: x-small;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });

const contact = (()=>{
    let contactPage = document.createElement('div');
    contactPage.innerHTML="CONTACT";

    return contactPage;
})



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Food_beans_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food/beans.jpg */ "./src/Food/beans.jpg");
/* harmony import */ var _Food_americano_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Food/americano.jpg */ "./src/Food/americano.jpg");
/* harmony import */ var _Food_espresso_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Food/espresso.jpg */ "./src/Food/espresso.jpg");
/* harmony import */ var _Food_latte_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Food/latte.jpg */ "./src/Food/latte.jpg");
/* harmony import */ var _Food_mocha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Food/mocha.jpg */ "./src/Food/mocha.jpg");
/* harmony import */ var _Food_tea_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Food/tea.jpg */ "./src/Food/tea.jpg");
/* harmony import */ var _Food_coffee_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Food/coffee.jpg */ "./src/Food/coffee.jpg");
/* harmony import */ var _Food_cup_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Food/cup.jpg */ "./src/Food/cup.jpg");
/* harmony import */ var _Food_machine_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Food/machine.jpg */ "./src/Food/machine.jpg");
/* harmony import */ var _Food_2cups_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Food/2cups.jpg */ "./src/Food/2cups.jpg");
/* harmony import */ var _Food_icon_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Food/icon.svg */ "./src/Food/icon.svg");















const home = (()=>{
    let home = document.createElement('div');
    home.className='home';

    let bean = document.createElement('img');
    bean.src=_Food_beans_jpg__WEBPACK_IMPORTED_MODULE_1__;
    /// style 
    bean.style.gridColumn='1';
    bean.style.gridRow='1/2';

    let cups = document.createElement('img');
    cups.src=_Food_2cups_jpg__WEBPACK_IMPORTED_MODULE_10__;
    /// style 
    cups.style.gridColumn='1/3';
    cups.style.gridRow='5/6';

    let americanoPic = document.createElement('img');
    americanoPic.src=_Food_americano_jpg__WEBPACK_IMPORTED_MODULE_2__;
    /// style 
    americanoPic.style.gridColumn='2';
    americanoPic.style.gridRow='1/2';


    let lattePic = document.createElement('img');
    lattePic.src=_Food_latte_jpg__WEBPACK_IMPORTED_MODULE_4__;
    /// style 
    lattePic.style.gridColumn='3';
    lattePic.style.gridRow='1/4';


    let coffeePic = document.createElement('img');
    coffeePic.src=_Food_coffee_jpg__WEBPACK_IMPORTED_MODULE_7__;
    /// style 
    coffeePic.style.gridColumn='4';
    coffeePic.style.gridRow='1/2';

    let cupPic = document.createElement('img');
    cupPic.src=_Food_cup_jpg__WEBPACK_IMPORTED_MODULE_8__;
    /// style 
    cupPic.style.gridColumn='4';
    cupPic.style.gridRow='2/4';



    /// Second Half
    let machinePic = document.createElement('img');
    machinePic.src=_Food_machine_jpg__WEBPACK_IMPORTED_MODULE_9__;
    /// style 
    machinePic.style.gridColumn='3/5';
    machinePic.style.gridRow='5/6';

   

    let mochaPic = document.createElement('img');
    mochaPic.src=_Food_mocha_jpg__WEBPACK_IMPORTED_MODULE_5__;
    /// style 
    mochaPic.style.gridColumn='2';
    mochaPic.style.gridRow='2/4';


    
    let teaPic = document.createElement('img');
    teaPic.src=_Food_tea_jpg__WEBPACK_IMPORTED_MODULE_6__;
    /// style 
    teaPic.style.gridColumn='1';
    teaPic.style.gridRow='2/4';

    let espressoPic = document.createElement('img');
    espressoPic.src=_Food_espresso_jpg__WEBPACK_IMPORTED_MODULE_3__;
    /// style 
    espressoPic.style.gridColumn='1/2';
    espressoPic.style.gridRow='4/5';


    /// Menu 
    let menuDiv = document.createElement('div');
    menuDiv.style.gridColumn='2/5';
    menuDiv.style.gridRow='4/5';
    menuDiv.className='menuDiv';
    
    let iconSVG= document.createElement('img');
    iconSVG.src=_Food_icon_svg__WEBPACK_IMPORTED_MODULE_11__;
    iconSVG.className='icon';

    let para = document.createElement('p');
    para.textContent="Whether you're searching for something new to warm your mug, seeking the best brew method for your favorite blend or exploring our rarest offerings, you’ve come to the right place.";

    menuDiv.appendChild(iconSVG);
    menuDiv.appendChild(para);



    home.appendChild(bean);
    home.appendChild(cups);
    home.appendChild(teaPic);
    home.appendChild(cupPic);
    home.appendChild(coffeePic);
    home.appendChild(machinePic);
    home.appendChild(lattePic);
    home.appendChild(americanoPic);
    home.appendChild(mochaPic);
    home.appendChild(espressoPic);
    home.appendChild(menuDiv);

    return home;
});




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });

const menu = (()=>{
    let menuPage = document.createElement('div');
    menuPage.innerHTML="MENU";

    return menuPage;
})



/***/ }),

/***/ "./GFS_Didot/GFSDidot-Regular.ttf":
/*!****************************************!*\
  !*** ./GFS_Didot/GFSDidot-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa2e986896f35e45a4d8.ttf";

/***/ }),

/***/ "./src/Food/2cups.jpg":
/*!****************************!*\
  !*** ./src/Food/2cups.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9a1448ea683af9448bd.jpg";

/***/ }),

/***/ "./src/Food/americano.jpg":
/*!********************************!*\
  !*** ./src/Food/americano.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c84fbb92f28febcd6e95.jpg";

/***/ }),

/***/ "./src/Food/beans.jpg":
/*!****************************!*\
  !*** ./src/Food/beans.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44539e73d67df0f4c757.jpg";

/***/ }),

/***/ "./src/Food/coffee.jpg":
/*!*****************************!*\
  !*** ./src/Food/coffee.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2663b5fff5e2d6fbf01f.jpg";

/***/ }),

/***/ "./src/Food/cup.jpg":
/*!**************************!*\
  !*** ./src/Food/cup.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b48058e7fa62d6d8599.jpg";

/***/ }),

/***/ "./src/Food/espresso.jpg":
/*!*******************************!*\
  !*** ./src/Food/espresso.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a877f3ce39506c0aaa.jpg";

/***/ }),

/***/ "./src/Food/icon.svg":
/*!***************************!*\
  !*** ./src/Food/icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4c8877fd95efcbe8d53.svg";

/***/ }),

/***/ "./src/Food/latte.jpg":
/*!****************************!*\
  !*** ./src/Food/latte.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "585ecf717faf9be53851.jpg";

/***/ }),

/***/ "./src/Food/machine.jpg":
/*!******************************!*\
  !*** ./src/Food/machine.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e2d52d1c3b51b275ecb.jpg";

/***/ }),

/***/ "./src/Food/mocha.jpg":
/*!****************************!*\
  !*** ./src/Food/mocha.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60862b32b3ad942b9eec.jpg";

/***/ }),

/***/ "./src/Food/tea.jpg":
/*!**************************!*\
  !*** ./src/Food/tea.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b011d1b36fc5cbeb45b8.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





/// Global Variable 
let page = (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();

const ButtonFactory = (name)=>{
    let Button = document.createElement('button');
    Button.textContent=name;
    Button.addEventListener('click',()=>{
        if(name==="CONTACT")page=(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();
        else if(name==="MENU")page=(0,_menu__WEBPACK_IMPORTED_MODULE_3__.menu)();
        else page=(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();
        render(header,page);
    });
    return Button;
}

const header = (()=>{
    let header = document.createElement('div');
    header.className="header";

    let Name = document.createElement('h1');
    Name.className='name';
    Name.textContent="Alpey's";

    let address = document.createElement('p');
    address.textContent="345 Midland St,";
    address.style.fontStyle='italic';
    let address2 = document.createElement('p');
    address2.textContent="NEW YORK, NY 10019";
    address2.style.fontStyle='italic';
    let phone = document.createElement('p');
    phone.textContent="631-943-9856";
    phone.style.fontStyle='italic';

    let giftCards = document.createElement('h3');
    giftCards.textContent="GIFTS CARDS";

    let ourStory = document.createElement('h3');
    ourStory.textContent="OUR STORY";

    let Hours = document.createElement('h3');
    Hours.textContent="HOURS & LOCATION ";

    let community = document.createElement('h3');
    community.textContent="COMMUNITY";

    let join = document.createElement('h3');
    join.textContent="JOIN OUR TEAM";

    let reserve = document.createElement('h3');
    reserve.textContent="RESERVE";

    let email = document.createElement('h3');
    email.textContent="EMAIL SIGNUP";

    

    let menuButton = ButtonFactory("MENU");
    let contactButton = ButtonFactory("CONTACT");
    let homeButton = ButtonFactory("HOME");

   
    header.appendChild(Name);
    header.appendChild(address);
    header.appendChild(address2);
    header.appendChild(phone);
    header.appendChild(homeButton);
    header.appendChild(giftCards);
    header.appendChild(ourStory);
    header.appendChild(Hours);
    header.appendChild(menuButton);
    header.appendChild(community);
    header.appendChild(join);
    header.appendChild(reserve);
    header.appendChild(email);
    header.appendChild(contactButton);
    
    return header;
})();

const render = ((header,page)=>{
    document.body.innerHTML="";
    document.body.appendChild(header);
    document.body.appendChild(page);
});

render(header,page);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ087QUFDTTtBQUNOO0FBQzVCO0FBQ0E7QUFDQSxXQUFXLDJDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpREFBTztBQUN4QyxtQ0FBbUMsMkNBQUk7QUFDdkMsa0JBQWtCLDJDQUFJO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9HRlNfRGlkb3QvR0ZTRGlkb3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdGU19EaWRvdDtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIHB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIDpyb290e1xcclxcbiAgICAtLWZvbnQtUmVndWxhcjogR0ZTX0RpZG90O1xcclxcbiAgICAtLWJsYWNrOiAjMTkxNDE0O1xcclxcbiAgICAtLWdyZWVuOiMxREI5NTQ7XFxyXFxuICAgIC0tZ3JheTogI2YzZjRmNjtcXHJcXG4gICAgLS1jaGVycnk6ICM5OTAwMTFmZjtcXHJcXG4gICAgXFxyXFxufVxcclxcbmh0bWwsYm9keXtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LVJlZ3VsYXIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1SZWd1bGFyKTtcXHJcXG59XFxyXFxuLyogSGVhZGVyICovIFxcclxcbi5uYW1le1xcclxcbiAgICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1SZWd1bGFyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVmNztcXHJcXG59XFxyXFxuIC8qIENvbnRlbnQgKi9cXHJcXG4gLmhvbWV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnIgMWZyIDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiB9XFxyXFxuIC5tZW51RGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6ICMxOTE0MTQgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCA0cHggdmFyKC0tYmxhY2spO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LVJlZ3VsYXIpO1xcclxcbiB9XFxyXFxuXFxyXFxuIGgzOmhvdmVye1xcclxcbiAgICBjb2xvcjogIzFEQjk1NDtcXHJcXG4gfVxcclxcblxcclxcbiBpbWd7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiB9XFxyXFxuIC5pY29ue1xcclxcbiAgICBtYXgtd2lkdGg6NDhweDtcXHJcXG4gICAgbWF4LWhlaWdodDo0MnB4O1xcclxcbiAgICBvYmplY3QtRml0OmNvdmVyO1xcclxcbiB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuIFxcclxcbi8qIEFsbCBCdXR0b25zICovIFxcclxcbmJ1dHRvbntcXHJcXG4gICBmb250LWZhbWlseTogdmFyKC0tZm9udC1SZWd1bGFyKTtcXHJcXG4gICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICB3aWR0aDogMjUwcHg7XFxyXFxuICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVye1xcclxcbiAgIGJveC1zaGFkb3c6IDNweCA0cHggdmFyKC0tYmxhY2spO1xcclxcbiAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgIGNvbG9yOiAjMURCOTU0O1xcclxcbn1cXHJcXG5idXR0b246Zm9jdXN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xcclxcbiAgICAubmFtZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXJ7XFxyXFxuICAgICAgZ2FwOiAwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5pY29ue1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMjJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudURpdntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxuICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b257XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUEyQztBQUMvQzs7O0FBR0E7SUFDSSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFDQSxXQUFXO0FBQ1g7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtDQUNDLFlBQVk7Q0FDWjtJQUNHLGFBQWE7SUFDYixPQUFPO0lBQ1AsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCO0NBQ0E7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixnQ0FBZ0M7Q0FDbkM7O0NBRUE7SUFDRyxjQUFjO0NBQ2pCOztDQUVBO0lBQ0csV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7Q0FDQTtJQUNHLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COzs7OztBQUtELGdCQUFnQjtBQUNoQjtHQUNHLGdDQUFnQztHQUNoQyxrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLFlBQVk7R0FDWixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLDZCQUE2QjtBQUNoQzs7QUFFQTtHQUNHLGdDQUFnQztHQUNoQyxjQUFjO0dBQ2QsY0FBYztBQUNqQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7TUFDRSxNQUFNO01BQ04sNkJBQTZCO01BQzdCLGtCQUFrQjtNQUNsQixnQkFBZ0I7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogR0ZTX0RpZG90O1xcclxcbiAgICBzcmM6IHVybCguLi9HRlNfRGlkb3QvR0ZTRGlkb3QtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIHB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIDpyb290e1xcclxcbiAgICAtLWZvbnQtUmVndWxhcjogR0ZTX0RpZG90O1xcclxcbiAgICAtLWJsYWNrOiAjMTkxNDE0O1xcclxcbiAgICAtLWdyZWVuOiMxREI5NTQ7XFxyXFxuICAgIC0tZ3JheTogI2YzZjRmNjtcXHJcXG4gICAgLS1jaGVycnk6ICM5OTAwMTFmZjtcXHJcXG4gICAgXFxyXFxufVxcclxcbmh0bWwsYm9keXtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LVJlZ3VsYXIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1SZWd1bGFyKTtcXHJcXG59XFxyXFxuLyogSGVhZGVyICovIFxcclxcbi5uYW1le1xcclxcbiAgICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1SZWd1bGFyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVmNztcXHJcXG59XFxyXFxuIC8qIENvbnRlbnQgKi9cXHJcXG4gLmhvbWV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnIgMWZyIDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiB9XFxyXFxuIC5tZW51RGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6ICMxOTE0MTQgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCA0cHggdmFyKC0tYmxhY2spO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LVJlZ3VsYXIpO1xcclxcbiB9XFxyXFxuXFxyXFxuIGgzOmhvdmVye1xcclxcbiAgICBjb2xvcjogIzFEQjk1NDtcXHJcXG4gfVxcclxcblxcclxcbiBpbWd7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiB9XFxyXFxuIC5pY29ue1xcclxcbiAgICBtYXgtd2lkdGg6NDhweDtcXHJcXG4gICAgbWF4LWhlaWdodDo0MnB4O1xcclxcbiAgICBvYmplY3QtRml0OmNvdmVyO1xcclxcbiB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuIFxcclxcbi8qIEFsbCBCdXR0b25zICovIFxcclxcbmJ1dHRvbntcXHJcXG4gICBmb250LWZhbWlseTogdmFyKC0tZm9udC1SZWd1bGFyKTtcXHJcXG4gICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICB3aWR0aDogMjUwcHg7XFxyXFxuICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVye1xcclxcbiAgIGJveC1zaGFkb3c6IDNweCA0cHggdmFyKC0tYmxhY2spO1xcclxcbiAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgIGNvbG9yOiAjMURCOTU0O1xcclxcbn1cXHJcXG5idXR0b246Zm9jdXN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xcclxcbiAgICAubmFtZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXJ7XFxyXFxuICAgICAgZ2FwOiAwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5pY29ue1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMjJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudURpdntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxyXFxuICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b257XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmNvbnN0IGNvbnRhY3QgPSAoKCk9PntcclxuICAgIGxldCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdFBhZ2UuaW5uZXJIVE1MPVwiQ09OVEFDVFwiO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0UGFnZTtcclxufSlcclxuXHJcbmV4cG9ydCB7Y29udGFjdH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBiZWFucyBmcm9tICcuL0Zvb2QvYmVhbnMuanBnJztcclxuaW1wb3J0IGFtZXJpY2FubyBmcm9tICcuL0Zvb2QvYW1lcmljYW5vLmpwZyc7XHJcbmltcG9ydCBlc3ByZXNzbyBmcm9tICcuL0Zvb2QvZXNwcmVzc28uanBnJztcclxuaW1wb3J0IGxhdHRlIGZyb20gJy4vRm9vZC9sYXR0ZS5qcGcnO1xyXG5pbXBvcnQgbW9jaGEgZnJvbSAnLi9Gb29kL21vY2hhLmpwZyc7XHJcbmltcG9ydCB0ZWEgZnJvbSAnLi9Gb29kL3RlYS5qcGcnO1xyXG5pbXBvcnQgY29mZmVlIGZyb20gJy4vRm9vZC9jb2ZmZWUuanBnJztcclxuaW1wb3J0IGN1cCBmcm9tICcuL0Zvb2QvY3VwLmpwZyc7XHJcbmltcG9ydCBtYWNoaW5lIGZyb20gJy4vRm9vZC9tYWNoaW5lLmpwZyc7XHJcbmltcG9ydCB0d29DdXBzIGZyb20gJy4vRm9vZC8yY3Vwcy5qcGcnO1xyXG5pbXBvcnQgaWNvbiBmcm9tICcuL0Zvb2QvaWNvbi5zdmcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBob21lID0gKCgpPT57XHJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZS5jbGFzc05hbWU9J2hvbWUnO1xyXG5cclxuICAgIGxldCBiZWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBiZWFuLnNyYz1iZWFucztcclxuICAgIC8vLyBzdHlsZSBcclxuICAgIGJlYW4uc3R5bGUuZ3JpZENvbHVtbj0nMSc7XHJcbiAgICBiZWFuLnN0eWxlLmdyaWRSb3c9JzEvMic7XHJcblxyXG4gICAgbGV0IGN1cHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGN1cHMuc3JjPXR3b0N1cHM7XHJcbiAgICAvLy8gc3R5bGUgXHJcbiAgICBjdXBzLnN0eWxlLmdyaWRDb2x1bW49JzEvMyc7XHJcbiAgICBjdXBzLnN0eWxlLmdyaWRSb3c9JzUvNic7XHJcblxyXG4gICAgbGV0IGFtZXJpY2Fub1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYW1lcmljYW5vUGljLnNyYz1hbWVyaWNhbm87XHJcbiAgICAvLy8gc3R5bGUgXHJcbiAgICBhbWVyaWNhbm9QaWMuc3R5bGUuZ3JpZENvbHVtbj0nMic7XHJcbiAgICBhbWVyaWNhbm9QaWMuc3R5bGUuZ3JpZFJvdz0nMS8yJztcclxuXHJcblxyXG4gICAgbGV0IGxhdHRlUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsYXR0ZVBpYy5zcmM9bGF0dGU7XHJcbiAgICAvLy8gc3R5bGUgXHJcbiAgICBsYXR0ZVBpYy5zdHlsZS5ncmlkQ29sdW1uPSczJztcclxuICAgIGxhdHRlUGljLnN0eWxlLmdyaWRSb3c9JzEvNCc7XHJcblxyXG5cclxuICAgIGxldCBjb2ZmZWVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvZmZlZVBpYy5zcmM9Y29mZmVlO1xyXG4gICAgLy8vIHN0eWxlIFxyXG4gICAgY29mZmVlUGljLnN0eWxlLmdyaWRDb2x1bW49JzQnO1xyXG4gICAgY29mZmVlUGljLnN0eWxlLmdyaWRSb3c9JzEvMic7XHJcblxyXG4gICAgbGV0IGN1cFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY3VwUGljLnNyYz1jdXA7XHJcbiAgICAvLy8gc3R5bGUgXHJcbiAgICBjdXBQaWMuc3R5bGUuZ3JpZENvbHVtbj0nNCc7XHJcbiAgICBjdXBQaWMuc3R5bGUuZ3JpZFJvdz0nMi80JztcclxuXHJcblxyXG5cclxuICAgIC8vLyBTZWNvbmQgSGFsZlxyXG4gICAgbGV0IG1hY2hpbmVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG1hY2hpbmVQaWMuc3JjPW1hY2hpbmU7XHJcbiAgICAvLy8gc3R5bGUgXHJcbiAgICBtYWNoaW5lUGljLnN0eWxlLmdyaWRDb2x1bW49JzMvNSc7XHJcbiAgICBtYWNoaW5lUGljLnN0eWxlLmdyaWRSb3c9JzUvNic7XHJcblxyXG4gICBcclxuXHJcbiAgICBsZXQgbW9jaGFQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG1vY2hhUGljLnNyYz1tb2NoYTtcclxuICAgIC8vLyBzdHlsZSBcclxuICAgIG1vY2hhUGljLnN0eWxlLmdyaWRDb2x1bW49JzInO1xyXG4gICAgbW9jaGFQaWMuc3R5bGUuZ3JpZFJvdz0nMi80JztcclxuXHJcblxyXG4gICAgXHJcbiAgICBsZXQgdGVhUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0ZWFQaWMuc3JjPXRlYTtcclxuICAgIC8vLyBzdHlsZSBcclxuICAgIHRlYVBpYy5zdHlsZS5ncmlkQ29sdW1uPScxJztcclxuICAgIHRlYVBpYy5zdHlsZS5ncmlkUm93PScyLzQnO1xyXG5cclxuICAgIGxldCBlc3ByZXNzb1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZXNwcmVzc29QaWMuc3JjPWVzcHJlc3NvO1xyXG4gICAgLy8vIHN0eWxlIFxyXG4gICAgZXNwcmVzc29QaWMuc3R5bGUuZ3JpZENvbHVtbj0nMS8yJztcclxuICAgIGVzcHJlc3NvUGljLnN0eWxlLmdyaWRSb3c9JzQvNSc7XHJcblxyXG5cclxuICAgIC8vLyBNZW51IFxyXG4gICAgbGV0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuc3R5bGUuZ3JpZENvbHVtbj0nMi81JztcclxuICAgIG1lbnVEaXYuc3R5bGUuZ3JpZFJvdz0nNC81JztcclxuICAgIG1lbnVEaXYuY2xhc3NOYW1lPSdtZW51RGl2JztcclxuICAgIFxyXG4gICAgbGV0IGljb25TVkc9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaWNvblNWRy5zcmM9aWNvbjtcclxuICAgIGljb25TVkcuY2xhc3NOYW1lPSdpY29uJztcclxuXHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmEudGV4dENvbnRlbnQ9XCJXaGV0aGVyIHlvdSdyZSBzZWFyY2hpbmcgZm9yIHNvbWV0aGluZyBuZXcgdG8gd2FybSB5b3VyIG11Zywgc2Vla2luZyB0aGUgYmVzdCBicmV3IG1ldGhvZCBmb3IgeW91ciBmYXZvcml0ZSBibGVuZCBvciBleHBsb3Jpbmcgb3VyIHJhcmVzdCBvZmZlcmluZ3MsIHlvdeKAmXZlIGNvbWUgdG8gdGhlIHJpZ2h0IHBsYWNlLlwiO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoaWNvblNWRyk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHBhcmEpO1xyXG5cclxuXHJcblxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChiZWFuKTtcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3Vwcyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKHRlYVBpYyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGN1cFBpYyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGNvZmZlZVBpYyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKG1hY2hpbmVQaWMpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChsYXR0ZVBpYyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGFtZXJpY2Fub1BpYyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKG1vY2hhUGljKTtcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZXNwcmVzc29QaWMpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuXHJcbiAgICByZXR1cm4gaG9tZTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IHtob21lfTsiLCJcclxuY29uc3QgbWVudSA9ICgoKT0+e1xyXG4gICAgbGV0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51UGFnZS5pbm5lckhUTUw9XCJNRU5VXCI7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVQYWdlO1xyXG59KVxyXG5cclxuZXhwb3J0IHttZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7aG9tZX0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHtjb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xyXG5pbXBvcnQge21lbnV9IGZyb20gJy4vbWVudSc7XHJcblxyXG4vLy8gR2xvYmFsIFZhcmlhYmxlIFxyXG5sZXQgcGFnZSA9IGhvbWUoKTtcclxuXHJcbmNvbnN0IEJ1dHRvbkZhY3RvcnkgPSAobmFtZSk9PntcclxuICAgIGxldCBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIEJ1dHRvbi50ZXh0Q29udGVudD1uYW1lO1xyXG4gICAgQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGlmKG5hbWU9PT1cIkNPTlRBQ1RcIilwYWdlPWNvbnRhY3QoKTtcclxuICAgICAgICBlbHNlIGlmKG5hbWU9PT1cIk1FTlVcIilwYWdlPW1lbnUoKTtcclxuICAgICAgICBlbHNlIHBhZ2U9aG9tZSgpO1xyXG4gICAgICAgIHJlbmRlcihoZWFkZXIscGFnZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBCdXR0b247XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRlciA9ICgoKT0+e1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZT1cImhlYWRlclwiO1xyXG5cclxuICAgIGxldCBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIE5hbWUuY2xhc3NOYW1lPSduYW1lJztcclxuICAgIE5hbWUudGV4dENvbnRlbnQ9XCJBbHBleSdzXCI7XHJcblxyXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzLnRleHRDb250ZW50PVwiMzQ1IE1pZGxhbmQgU3QsXCI7XHJcbiAgICBhZGRyZXNzLnN0eWxlLmZvbnRTdHlsZT0naXRhbGljJztcclxuICAgIGxldCBhZGRyZXNzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFkZHJlc3MyLnRleHRDb250ZW50PVwiTkVXIFlPUkssIE5ZIDEwMDE5XCI7XHJcbiAgICBhZGRyZXNzMi5zdHlsZS5mb250U3R5bGU9J2l0YWxpYyc7XHJcbiAgICBsZXQgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwaG9uZS50ZXh0Q29udGVudD1cIjYzMS05NDMtOTg1NlwiO1xyXG4gICAgcGhvbmUuc3R5bGUuZm9udFN0eWxlPSdpdGFsaWMnO1xyXG5cclxuICAgIGxldCBnaWZ0Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZ2lmdENhcmRzLnRleHRDb250ZW50PVwiR0lGVFMgQ0FSRFNcIjtcclxuXHJcbiAgICBsZXQgb3VyU3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgb3VyU3RvcnkudGV4dENvbnRlbnQ9XCJPVVIgU1RPUllcIjtcclxuXHJcbiAgICBsZXQgSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgSG91cnMudGV4dENvbnRlbnQ9XCJIT1VSUyAmIExPQ0FUSU9OIFwiO1xyXG5cclxuICAgIGxldCBjb21tdW5pdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29tbXVuaXR5LnRleHRDb250ZW50PVwiQ09NTVVOSVRZXCI7XHJcblxyXG4gICAgbGV0IGpvaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgam9pbi50ZXh0Q29udGVudD1cIkpPSU4gT1VSIFRFQU1cIjtcclxuXHJcbiAgICBsZXQgcmVzZXJ2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICByZXNlcnZlLnRleHRDb250ZW50PVwiUkVTRVJWRVwiO1xyXG5cclxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBlbWFpbC50ZXh0Q29udGVudD1cIkVNQUlMIFNJR05VUFwiO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGxldCBtZW51QnV0dG9uID0gQnV0dG9uRmFjdG9yeShcIk1FTlVcIik7XHJcbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IEJ1dHRvbkZhY3RvcnkoXCJDT05UQUNUXCIpO1xyXG4gICAgbGV0IGhvbWVCdXR0b24gPSBCdXR0b25GYWN0b3J5KFwiSE9NRVwiKTtcclxuXHJcbiAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKE5hbWUpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFkZHJlc3MyKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwaG9uZSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2lmdENhcmRzKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChvdXJTdG9yeSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoSG91cnMpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbW11bml0eSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoam9pbik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzZXJ2ZSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59KSgpO1xyXG5cclxuY29uc3QgcmVuZGVyID0gKChoZWFkZXIscGFnZSk9PntcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xyXG59KTtcclxuXHJcbnJlbmRlcihoZWFkZXIscGFnZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9