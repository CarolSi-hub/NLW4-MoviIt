webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var _rest$level, _rest$currentXP, _rest$completedChalle;\n\n  var children = _ref.children,\n      rest = Object(_home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$currentXP = rest.currentXP) !== null && _rest$currentXP !== void 0 ? _rest$currentXP : 0),\n      currentXP = _useState2[0],\n      setCurrentXP = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$completedChalle = rest.completedChallenges) !== null && _rest$completedChalle !== void 0 ? _rest$completedChalle : 0),\n      completedChallenges = _useState3[0],\n      setCompletedChallenges = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveCHallenge = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', level.toString());\n    console.log(level, 'level do useeffect');\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentXP', currentXP.toString());\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('completedChallenges', completedChallenges.toString());\n  }, [level, currentXP, completedChallenges]);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function completedChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var finalXP = currentXP + amount;\n\n    if (finalXP > experienceToNextLevel) {\n      finalXP -= experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentXP(finalXP);\n    setActiveCHallenge(null);\n    setCompletedChallenges(completedChallenges + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveCHallenge(challenge);\n\n    if (Notification.permission === 'granted') {\n      new Notification('New Challenge!'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n  }\n\n  function resetChallenge() {\n    setActiveCHallenge(null);\n  }\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentXP: currentXP,\n      completedChallenges: completedChallenges,\n      completedChallenge: completedChallenge,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"ypApyshcjOZF4xg2uiInROxQZH4=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRYUCIsInNldEN1cnJlbnRYUCIsImNvbXBsZXRlZENoYWxsZW5nZXMiLCJzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ0hhbGxlbmdlIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibGV2ZWxVcCIsImNvbXBsZXRlZENoYWxsZW5nZSIsImFtb3VudCIsImZpbmFsWFAiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsInBlcm1pc3Npb24iLCJib2R5IiwicmVzZXRDaGFsbGVuZ2UiLCJwb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBMEJBLFNBQVNDLGtCQUFULE9BQTRFO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQWpDQyxJQUFpQzs7QUFBQSxrQkFDdkRDLHNEQUFRLGdCQUFDRCxJQUFJLENBQUNFLEtBQU4scURBQWUsQ0FBZixDQUQrQztBQUFBLE1BQzFFQSxLQUQwRTtBQUFBLE1BQ25FQyxRQURtRTs7QUFBQSxt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QUFuQztBQUFBLGNBV0d2QjtBQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQXRFZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJ2NvbnNvbGUnO1xuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XG5cbmludGVyZmFjZSBDaGFsbGFuZ2VzUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGxldmVsOiBudW1iZXIsXG4gIGN1cnJlbnRYUDogbnVtYmVyLFxuICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXIsXG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICB0eXBlOiAnYm9keScgfCAnZXllJztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xuICBsZXZlbDogbnVtYmVyLFxuICBjdXJyZW50WFA6IG51bWJlcixcbiAgY29tcGxldGVkQ2hhbGxlbmdlczogbnVtYmVyLFxuICBjb21wbGV0ZWRDaGFsbGVuZ2U6ICgpID0+IHZvaWQsXG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlLFxuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQsXG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQ2hhbGxhbmdlc1Byb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xuICBjb25zdCBbY3VycmVudFhQLCBzZXRDdXJyZW50WFBdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50WFAgPz8gMCk7XG4gIGNvbnN0IFtjb21wbGV0ZWRDaGFsbGVuZ2VzLCBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzXSA9IHVzZVN0YXRlKHJlc3QuY29tcGxldGVkQ2hhbGxlbmdlcyA/PyAwKTtcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ0hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ29va2llcy5zZXQoJ2xldmVsJywgbGV2ZWwudG9TdHJpbmcoKSk7XG4gICAgY29uc29sZS5sb2cobGV2ZWwsICdsZXZlbCBkbyB1c2VlZmZlY3QnKVxuICAgIENvb2tpZXMuc2V0KCdjdXJyZW50WFAnLCBjdXJyZW50WFAudG9TdHJpbmcoKSk7XG4gICAgQ29va2llcy5zZXQoJ2NvbXBsZXRlZENoYWxsZW5nZXMnLCBjb21wbGV0ZWRDaGFsbGVuZ2VzLnRvU3RyaW5nKCkpO1xuICB9LFtsZXZlbCwgY3VycmVudFhQLCBjb21wbGV0ZWRDaGFsbGVuZ2VzXSlcblxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZWRDaGFsbGVuZ2UoKSB7XG4gICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcbiAgICBsZXQgZmluYWxYUCA9IGN1cnJlbnRYUCArIGFtb3VudDtcblxuICAgIGlmKGZpbmFsWFAgPiBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgIGZpbmFsWFAgLT0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgbGV2ZWxVcCgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRYUChmaW5hbFhQKTtcbiAgICBzZXRBY3RpdmVDSGFsbGVuZ2UobnVsbCk7XG4gICAgc2V0Q29tcGxldGVkQ2hhbGxlbmdlcyhjb21wbGV0ZWRDaGFsbGVuZ2VzICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcbiAgICBzZXRBY3RpdmVDSGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05ldyBDaGFsbGVuZ2UhJyksIHtcbiAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcbiAgICBzZXRBY3RpdmVDSGFsbGVuZ2UobnVsbCk7XG4gIH1cblxuICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICBsZXZlbCxcbiAgICAgIGN1cnJlbnRYUCxcbiAgICAgIGNvbXBsZXRlZENoYWxsZW5nZXMsXG4gICAgICBjb21wbGV0ZWRDaGFsbGVuZ2UsXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})