webpackHotUpdate_N_E("pages/_game",{

/***/ "./src/contexts/CountdownContex.tsx":
/*!******************************************!*\
  !*** ./src/contexts/CountdownContex.tsx ***!
  \******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownContext\", function() { return CountdownContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownProvider\", function() { return CountdownProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallangesContext */ \"./src/contexts/ChallangesContext.tsx\");\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/CountdownContex.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar countdownTimeout;\nfunction CountdownProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(25 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  function startCountdown() {\n    setActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setActive(false);\n    setTime(25 * 60);\n    setHasFinished(false);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountdownContext.Provider, {\n    value: {\n      minutes: minutes,\n      seconds: seconds,\n      hasFinished: hasFinished,\n      isActive: isActive,\n      resetCountdown: resetCountdown,\n      startCountdown: startCountdown\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CountdownProvider, \"5iUzmCoaCelt8VhWtCwLNGISeV0=\");\n\n_c = CountdownProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountdownProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleC50c3g/M2QzMSJdLCJuYW1lcyI6WyJDb3VudGRvd25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ2UiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFrQk8sSUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFFLEVBQUYsQ0FBdEM7QUFFUCxJQUFJQyxnQkFBSjtBQUVPLFNBQVNDLGlCQUFULE9BQWtFO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQzs7QUFBQSxvQkFFekNDLHdEQUFVLENBQUNDLDZFQUFELENBRitCO0FBQUEsTUFFL0RDLGlCQUYrRCxlQUUvREEsaUJBRitEOztBQUFBLGtCQUkvQ0Msc0RBQVEsQ0FBQyxLQUFLLEVBQU4sQ0FKdUM7QUFBQSxNQUloRUMsSUFKZ0U7QUFBQSxNQUkxREMsT0FKMEQ7O0FBQUEsbUJBS3pDRixzREFBUSxDQUFDLEtBQUQsQ0FMaUM7QUFBQSxNQUtoRUcsUUFMZ0U7QUFBQSxNQUt0REMsU0FMc0Q7O0FBQUEsbUJBTWpDSixzREFBUSxDQUFDLEtBQUQsQ0FOeUI7QUFBQSxNQU1oRUssV0FOZ0U7QUFBQSxNQU1uREMsY0FObUQ7O0FBUXZFLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCOztBQUVBLFdBQVNVLGNBQVQsR0FBMEI7QUFDeEJQLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTUSxjQUFULEdBQTBCO0FBQ3hCQyxnQkFBWSxDQUFDbkIsZ0JBQUQsQ0FBWjtBQUNBVSxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FGLFdBQU8sQ0FBQyxLQUFLLEVBQU4sQ0FBUDtBQUNBSSxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNEOztBQUVEUSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxRQUFRLElBQUlGLElBQUksR0FBRyxDQUF2QixFQUEwQjtBQUN4QlAsc0JBQWdCLEdBQUdxQixVQUFVLENBQUMsWUFBTTtBQUNsQ2IsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0QsT0FGNEIsRUFFMUIsSUFGMEIsQ0FBN0I7QUFHRCxLQUpELE1BSU8sSUFBSUUsUUFBUSxJQUFJRixJQUFJLEtBQUssQ0FBekIsRUFBNEI7QUFDakNLLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FGLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUwsdUJBQWlCO0FBQ2xCO0FBQ0YsR0FWUSxFQVVOLENBQUNJLFFBQUQsRUFBV0YsSUFBWCxDQVZNLENBQVQ7QUFhQSxzQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUU7QUFDaENNLGFBQU8sRUFBUEEsT0FEZ0M7QUFFaENHLGFBQU8sRUFBUEEsT0FGZ0M7QUFHaENMLGlCQUFXLEVBQVhBLFdBSGdDO0FBSWhDRixjQUFRLEVBQVJBLFFBSmdDO0FBS2hDUyxvQkFBYyxFQUFkQSxjQUxnQztBQU1oQ0Qsb0JBQWMsRUFBZEE7QUFOZ0MsS0FBbEM7QUFBQSxjQVFHZjtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQS9DZUQsaUI7O0tBQUFBLGlCIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSx1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQnO1xuXG5pbXBvcnQgeyB1c2VDaGFsbGVuZ2VzIH0gZnJvbSBcIi4uL2hvb2tzL1VzZUNoYWxsZW5nZXNcIjtcbmltcG9ydCB7IHVzZUNvdW50ZG93biB9IGZyb20gXCIuLi9ob29rcy9Vc2VDb3VudGRvd25cIjtcblxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcbiAgbWludXRlczogbnVtYmVyLFxuICBzZWNvbmRzOiBudW1iZXIsXG4gIGhhc0ZpbmlzaGVkOiBib29sZWFuLFxuICBpc0FjdGl2ZTogYm9vbGVhbixcbiAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWQsXG4gIHN0YXJ0Q291bnRkb3duOiAoKSA9PiB2b2lkLFxufVxuXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgge30gYXMgQ291bnRkb3duQ29udGV4dERhdGEpO1xuXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7IGNoaWxkcmVuIH06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpICB7XG5cbiAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XG5cbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMjUgKiA2MCk7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcblxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcbiAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XG4gICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICBzZXRUaW1lKDI1ICogNjApO1xuICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG4gICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XG4gICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcbiAgICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xuICAgIH1cbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcblxuICBcbiAgcmV0dXJuKFxuICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICBtaW51dGVzLFxuICAgICAgc2Vjb25kcyxcbiAgICAgIGhhc0ZpbmlzaGVkLFxuICAgICAgaXNBY3RpdmUsXG4gICAgICByZXNldENvdW50ZG93bixcbiAgICAgIHN0YXJ0Q291bnRkb3duLFxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CountdownContex.tsx\n");

/***/ })

})