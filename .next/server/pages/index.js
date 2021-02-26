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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/LoginForm.tsx":
/*!**************************************!*\
  !*** ./src/components/LoginForm.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LoginContext */ \"./src/contexts/LoginContext.tsx\");\n/* harmony import */ var _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LoginForm.module.css */ \"./src/styles/components/LoginForm.module.css\");\n/* harmony import */ var _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/components/LoginForm.tsx\";\n\n\n\nfunction Login() {\n  const {\n    setUserName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_2__[\"LoginContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.loginFormContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Welcome to MoveIt!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputBox,\n      type: \"text\",\n      name: \"username\",\n      placeholder: \"Enter your name here\",\n      onChange: e => setUserName(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4P2E2NDYiXSwibmFtZXMiOlsiTG9naW4iLCJzZXRVc2VyTmFtZSIsInVzZUNvbnRleHQiLCJMb2dpbkNvbnRleHQiLCJzdHlsZXMiLCJsb2dpbkZvcm1Db250YWluZXIiLCJpbnB1dEJveCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDZSxTQUFTQSxLQUFULEdBQWlCO0FBRTlCLFFBQU07QUFBRUM7QUFBRixNQUFrQkMsd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBbEM7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOEVBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQ0UsZUFBUyxFQUFHRCw4RUFBTSxDQUFDRSxRQURyQjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsVUFBSSxFQUFDLFVBSFA7QUFJRSxpQkFBVyxFQUFDLHNCQUpkO0FBS0UsY0FBUSxFQUFHQyxDQUFELElBQU9OLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFMOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Mb2dpbkNvbnRleHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Mb2dpbkZvcm0ubW9kdWxlLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblxuICBjb25zdCB7IHNldFVzZXJOYW1lIH0gPSB1c2VDb250ZXh0KExvZ2luQ29udGV4dCk7ICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtQ29udGFpbmVyIH0+XG4gICAgICA8aDE+V2VsY29tZSB0byBNb3ZlSXQhPC9oMT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMuaW5wdXRCb3ggfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+ICAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LoginForm.tsx\n");

/***/ }),

/***/ "./src/contexts/LoginContext.tsx":
/*!***************************************!*\
  !*** ./src/contexts/LoginContext.tsx ***!
  \***************************************/
/*! exports provided: LoginContext, LoginProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginContext\", function() { return LoginContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginProvider\", function() { return LoginProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/LoginContext.tsx\";\n\nconst LoginContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction LoginProvider({\n  children\n}) {\n  const {\n    0: userName,\n    1: setUserName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const getLocalStorage = () => {\n      if (false) {}\n    };\n\n    getLocalStorage();\n  }, []);\n\n  function setLocalStorage() {\n    if (false) {}\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoginContext.Provider, {\n    value: {\n      userName,\n      setUserName,\n      setLocalStorage\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvTG9naW5Db250ZXh0LnRzeD9hNmIwIl0sIm5hbWVzIjpbIkxvZ2luQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dpblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRMb2NhbFN0b3JhZ2UiLCJzZXRMb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBWU8sTUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQWxDO0FBR0EsU0FBU0MsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQXdEO0FBRTdELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCLGlCQUFtQyxFQUtsQztBQUNGLEtBUEQ7O0FBUUFBLG1CQUFlO0FBQ2hCLEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBY0EsV0FBU0MsZUFBVCxHQUEyQjtBQUN6QixlQUFtQyxFQUVsQztBQUNGOztBQUVELHNCQUNFLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUM1QkwsY0FENEI7QUFFNUJDLGlCQUY0QjtBQUc1Qkk7QUFINEIsS0FBOUI7QUFBQSxjQUtHTjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBMb2dpbkNvbnRleHRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBMb2dpbkNvbnRleHREYXRhIHtcbiAgdXNlck5hbWU6IHN0cmluZywgXG4gIHNldFVzZXJOYW1lOiAoZGlzcGF0Y2gpID0+IHZvaWQsIFxuICBzZXRMb2NhbFN0b3JhZ2U6ICgpID0+IHZvaWQsXG59XG5cbmV4cG9ydCBjb25zdCBMb2dpbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIExvZ2luQ29udGV4dERhdGEpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblByb3ZpZGVyKHsgY2hpbGRyZW4gfTogTG9naW5Db250ZXh0UHJvcHMpIHtcblxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSk7XG4gICAgICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCl7XG4gICAgICAgICAgc2V0VXNlck5hbWUodXNlckRhdGEudXNlck5hbWUpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cbiAgICB9ICAgXG4gICAgZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIH0sIFtdKVxuXG4gXG5cbiAgZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkoeyB1c2VyTmFtZTogdXNlck5hbWUgfSkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxMb2dpbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgIHVzZXJOYW1lLFxuICAgICAgc2V0VXNlck5hbWUsXG4gICAgICBzZXRMb2NhbFN0b3JhZ2UsXG4gICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Mb2dpbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/LoginContext.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Login.module.css */ \"./src/styles/pages/Login.module.css\");\n/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ \"./src/components/LoginForm.tsx\");\n/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/LoginContext */ \"./src/contexts/LoginContext.tsx\");\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/pages/index.tsx\";\n\n\n\n\n\n\nfunction Home() {\n  const {\n    setLocalStorage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_6__[\"LoginContext\"]);\n\n  function handleSubmitLogin() {\n    setLocalStorage();\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/_game');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Welcome | MoveIt\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"https://previews.123rf.com/images/tvoukent/tvoukent1905/tvoukent190500153/127834655-the-25-minutes-or-seconds-stopwatch-vector-icon-digital-timer-clock-and-watch-timer-modern-style-in-.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginButton,\n        type: \"button\",\n        onClick: () => handleSubmitLogin(),\n        children: \"Go!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInNldExvY2FsU3RvcmFnZSIsInVzZUNvbnRleHQiLCJMb2dpbkNvbnRleHQiLCJoYW5kbGVTdWJtaXRMb2dpbiIsIlJvdXRlciIsInB1c2giLCJzdHlsZXMiLCJjb250YWluZXIiLCJsb2dpbkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFFN0IsUUFBTTtBQUFFQztBQUFGLE1BQXNCQyx3REFBVSxDQUFDQyxtRUFBRCxDQUF0Qzs7QUFFQSxXQUFTQyxpQkFBVCxHQUE2QjtBQUMzQkgsbUJBQWU7QUFDZkksc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBR0MscUVBQU0sQ0FBQ0MsU0FBeEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxTQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0EsaUJBQVMsRUFBR0QscUVBQU0sQ0FBQ0UsV0FEbkI7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGVBQU8sRUFBRSxNQUFNTCxpQkFBaUIsRUFIbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Mb2dpbi5tb2R1bGUuY3NzJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Mb2dpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHsgc2V0TG9jYWxTdG9yYWdlIH0gPSB1c2VDb250ZXh0KExvZ2luQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0TG9naW4oKSB7XG4gICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgUm91dGVyLnB1c2goJy9fZ2FtZScpO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhaW5lciB9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZWxjb21lIHwgTW92ZUl0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wcmV2aWV3cy4xMjNyZi5jb20vaW1hZ2VzL3R2b3VrZW50L3R2b3VrZW50MTkwNS90dm91a2VudDE5MDUwMDE1My8xMjc4MzQ2NTUtdGhlLTI1LW1pbnV0ZXMtb3Itc2Vjb25kcy1zdG9wd2F0Y2gtdmVjdG9yLWljb24tZGlnaXRhbC10aW1lci1jbG9jay1hbmQtd2F0Y2gtdGltZXItbW9kZXJuLXN0eWxlLWluLS5qcGdcIiAvPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxMb2dpbkZvcm0gLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMubG9naW5CdXR0b24gfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdExvZ2luKCl9XG4gICAgICAgID5cbiAgICAgICAgICBHbyFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPiAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/styles/components/LoginForm.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/LoginForm.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"loginFormContainer\": \"LoginForm_loginFormContainer__2AV_d\",\n\t\"inputBox\": \"LoginForm_inputBox__BWaOP\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTG9naW5Gb3JtLm1vZHVsZS5jc3M/YjcyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0xvZ2luRm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naW5Gb3JtQ29udGFpbmVyXCI6IFwiTG9naW5Gb3JtX2xvZ2luRm9ybUNvbnRhaW5lcl9fMkFWX2RcIixcblx0XCJpbnB1dEJveFwiOiBcIkxvZ2luRm9ybV9pbnB1dEJveF9fQldhT1BcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/components/LoginForm.module.css\n");

/***/ }),

/***/ "./src/styles/pages/Login.module.css":
/*!*******************************************!*\
  !*** ./src/styles/pages/Login.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Login_container__3xdHb\",\n\t\"loginButton\": \"Login_loginButton__acNoI\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0xvZ2luLm1vZHVsZS5jc3M/MTFjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wYWdlcy9Mb2dpbi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTG9naW5fY29udGFpbmVyX18zeGRIYlwiLFxuXHRcImxvZ2luQnV0dG9uXCI6IFwiTG9naW5fbG9naW5CdXR0b25fX2FjTm9JXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/pages/Login.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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