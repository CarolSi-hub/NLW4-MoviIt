webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Global.css */ \"./src/styles/Global.css\");\n/* harmony import */ var _styles_Global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallangesContext */ \"./src/contexts/ChallangesContext.tsx\");\n/* harmony import */ var _contexts_CountdownContex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CountdownContex */ \"./src/contexts/CountdownContex.tsx\");\n/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/LoginContext */ \"./src/contexts/LoginContext.tsx\");\n\n\nvar _jsxFileName = \"/home/ana/Documentos/NLW4/NLW4-MoviIt/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_ana_Documentos_NLW4_NLW4_MoviIt_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      props = _ref.props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_5__[\"LoginProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_contexts_ChallangesContext__WEBPACK_IMPORTED_MODULE_3__[\"ChallengesProvider\"], {\n      level: props.level,\n      currentXP: GameProps.currentXP,\n      completedChallenges: GameProps.completedChallenges,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_contexts_CountdownContex__WEBPACK_IMPORTED_MODULE_4__[\"CountdownProvider\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsImxldmVsIiwiR2FtZVByb3BzIiwiY3VycmVudFhQIiwiY29tcGxldGVkQ2hhbGxlbmdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsS0FBVCxPQUFnRDtBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsU0FBb0IsUUFBcEJBLFNBQW9CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzlDLHNCQUNFLHFFQUFDLG9FQUFEO0FBQUEsMkJBQ0UscUVBQUMsOEVBQUQ7QUFDRSxXQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FEZjtBQUVFLGVBQVMsRUFBRUMsU0FBUyxDQUFDQyxTQUZ2QjtBQUdFLHlCQUFtQixFQUFFRCxTQUFTLENBQUNFLG1CQUhqQztBQUFBLDZCQUtBLHFFQUFDLDJFQUFEO0FBQUEsK0JBQ0EscUVBQUMsU0FBRCxvQkFBZUwsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7S0FkUUYsSzs7QUFnQk1BLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvR2xvYmFsLmNzcydcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQnO1xuaW1wb3J0IHsgQ291bnRkb3duUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXgnO1xuaW1wb3J0IHsgTG9naW5Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0xvZ2luQ29udGV4dCc7XG5cbmludGVyZmFjZSBHYW1lUHJvcHMge1xuICBsZXZlbDogbnVtYmVyLFxuICBjdXJyZW50WFA6IG51bWJlcixcbiAgY29tcGxldGVkQ2hhbGxlbmdlczogbnVtYmVyLFxufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBwcm9wcyB9KSB7IFxuICByZXR1cm4gKFxuICAgIDxMb2dpblByb3ZpZGVyPlxuICAgICAgPENoYWxsZW5nZXNQcm92aWRlclxuICAgICAgICBsZXZlbD17cHJvcHMubGV2ZWx9XG4gICAgICAgIGN1cnJlbnRYUD17R2FtZVByb3BzLmN1cnJlbnRYUH1cbiAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlcz17R2FtZVByb3BzLmNvbXBsZXRlZENoYWxsZW5nZXN9XG4gICAgICA+XG4gICAgICA8Q291bnRkb3duUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NvdW50ZG93blByb3ZpZGVyPlxuICAgIDwvQ2hhbGxlbmdlc1Byb3ZpZGVyPiBcbiAgICA8L0xvZ2luUHJvdmlkZXI+XG4gICkgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG5cbiAgY29uc3QgeyBsZXZlbCwgY3VycmVudFhQLCBjb21wbGV0ZWRDaGFsbGVuZ2VzIH0gPSBjdHgucmVxLmNvb2tpZXM7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGV2ZWw6IE51bWJlcihsZXZlbCksXG4gICAgICBjdXJyZW50WFA6IE51bWJlcihjdXJyZW50WFApLFxuICAgICAgY29tcGxldGVkQ2hhbGxlbmdlczogTnVtYmVyKGNvbXBsZXRlZENoYWxsZW5nZXMpXG4gICAgfVxuICB9O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

})