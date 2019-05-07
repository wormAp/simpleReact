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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/simple.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ReactClass.js":
/*!***************************!*\
  !*** ./src/ReactClass.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReactClass; });\n/**\r\n * @author chaohui jiang\r\n * @version:v1.1.0\r\n */\nclass ReactClass {\n    constructor(props) {\n        this.props = props;\n        this.state = null;\n    }\n    setState(stateChange) {\n        Object.assign(this.state, stateChange);\n        this._render(this);\n    }\n}\n\n//# sourceURL=webpack:///./src/ReactClass.js?");

/***/ }),

/***/ "./src/react.js":
/*!**********************!*\
  !*** ./src/react.js ***!
  \**********************/
/*! exports provided: React */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"React\", function() { return React; });\n/**\r\n * @author chaohui jiang\r\n * @version:v1.1.0\r\n */\nclass ReactElement {\n    constructor(type, props, children) {\n        this.type = type;\n        this.props = props;\n        this.children = children;\n    }\n}\nconst React = {\n    createElement: (type, props, ...children) => {\n        return new ReactElement(type, props, children);\n    }\n};\n\n//# sourceURL=webpack:///./src/react.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/**\r\n * @author chaohui jiang\r\n * @version:v1.1.0\r\n */\n\nfunction _render(vnodes) {\n    let dom;\n    if (_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isString(vnodes) || _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isNumber(vnodes)) {\n        dom = document.createTextNode(vnodes);\n    } else if (_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isString(vnodes.type)) {\n        dom = document.createElement(vnodes.type);\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setAttribute(dom, vnodes.props);\n    } else if (_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isFunction(vnodes.type)) {\n        var ins = new vnodes.type(vnodes.props);\n        ins._render = _renderComponent;\n        dom = _renderComponent(ins);\n    }\n    vnodes.children && vnodes.children.forEach(_vnodes => {\n        let temp = _render(_vnodes);\n        dom.appendChild(temp);\n    });\n    return dom;\n}\nfunction _renderComponent(ins) {\n    let isMount = true;\n    let parentNode = null;\n    if (!ins._renderElement) {\n        if (ins.componentWillMount) {\n            ins.componentWillMount();\n        }\n        isMount = true;\n    } else {\n        parentNode = ins._dom.parentNode;\n        parentNode.removeChild(ins._dom);\n        isMount = false;\n        if (ins._renderElement && ins.componentWillUpdate) {\n            ins.componentWillUpdate();\n        }\n    }\n    ins._renderElement = ins.render();\n    let dom = _render(ins._renderElement);\n    ins._dom = dom;\n    if (isMount) {\n        if (ins.componentDidMount) {\n            ins.componentDidMount();\n        }\n    } else {\n        parentNode.appendChild(ins._dom);\n        if (ins.componentDidUpdate) {\n            ins.componentDidUpdate();\n        }\n    }\n    return dom;\n}\nfunction render(vnodes, container) {\n    container.innerHTML = \"\";\n    let dom = _render(vnodes, container);\n    container.appendChild(dom);\n}\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/simple.js":
/*!***********************!*\
  !*** ./src/simple.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _ReactClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReactClass */ \"./src/ReactClass.js\");\n/**\r\n * @author chaohui jiang\r\n * @version:v1.1.0\r\n */\n\n\n\nclass MyTest extends _ReactClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    render() {\n        const { test } = this.props;\n        return _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n            \"div\",\n            null,\n            _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n                \"h1\",\n                null,\n                test\n            ),\n            \"this is MyTest\"\n        );\n    }\n}\nclass MyTest2 extends _ReactClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(props) {\n        super(props);\n        this.state = {\n            number: this.props.outNumber\n        };\n    }\n    handle() {\n        let preNumber = this.state.number + 1;\n        this.setState({\n            number: preNumber\n        });\n    }\n    componentWillMount() {\n        console.log(\"componentWillMount\");\n    }\n    componentDidMount() {\n        console.log(\"componentDidMount\");\n    }\n    componentWillUpdate() {\n        console.log(\"componentWillUpdate\");\n    }\n    componentDidUpdate() {\n        console.log(\"componentDidUpdate\");\n    }\n    render() {\n        console.log(\"render\");\n        return _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n            \"div\",\n            null,\n            _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n                \"button\",\n                { onClick: this.handle.bind(this) },\n                \"click me\"\n            ),\n            this.state.number,\n            \"this is MyTest2\"\n        );\n    }\n}\nObject(_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n    \"div\",\n    null,\n    _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n        \"div\",\n        { className: \"ttttt\" },\n        \"this is a test\"\n    ),\n    _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n        \"div\",\n        { style: { color: \"#ddd\" } },\n        \"this is a test2\"\n    ),\n    _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n        \"div\",\n        null,\n        \"this is a test3\"\n    ),\n    _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\n        \"div\",\n        null,\n        new Date().toLocaleTimeString()\n    ),\n    _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(MyTest, { test: \"哈哈我是一个标题\" }),\n    _react__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(MyTest2, { outNumber: 2, test: \"哈哈我是一个标题2\" })\n), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/simple.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @author chaohui jiang\r\n * @version:v1.1.0\r\n */\nconst utils = {\n    _getType(data) {\n        let temp = Object.prototype.toString.call(data);\n        return temp.substring(8, temp.length - 1).toLowerCase();\n    },\n    isNumber(data) {\n        return utils._getType(data) === \"number\";\n    },\n    isString(data) {\n        return utils._getType(data) === \"string\";\n    },\n    isFunction(data) {\n        return utils._getType(data) === \"function\";\n    },\n    setAttribute(dom, props) {\n        Object.keys(props || {}).forEach(key => {\n            if (props.hasOwnProperty(key)) {\n                let attributeKey = key;\n                if (key.toLowerCase() == \"style\") {\n                    dom.style.cssText = Object.keys(props[key]).map(_key => {\n                        return `${_key}:${props[key][_key]}`;\n                    }).join(\";\");\n                } else {\n                    if (key === \"className\") {\n                        attributeKey = \"class\";\n                    } else if (/on\\w+/.test(key)) {\n                        dom.addEventListener(key.toLowerCase().substring(2, key.length), props[key]);\n                    }\n                    dom.setAttribute(attributeKey, props[key]);\n                }\n            }\n        });\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });