webpackHotUpdate_N_E("pages/_game",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var _rest$level, _rest$currentXP, _rest$completedChalle;\n\n  var children = _ref.children,\n      rest = Object(_home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$currentXP = rest.currentXP) !== null && _rest$currentXP !== void 0 ? _rest$currentXP : 0),\n      currentXP = _useState2[0],\n      setCurrentXP = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$completedChalle = rest.completedChallenges) !== null && _rest$completedChalle !== void 0 ? _rest$completedChalle : 0),\n      completedChallenges = _useState3[0],\n      setCompletedChallenges = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveCHallenge = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', level.toString());\n    console.log(level, 'level do useEffect');\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentXP', currentXP.toString());\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('completedChallenges', completedChallenges.toString());\n    completedChallenges('');\n  }, [level, currentXP, completedChallenges]);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function completedChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var finalXP = currentXP + amount;\n\n    if (finalXP > experienceToNextLevel) {\n      finalXP -= experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentXP(finalXP);\n    setActiveCHallenge(null);\n    setCompletedChallenges(completedChallenges + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveCHallenge(challenge);\n\n    if (Notification.permission === 'granted') {\n      new Notification('New Challenge!'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n  }\n\n  function resetChallenge() {\n    setActiveCHallenge(null);\n  }\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentXP: currentXP,\n      completedChallenges: completedChallenges,\n      completedChallenge: completedChallenge,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"ypApyshcjOZF4xg2uiInROxQZH4=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRYUCIsInNldEN1cnJlbnRYUCIsImNvbXBsZXRlZENoYWxsZW5nZXMiLCJzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ0hhbGxlbmdlIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibGV2ZWxVcCIsImNvbXBsZXRlZENoYWxsZW5nZSIsImFtb3VudCIsImZpbmFsWFAiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsInBlcm1pc3Npb24iLCJib2R5IiwicmVzZXRDaGFsbGVuZ2UiLCJwb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBMEJBLFNBQVNDLGtCQUFULE9BQTRFO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQWpDQyxJQUFpQzs7QUFBQSxrQkFDdkRDLHNEQUFRLGdCQUFDRCxJQUFJLENBQUNFLEtBQU4scURBQWUsQ0FBZixDQUQrQztBQUFBLE1BQzFFQSxLQUQwRTtBQUFBLE1BQ25FQyxRQURtRTs7QUFBQSxt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O0FBUWpDWCwyQkFBcUIsRUFBckJBO0FBUmlDLEtBQW5DO0FBQUEsY0FXR3ZCO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBdkVlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnY29uc29sZSc7XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuaW50ZXJmYWNlIENoYWxsYW5nZXNQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbGV2ZWw6IG51bWJlcixcbiAgY3VycmVudFhQOiBudW1iZXIsXG4gIGNvbXBsZXRlZENoYWxsZW5nZXM6IG51bWJlcixcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gIGxldmVsOiBudW1iZXIsXG4gIGN1cnJlbnRYUDogbnVtYmVyLFxuICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXIsXG4gIGNvbXBsZXRlZENoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2UsXG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkLFxuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBDaGFsbGFuZ2VzUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XG4gIGNvbnN0IFtjdXJyZW50WFAsIHNldEN1cnJlbnRYUF0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRYUCA/PyAwKTtcbiAgY29uc3QgW2NvbXBsZXRlZENoYWxsZW5nZXMsIHNldENvbXBsZXRlZENoYWxsZW5nZXNdID0gdXNlU3RhdGUocmVzdC5jb21wbGV0ZWRDaGFsbGVuZ2VzID8/IDApO1xuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDSGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBsZXZlbC50b1N0cmluZygpKTtcbiAgICBjb25zb2xlLmxvZyhsZXZlbCwgJ2xldmVsIGRvIHVzZUVmZmVjdCcpXG4gICAgQ29va2llcy5zZXQoJ2N1cnJlbnRYUCcsIGN1cnJlbnRYUC50b1N0cmluZygpKTtcbiAgICBDb29raWVzLnNldCgnY29tcGxldGVkQ2hhbGxlbmdlcycsIGNvbXBsZXRlZENoYWxsZW5nZXMudG9TdHJpbmcoKSk7XG4gICAgY29tcGxldGVkQ2hhbGxlbmdlcygnJylcbiAgfSxbbGV2ZWwsIGN1cnJlbnRYUCwgY29tcGxldGVkQ2hhbGxlbmdlc10pXG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVkQ2hhbGxlbmdlKCkge1xuICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2UpIHJldHVybjtcblxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XG4gICAgbGV0IGZpbmFsWFAgPSBjdXJyZW50WFAgKyBhbW91bnQ7XG5cbiAgICBpZihmaW5hbFhQID4gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XG4gICAgICBmaW5hbFhQIC09IGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50WFAoZmluYWxYUCk7XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKG51bGwpO1xuICAgIHNldENvbXBsZXRlZENoYWxsZW5nZXMoY29tcGxldGVkQ2hhbGxlbmdlcyArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKGNoYWxsZW5nZSk7XG5cbiAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICBuZXcgTm90aWZpY2F0aW9uKCdOZXcgQ2hhbGxlbmdlIScpLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgbGV2ZWwsXG4gICAgICBjdXJyZW50WFAsXG4gICAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzLFxuICAgICAgY29tcGxldGVkQ2hhbGxlbmdlLFxuICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcbiAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})