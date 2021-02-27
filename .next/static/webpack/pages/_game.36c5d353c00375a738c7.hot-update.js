webpackHotUpdate_N_E("pages/_game",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children,\n      rest = Object(_home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(rest.level ? rest.level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(rest.currentXP ? rest.currentXP : 0),\n      currentXP = _useState2[0],\n      setCurrentXP = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(rest.completedChallenges ? rest.completedChallenges : 0),\n      completedChallenges = _useState3[0],\n      setCompletedChallenges = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveCHallenge = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLevelUpModalOpen = _useState5[0],\n      setIsLevelUpModalOpen = _useState5[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', level.toString());\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentXP', currentXP.toString());\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('completedChallenges', completedChallenges.toString());\n  }, [level, currentXP, completedChallenges]);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function completedChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var finalXP = currentXP + amount;\n\n    if (finalXP > experienceToNextLevel) {\n      finalXP -= experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentXP(finalXP);\n    setActiveCHallenge(null);\n    setCompletedChallenges(completedChallenges + 1);\n  }\n\n  function closeLevelUpModal() {\n    setIsLevelUpModalOpen(false);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveCHallenge(challenge);\n\n    if (Notification.permission === 'granted') {\n      new Notification('New Challenge!'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n\n    new Audio('/notification.mp3').play();\n  }\n\n  function resetChallenge() {\n    setActiveCHallenge(null);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentXP: currentXP,\n      completedChallenges: completedChallenges,\n      completedChallenge: completedChallenge,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"ACoHIPD5jAhdbdCO9xAKVyd1Pdk=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRYUCIsInNldEN1cnJlbnRYUCIsImNvbXBsZXRlZENoYWxsZW5nZXMiLCJzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ0hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsInRvU3RyaW5nIiwibGV2ZWxVcCIsImNvbXBsZXRlZENoYWxsZW5nZSIsImFtb3VudCIsImZpbmFsWFAiLCJjbG9zZUxldmVsVXBNb2RhbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJwZXJtaXNzaW9uIiwiYm9keSIsIkF1ZGlvIiwicGxheSIsInJlc2V0Q2hhbGxlbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQTBCQSxTQUFTQyxrQkFBVCxPQUE0RTtBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFqQ0MsSUFBaUM7O0FBQUEsa0JBRXZEQyxzREFBUSxDQUFDRCxJQUFJLENBQUNFLEtBQUwsR0FB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QUVELHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLFNBQUssRUFBRTtBQUNqQ1AsV0FBSyxFQUFMQSxLQURpQztBQUVqQ0UsZUFBUyxFQUFUQSxTQUZpQztBQUdqQ0UseUJBQW1CLEVBQW5CQSxtQkFIaUM7QUFJakNnQix3QkFBa0IsRUFBbEJBLGtCQUppQztBQUtqQ0ksdUJBQWlCLEVBQWpCQSxpQkFMaUM7QUFNakNsQixxQkFBZSxFQUFmQSxlQU5pQztBQU9qQzZCLG9CQUFjLEVBQWRBLGNBUGlDO0FBUWpDekIsMkJBQXFCLEVBQXJCQTtBQVJpQyxLQUFuQztBQUFBLGNBV0diO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBM0VlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuaW50ZXJmYWNlIENoYWxsYW5nZXNQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbGV2ZWw6IG51bWJlcixcbiAgY3VycmVudFhQOiBudW1iZXIsXG4gIGNvbXBsZXRlZENoYWxsZW5nZXM6IG51bWJlcixcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gIGxldmVsOiBudW1iZXIsXG4gIGN1cnJlbnRYUDogbnVtYmVyLFxuICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXIsXG4gIGNvbXBsZXRlZENoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2UsXG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkLFxuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZCxcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBDaGFsbGFuZ2VzUHJvdmlkZXJQcm9wcykge1xuXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/IHJlc3QubGV2ZWwgOiAxKTtcbiAgY29uc3QgW2N1cnJlbnRYUCwgc2V0Q3VycmVudFhQXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudFhQID8gcmVzdC5jdXJyZW50WFAgOiAwKTtcbiAgY29uc3QgW2NvbXBsZXRlZENoYWxsZW5nZXMsIHNldENvbXBsZXRlZENoYWxsZW5nZXNdID0gdXNlU3RhdGUocmVzdC5jb21wbGV0ZWRDaGFsbGVuZ2VzID8gcmVzdC5jb21wbGV0ZWRDaGFsbGVuZ2VzIDogMCk7XG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNIYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ29va2llcy5zZXQoJ2xldmVsJywgbGV2ZWwudG9TdHJpbmcoKSk7XG4gICAgQ29va2llcy5zZXQoJ2N1cnJlbnRYUCcsIGN1cnJlbnRYUC50b1N0cmluZygpKTtcbiAgICBDb29raWVzLnNldCgnY29tcGxldGVkQ2hhbGxlbmdlcycsIGNvbXBsZXRlZENoYWxsZW5nZXMudG9TdHJpbmcoKSk7XG4gIH0sW2xldmVsLCBjdXJyZW50WFAsIGNvbXBsZXRlZENoYWxsZW5nZXNdKVxuXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlZENoYWxsZW5nZSgpIHtcbiAgICBpZighYWN0aXZlQ2hhbGxlbmdlKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuICAgIGxldCBmaW5hbFhQID0gY3VycmVudFhQICsgYW1vdW50O1xuXG4gICAgaWYoZmluYWxYUCA+IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xuICAgICAgZmluYWxYUCAtPSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XG4gICAgICBsZXZlbFVwKCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFhQKGZpbmFsWFApO1xuICAgIHNldEFjdGl2ZUNIYWxsZW5nZShudWxsKTtcbiAgICBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzKGNvbXBsZXRlZENoYWxsZW5nZXMgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xuICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcbiAgICBzZXRBY3RpdmVDSGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05ldyBDaGFsbGVuZ2UhJyksIHtcbiAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcbiAgICAgIH1cbiAgICB9IG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcbiAgICBzZXRBY3RpdmVDSGFsbGVuZ2UobnVsbCk7XG4gIH0gXG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgIGxldmVsLFxuICAgICAgY3VycmVudFhQLFxuICAgICAgY29tcGxldGVkQ2hhbGxlbmdlcyxcbiAgICAgIGNvbXBsZXRlZENoYWxsZW5nZSxcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgcmVzZXRDaGFsbGVuZ2UsXG4gICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})