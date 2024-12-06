"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));\n_c = MotionLink;\nconst Logo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionLink, {\n            href: \"/\",\n            className: \"flex items-center justify-center rounded-full w-16 h-16 bg-dark dark:border-2 dark:border-solid dark:border-light\",\n            whileHover: {\n                backgroundColor: [\n                    \"#121212\",\n                    \"rgba(131,58,180,1)\",\n                    \"rgba(253,29,29,1)\",\n                    \"rgba(252,176,69,1)\",\n                    \"rgba(131,58,180,1)\",\n                    \"#121212\"\n                ],\n                transition: {\n                    duration: 1,\n                    repeat: Infinity\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"../logo.png\" // Adjust the path to your logo file\n                ,\n                alt: \"Logo\",\n                className: \"w-12 h-12 object-contain\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Logo.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/workspaces/Portfolio-NextJS/src/components/Logo.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/Portfolio-NextJS/src/components/Logo.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Logo;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionLink\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBQ0g7QUFFMUIsSUFBSUcsYUFBYUgscURBQU1BLENBQUNDLGtEQUFJQTtLQUF4QkU7QUFFSixNQUFNQyxPQUFPO0lBQ1gscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7a0JBRVYsNEVBQUNIO1lBQ0NJLE1BQUs7WUFDTEQsV0FBVTtZQUNWRSxZQUFZO2dCQUNWQyxpQkFBaUI7b0JBQ2Y7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7Z0JBQ0RDLFlBQVk7b0JBQUVDLFVBQVU7b0JBQUdDLFFBQVFDO2dCQUFTO1lBQzlDO3NCQUVBLDRFQUFDQztnQkFDQ0MsS0FBSSxjQUFjLG9DQUFvQzs7Z0JBQ3REQyxLQUFJO2dCQUNKVixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO01BNUJNRjtBQThCTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvUG9ydGZvbGlvLU5leHRKUy9zcmMvY29tcG9uZW50cy9Mb2dvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubGV0IE1vdGlvbkxpbmsgPSBtb3Rpb24oTGluayk7XHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTJcIlxyXG4gICAgPlxyXG4gICAgICA8TW90aW9uTGlua1xyXG4gICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgdy0xNiBoLTE2IGJnLWRhcmsgZGFyazpib3JkZXItMiBkYXJrOmJvcmRlci1zb2xpZCBkYXJrOmJvcmRlci1saWdodFwiXHJcbiAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgIFwiIzEyMTIxMlwiLFxyXG4gICAgICAgICAgICBcInJnYmEoMTMxLDU4LDE4MCwxKVwiLFxyXG4gICAgICAgICAgICBcInJnYmEoMjUzLDI5LDI5LDEpXCIsXHJcbiAgICAgICAgICAgIFwicmdiYSgyNTIsMTc2LDY5LDEpXCIsXHJcbiAgICAgICAgICAgIFwicmdiYSgxMzEsNTgsMTgwLDEpXCIsXHJcbiAgICAgICAgICAgIFwiIzEyMTIxMlwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIHJlcGVhdDogSW5maW5pdHkgfSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBcclxuICAgICAgICAgIHNyYz1cIi4uL2xvZ28ucG5nXCIgLy8gQWRqdXN0IHRoZSBwYXRoIHRvIHlvdXIgbG9nbyBmaWxlXHJcbiAgICAgICAgICBhbHQ9XCJMb2dvXCIgXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgb2JqZWN0LWNvbnRhaW5cIiBcclxuICAgICAgICAvPlxyXG4gICAgICA8L01vdGlvbkxpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkxpbmsiLCJSZWFjdCIsIk1vdGlvbkxpbmsiLCJMb2dvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIndoaWxlSG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZXBlYXQiLCJJbmZpbml0eSIsImltZyIsInNyYyIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n"));

/***/ })

});