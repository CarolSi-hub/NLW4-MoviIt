webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengeBox\", function() { return ChallengeBox; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallangesContext */ \"./src/contexts/ChallangesContext.tsx\");\n/* harmony import */ var _contexts_CountdownContex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContex */ \"./src/contexts/CountdownContex.tsx\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ \"./src/styles/components/ChallengeBox.module.css\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/components/ChallengeBox.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction ChallengeBox() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      activeChallenge = _useContext.activeChallenge,\n      resetChallenge = _useContext.resetChallenge,\n      completedChallenge = _useContext.completedChallenge;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_CountdownContex__WEBPACK_IMPORTED_MODULE_3__[\"CountdownContext\"]),\n      resetCountdown = _useContext2.resetCountdown;\n\n  function handleChallengeSuccess() {\n    completedChallenge();\n    resetCountdown();\n  }\n\n  function handleChallengeFailed() {\n    resetChallenge();\n    resetCountdown();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,\n    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainerActive,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        children: [\"Ganhe \", activeChallenge.amount, \" xp\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/\".concat(activeChallenge.type, \".svg\"),\n          alt: \"body\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Novo desafio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: activeChallenge.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.failedButton,\n          onClick: handleChallengeFailed,\n          children: \"Failed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.completedButton,\n          onClick: handleChallengeSuccess,\n          children: \"Completed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxNotActive,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Finish a cicle to get the challenges\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/level-up.svg\",\n          alt: \"Level Up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, this), \"Level up to receive challenges\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengeBox, \"le009C9e/qHs5WW+tBVX+NLT+YQ=\");\n\n_c = ChallengeBox;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengeBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeD9mNzExIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVkQ2hhbGxlbmdlIiwiQ291bnRkb3duQ29udGV4dCIsInJlc2V0Q291bnRkb3duIiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2VzcyIsImhhbmRsZUNoYWxsZW5nZUZhaWxlZCIsInN0eWxlcyIsImNoYWxsZW5nZUJveENvbnRhaW5lciIsImNoYWxsZW5nZUJveENvbnRhaW5lckFjdGl2ZSIsImFtb3VudCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImZhaWxlZEJ1dHRvbiIsImNvbXBsZXRlZEJ1dHRvbiIsImNoYWxsZW5nZUJveE5vdEFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsb0JBRW1DQyx3REFBVSxDQUFDQyw2RUFBRCxDQUY3QztBQUFBLE1BRXJCQyxlQUZxQixlQUVyQkEsZUFGcUI7QUFBQSxNQUVKQyxjQUZJLGVBRUpBLGNBRkk7QUFBQSxNQUVZQyxrQkFGWixlQUVZQSxrQkFGWjs7QUFBQSxxQkFHRkosd0RBQVUsQ0FBQ0ssMEVBQUQsQ0FIUjtBQUFBLE1BR3JCQyxjQUhxQixnQkFHckJBLGNBSHFCOztBQUs3QixXQUFTQyxzQkFBVCxHQUFpQztBQUMvQkgsc0JBQWtCO0FBQ2xCRSxrQkFBYztBQUNmOztBQUVELFdBQVNFLHFCQUFULEdBQWdDO0FBQzlCTCxrQkFBYztBQUNkRyxrQkFBYztBQUNmOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFRyxpRkFBTSxDQUFDQyxxQkFBdkI7QUFBQSxjQUNJUixlQUFlLGdCQUNmO0FBQUssZUFBUyxFQUFFTyxpRkFBTSxDQUFDRSwyQkFBdkI7QUFBQSw4QkFDRTtBQUFBLDZCQUFnQlQsZUFBZSxDQUFDVSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLGtCQUFXVixlQUFlLENBQUNXLElBQTNCLFNBQVI7QUFBK0MsYUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUEsb0JBQUtYLGVBQWUsQ0FBQ1k7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU9FO0FBQUEsZ0NBQ0U7QUFDQSxjQUFJLEVBQUMsUUFETDtBQUVBLG1CQUFTLEVBQUVMLGlGQUFNLENBQUNNLFlBRmxCO0FBR0EsaUJBQU8sRUFBRVAscUJBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsbUJBQVMsRUFBRUMsaUZBQU0sQ0FBQ08sZUFGbEI7QUFHQSxpQkFBTyxFQUFHVCxzQkFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEZSxnQkEyQmpCO0FBQUssZUFBUyxFQUFJRSxpRkFBTSxDQUFDUSxxQkFBekI7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBSUE7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxvQkFBVDtBQUE4QixhQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMENEOztHQXpEZWxCLFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQnO1xuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZUJveCgpIHtcblxuICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGNvbXBsZXRlZENoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XG4gIGNvbnN0IHsgcmVzZXRDb3VudGRvd24gfSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxlbmdlU3VjY2Vzcygpe1xuICAgIGNvbXBsZXRlZENoYWxsZW5nZSgpO1xuICAgIHJlc2V0Q291bnRkb3duKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VGYWlsZWQoKXtcbiAgICByZXNldENoYWxsZW5nZSgpO1xuICAgIHJlc2V0Q291bnRkb3duKCk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VCb3hDb250YWluZXJ9PlxuICAgICAgeyBhY3RpdmVDaGFsbGVuZ2UgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyQWN0aXZlfT5cbiAgICAgICAgICA8aGVhZGVyPkdhbmhlIHsgYWN0aXZlQ2hhbGxlbmdlLmFtb3VudCB9IHhwPC9oZWFkZXI+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aW1nIHNyYz17YGljb25zLyR7YWN0aXZlQ2hhbGxlbmdlLnR5cGV9LnN2Z2B9IGFsdD1cImJvZHlcIiAvPlxuICAgICAgICAgICAgPHN0cm9uZz5Ob3ZvIGRlc2FmaW88L3N0cm9uZz5cbiAgICAgICAgICAgIDxwPnsgYWN0aXZlQ2hhbGxlbmdlLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mYWlsZWRCdXR0b259XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VGYWlsZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZhaWxlZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlZEJ1dHRvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyBoYW5kbGVDaGFsbGVuZ2VTdWNjZXNzIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+KSBcbiAgICAgIDpcbiAgICAgIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5jaGFsbGVuZ2VCb3hOb3RBY3RpdmV9PlxuICAgICAgPHN0cm9uZz5cbiAgICAgICAgRmluaXNoIGEgY2ljbGUgdG8gZ2V0IHRoZSBjaGFsbGVuZ2VzXG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPHA+XG4gICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwtdXAuc3ZnXCIgYWx0PVwiTGV2ZWwgVXBcIiAvPlxuICAgICAgICAgIExldmVsIHVwIHRvIHJlY2VpdmUgY2hhbGxlbmdlc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH0gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ChallengeBox.tsx\n");

/***/ })

})