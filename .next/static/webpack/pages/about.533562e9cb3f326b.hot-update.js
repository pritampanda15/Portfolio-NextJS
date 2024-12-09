"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst skills = [\n    {\n        name: \"Bioinformatics\",\n        icon: \"🔬\"\n    },\n    {\n        name: \"Molecular Modeling\",\n        icon: \"🧬\"\n    },\n    {\n        name: \"Drug Designing\",\n        icon: \"💊\"\n    },\n    {\n        name: \"Molecular Dynamics\",\n        icon: \"🌊\"\n    },\n    {\n        name: \"Python\",\n        icon: \"🐍\"\n    },\n    {\n        name: \"R\",\n        icon: \"📊\"\n    },\n    {\n        name: \"Multiomics\",\n        icon: \"🧩\"\n    },\n    {\n        name: \"NGS\",\n        icon: \"🧬\"\n    },\n    {\n        name: \"ML/AI\",\n        icon: \"🤖\"\n    },\n    {\n        name: \"Bash\",\n        icon: \"💻\"\n    },\n    {\n        name: \"JavaScript\",\n        icon: \"📜\"\n    },\n    {\n        name: \"Flask\",\n        icon: \"🔥\"\n    },\n    {\n        name: \"Nextflow\",\n        icon: \"⏩\"\n    },\n    {\n        name: \"Snakemake\",\n        icon: \"🐍\"\n    },\n    {\n        name: \"Git\",\n        icon: \"🔧\"\n    },\n    {\n        name: \"Docker/Singularity\",\n        icon: \"🐳\"\n    },\n    {\n        name: \"Web Dev\",\n        icon: \"🌐\"\n    }\n];\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5 gap-10 p-10 md:grid-cols-2 sm:grid-cols-1\",\n                children: skills.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex flex-col items-center justify-center p-6 bg-dark text-light rounded-lg shadow-lg hover:shadow-xl   dark:bg-light dark:text-dark\",\n                        initial: {\n                            opacity: 0,\n                            y: 50\n                        },\n                        whileInView: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        viewport: {\n                            once: true\n                        },\n                        whileHover: {\n                            scale: 1.1,\n                            rotate: 2\n                        },\n                        transition: {\n                            duration: 0.3\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-4xl mb-4\",\n                                children: skill.icon\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold\",\n                                children: skill.name\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Skills;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBRTFCLE1BQU1FLFNBQVM7SUFDYjtRQUFFQyxNQUFNO1FBQWtCQyxNQUFNO0lBQUs7SUFDckM7UUFBRUQsTUFBTTtRQUFzQkMsTUFBTTtJQUFLO0lBQ3pDO1FBQUVELE1BQU07UUFBa0JDLE1BQU07SUFBSztJQUNyQztRQUFFRCxNQUFNO1FBQXNCQyxNQUFNO0lBQUs7SUFDekM7UUFBRUQsTUFBTTtRQUFVQyxNQUFNO0lBQUs7SUFDN0I7UUFBRUQsTUFBTTtRQUFLQyxNQUFNO0lBQUs7SUFDeEI7UUFBRUQsTUFBTTtRQUFjQyxNQUFNO0lBQUs7SUFDakM7UUFBRUQsTUFBTTtRQUFPQyxNQUFNO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFTQyxNQUFNO0lBQUs7SUFDNUI7UUFBRUQsTUFBTTtRQUFRQyxNQUFNO0lBQUs7SUFDM0I7UUFBRUQsTUFBTTtRQUFjQyxNQUFNO0lBQUs7SUFDakM7UUFBRUQsTUFBTTtRQUFTQyxNQUFNO0lBQUs7SUFDNUI7UUFBRUQsTUFBTTtRQUFZQyxNQUFNO0lBQUk7SUFDOUI7UUFBRUQsTUFBTTtRQUFhQyxNQUFNO0lBQUs7SUFDaEM7UUFBRUQsTUFBTTtRQUFPQyxNQUFNO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFzQkMsTUFBTTtJQUFLO0lBQ3pDO1FBQUVELE1BQU07UUFBV0MsTUFBTTtJQUFLO0NBQy9CO0FBRUQsTUFBTUMsU0FBUztJQUNiLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQW1FOzs7Ozs7MEJBR2pGLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWkwsT0FBT08sR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ1gsaURBQU1BLENBQUNRLEdBQUc7d0JBRVRELFdBQVU7d0JBRVZLLFNBQVM7NEJBQUVDLFNBQVM7NEJBQUdDLEdBQUc7d0JBQUc7d0JBQzdCQyxhQUFhOzRCQUFFRixTQUFTOzRCQUFHQyxHQUFHO3dCQUFFO3dCQUNoQ0UsVUFBVTs0QkFBRUMsTUFBTTt3QkFBSzt3QkFDdkJDLFlBQVk7NEJBQUVDLE9BQU87NEJBQUtDLFFBQVE7d0JBQUU7d0JBQ3BDQyxZQUFZOzRCQUFFQyxVQUFVO3dCQUFJOzswQ0FFNUIsOERBQUNDO2dDQUFLaEIsV0FBVTswQ0FBaUJHLE1BQU1OLElBQUk7Ozs7OzswQ0FDM0MsOERBQUNvQjtnQ0FBR2pCLFdBQVU7MENBQXlCRyxNQUFNUCxJQUFJOzs7Ozs7O3VCQVY1Q1E7Ozs7Ozs7Ozs7OztBQWdCakI7S0F6Qk1OO0FBMkJOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9Qb3J0Zm9saW8tTmV4dEpTL3NyYy9jb21wb25lbnRzL1NraWxscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBza2lsbHMgPSBbXHJcbiAgeyBuYW1lOiBcIkJpb2luZm9ybWF0aWNzXCIsIGljb246IFwi8J+UrFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGVjdWxhciBNb2RlbGluZ1wiLCBpY29uOiBcIvCfp6xcIiB9LFxyXG4gIHsgbmFtZTogXCJEcnVnIERlc2lnbmluZ1wiLCBpY29uOiBcIvCfkopcIiB9LFxyXG4gIHsgbmFtZTogXCJNb2xlY3VsYXIgRHluYW1pY3NcIiwgaWNvbjogXCLwn4yKXCIgfSxcclxuICB7IG5hbWU6IFwiUHl0aG9uXCIsIGljb246IFwi8J+QjVwiIH0sXHJcbiAgeyBuYW1lOiBcIlJcIiwgaWNvbjogXCLwn5OKXCIgfSxcclxuICB7IG5hbWU6IFwiTXVsdGlvbWljc1wiLCBpY29uOiBcIvCfp6lcIiB9LFxyXG4gIHsgbmFtZTogXCJOR1NcIiwgaWNvbjogXCLwn6esXCIgfSxcclxuICB7IG5hbWU6IFwiTUwvQUlcIiwgaWNvbjogXCLwn6SWXCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaFwiLCBpY29uOiBcIvCfkrtcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhU2NyaXB0XCIsIGljb246IFwi8J+TnFwiIH0sXHJcbiAgeyBuYW1lOiBcIkZsYXNrXCIsIGljb246IFwi8J+UpVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5leHRmbG93XCIsIGljb246IFwi4o+pXCIgfSxcclxuICB7IG5hbWU6IFwiU25ha2VtYWtlXCIsIGljb246IFwi8J+QjVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdpdFwiLCBpY29uOiBcIvCflKdcIiB9LFxyXG4gIHsgbmFtZTogXCJEb2NrZXIvU2luZ3VsYXJpdHlcIiwgaWNvbjogXCLwn5CzXCIgfSxcclxuICB7IG5hbWU6IFwiV2ViIERldlwiLCBpY29uOiBcIvCfjJBcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtOHhsIG10LTY0IHctZnVsbCB0ZXh0LWNlbnRlciBtZDp0ZXh0LTZ4bCBtZDptdC0zMlwiPlxyXG4gICAgICAgIFNraWxsc1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTUgZ2FwLTEwIHAtMTAgbWQ6Z3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTFcIj5cclxuICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTYgYmctZGFyayB0ZXh0LWxpZ2h0IHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bFxyXG4gICAgICAgICAgICBkYXJrOmJnLWxpZ2h0IGRhcms6dGV4dC1kYXJrXCJcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA1MCB9fVxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xLCByb3RhdGU6IDIgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTRcIj57c2tpbGwuaWNvbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj57c2tpbGwubmFtZX08L2gzPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsInNraWxscyIsIm5hbWUiLCJpY29uIiwiU2tpbGxzIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJza2lsbCIsImluZGV4IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJyb3RhdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzcGFuIiwiaDMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});