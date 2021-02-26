webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var _rest$level, _rest$currentXP, _rest$completedChalle;\n\n  var children = _ref.children,\n      rest = Object(_home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$currentXP = rest.currentXP) !== null && _rest$currentXP !== void 0 ? _rest$currentXP : 0),\n      currentXP = _useState2[0],\n      setCurrentXP = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$completedChalle = rest.completedChallenges) !== null && _rest$completedChalle !== void 0 ? _rest$completedChalle : 0),\n      completedChallenges = _useState3[0],\n      setCompletedChallenges = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveCHallenge = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', level.toString());\n    console.log(level, 'level do useEffect');\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentXP', currentXP.toString());\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('completedChallenges', completedChallenges.toString());\n    completedChallenges(com);\n  }, [level, currentXP, completedChallenges]);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function completedChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var finalXP = currentXP + amount;\n\n    if (finalXP > experienceToNextLevel) {\n      finalXP -= experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentXP(finalXP);\n    setActiveCHallenge(null);\n    setCompletedChallenges(completedChallenges + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveCHallenge(challenge);\n\n    if (Notification.permission === 'granted') {\n      new Notification('New Challenge!'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n  }\n\n  function resetChallenge() {\n    setActiveCHallenge(null);\n  }\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentXP: currentXP,\n      completedChallenges: completedChallenges,\n      completedChallenge: completedChallenge,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"ypApyshcjOZF4xg2uiInROxQZH4=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRYUCIsInNldEN1cnJlbnRYUCIsImNvbXBsZXRlZENoYWxsZW5nZXMiLCJzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ0hhbGxlbmdlIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiY29tIiwibGV2ZWxVcCIsImNvbXBsZXRlZENoYWxsZW5nZSIsImFtb3VudCIsImZpbmFsWFAiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsInBlcm1pc3Npb24iLCJib2R5IiwicmVzZXRDaGFsbGVuZ2UiLCJwb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBMEJBLFNBQVNDLGtCQUFULE9BQTRFO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQWpDQyxJQUFpQzs7QUFBQSxrQkFDdkRDLHNEQUFRLGdCQUFDRCxJQUFJLENBQUNFLEtBQU4scURBQWUsQ0FBZixDQUQrQztBQUFBLE1BQzFFQSxLQUQwRTtBQUFBLE1BQ25FQyxRQURtRTs7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RUFBZEEsY0FQaUM7QUFRakNYLDJCQUFxQixFQUFyQkE7QUFSaUMsS0FBbkM7QUFBQSxjQVdHeEI7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0F2RWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9DaGFsbGFuZ2VzQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdjb25zb2xlJztcblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xuXG5pbnRlcmZhY2UgQ2hhbGxhbmdlc1Byb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBsZXZlbDogbnVtYmVyLFxuICBjdXJyZW50WFA6IG51bWJlcixcbiAgY29tcGxldGVkQ2hhbGxlbmdlczogbnVtYmVyLFxufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcbiAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcbiAgbGV2ZWw6IG51bWJlcixcbiAgY3VycmVudFhQOiBudW1iZXIsXG4gIGNvbXBsZXRlZENoYWxsZW5nZXM6IG51bWJlcixcbiAgY29tcGxldGVkQ2hhbGxlbmdlOiAoKSA9PiB2b2lkLFxuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZSxcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQsXG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkLFxuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuLCAuLi5yZXN0IH06IENoYWxsYW5nZXNQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcbiAgY29uc3QgW2N1cnJlbnRYUCwgc2V0Q3VycmVudFhQXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudFhQID8/IDApO1xuICBjb25zdCBbY29tcGxldGVkQ2hhbGxlbmdlcywgc2V0Q29tcGxldGVkQ2hhbGxlbmdlc10gPSB1c2VTdGF0ZShyZXN0LmNvbXBsZXRlZENoYWxsZW5nZXMgPz8gMCk7XG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNIYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIGxldmVsLnRvU3RyaW5nKCkpO1xuICAgIGNvbnNvbGUubG9nKGxldmVsLCAnbGV2ZWwgZG8gdXNlRWZmZWN0JylcbiAgICBDb29raWVzLnNldCgnY3VycmVudFhQJywgY3VycmVudFhQLnRvU3RyaW5nKCkpO1xuICAgIENvb2tpZXMuc2V0KCdjb21wbGV0ZWRDaGFsbGVuZ2VzJywgY29tcGxldGVkQ2hhbGxlbmdlcy50b1N0cmluZygpKTtcbiAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzKGNvbSlcbiAgfSxbbGV2ZWwsIGN1cnJlbnRYUCwgY29tcGxldGVkQ2hhbGxlbmdlc10pXG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVkQ2hhbGxlbmdlKCkge1xuICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2UpIHJldHVybjtcblxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XG4gICAgbGV0IGZpbmFsWFAgPSBjdXJyZW50WFAgKyBhbW91bnQ7XG5cbiAgICBpZihmaW5hbFhQID4gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XG4gICAgICBmaW5hbFhQIC09IGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50WFAoZmluYWxYUCk7XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKG51bGwpO1xuICAgIHNldENvbXBsZXRlZENoYWxsZW5nZXMoY29tcGxldGVkQ2hhbGxlbmdlcyArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKGNoYWxsZW5nZSk7XG5cbiAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICBuZXcgTm90aWZpY2F0aW9uKCdOZXcgQ2hhbGxlbmdlIScpLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgbGV2ZWwsXG4gICAgICBjdXJyZW50WFAsXG4gICAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzLFxuICAgICAgY29tcGxldGVkQ2hhbGxlbmdlLFxuICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcbiAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})