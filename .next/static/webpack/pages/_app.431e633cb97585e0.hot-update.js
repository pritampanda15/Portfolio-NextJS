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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));\n_c = MotionLink;\nconst Logo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionLink, {\n            href: \"/\",\n            className: \"flex items-center justify-center rounded-full w-16 h-16  bg-dark text-white dark:border-2 dark:border-solid dark:border-light   text-2xl font-bold\",\n            whileHover: {\n                backgroundColor: [\n                    \"#121212\",\n                    \"rgba(131,58,180,1)\",\n                    \"rgba(253,29,29,1)\",\n                    \"rgba(252,176,69,1)\",\n                    \"rgba(131,58,180,1)\",\n                    \"#121212\"\n                ],\n                transition: {\n                    duration: 1,\n                    repeat: Infinity\n                }\n            },\n            children: \"AtomO\"\n        }, void 0, false, {\n            fileName: \"/workspaces/Portfolio-NextJS/src/components/Logo.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/Portfolio-NextJS/src/components/Logo.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Logo;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionLink\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUNWO0FBQ0g7QUFHekIsSUFBSUcsYUFBYUgscURBQU1BLENBQUNDLGtEQUFJQTtLQUF4QkU7QUFFSixNQUFNQyxPQUFPO0lBRVgscUJBQ0UsOERBQUNDO1FBQ0FDLFdBQVU7a0JBQ1AsNEVBQUNIO1lBQVdJLE1BQUs7WUFDckJELFdBQVU7WUFFVkUsWUFBWTtnQkFDVkMsaUJBQWdCO29CQUFDO29CQUFXO29CQUFxQjtvQkFBb0I7b0JBQXFCO29CQUFzQjtpQkFBVTtnQkFDMUhDLFlBQVc7b0JBQUNDLFVBQVM7b0JBQUdDLFFBQVFDO2dCQUFTO1lBQzNDO3NCQUNDOzs7Ozs7Ozs7OztBQUdMO01BZk1UO0FBaUJOLGlFQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9Qb3J0Zm9saW8tTmV4dEpTL3NyYy9jb21wb25lbnRzL0xvZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5cclxubGV0IE1vdGlvbkxpbmsgPSBtb3Rpb24oTGluayk7XHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtMic+XHJcbiAgICAgICAgPE1vdGlvbkxpbmsgaHJlZj1cIi9cIiBcclxuICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHctMTYgaC0xNiAgYmctZGFyayB0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLTIgZGFyazpib3JkZXItc29saWQgZGFyazpib3JkZXItbGlnaHRcclxuICAgIHRleHQtMnhsIGZvbnQtYm9sZCdcclxuICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgYmFja2dyb3VuZENvbG9yOltcIiMxMjEyMTJcIiwgXCJyZ2JhKDEzMSw1OCwxODAsMSlcIixcInJnYmEoMjUzLDI5LDI5LDEpXCIsXCJyZ2JhKDI1MiwxNzYsNjksMSlcIixcInJnYmEoMTMxLDU4LDE4MCwxKVwiLCBcIiMxMjEyMTJcIl0sXHJcbiAgICAgIHRyYW5zaXRpb246e2R1cmF0aW9uOjEsIHJlcGVhdDogSW5maW5pdHkgfVxyXG4gICAgfX1cclxuICAgID5BdG9tTzwvTW90aW9uTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJMaW5rIiwiUmVhY3QiLCJNb3Rpb25MaW5rIiwiTG9nbyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJ3aGlsZUhvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n"));

/***/ })

});