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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst skills = [\n    \"Bioinformatics\",\n    \"Molecular Modeling\",\n    \"Drug Designing\",\n    \"Molecular Dynamics\",\n    \"Python\",\n    \"R\",\n    \"Multiomics\",\n    \"NGS\",\n    \"ML/AI\",\n    \"Bash\",\n    \"JavaScript\",\n    \"Flask\",\n    \"Nextflow\",\n    \"Snakemake\",\n    \"Git\",\n    \"Docker/Singularity\",\n    \"Web Dev\"\n];\nconst Hexagon = (param)=>{\n    let { name } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"flex items-center justify-center text-center w-[120px] h-[104px] bg-dark text-light    rounded-lg shadow-md dark:bg-light dark:text-dark   lg:w-[100px] lg:h-[86px] md:w-[80px] md:h-[69px] sm:w-[70px] sm:h-[60px]   \",\n        whileHover: {\n            scale: 1.1\n        },\n        initial: {\n            opacity: 0,\n            scale: 0.8\n        },\n        whileInView: {\n            opacity: 1,\n            scale: 1\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"font-semibold\",\n            children: name\n        }, void 0, false, {\n            fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Hexagon;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-800 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-6xl mb-10 text-center text-dark dark:text-light\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-7 gap-x-2 gap-y-3 items-center justify-center lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3\",\n                style: {\n                    gridTemplateRows: \"repeat(auto-fit, minmax(100px, 1fr))\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hexagon, {\n                        name: \"Skills\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    skills.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hexagon, {\n                            name: skill\n                        }, index, false, {\n                            fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Portfolio-NextJS/src/components/Skills.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Skills;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"Hexagon\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBRTFCLE1BQU1FLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ3ZCLHFCQUNFLDhEQUFDSixpREFBTUEsQ0FBQ0ssR0FBRztRQUNUQyxXQUFVO1FBSVZDLFlBQVk7WUFBRUMsT0FBTztRQUFJO1FBQ3pCQyxTQUFTO1lBQUVDLFNBQVM7WUFBR0YsT0FBTztRQUFJO1FBQ2xDRyxhQUFhO1lBQUVELFNBQVM7WUFBR0YsT0FBTztRQUFFO1FBQ3BDSSxZQUFZO1lBQUVDLFVBQVU7UUFBSTtrQkFFNUIsNEVBQUNDO1lBQUtSLFdBQVU7c0JBQWlCRjs7Ozs7Ozs7Ozs7QUFHdkM7S0FmTUQ7QUFpQk4sTUFBTVksU0FBUztJQUNiLHFCQUNFLDhEQUFDVjtRQUFJQyxXQUFVOzswQkFFYiw4REFBQ1U7Z0JBQUdWLFdBQVU7MEJBQWlFOzs7Ozs7MEJBSy9FLDhEQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVlcsT0FBTztvQkFDTEMsa0JBQWtCO2dCQUNwQjs7a0NBR0EsOERBQUNmO3dCQUFRQyxNQUFLOzs7Ozs7b0JBR2JGLE9BQU9pQixHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDbEI7NEJBQW9CQyxNQUFNZ0I7MkJBQWJDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QjtNQXpCTU47QUEyQk4saUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL1BvcnRmb2xpby1OZXh0SlMvc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNraWxscyA9IFtcclxuICBcIkJpb2luZm9ybWF0aWNzXCIsXHJcbiAgXCJNb2xlY3VsYXIgTW9kZWxpbmdcIixcclxuICBcIkRydWcgRGVzaWduaW5nXCIsXHJcbiAgXCJNb2xlY3VsYXIgRHluYW1pY3NcIixcclxuICBcIlB5dGhvblwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiTXVsdGlvbWljc1wiLFxyXG4gIFwiTkdTXCIsXHJcbiAgXCJNTC9BSVwiLFxyXG4gIFwiQmFzaFwiLFxyXG4gIFwiSmF2YVNjcmlwdFwiLFxyXG4gIFwiRmxhc2tcIixcclxuICBcIk5leHRmbG93XCIsXHJcbiAgXCJTbmFrZW1ha2VcIixcclxuICBcIkdpdFwiLFxyXG4gIFwiRG9ja2VyL1Npbmd1bGFyaXR5XCIsXHJcbiAgXCJXZWIgRGV2XCIsXHJcbl07XHJcblxyXG5jb25zdCBIZXhhZ29uID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHctWzEyMHB4XSBoLVsxMDRweF0gYmctZGFyayB0ZXh0LWxpZ2h0IFxyXG4gICAgICByb3VuZGVkLWxnIHNoYWRvdy1tZCBkYXJrOmJnLWxpZ2h0IGRhcms6dGV4dC1kYXJrXHJcbiAgICAgIGxnOnctWzEwMHB4XSBsZzpoLVs4NnB4XSBtZDp3LVs4MHB4XSBtZDpoLVs2OXB4XSBzbTp3LVs3MHB4XSBzbTpoLVs2MHB4XVxyXG4gICAgICBcIlxyXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XHJcbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIHB5LTEwXCI+XHJcbiAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTZ4bCBtYi0xMCB0ZXh0LWNlbnRlciB0ZXh0LWRhcmsgZGFyazp0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgU2tpbGxzXHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICB7LyogSGV4YWdvbmFsIEdyaWQgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy03IGdhcC14LTIgZ2FwLXktMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6Z3JpZC1jb2xzLTUgbWQ6Z3JpZC1jb2xzLTQgc206Z3JpZC1jb2xzLTNcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBcInJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7LyogQ2VudHJhbCBIZXhhZ29uICovfVxyXG4gICAgICAgIDxIZXhhZ29uIG5hbWU9XCJTa2lsbHNcIiAvPlxyXG5cclxuICAgICAgICB7LyogU2tpbGwgSGV4YWdvbnMgKi99XHJcbiAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEhleGFnb24ga2V5PXtpbmRleH0gbmFtZT17c2tpbGx9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlJlYWN0Iiwic2tpbGxzIiwiSGV4YWdvbiIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3BhbiIsIlNraWxscyIsImgyIiwic3R5bGUiLCJncmlkVGVtcGxhdGVSb3dzIiwibWFwIiwic2tpbGwiLCJpbmRleCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});