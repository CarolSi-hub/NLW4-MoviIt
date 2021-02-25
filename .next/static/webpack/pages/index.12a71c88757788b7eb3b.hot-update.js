webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContex.tsx":
/*!******************************************!*\
  !*** ./src/contexts/CountdownContex.tsx ***!
  \******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownContext\", function() { return CountdownContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownProvider\", function() { return CountdownProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallangesContext */ \"./src/contexts/ChallangesContext.tsx\");\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/CountdownContex.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar countdownTimeout;\nfunction CountdownProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0.1 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  function startCountdown() {\n    setActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setActive(false);\n    setTime(0.1 * 60);\n    setHasFinished();\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountdownContext.Provider, {\n    value: {\n      minutes: minutes,\n      seconds: seconds,\n      hasFinished: hasFinished,\n      isActive: isActive,\n      resetCountdown: resetCountdown,\n      startCountdown: startCountdown\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CountdownProvider, \"UMOmaD5vicCMWNiJQgIWozaKGsg=\");\n\n_c = CountdownProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountdownProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleC50c3g/M2QzMSJdLCJuYW1lcyI6WyJDb3VudGRvd25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ2UiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUUsRUFBRixDQUF0QztBQUVQLElBQUlDLGdCQUFKO0FBRU8sU0FBU0MsaUJBQVQsT0FBa0U7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLG9CQUV6Q0Msd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FGK0I7QUFBQSxNQUUvREMsaUJBRitELGVBRS9EQSxpQkFGK0Q7O0FBQUEsa0JBSS9DQyxzREFBUSxDQUFDLE1BQU0sRUFBUCxDQUp1QztBQUFBLE1BSWhFQyxJQUpnRTtBQUFBLE1BSTFEQyxPQUowRDs7QUFBQSxtQkFLekNGLHNEQUFRLENBQUMsS0FBRCxDQUxpQztBQUFBLE1BS2hFRyxRQUxnRTtBQUFBLE1BS3REQyxTQUxzRDs7QUFBQSxtQkFNakNKLHNEQUFRLENBQUMsS0FBRCxDQU55QjtBQUFBLE1BTWhFSyxXQU5nRTtBQUFBLE1BTW5EQyxjQU5tRDs7QUFRdkUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7O0FBRUEsV0FBU1UsY0FBVCxHQUEwQjtBQUN4QlAsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNRLGNBQVQsR0FBMEI7QUFDeEJDLGdCQUFZLENBQUNuQixnQkFBRCxDQUFaO0FBQ0FVLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUYsV0FBTyxDQUFDLE1BQU0sRUFBUCxDQUFQO0FBQ0FJLGtCQUFjO0FBQ2Y7O0FBRURRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlYLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXZCLEVBQTBCO0FBQ3hCUCxzQkFBZ0IsR0FBR3FCLFVBQVUsQ0FBQyxZQUFNO0FBQ2xDYixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdELEtBSkQsTUFJTyxJQUFJRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUNqQ0ssb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUYsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBTCx1QkFBaUI7QUFDbEI7QUFDRixHQVZRLEVBVU4sQ0FBQ0ksUUFBRCxFQUFXRixJQUFYLENBVk0sQ0FBVDtBQWFBLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRTtBQUNoQ00sYUFBTyxFQUFQQSxPQURnQztBQUVoQ0csYUFBTyxFQUFQQSxPQUZnQztBQUdoQ0wsaUJBQVcsRUFBWEEsV0FIZ0M7QUFJaENGLGNBQVEsRUFBUkEsUUFKZ0M7QUFLaENTLG9CQUFjLEVBQWRBLGNBTGdDO0FBTWhDRCxvQkFBYyxFQUFkQTtBQU5nQyxLQUFsQztBQUFBLGNBUUdmO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBL0NlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLHVzZUVmZmVjdCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGFuZ2VzQ29udGV4dCc7XG5cbmludGVyZmFjZSBDb3VudGRvd25Db250ZXh0RGF0YSB7XG4gIG1pbnV0ZXM6IG51bWJlcixcbiAgc2Vjb25kczogbnVtYmVyLFxuICBoYXNGaW5pc2hlZDogYm9vbGVhbixcbiAgaXNBY3RpdmU6IGJvb2xlYW4sXG4gIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkLFxuICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZCxcbn1cblxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcblxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xuXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDb3VudGRvd25Qcm92aWRlclByb3BzKSAge1xuXG4gIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xuXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMSAqIDYwKTtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIHNldEFjdGl2ZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcbiAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgIHNldFRpbWUoMC4xICogNjApO1xuICAgIHNldEhhc0ZpbmlzaGVkKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG4gICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XG4gICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcbiAgICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xuICAgIH1cbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcblxuICBcbiAgcmV0dXJuKFxuICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICBtaW51dGVzLFxuICAgICAgc2Vjb25kcyxcbiAgICAgIGhhc0ZpbmlzaGVkLFxuICAgICAgaXNBY3RpdmUsXG4gICAgICByZXNldENvdW50ZG93bixcbiAgICAgIHN0YXJ0Q291bnRkb3duLFxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CountdownContex.tsx\n");

/***/ })

})