/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/404"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspaces%2FPortfolio-NextJS%2Fsrc%2Fpages%2F404.js&page=%2F404!":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspaces%2FPortfolio-NextJS%2Fsrc%2Fpages%2F404.js&page=%2F404! ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/404\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/404.js */ \"./src/pages/404.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/404\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZ3b3Jrc3BhY2VzJTJGUG9ydGZvbGlvLU5leHRKUyUyRnNyYyUyRnBhZ2VzJTJGNDA0LmpzJnBhZ2U9JTJGNDA0ISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDhDQUFvQjtBQUMzQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi80MDRcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3NyYy9wYWdlcy80MDQuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiLzQwNFwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspaces%2FPortfolio-NextJS%2Fsrc%2Fpages%2F404.js&page=%2F404!\n"));

/***/ }),

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst quote = {\n    hidden: {\n        opacity: 1\n    },\n    visible: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text, className = \"\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-2 w-full mx-auto flex flex-col items-center justify-center  text-center     overflow-hidden sm:py-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"inline-block text-dark dark:text-light\\n      text-8xl font-bold w-full capitalize  \".concat(className, \" xl:text-6xl\"),\n            variants: quote,\n            initial: \"hidden\",\n            animate: \"visible\",\n            children: text.split(\" \").map((char, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    children: [\n                        char,\n                        \"\\xa0\"\n                    ]\n                }, char + \"-\" + index, true, {\n                    fileName: \"/workspaces/Portfolio-NextJS/src/components/AnimatedText.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/workspaces/Portfolio-NextJS/src/components/AnimatedText.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/Portfolio-NextJS/src/components/AnimatedText.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBRTFCLE1BQU1FLFFBQVE7SUFDWkMsUUFBUTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQRCxTQUFTO1FBQ1RFLFlBQVk7WUFDVkMsT0FBTztZQUNQQyxpQkFBaUI7UUFDbkI7SUFDRjtBQUNGO0FBRUEsTUFBTUMsYUFBYTtJQUNqQk4sUUFBUTtRQUNOQyxTQUFTO1FBQ1RNLEdBQUc7SUFDTDtJQUNBTCxTQUFTO1FBQ1BELFNBQVM7UUFDVE0sR0FBRztRQUNISixZQUFZO1lBQ1ZLLFVBQVU7UUFDWjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxlQUFlO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUUsRUFBRTtJQUM1QyxxQkFDRSw4REFBQ0M7UUFBSUQsV0FBVTtrQkFFYiw0RUFBQ2QsaURBQU1BLENBQUNnQixFQUFFO1lBQ1JGLFdBQVcsdUZBQ3FDLE9BQVZBLFdBQVU7WUFDaERHLFVBQVVmO1lBQ1ZnQixTQUFRO1lBQ1JDLFNBQVE7c0JBRVBOLEtBQUtPLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQzFCLHFCQUNFLDhEQUFDdkIsaURBQU1BLENBQUN3QixJQUFJO29CQUNWVixXQUFVO29CQUVWRyxVQUFVUjs7d0JBRVRhO3dCQUFLOzttQkFIREEsT0FBTyxNQUFNQzs7Ozs7WUFNeEI7Ozs7Ozs7Ozs7O0FBSVI7S0F6Qk1YO0FBMkJOLGlFQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9Qb3J0Zm9saW8tTmV4dEpTL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBxdW90ZSA9IHtcclxuICBoaWRkZW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC41LFxyXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBzaW5nbGVXb3JkID0ge1xyXG4gIGhpZGRlbjoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHk6IDUwLFxyXG4gIH0sXHJcbiAgdmlzaWJsZToge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0ZWRUZXh0ID0gKHsgdGV4dCwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB3LWZ1bGwgbXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgdGV4dC1jZW50ZXIgIFxyXG4gICAgb3ZlcmZsb3ctaGlkZGVuIHNtOnB5LTBcIj5cclxuICAgICAgPG1vdGlvbi5oMVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayB0ZXh0LWRhcmsgZGFyazp0ZXh0LWxpZ2h0XHJcbiAgICAgIHRleHQtOHhsIGZvbnQtYm9sZCB3LWZ1bGwgY2FwaXRhbGl6ZSAgJHtjbGFzc05hbWV9IHhsOnRleHQtNnhsYH1cclxuICAgICAgICB2YXJpYW50cz17cXVvdGV9XHJcbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3RleHQuc3BsaXQoXCIgXCIpLm1hcCgoY2hhciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uc3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAga2V5PXtjaGFyICsgXCItXCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICB2YXJpYW50cz17c2luZ2xlV29yZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGFyfSZuYnNwO1xyXG4gICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0O1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJxdW90ZSIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImRlbGF5Iiwic3RhZ2dlckNoaWxkcmVuIiwic2luZ2xlV29yZCIsInkiLCJkdXJhdGlvbiIsIkFuaW1hdGVkVGV4dCIsInRleHQiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJzcGxpdCIsIm1hcCIsImNoYXIiLCJpbmRleCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ }),

/***/ "./src/components/TransitionEffect.js":
/*!********************************************!*\
  !*** ./src/components/TransitionEffect.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst TransitionEffect = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                exit: {\n                    x: [\n                        \"0%\",\n                        \"100%\"\n                    ],\n                    width: [\n                        \"0%\",\n                        \"100%\"\n                    ]\n                },\n                transition: {\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/TransitionEffect.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/TransitionEffect.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.4,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/TransitionEffect.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = TransitionEffect;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionEffect);\nvar _c;\n$RefreshReg$(_c, \"TransitionEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDYjtBQUUxQixNQUFNRSxtQkFBbUI7SUFDdkIscUJBQ0U7OzBCQUNFLDhEQUFDRixpREFBTUEsQ0FBQ0csR0FBRztnQkFDVEMsV0FBVTtnQkFDVkMsU0FBUztvQkFBRUMsR0FBRztvQkFBUUMsT0FBTztnQkFBTztnQkFDcENDLFNBQVM7b0JBQUVGLEdBQUU7b0JBQU1DLE9BQU07Z0JBQUs7Z0JBQzlCRSxNQUFNO29CQUFDSCxHQUFFO3dCQUFDO3dCQUFNO3FCQUFPO29CQUFFQyxPQUFNO3dCQUFDO3dCQUFLO3FCQUFPO2dCQUFBO2dCQUM1Q0csWUFBWTtvQkFBRUMsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7OzBCQUVqRCw4REFBQ1osaURBQU1BLENBQUNHLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLEdBQUc7b0JBQVFDLE9BQU87Z0JBQU87Z0JBQ3BDQyxTQUFTO29CQUFFRixHQUFHO29CQUFNQyxPQUFPO2dCQUFLO2dCQUNoQ0csWUFBWTtvQkFBRUcsT0FBTztvQkFBS0YsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7OzBCQUU3RCw4REFBQ1osaURBQU1BLENBQUNHLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLEdBQUc7b0JBQVFDLE9BQU87Z0JBQU87Z0JBQ3BDQyxTQUFTO29CQUFFRixHQUFHO29CQUFNQyxPQUFPO2dCQUFLO2dCQUNoQ0csWUFBWTtvQkFBRUcsT0FBTztvQkFBS0YsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7Ozs7QUFJbkU7S0F4Qk1WO0FBMEJOLGlFQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL1BvcnRmb2xpby1OZXh0SlMvc3JjL2NvbXBvbmVudHMvVHJhbnNpdGlvbkVmZmVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUcmFuc2l0aW9uRWZmZWN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0zMCBiZy1wcmltYXJ5XCJcclxuICAgICAgICBpbml0aWFsPXt7IHg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICBhbmltYXRlPXt7IHg6XCIwJVwiLCB3aWR0aDpcIjAlXCIgfX1cclxuICAgICAgICBleGl0PXt7eDpbXCIwJVwiLCBcIjEwMCVcIl0sIHdpZHRoOltcIjAlXCIsXCIxMDAlXCJdfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFwiZWFzZUluT3V0XCIgfX1cclxuICAgICAgLz5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIGgtc2NyZWVuIHotMjAgYmctbGlnaHQgZGFyazpiZy1kYXJrXCJcclxuICAgICAgICBpbml0aWFsPXt7IHg6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICBhbmltYXRlPXt7IHg6IFwiMCVcIiwgd2lkdGg6IFwiMCVcIiB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMiwgZHVyYXRpb246IDAuOCwgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0xMCBiZy1kYXJrIGRhcms6YmctbGlnaHRcIlxyXG4gICAgICAgIGluaXRpYWw9e3sgeDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgeDogXCIwJVwiLCB3aWR0aDogXCIwJVwiIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC40LCBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkVmZmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlJlYWN0IiwiVHJhbnNpdGlvbkVmZmVjdCIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ4Iiwid2lkdGgiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TransitionEffect.js\n"));

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _components_TransitionEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TransitionEffect */ \"./src/components/TransitionEffect.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst NotFound = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Awesome Portfolio Built with Nextjs | 404 Page \"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Explore CodeBucks's Next.js developer portfolio and    discover the latest webapp projects and software engineering articles.    Showcase your skills as a full-stack developer and software engineer.\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"h-[75vh] w-full dark:bg-dark \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"relative !bg-transparent !pt-16 flex flex-col items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"404\",\n                            className: \" \"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Page Not Found.\",\n                            className: \" !text-7xl \"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/\",\n                            className: \"self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2   font-semibold text-light hover:border-dark hover:bg-light hover:text-dark    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light   \",\n                            children: \"Go To Home\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/pages/404.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = NotFound;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\nvar _c;\n$RefreshReg$(_c, \"NotFound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWjtBQUNvQjtBQUNoQztBQUNBO0FBQ0g7QUFFMUIsTUFBTU0sV0FBVztJQUNmLHFCQUNFOzswQkFDRSw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ0k7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFLWiw4REFBQ1Isb0VBQWdCQTs7Ozs7MEJBQ2pCLDhEQUFDUztnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ1gsMERBQU1BO29CQUFDVyxXQUFVOztzQ0FDaEIsOERBQUNaLGdFQUFZQTs0QkFBQ2EsTUFBSzs0QkFBTUQsV0FBVTs7Ozs7O3NDQUNuQyw4REFBQ1osZ0VBQVlBOzRCQUNYYSxNQUFLOzRCQUNMRCxXQUFVOzs7Ozs7c0NBRVosOERBQUNSLGtEQUFJQTs0QkFDSFUsTUFBSzs0QkFDTEYsV0FBVTtzQ0FJWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0tBakNNTjtBQW1DTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvUG9ydGZvbGlvLU5leHRKUy9zcmMvcGFnZXMvNDA0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9BbmltYXRlZFRleHRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgVHJhbnNpdGlvbkVmZmVjdCBmcm9tIFwiQC9jb21wb25lbnRzL1RyYW5zaXRpb25FZmZlY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QXdlc29tZSBQb3J0Zm9saW8gQnVpbHQgd2l0aCBOZXh0anMgfCA0MDQgUGFnZSA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkV4cGxvcmUgQ29kZUJ1Y2tzJ3MgTmV4dC5qcyBkZXZlbG9wZXIgcG9ydGZvbGlvIGFuZCBcclxuICAgICAgICBkaXNjb3ZlciB0aGUgbGF0ZXN0IHdlYmFwcCBwcm9qZWN0cyBhbmQgc29mdHdhcmUgZW5naW5lZXJpbmcgYXJ0aWNsZXMuIFxyXG4gICAgICAgIFNob3djYXNlIHlvdXIgc2tpbGxzIGFzIGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgYW5kIHNvZnR3YXJlIGVuZ2luZWVyLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VHJhbnNpdGlvbkVmZmVjdCAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJoLVs3NXZoXSB3LWZ1bGwgZGFyazpiZy1kYXJrIFwiPlxyXG4gICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicmVsYXRpdmUgIWJnLXRyYW5zcGFyZW50ICFwdC0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiNDA0XCIgY2xhc3NOYW1lPVwiIFwiIC8+XHJcbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0XHJcbiAgICAgICAgICAgIHRleHQ9XCJQYWdlIE5vdCBGb3VuZC5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgIXRleHQtN3hsIFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciAhbXQtNCBpbmxpbmUtYmxvY2sgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc29saWQgYmctZGFyayBweC00IHB5LTJcclxuICAgICAgICBmb250LXNlbWlib2xkIHRleHQtbGlnaHQgaG92ZXI6Ym9yZGVyLWRhcmsgaG92ZXI6YmctbGlnaHQgaG92ZXI6dGV4dC1kYXJrIFxyXG4gICAgICAgIGRhcms6YmctbGlnaHQgZGFyazp0ZXh0LWRhcmsgaG92ZXI6ZGFyazpiZy1kYXJrIGhvdmVyOmRhcms6dGV4dC1saWdodCBob3ZlcjpkYXJrOmJvcmRlci1saWdodFxyXG4gICAgICAgIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdvIFRvIEhvbWVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xyXG4iXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiTGF5b3V0IiwiVHJhbnNpdGlvbkVmZmVjdCIsIkhlYWQiLCJMaW5rIiwiUmVhY3QiLCJOb3RGb3VuZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsImNsYXNzTmFtZSIsInRleHQiLCJocmVmIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/404.js\n"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["pages/_app","main"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspaces%2FPortfolio-NextJS%2Fsrc%2Fpages%2F404.js&page=%2F404!")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);