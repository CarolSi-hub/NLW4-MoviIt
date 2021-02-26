module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contexts/LoginContext.tsx":
/*!***************************************!*\
  !*** ./src/contexts/LoginContext.tsx ***!
  \***************************************/
/*! exports provided: LoginContext, LoginProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginContext\", function() { return LoginContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginProvider\", function() { return LoginProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/LoginContext.tsx\";\n\nconst LoginContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction LoginProvider({\n  children\n}) {\n  const {\n    0: userName,\n    1: setUserName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const getLocalStorage = () => {\n      if (false) {}\n    };\n\n    getLocalStorage();\n  }, []);\n\n  function setLocalStorage() {\n    if (false) {}\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoginContext.Provider, {\n    value: {\n      userName,\n      setUserName,\n      setLocalStorage\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvTG9naW5Db250ZXh0LnRzeD9hNmIwIl0sIm5hbWVzIjpbIkxvZ2luQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dpblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRMb2NhbFN0b3JhZ2UiLCJzZXRMb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBWU8sTUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQWxDO0FBR0EsU0FBU0MsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQXdEO0FBRTdELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCLGlCQUFtQyxFQUtsQztBQUNGLEtBUEQ7O0FBUUFBLG1CQUFlO0FBQ2hCLEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBY0EsV0FBU0MsZUFBVCxHQUEyQjtBQUN6QixlQUFtQyxFQUVsQztBQUNGOztBQUVELHNCQUNFLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUM1QkwsY0FENEI7QUFFNUJDLGlCQUY0QjtBQUc1Qkk7QUFINEIsS0FBOUI7QUFBQSxjQUtHTjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBMb2dpbkNvbnRleHRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBMb2dpbkNvbnRleHREYXRhIHtcbiAgdXNlck5hbWU6IHN0cmluZywgXG4gIHNldFVzZXJOYW1lOiAoZGlzcGF0Y2gpID0+IHZvaWQsIFxuICBzZXRMb2NhbFN0b3JhZ2U6ICgpID0+IHZvaWQsXG59XG5cbmV4cG9ydCBjb25zdCBMb2dpbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIExvZ2luQ29udGV4dERhdGEpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblByb3ZpZGVyKHsgY2hpbGRyZW4gfTogTG9naW5Db250ZXh0UHJvcHMpIHtcblxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSk7XG4gICAgICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCl7XG4gICAgICAgICAgc2V0VXNlck5hbWUodXNlckRhdGEudXNlck5hbWUpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cbiAgICB9ICAgXG4gICAgZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIH0sIFtdKVxuXG4gXG5cbiAgZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkoeyB1c2VyTmFtZTogdXNlck5hbWUgfSkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxMb2dpbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgIHVzZXJOYW1lLFxuICAgICAgc2V0VXNlck5hbWUsXG4gICAgICBzZXRMb2NhbFN0b3JhZ2UsXG4gICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Mb2dpbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/LoginContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Global.css */ \"./src/styles/Global.css\");\n/* harmony import */ var _styles_Global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LoginContext */ \"./src/contexts/LoginContext.tsx\");\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_2__[\"LoginProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdEQsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL0dsb2JhbC5jc3MnXG5pbXBvcnQgeyBMb2dpblByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvTG9naW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7IFxuICByZXR1cm4gKFxuICAgIDxMb2dpblByb3ZpZGVyPiAgICAgXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+ICAgICAgXG4gICAgPC9Mb2dpblByb3ZpZGVyPlxuICApICBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/Global.css":
/*!*******************************!*\
  !*** ./src/styles/Global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvR2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/Global.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });