webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentXP = _useState2[0],\n      setCurrentXP = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      completedChallenges = _useState3[0],\n      setCompletedChallenges = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveCHallenge = _useState4[1];\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function completedChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var finalXP = currentXP + amount;\n\n    if (finalXP > experienceToNextLevel) {\n      finalXP -= experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentXP(finalXP);\n    setActiveCHallenge;\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveCHallenge(challenge);\n  }\n\n  function resetChallenge() {\n    setActiveCHallenge(null);\n  }\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentXP: currentXP,\n      completedChallenges: completedChallenges,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"BXWmg9bYI7lbTpxuOkg/bCzTXeI=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudFhQIiwic2V0Q3VycmVudFhQIiwiY29tcGxldGVkQ2hhbGxlbmdlcyIsInNldENvbXBsZXRlZENoYWxsZW5nZXMiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDSGFsbGVuZ2UiLCJsZXZlbFVwIiwiY29tcGxldGVkQ2hhbGxlbmdlIiwiYW1vdW50IiwiZmluYWxYUCIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiLCJwb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBc0JBLFNBQVNDLGtCQUFULE9BQW1FO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQzs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUMsQ0FBRCxDQURzQztBQUFBLE1BQ2pFQyxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFdENGLHNEQUFRLENBQUMsQ0FBRCxDQUY4QjtBQUFBLE1BRWpFRyxTQUZpRTtBQUFBLE1BRXREQyxZQUZzRDs7QUFBQSxtQkFHbEJKLHNEQUFRLENBQUMsQ0FBRCxDQUhVO0FBQUEsTUFHakVLLG1CQUhpRTtBQUFBLE1BRzVDQyxzQkFINEM7O0FBQUEsbUJBSTFCTixzREFBUSxDQUFDLElBQUQsQ0FKa0I7QUFBQSxNQUlqRU8sZUFKaUU7QUFBQSxNQUloREMsa0JBSmdEOztBQU14RSxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCUCxZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFFRCxXQUFTUyxrQkFBVCxHQUE4QjtBQUM1QixRQUFHLENBQUNILGVBQUosRUFBcUI7QUFETyxRQUdwQkksTUFIb0IsR0FHVEosZUFIUyxDQUdwQkksTUFIb0I7QUFJNUIsUUFBSUMsT0FBTyxHQUFHVCxTQUFTLEdBQUdRLE1BQTFCOztBQUVBLFFBQUdDLE9BQU8sR0FBR0MscUJBQWIsRUFBb0M7QUFDbENELGFBQU8sSUFBSUMscUJBQVg7QUFDQUosYUFBTztBQUNSOztBQUVETCxnQkFBWSxDQUFDUSxPQUFELENBQVo7QUFDQUosc0JBQWtCO0FBRW5COztBQUVELFdBQVNNLGlCQUFULEdBQTZCO0FBQzNCLFFBQU1DLG9CQUFvQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQUF0QyxDQUE3QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNkNBQVUsQ0FBQ0osb0JBQUQsQ0FBNUI7QUFDQVAsc0JBQWtCLENBQUNhLFNBQUQsQ0FBbEI7QUFDRDs7QUFFRCxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCZCxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBRUQsTUFBTUsscUJBQXFCLEdBQUdHLElBQUksQ0FBQ08sR0FBTCxDQUFTLENBQUN0QixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUEsc0JBQ0UscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQ2pDQSxXQUFLLEVBQUxBLEtBRGlDO0FBRWpDRSxlQUFTLEVBQVRBLFNBRmlDO0FBR2pDRSx5QkFBbUIsRUFBbkJBLG1CQUhpQztBQUlqQ1MsdUJBQWlCLEVBQWpCQSxpQkFKaUM7QUFLakNQLHFCQUFlLEVBQWZBLGVBTGlDO0FBTWpDZSxvQkFBYyxFQUFkQSxjQU5pQztBQU9qQ1QsMkJBQXFCLEVBQXJCQTtBQVBpQyxLQUFuQztBQUFBLGNBVUlkO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBcERlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuaW50ZXJmYWNlIENoYWxsYW5nZXNQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gIGxldmVsOiBudW1iZXIsXG4gIGN1cnJlbnRYUDogbnVtYmVyLFxuICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXIsXG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlLFxuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQsXG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ2hhbGxhbmdlc1Byb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2N1cnJlbnRYUCwgc2V0Q3VycmVudFhQXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY29tcGxldGVkQ2hhbGxlbmdlcywgc2V0Q29tcGxldGVkQ2hhbGxlbmdlc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ0hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlZENoYWxsZW5nZSgpIHtcbiAgICBpZighYWN0aXZlQ2hhbGxlbmdlKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuICAgIGxldCBmaW5hbFhQID0gY3VycmVudFhQICsgYW1vdW50O1xuXG4gICAgaWYoZmluYWxYUCA+IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xuICAgICAgZmluYWxYUCAtPSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XG4gICAgICBsZXZlbFVwKCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFhQKGZpbmFsWFApO1xuICAgIHNldEFjdGl2ZUNIYWxsZW5nZVxuXG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcbiAgICBzZXRBY3RpdmVDSGFsbGVuZ2UoY2hhbGxlbmdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xuICAgIHNldEFjdGl2ZUNIYWxsZW5nZShudWxsKTtcbiAgfVxuXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgIGxldmVsLFxuICAgICAgY3VycmVudFhQLFxuICAgICAgY29tcGxldGVkQ2hhbGxlbmdlcyxcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgcmVzZXRDaGFsbGVuZ2UsXG4gICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgfX1cbiAgICA+XG4gICAgICB7IGNoaWxkcmVufVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})