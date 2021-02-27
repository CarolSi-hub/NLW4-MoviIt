webpackHotUpdate_N_E("pages/_game",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children,\n      rest = Object(_home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(rest.level ? rest.level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(rest.currentXP ? rest.currentXP : 0),\n      currentXP = _useState2[0],\n      setCurrentXP = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(rest.completedChallenges ? rest.completedChallenges : 0),\n      completedChallenges = _useState3[0],\n      setCompletedChallenges = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveCHallenge = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLevelUpModalOpen = _useState5[0],\n      setIsLevelUpModalOpen = _useState5[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', level.toString());\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentXP', currentXP.toString());\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('completedChallenges', completedChallenges.toString());\n  }, [level, currentXP, completedChallenges]);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function completedChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var finalXP = currentXP + amount;\n\n    if (finalXP > experienceToNextLevel) {\n      finalXP -= experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentXP(finalXP);\n    setActiveCHallenge(null);\n    setCompletedChallenges(completedChallenges + 1);\n  }\n\n  function closeLevelUpModal() {\n    setIsLevelUpModalOpen(false);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveCHallenge(challenge);\n\n    if (Notification.permission === 'granted') {\n      new Notification('New Challenge!'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n\n    new Audio('/notification.mp3').play();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentXP: currentXP,\n      completedChallenges: completedChallenges,\n      completedChallenge: completedChallenge,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"ACoHIPD5jAhdbdCO9xAKVyd1Pdk=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRYUCIsInNldEN1cnJlbnRYUCIsImNvbXBsZXRlZENoYWxsZW5nZXMiLCJzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ0hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsInRvU3RyaW5nIiwibGV2ZWxVcCIsImNvbXBsZXRlZENoYWxsZW5nZSIsImFtb3VudCIsImZpbmFsWFAiLCJjbG9zZUxldmVsVXBNb2RhbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJwZXJtaXNzaW9uIiwiYm9keSIsIkF1ZGlvIiwicGxheSIsInJlc2V0Q2hhbGxlbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQTBCQSxTQUFTQyxrQkFBVCxPQUE0RTtBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFqQ0MsSUFBaUM7O0FBQUEsa0JBRXZEQyxzREFBUSxDQUFDRCxJQUFJLENBQUNFLEtBQUwsR0FB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QUFLLEVBQUxBLEtBRGlDO0FBRWpDRSxlQUFTLEVBQVRBLFNBRmlDO0FBR2pDRSx5QkFBbUIsRUFBbkJBLG1CQUhpQztBQUlqQ2dCLHdCQUFrQixFQUFsQkEsa0JBSmlDO0FBS2pDSSx1QkFBaUIsRUFBakJBLGlCQUxpQztBQU1qQ2xCLHFCQUFlLEVBQWZBLGVBTmlDO0FBT2pDNkIsb0JBQWMsRUFBZEEsY0FQaUM7QUFRakN6QiwyQkFBcUIsRUFBckJBO0FBUmlDLEtBQW5DO0FBQUEsY0FXR2I7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0F6RWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9DaGFsbGFuZ2VzQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xuXG5pbnRlcmZhY2UgQ2hhbGxhbmdlc1Byb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBsZXZlbDogbnVtYmVyLFxuICBjdXJyZW50WFA6IG51bWJlcixcbiAgY29tcGxldGVkQ2hhbGxlbmdlczogbnVtYmVyLFxufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcbiAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcbiAgbGV2ZWw6IG51bWJlcixcbiAgY3VycmVudFhQOiBudW1iZXIsXG4gIGNvbXBsZXRlZENoYWxsZW5nZXM6IG51bWJlcixcbiAgY29tcGxldGVkQ2hhbGxlbmdlOiAoKSA9PiB2b2lkLFxuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZSxcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQsXG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkLFxuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuLCAuLi5yZXN0IH06IENoYWxsYW5nZXNQcm92aWRlclByb3BzKSB7XG5cbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8gcmVzdC5sZXZlbCA6IDEpO1xuICBjb25zdCBbY3VycmVudFhQLCBzZXRDdXJyZW50WFBdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50WFAgPyByZXN0LmN1cnJlbnRYUCA6IDApO1xuICBjb25zdCBbY29tcGxldGVkQ2hhbGxlbmdlcywgc2V0Q29tcGxldGVkQ2hhbGxlbmdlc10gPSB1c2VTdGF0ZShyZXN0LmNvbXBsZXRlZENoYWxsZW5nZXMgPyByZXN0LmNvbXBsZXRlZENoYWxsZW5nZXMgOiAwKTtcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ0hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBsZXZlbC50b1N0cmluZygpKTtcbiAgICBDb29raWVzLnNldCgnY3VycmVudFhQJywgY3VycmVudFhQLnRvU3RyaW5nKCkpO1xuICAgIENvb2tpZXMuc2V0KCdjb21wbGV0ZWRDaGFsbGVuZ2VzJywgY29tcGxldGVkQ2hhbGxlbmdlcy50b1N0cmluZygpKTtcbiAgfSxbbGV2ZWwsIGN1cnJlbnRYUCwgY29tcGxldGVkQ2hhbGxlbmdlc10pXG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVkQ2hhbGxlbmdlKCkge1xuICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2UpIHJldHVybjtcblxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XG4gICAgbGV0IGZpbmFsWFAgPSBjdXJyZW50WFAgKyBhbW91bnQ7XG5cbiAgICBpZihmaW5hbFhQID4gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XG4gICAgICBmaW5hbFhQIC09IGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50WFAoZmluYWxYUCk7XG4gICAgc2V0QWN0aXZlQ0hhbGxlbmdlKG51bGwpO1xuICAgIHNldENvbXBsZXRlZENoYWxsZW5nZXMoY29tcGxldGVkQ2hhbGxlbmdlcyArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VMZXZlbFVwTW9kYWwoKSB7XG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuICAgIHNldEFjdGl2ZUNIYWxsZW5nZShjaGFsbGVuZ2UpO1xuXG4gICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbignTmV3IENoYWxsZW5nZSEnKSwge1xuICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHAhYFxuICAgICAgfVxuICAgIH0gbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcbiAgfVxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICBsZXZlbCxcbiAgICAgIGN1cnJlbnRYUCxcbiAgICAgIGNvbXBsZXRlZENoYWxsZW5nZXMsXG4gICAgICBjb21wbGV0ZWRDaGFsbGVuZ2UsXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})