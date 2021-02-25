webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentXP = _useState2[0],\n      setCurrentXP = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      completedChallenges = _useState3[0],\n      setCompletedChallenges = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveCHallenge = _useState4[1];\n\n  useEffect(function () {\n    effect;\n    return function () {\n      cleanup;\n    };\n  }, [input]);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function completedChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var finalXP = currentXP + amount;\n\n    if (finalXP > experienceToNextLevel) {\n      finalXP -= experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentXP(finalXP);\n    setActiveCHallenge(null);\n    setCompletedChallenges(completedChallenges + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveCHallenge(challenge);\n  }\n\n  function resetChallenge() {\n    setActiveCHallenge(null);\n  }\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentXP: currentXP,\n      completedChallenges: completedChallenges,\n      completedChallenge: completedChallenge,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"LvpaCzQYvSscgco3kXPnRXs173M=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudFhQIiwic2V0Q3VycmVudFhQIiwiY29tcGxldGVkQ2hhbGxlbmdlcyIsInNldENvbXBsZXRlZENoYWxsZW5nZXMiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDSGFsbGVuZ2UiLCJ1c2VFZmZlY3QiLCJlZmZlY3QiLCJjbGVhbnVwIiwiaW5wdXQiLCJsZXZlbFVwIiwiY29tcGxldGVkQ2hhbGxlbmdlIiwiYW1vdW50IiwiZmluYWxYUCIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiLCJwb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBdUJBLFNBQVNDLGtCQUFULE9BQW1FO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQzs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUMsQ0FBRCxDQURzQztBQUFBLE1BQ2pFQyxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFdENGLHNEQUFRLENBQUMsQ0FBRCxDQUY4QjtBQUFBLE1BRWpFRyxTQUZpRTtBQUFBLE1BRXREQyxZQUZzRDs7QUFBQSxtQkFHbEJKLHNEQUFRLENBQUMsQ0FBRCxDQUhVO0FBQUEsTUFHakVLLG1CQUhpRTtBQUFBLE1BRzVDQyxzQkFINEM7O0FBQUEsbUJBSTFCTixzREFBUSxDQUFDLElBQUQsQ0FKa0I7QUFBQSxNQUlqRU8sZUFKaUU7QUFBQSxNQUloREMsa0JBSmdEOztBQU14RUMsV0FBUyxDQUFDLFlBQU07QUFDZEMsVUFBTTtBQUNOLFdBQU8sWUFBTTtBQUNYQyxhQUFPO0FBQ1IsS0FGRDtBQUdELEdBTFEsRUFLTixDQUFDQyxLQUFELENBTE0sQ0FBVDs7QUFPQSxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCWCxZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFFRCxXQUFTYSxrQkFBVCxHQUE4QjtBQUM1QixRQUFHLENBQUNQLGVBQUosRUFBcUI7QUFETyxRQUdwQlEsTUFIb0IsR0FHVFIsZUFIUyxDQUdwQlEsTUFIb0I7QUFJNUIsUUFBSUMsT0FBTyxHQUFHYixTQUFTLEdBQUdZLE1BQTFCOztBQUVBLFFBQUdDLE9BQU8sR0FBR0MscUJBQWIsRUFBb0M7QUFDbENELGFBQU8sSUFBSUMscUJBQVg7QUFDQUosYUFBTztBQUNSOztBQUVEVCxnQkFBWSxDQUFDWSxPQUFELENBQVo7QUFDQVIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFFRDs7QUFFRCxXQUFTYSxpQkFBVCxHQUE2QjtBQUMzQixRQUFNQyxvQkFBb0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkMsNkNBQVUsQ0FBQ0MsTUFBdEMsQ0FBN0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDZDQUFVLENBQUNKLG9CQUFELENBQTVCO0FBQ0FYLHNCQUFrQixDQUFDaUIsU0FBRCxDQUFsQjtBQUNEOztBQUVELFdBQVNDLGNBQVQsR0FBMEI7QUFDeEJsQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBRUQsTUFBTVMscUJBQXFCLEdBQUdHLElBQUksQ0FBQ08sR0FBTCxDQUFTLENBQUMxQixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUEsc0JBQ0UscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQ2pDQSxXQUFLLEVBQUxBLEtBRGlDO0FBRWpDRSxlQUFTLEVBQVRBLFNBRmlDO0FBR2pDRSx5QkFBbUIsRUFBbkJBLG1CQUhpQztBQUlqQ1Msd0JBQWtCLEVBQWxCQSxrQkFKaUM7QUFLakNJLHVCQUFpQixFQUFqQkEsaUJBTGlDO0FBTWpDWCxxQkFBZSxFQUFmQSxlQU5pQztBQU9qQ21CLG9CQUFjLEVBQWRBLGNBUGlDO0FBUWpDVCwyQkFBcUIsRUFBckJBO0FBUmlDLEtBQW5DO0FBQUEsY0FXSWxCO0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBN0RlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuaW50ZXJmYWNlIENoYWxsYW5nZXNQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gIGxldmVsOiBudW1iZXIsXG4gIGN1cnJlbnRYUDogbnVtYmVyLFxuICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXIsXG4gIGNvbXBsZXRlZENoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2UsXG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkLFxuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGFsbGFuZ2VzUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY3VycmVudFhQLCBzZXRDdXJyZW50WFBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb21wbGV0ZWRDaGFsbGVuZ2VzLCBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDSGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBlZmZlY3RcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYW51cFxuICAgIH1cbiAgfSwgW2lucHV0XSlcblxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZWRDaGFsbGVuZ2UoKSB7XG4gICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcbiAgICBsZXQgZmluYWxYUCA9IGN1cnJlbnRYUCArIGFtb3VudDtcblxuICAgIGlmKGZpbmFsWFAgPiBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgIGZpbmFsWFAgLT0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgbGV2ZWxVcCgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRYUChmaW5hbFhQKTtcbiAgICBzZXRBY3RpdmVDSGFsbGVuZ2UobnVsbCk7XG4gICAgc2V0Q29tcGxldGVkQ2hhbGxlbmdlcyhjb21wbGV0ZWRDaGFsbGVuZ2VzICsgMSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuICAgIHNldEFjdGl2ZUNIYWxsZW5nZShjaGFsbGVuZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgbGV2ZWwsXG4gICAgICBjdXJyZW50WFAsXG4gICAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzLFxuICAgICAgY29tcGxldGVkQ2hhbGxlbmdlLFxuICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcbiAgICB9fVxuICAgID5cbiAgICAgIHsgY2hpbGRyZW59XG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})