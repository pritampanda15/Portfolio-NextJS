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

/***/ "./src/components/Experience.js":
/*!**************************************!*\
  !*** ./src/components/Experience.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _LiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LiIcon */ \"./src/components/LiIcon.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst Details = (param)=>{\n    let { position, company, companyLink, time, address, work } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        ref: ref,\n        className: \"my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LiIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                reference: ref\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    y: 50\n                },\n                whileInView: {\n                    y: 0\n                },\n                transition: {\n                    duration: 0.5,\n                    type: \"spring\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"capitalize font-bold text-2xl sm:text-xl xs:text-lg\",\n                        children: [\n                            position,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"capitalize text-primary dark:text-primaryDark\",\n                                href: companyLink,\n                                target: \"_blank\",\n                                children: [\n                                    \"@\",\n                                    company\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm\",\n                        children: [\n                            time,\n                            \" | \",\n                            address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-medium w-full md:text-sm\",\n                        children: [\n                            \" \",\n                            work\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Details, \"QMBuJFIdzLIeqBcFwhMf246mjOM=\");\n_c = Details;\nconst Experience = ()=>{\n    _s1();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"start end\",\n            \"center start\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-64\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16\",\n                children: \"Experience\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"relative w-[75%] mx-auto lg:w-[90%] md:w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark    origin-top  dark:bg-primaryDark dark:shadow-3xl\",\n                        style: {\n                            scaleY: scrollYProgress\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"w-full flex flex-col items-start justify-between ml-4 xs:ml-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                                position: \"Postdoctoral Scholar\",\n                                company: \"Stanford University\",\n                                companyLink: \"https://profiles.stanford.edu/pritam-panda\",\n                                time: \"Jan 2025-present\",\n                                address: \"California, USA\",\n                                work: \"Spearheaded innovative research at the department of Anesthesiology, Perioperative and Pain Medicine, Stanford University School of Medicine focused on the design of battlefield-optimized anesthetics using AI-driven protein design, molecular dynamics simulations, and computational drug design to enhance anesthetic efficacy and adaptability in extreme conditions.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                                position: \"Bioinformatician\",\n                                company: \"German Cancer Research Center DKFZ\",\n                                companyLink: \"https://www.dkfz.de/en/index.html\",\n                                time: \"July 2023-Dec 2024\",\n                                address: \"Heidelberg, Germany\",\n                                work: \"Managed large-scale big data projects, automating NGS analysis pipelines, optimizing sequencing workflows with the DKFZ One Touch Pipeline database and leading multidisciplinary teams. Translating/piloting common bioinformatics tools to applications suitable for non-bioinformatics biologists and clinicians to query and interpret the molecular/clinical data.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                                position: \"Bioinformatics Engineer | UI/UX Designer\",\n                                company: \"Helmholtz-Institute for Translational Oncology Mainz (HI-TRON)\",\n                                companyLink: \"https://hi-tron.dkfz.de/research-support/platforms/data-architecture-platform.html\",\n                                time: \"July 2023-Dec 2024\",\n                                address: \"Mainz, Germany\",\n                                work: \"Implemented the HI-TRON data portal backend & frontend, enhancing data accessibility and user experience through MOLGENIS, VueJs and FAIR practices & and collect feedback and feature requirements from researchers including biologists, clinical trial designers and clinicians.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                                position: \"Affiliated Researcher\",\n                                company: \"Karolinska Institute\",\n                                companyLink: \"https://ki.se/en/research/research-areas-centres-and-networks/research-groups/johan-frostegards-research-group#tab-projects\",\n                                time: \"Mar 2021-Mar 2023\",\n                                address: \"Stockholm, Sweden.\",\n                                work: \"Implemented immunoinformatics pipelines for modeling in-house antibody clones, enabling antibody profiling and simulation to understand the immunomodulatory effects in cardiovascular-related disorders. Enhanced patient stratification and biomarker selection in clinical trials by developing novel predictive models using statistical techniques and machine learning on complex clinical data, including genomic data and antibody clones from patient samples.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                                position: \"Doctoral Researcher\",\n                                company: \"Uppsala University\",\n                                companyLink: \"http://uu.diva-portal.org/smash/person.jsf?pid=authority-person%3A74646&dswid=-5239\",\n                                time: \"Nov 2018-Mar 2023\",\n                                address: \"Seattle, WA.\",\n                                work: \"Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                                position: \"Software Developer Intern\",\n                                company: \"Microsoft\",\n                                companyLink: \"https://microsoft.com\",\n                                time: \"Summer 2019\",\n                                address: \"Redmond, WA.\",\n                                work: \"Worked on a team responsible for developing new features for   Microsoft's Windows operating system, including implementing a new   user interface for a system settings panel and optimizing the   performance of a core system component.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                                position: \"Teaching Assistant\",\n                                company: \"MIT\",\n                                companyLink: \"https://mit.edu\",\n                                time: \"Fall 2018\",\n                                address: \"Massachusetts Ave, Cambridge, MA.\",\n                                work: \"Assisted in teaching a course on computer programming, held office   hours to help students with assignments, and graded exams and   assignments.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Portfolio-NextJS/src/components/Experience.js\",\n        lineNumber: 52,\n        columnNumber: 7\n    }, undefined);\n};\n_s1(Experience, \"u2weSeTti91IB/gkEb3kdMvK5B4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll\n    ];\n});\n_c1 = Experience;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);\nvar _c, _c1;\n$RefreshReg$(_c, \"Details\");\n$RefreshReg$(_c1, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUlmO0FBQ087QUFHOUIsTUFBTUssVUFBVTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3RFLE1BQU1DLE1BQU1YLDZDQUFNQSxDQUFDO0lBQ25CLHFCQUNFLDhEQUFDWTtRQUNDRCxLQUFLQTtRQUNMRSxXQUFVOzswQkFFViw4REFBQ1YsK0NBQU1BO2dCQUFDVyxXQUFXSDs7Ozs7OzBCQUNuQiw4REFBQ1YsaURBQU1BLENBQUNjLEdBQUc7Z0JBQ1RDLFNBQVM7b0JBQUVDLEdBQUc7Z0JBQUc7Z0JBQ2pCQyxhQUFhO29CQUFFRCxHQUFHO2dCQUFFO2dCQUNwQkUsWUFBWTtvQkFBRUMsVUFBVTtvQkFBS0MsTUFBTTtnQkFBUzs7a0NBRTVDLDhEQUFDQzt3QkFBR1QsV0FBVTs7NEJBQ1hSOzRCQUFVOzBDQUNYLDhEQUFDa0I7Z0NBQ0NWLFdBQVU7Z0NBQ1ZXLE1BQU1qQjtnQ0FDTmtCLFFBQVE7O29DQUNUO29DQUNHbkI7Ozs7Ozs7Ozs7Ozs7a0NBR04sOERBQUNvQjt3QkFBS2IsV0FBVTs7NEJBQ2JMOzRCQUFLOzRCQUFJQzs7Ozs7OztrQ0FFWiw4REFBQ2tCO3dCQUFFZCxXQUFVOzs0QkFBZ0M7NEJBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZEO0dBOUJNTjtLQUFBQTtBQWdDTixNQUFNd0IsYUFBYTs7SUFFakIsTUFBTWpCLE1BQU1YLDZDQUFNQSxDQUFDO0lBRW5CLE1BQU0sRUFBRTZCLGVBQWUsRUFBRSxHQUFHM0Isd0RBQVNBLENBQUM7UUFDcEN1QixRQUFRZDtRQUNSbUIsUUFBUTtZQUFDO1lBQWE7U0FBZTtJQUN2QztJQUVBLHFCQUVJLDhEQUFDZjtRQUFJRixXQUFVOzswQkFDYiw4REFBQ2tCO2dCQUFHbEIsV0FBVTswQkFBK0U7Ozs7OzswQkFJN0YsOERBQUNFO2dCQUFJSixLQUFLQTtnQkFBS0UsV0FBVTs7a0NBQ3ZCLDhEQUFDWixpREFBTUEsQ0FBQ2MsR0FBRzt3QkFDVEYsV0FBVTt3QkFFVm1CLE9BQU87NEJBQUVDLFFBQVFKO3dCQUFnQjs7Ozs7O2tDQUduQyw4REFBQ0s7d0JBQUdyQixXQUFVOzswQ0FDZCw4REFBQ1Q7Z0NBQ0dDLFVBQVM7Z0NBQ1RDLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE1BQUs7Ozs7OzswQ0FHUCw4REFBQ047Z0NBQ0NDLFVBQVM7Z0NBQ1RDLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE1BQUs7Ozs7OzswQ0FHUCw4REFBQ047Z0NBQ0NDLFVBQVM7Z0NBQ1RDLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE1BQUs7Ozs7OzswQ0FHUCw4REFBQ047Z0NBQ0NDLFVBQVM7Z0NBQ1RDLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE1BQUs7Ozs7OzswQ0FHUCw4REFBQ047Z0NBQ0NDLFVBQVM7Z0NBQ1RDLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE1BQUs7Ozs7OzswQ0FHUCw4REFBQ047Z0NBQ0NDLFVBQVM7Z0NBQ1RDLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE1BQUs7Ozs7OzswQ0FNUCw4REFBQ047Z0NBQ0NDLFVBQVM7Z0NBQ1RDLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQjtJQS9GTWtCOztRQUl3QjFCLG9EQUFTQTs7O01BSmpDMEI7QUFpR04saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL1BvcnRmb2xpby1OZXh0SlMvc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgbW90aW9uLFxyXG4gIHVzZVNjcm9sbCxcclxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGlJY29uIGZyb20gXCIuL0xpSWNvblwiO1xyXG5cclxuXHJcbmNvbnN0IERldGFpbHMgPSAoeyBwb3NpdGlvbiwgY29tcGFueSwgY29tcGFueUxpbmssIHRpbWUsIGFkZHJlc3MsIHdvcmsgfSkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9XCJteS04IGZpcnN0Om10LTAgbGFzdDptYi0wIHctWzYwJV0gbXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtZDp3LVs4MCVdXCJcclxuICAgID5cclxuICAgICAgPExpSWNvbiByZWZlcmVuY2U9e3JlZn0gLz5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBpbml0aWFsPXt7IHk6IDUwIH19XHJcbiAgICAgICAgd2hpbGVJblZpZXc9e3sgeTogMCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgdHlwZTogXCJzcHJpbmdcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgZm9udC1ib2xkIHRleHQtMnhsIHNtOnRleHQteGwgeHM6dGV4dC1sZ1wiPlxyXG4gICAgICAgICAge3Bvc2l0aW9ufXtcIiBcIn1cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5RGFya1wiXHJcbiAgICAgICAgICAgIGhyZWY9e2NvbXBhbnlMaW5rfVxyXG4gICAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEB7Y29tcGFueX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC1kYXJrLzc1IGZvbnQtbWVkaXVtIGRhcms6dGV4dC1saWdodC81MCB4czp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICB7dGltZX0gfCB7YWRkcmVzc31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdy1mdWxsIG1kOnRleHQtc21cIj4ge3dvcmt9PC9wPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBFeHBlcmllbmNlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xyXG4gICAgdGFyZ2V0OiByZWYsXHJcbiAgICBvZmZzZXQ6IFtcInN0YXJ0IGVuZFwiLCBcImNlbnRlciBzdGFydFwiXSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNjRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtOHhsIG1iLTMyIHctZnVsbCB0ZXh0LWNlbnRlciBtZDp0ZXh0LTZ4bCB4czp0ZXh0LTR4bCBtZDptYi0xNlwiPlxyXG4gICAgICAgICAgRXhwZXJpZW5jZVxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctWzc1JV0gbXgtYXV0byBsZzp3LVs5MCVdIG1kOnctZnVsbFwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC05IHRvcC0wIHctWzRweF0gbWQ6dy1bMnB4XSBtZDpsZWZ0LVszMHB4XSB4czpsZWZ0LVsyMHB4XSBoLWZ1bGwgYmctZGFyayBcclxuICAgICAgICAgICAgb3JpZ2luLXRvcCAgZGFyazpiZy1wcmltYXJ5RGFyayBkYXJrOnNoYWRvdy0zeGxcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBzY2FsZVk6IHNjcm9sbFlQcm9ncmVzcyB9fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtbC00IHhzOm1sLTJcIj5cclxuICAgICAgICAgIDxEZXRhaWxzXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJQb3N0ZG9jdG9yYWwgU2Nob2xhclwiXHJcbiAgICAgICAgICAgICAgY29tcGFueT1cIlN0YW5mb3JkIFVuaXZlcnNpdHlcIlxyXG4gICAgICAgICAgICAgIGNvbXBhbnlMaW5rPVwiaHR0cHM6Ly9wcm9maWxlcy5zdGFuZm9yZC5lZHUvcHJpdGFtLXBhbmRhXCJcclxuICAgICAgICAgICAgICB0aW1lPVwiSmFuIDIwMjUtcHJlc2VudFwiXHJcbiAgICAgICAgICAgICAgYWRkcmVzcz1cIkNhbGlmb3JuaWEsIFVTQVwiXHJcbiAgICAgICAgICAgICAgd29yaz1cIlNwZWFyaGVhZGVkIGlubm92YXRpdmUgcmVzZWFyY2ggYXQgdGhlIGRlcGFydG1lbnQgb2YgQW5lc3RoZXNpb2xvZ3ksIFBlcmlvcGVyYXRpdmUgYW5kIFBhaW4gTWVkaWNpbmUsIFN0YW5mb3JkIFVuaXZlcnNpdHkgU2Nob29sIG9mIE1lZGljaW5lIGZvY3VzZWQgb24gdGhlIGRlc2lnbiBvZiBiYXR0bGVmaWVsZC1vcHRpbWl6ZWQgYW5lc3RoZXRpY3MgdXNpbmcgQUktZHJpdmVuIHByb3RlaW4gZGVzaWduLCBtb2xlY3VsYXIgZHluYW1pY3Mgc2ltdWxhdGlvbnMsIGFuZCBjb21wdXRhdGlvbmFsIGRydWcgZGVzaWduIHRvIGVuaGFuY2UgYW5lc3RoZXRpYyBlZmZpY2FjeSBhbmQgYWRhcHRhYmlsaXR5IGluIGV4dHJlbWUgY29uZGl0aW9ucy5cIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPERldGFpbHNcclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cIkJpb2luZm9ybWF0aWNpYW5cIlxyXG4gICAgICAgICAgICAgIGNvbXBhbnk9XCJHZXJtYW4gQ2FuY2VyIFJlc2VhcmNoIENlbnRlciBES0ZaXCJcclxuICAgICAgICAgICAgICBjb21wYW55TGluaz1cImh0dHBzOi8vd3d3LmRrZnouZGUvZW4vaW5kZXguaHRtbFwiXHJcbiAgICAgICAgICAgICAgdGltZT1cIkp1bHkgMjAyMy1EZWMgMjAyNFwiXHJcbiAgICAgICAgICAgICAgYWRkcmVzcz1cIkhlaWRlbGJlcmcsIEdlcm1hbnlcIlxyXG4gICAgICAgICAgICAgIHdvcms9XCJNYW5hZ2VkIGxhcmdlLXNjYWxlIGJpZyBkYXRhIHByb2plY3RzLCBhdXRvbWF0aW5nIE5HUyBhbmFseXNpcyBwaXBlbGluZXMsIG9wdGltaXppbmcgc2VxdWVuY2luZyB3b3JrZmxvd3Mgd2l0aCB0aGUgREtGWiBPbmUgVG91Y2ggUGlwZWxpbmUgZGF0YWJhc2UgYW5kIGxlYWRpbmcgbXVsdGlkaXNjaXBsaW5hcnkgdGVhbXMuIFRyYW5zbGF0aW5nL3BpbG90aW5nIGNvbW1vbiBiaW9pbmZvcm1hdGljcyB0b29scyB0byBhcHBsaWNhdGlvbnMgc3VpdGFibGUgZm9yIG5vbi1iaW9pbmZvcm1hdGljcyBiaW9sb2dpc3RzIGFuZCBjbGluaWNpYW5zIHRvIHF1ZXJ5IGFuZCBpbnRlcnByZXQgdGhlIG1vbGVjdWxhci9jbGluaWNhbCBkYXRhLlwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RGV0YWlsc1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiQmlvaW5mb3JtYXRpY3MgRW5naW5lZXIgfCBVSS9VWCBEZXNpZ25lclwiXHJcbiAgICAgICAgICAgICAgY29tcGFueT1cIkhlbG1ob2x0ei1JbnN0aXR1dGUgZm9yIFRyYW5zbGF0aW9uYWwgT25jb2xvZ3kgTWFpbnogKEhJLVRST04pXCJcclxuICAgICAgICAgICAgICBjb21wYW55TGluaz1cImh0dHBzOi8vaGktdHJvbi5ka2Z6LmRlL3Jlc2VhcmNoLXN1cHBvcnQvcGxhdGZvcm1zL2RhdGEtYXJjaGl0ZWN0dXJlLXBsYXRmb3JtLmh0bWxcIlxyXG4gICAgICAgICAgICAgIHRpbWU9XCJKdWx5IDIwMjMtRGVjIDIwMjRcIlxyXG4gICAgICAgICAgICAgIGFkZHJlc3M9XCJNYWlueiwgR2VybWFueVwiXHJcbiAgICAgICAgICAgICAgd29yaz1cIkltcGxlbWVudGVkIHRoZSBISS1UUk9OIGRhdGEgcG9ydGFsIGJhY2tlbmQgJiBmcm9udGVuZCwgZW5oYW5jaW5nIGRhdGEgYWNjZXNzaWJpbGl0eSBhbmQgdXNlciBleHBlcmllbmNlIHRocm91Z2ggTU9MR0VOSVMsIFZ1ZUpzIGFuZCBGQUlSIHByYWN0aWNlcyAmIGFuZCBjb2xsZWN0IGZlZWRiYWNrIGFuZCBmZWF0dXJlIHJlcXVpcmVtZW50cyBmcm9tIHJlc2VhcmNoZXJzIGluY2x1ZGluZyBiaW9sb2dpc3RzLCBjbGluaWNhbCB0cmlhbCBkZXNpZ25lcnMgYW5kIGNsaW5pY2lhbnMuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxEZXRhaWxzXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJBZmZpbGlhdGVkIFJlc2VhcmNoZXJcIlxyXG4gICAgICAgICAgICAgIGNvbXBhbnk9XCJLYXJvbGluc2thIEluc3RpdHV0ZVwiXHJcbiAgICAgICAgICAgICAgY29tcGFueUxpbms9XCJodHRwczovL2tpLnNlL2VuL3Jlc2VhcmNoL3Jlc2VhcmNoLWFyZWFzLWNlbnRyZXMtYW5kLW5ldHdvcmtzL3Jlc2VhcmNoLWdyb3Vwcy9qb2hhbi1mcm9zdGVnYXJkcy1yZXNlYXJjaC1ncm91cCN0YWItcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgIHRpbWU9XCJNYXIgMjAyMS1NYXIgMjAyM1wiXHJcbiAgICAgICAgICAgICAgYWRkcmVzcz1cIlN0b2NraG9sbSwgU3dlZGVuLlwiXHJcbiAgICAgICAgICAgICAgd29yaz1cIkltcGxlbWVudGVkIGltbXVub2luZm9ybWF0aWNzIHBpcGVsaW5lcyBmb3IgbW9kZWxpbmcgaW4taG91c2UgYW50aWJvZHkgY2xvbmVzLCBlbmFibGluZyBhbnRpYm9keSBwcm9maWxpbmcgYW5kIHNpbXVsYXRpb24gdG8gdW5kZXJzdGFuZCB0aGUgaW1tdW5vbW9kdWxhdG9yeSBlZmZlY3RzIGluIGNhcmRpb3Zhc2N1bGFyLXJlbGF0ZWQgZGlzb3JkZXJzLiBFbmhhbmNlZCBwYXRpZW50IHN0cmF0aWZpY2F0aW9uIGFuZCBiaW9tYXJrZXIgc2VsZWN0aW9uIGluIGNsaW5pY2FsIHRyaWFscyBieSBkZXZlbG9waW5nIG5vdmVsIHByZWRpY3RpdmUgbW9kZWxzIHVzaW5nIHN0YXRpc3RpY2FsIHRlY2huaXF1ZXMgYW5kIG1hY2hpbmUgbGVhcm5pbmcgb24gY29tcGxleCBjbGluaWNhbCBkYXRhLCBpbmNsdWRpbmcgZ2Vub21pYyBkYXRhIGFuZCBhbnRpYm9keSBjbG9uZXMgZnJvbSBwYXRpZW50IHNhbXBsZXMuXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEZXRhaWxzXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJEb2N0b3JhbCBSZXNlYXJjaGVyXCJcclxuICAgICAgICAgICAgICBjb21wYW55PVwiVXBwc2FsYSBVbml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgICBjb21wYW55TGluaz1cImh0dHA6Ly91dS5kaXZhLXBvcnRhbC5vcmcvc21hc2gvcGVyc29uLmpzZj9waWQ9YXV0aG9yaXR5LXBlcnNvbiUzQTc0NjQ2JmRzd2lkPS01MjM5XCJcclxuICAgICAgICAgICAgICB0aW1lPVwiTm92IDIwMTgtTWFyIDIwMjNcIlxyXG4gICAgICAgICAgICAgIGFkZHJlc3M9XCJTZWF0dGxlLCBXQS5cIlxyXG4gICAgICAgICAgICAgIHdvcms9XCJXb3JrZWQgb24gYSB0ZWFtIHJlc3BvbnNpYmxlIGZvciBkZXZlbG9waW5nIEFtYXpvbidzIG1vYmlsZSBhcHAsIGluY2x1ZGluZyBpbXBsZW1lbnRpbmcgbmV3IGZlYXR1cmVzIHN1Y2ggYXMgcHJvZHVjdCByZWNvbW1lbmRhdGlvbnMgYW5kIHVzZXIgcmV2aWV3cywgYW5kIG9wdGltaXppbmcgdGhlIGFwcCdzIHBlcmZvcm1hbmNlIGFuZCByZWxpYWJpbGl0eS5cIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPERldGFpbHNcclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cIlNvZnR3YXJlIERldmVsb3BlciBJbnRlcm5cIlxyXG4gICAgICAgICAgICAgIGNvbXBhbnk9XCJNaWNyb3NvZnRcIlxyXG4gICAgICAgICAgICAgIGNvbXBhbnlMaW5rPVwiaHR0cHM6Ly9taWNyb3NvZnQuY29tXCJcclxuICAgICAgICAgICAgICB0aW1lPVwiU3VtbWVyIDIwMTlcIlxyXG4gICAgICAgICAgICAgIGFkZHJlc3M9XCJSZWRtb25kLCBXQS5cIlxyXG4gICAgICAgICAgICAgIHdvcms9XCJXb3JrZWQgb24gYSB0ZWFtIHJlc3BvbnNpYmxlIGZvciBkZXZlbG9waW5nIG5ldyBmZWF0dXJlcyBmb3JcclxuICAgICAgICAgICAgICBNaWNyb3NvZnQncyBXaW5kb3dzIG9wZXJhdGluZyBzeXN0ZW0sIGluY2x1ZGluZyBpbXBsZW1lbnRpbmcgYSBuZXdcclxuICAgICAgICAgICAgICB1c2VyIGludGVyZmFjZSBmb3IgYSBzeXN0ZW0gc2V0dGluZ3MgcGFuZWwgYW5kIG9wdGltaXppbmcgdGhlXHJcbiAgICAgICAgICAgICAgcGVyZm9ybWFuY2Ugb2YgYSBjb3JlIHN5c3RlbSBjb21wb25lbnQuXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEZXRhaWxzXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJUZWFjaGluZyBBc3Npc3RhbnRcIlxyXG4gICAgICAgICAgICAgIGNvbXBhbnk9XCJNSVRcIlxyXG4gICAgICAgICAgICAgIGNvbXBhbnlMaW5rPVwiaHR0cHM6Ly9taXQuZWR1XCJcclxuICAgICAgICAgICAgICB0aW1lPVwiRmFsbCAyMDE4XCJcclxuICAgICAgICAgICAgICBhZGRyZXNzPVwiTWFzc2FjaHVzZXR0cyBBdmUsIENhbWJyaWRnZSwgTUEuXCJcclxuICAgICAgICAgICAgICB3b3JrPVwiQXNzaXN0ZWQgaW4gdGVhY2hpbmcgYSBjb3Vyc2Ugb24gY29tcHV0ZXIgcHJvZ3JhbW1pbmcsIGhlbGQgb2ZmaWNlXHJcbiAgICAgICAgICAgICAgaG91cnMgdG8gaGVscCBzdHVkZW50cyB3aXRoIGFzc2lnbm1lbnRzLCBhbmQgZ3JhZGVkIGV4YW1zIGFuZFxyXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIm1vdGlvbiIsInVzZVNjcm9sbCIsIkxpSWNvbiIsIkRldGFpbHMiLCJwb3NpdGlvbiIsImNvbXBhbnkiLCJjb21wYW55TGluayIsInRpbWUiLCJhZGRyZXNzIiwid29yayIsInJlZiIsImxpIiwiY2xhc3NOYW1lIiwicmVmZXJlbmNlIiwiZGl2IiwiaW5pdGlhbCIsInkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJoMyIsImEiLCJocmVmIiwidGFyZ2V0Iiwic3BhbiIsInAiLCJFeHBlcmllbmNlIiwic2Nyb2xsWVByb2dyZXNzIiwib2Zmc2V0IiwiaDIiLCJzdHlsZSIsInNjYWxlWSIsInVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Experience.js\n"));

/***/ })

});