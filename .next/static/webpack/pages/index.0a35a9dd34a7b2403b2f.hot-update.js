webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengeBox\", function() { return ChallengeBox; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallangesContext */ \"./src/contexts/ChallangesContext.tsx\");\n/* harmony import */ var _contexts_CountdownContex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContex */ \"./src/contexts/CountdownContex.tsx\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ \"./src/styles/components/ChallengeBox.module.css\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/components/ChallengeBox.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction ChallengeBox() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      activeChallenge = _useContext.activeChallenge,\n      resetChallenge = _useContext.resetChallenge,\n      completedChallenge = _useContext.completedChallenge;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_CountdownContex__WEBPACK_IMPORTED_MODULE_3__[\"CountdownContext\"]),\n      resetCountdown = _useContext2.resetCountdown;\n\n  function completedChallengeSuccess() {}\n\n  function completedChallengeFailed() {\n    reset;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,\n    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainerActive,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        children: [\"Ganhe \", activeChallenge.amount, \" xp\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/\".concat(activeChallenge.type, \".svg\"),\n          alt: \"body\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Novo desafio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: activeChallenge.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.failedButton,\n          onClick: resetChallenge,\n          children: \"Failed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.completedButton,\n          onClick: completedChallenge,\n          children: \"Completed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxNotActive,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Finish a cicle to get the challenges\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/level-up.svg\",\n          alt: \"Level Up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 9\n        }, this), \"Level up to receive challenges\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengeBox, \"le009C9e/qHs5WW+tBVX+NLT+YQ=\");\n\n_c = ChallengeBox;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengeBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeD9mNzExIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVkQ2hhbGxlbmdlIiwiQ291bnRkb3duQ29udGV4dCIsInJlc2V0Q291bnRkb3duIiwiY29tcGxldGVkQ2hhbGxlbmdlU3VjY2VzcyIsImNvbXBsZXRlZENoYWxsZW5nZUZhaWxlZCIsInJlc2V0Iiwic3R5bGVzIiwiY2hhbGxlbmdlQm94Q29udGFpbmVyIiwiY2hhbGxlbmdlQm94Q29udGFpbmVyQWN0aXZlIiwiYW1vdW50IiwidHlwZSIsImRlc2NyaXB0aW9uIiwiZmFpbGVkQnV0dG9uIiwiY29tcGxldGVkQnV0dG9uIiwiY2hhbGxlbmdlQm94Tm90QWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxvQkFFbUNDLHdEQUFVLENBQUNDLDZFQUFELENBRjdDO0FBQUEsTUFFckJDLGVBRnFCLGVBRXJCQSxlQUZxQjtBQUFBLE1BRUpDLGNBRkksZUFFSkEsY0FGSTtBQUFBLE1BRVlDLGtCQUZaLGVBRVlBLGtCQUZaOztBQUFBLHFCQUdGSix3REFBVSxDQUFDSywwRUFBRCxDQUhSO0FBQUEsTUFHckJDLGNBSHFCLGdCQUdyQkEsY0FIcUI7O0FBSzdCLFdBQVNDLHlCQUFULEdBQW9DLENBRW5DOztBQUVELFdBQVNDLHdCQUFULEdBQW1DO0FBQ2pDQyxTQUFLO0FBQ047O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLGlGQUFNLENBQUNDLHFCQUF2QjtBQUFBLGNBQ0lULGVBQWUsZ0JBQ2Y7QUFBSyxlQUFTLEVBQUVRLGlGQUFNLENBQUNFLDJCQUF2QjtBQUFBLDhCQUNFO0FBQUEsNkJBQWdCVixlQUFlLENBQUNXLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsa0JBQVdYLGVBQWUsQ0FBQ1ksSUFBM0IsU0FBUjtBQUErQyxhQUFHLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvQkFBS1osZUFBZSxDQUFDYTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBT0U7QUFBQSxnQ0FDRTtBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsbUJBQVMsRUFBRUwsaUZBQU0sQ0FBQ00sWUFGbEI7QUFHQSxpQkFBTyxFQUFFYixjQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFDQSxjQUFJLEVBQUMsUUFETDtBQUVBLG1CQUFTLEVBQUVPLGlGQUFNLENBQUNPLGVBRmxCO0FBR0EsaUJBQU8sRUFBR2Isa0JBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGUsZ0JBMkJqQjtBQUFLLGVBQVMsRUFBSU0saUZBQU0sQ0FBQ1EscUJBQXpCO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUlBO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsb0JBQVQ7QUFBOEIsYUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0F2RGVuQixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0JztcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXgnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VCb3goKSB7XG5cbiAgY29uc3QgeyBhY3RpdmVDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBjb21wbGV0ZWRDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xuICBjb25zdCB7IHJlc2V0Q291bnRkb3duIH0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlZENoYWxsZW5nZVN1Y2Nlc3MoKXtcblxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVkQ2hhbGxlbmdlRmFpbGVkKCl7XG4gICAgcmVzZXRcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn0+XG4gICAgICB7IGFjdGl2ZUNoYWxsZW5nZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VCb3hDb250YWluZXJBY3RpdmV9PlxuICAgICAgICAgIDxoZWFkZXI+R2FuaGUgeyBhY3RpdmVDaGFsbGVuZ2UuYW1vdW50IH0geHA8L2hlYWRlcj5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiYm9keVwiIC8+XG4gICAgICAgICAgICA8c3Ryb25nPk5vdm8gZGVzYWZpbzwvc3Ryb25nPlxuICAgICAgICAgICAgPHA+eyBhY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZhaWxlZEJ1dHRvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q2hhbGxlbmdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGYWlsZWRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZWRCdXR0b259XG4gICAgICAgICAgICBvbkNsaWNrPXsgY29tcGxldGVkQ2hhbGxlbmdlIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+KSBcbiAgICAgIDpcbiAgICAgIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5jaGFsbGVuZ2VCb3hOb3RBY3RpdmV9PlxuICAgICAgPHN0cm9uZz5cbiAgICAgICAgRmluaXNoIGEgY2ljbGUgdG8gZ2V0IHRoZSBjaGFsbGVuZ2VzXG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPHA+XG4gICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwtdXAuc3ZnXCIgYWx0PVwiTGV2ZWwgVXBcIiAvPlxuICAgICAgICAgIExldmVsIHVwIHRvIHJlY2VpdmUgY2hhbGxlbmdlc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH0gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ChallengeBox.tsx\n");

/***/ })

})