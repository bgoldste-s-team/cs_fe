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

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Navbar = (param)=>{\n    let { site  } = param;\n    // const { siteName, siteImgUrl }  = useContext(AppContext);\n    const siteName = site.name;\n    console.log(site);\n    console.log(site.pages);\n    const pages = site.pages;\n    console.log(pages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-primary sticky text-primary-content p-2  top-0 z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start \",\n                children: [\n                    site.logo_image_url ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: site.logo_image_url,\n                        className: \"w-20 h-20 rounded-full mr-2 bg-neutral-content\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 19\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: site.logo_image_url,\n                        className: \"w-20 h-20 rounded-full mr-2 bg-neutral-content\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 25,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl text-primary-content break-words px-0 mx-0 \",\n                        children: [\n                            \"     \",\n                            siteName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center sm:hidden \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"btn-md   btn-ghost self-center text-2xl text-primary-content break-words px-0 mx-0 \",\n                    children: siteName\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 32,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown dropdown-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            tabIndex: 0,\n                            className: \"btn btn-ghost  \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5  fill-primary stroke-accent\",\n                                \"stroke-width\": \"1.3\",\n                                viewBox: \"0 0 20 20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"SVGRepo_iconCarrier\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fill: \"\",\n                                            className: \"\",\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 182\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 153\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                lineNumber: 43,\n                                columnNumber: 23\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 41,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            tabIndex: 0,\n                            className: \"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 27\n                                    }, undefined)\n                                }, \"home\", false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 23\n                                }, undefined),\n                                pages.filter((p)=>p.show_in_navbar === true && !p.is_homepage).map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: p.slug,\n                                            children: p.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 31\n                                        }, undefined)\n                                    }, p.id, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 27\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 49,\n                            columnNumber: 19\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 39,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzZCO0FBRzdCLE1BQU1DLFNBQVMsU0FBWTtRQUFYLEVBQUNDLEtBQUksRUFBQztJQUdwQiw0REFBNEQ7SUFDNUQsTUFBTUMsV0FBV0QsS0FBS0UsSUFBSTtJQUV4QkMsUUFBUUMsR0FBRyxDQUFDSjtJQUNaRyxRQUFRQyxHQUFHLENBQUNKLEtBQUtLLEtBQUs7SUFDdEIsTUFBTUEsUUFBUUwsS0FBS0ssS0FBSztJQUN4QkYsUUFBUUMsR0FBRyxDQUFDQztJQUNkLHFCQUVJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFHWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUVQUCxLQUFLUSxjQUFjLGlCQUNuQiw4REFBQ0M7d0JBQUlDLEtBQUtWLEtBQUtRLGNBQWM7d0JBQUVELFdBQVU7Ozs7O2tEQUVyQyw4REFBQ0U7d0JBQUlDLEtBQUtWLEtBQUtRLGNBQWM7d0JBQUVELFdBQVU7Ozs7O2lDQUFtRDtrQ0FHcEcsOERBQUNULGtEQUFJQTt3QkFBQ2EsTUFBSzt3QkFBR0osV0FBVTs7NEJBQWdIOzRCQUFNTjs7Ozs7Ozs7Ozs7OzswQkFFbEosOERBQUNLO2dCQUFJQyxXQUFVOzBCQUVYLDRFQUFDVCxrREFBSUE7b0JBQUNhLE1BQUs7b0JBQUdKLFdBQVU7OEJBRW5CTjs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNLO2dCQUFJQyxXQUFVOzBCQUVYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBRVgsOERBQUNLOzRCQUFNQyxVQUFVOzRCQUFHTixXQUFVO3NDQUUxQiw0RUFBQ087Z0NBQUlDLE9BQU07Z0NBQTZCUixXQUFVO2dDQUFzQ1MsZ0JBQWE7Z0NBQU9DLFNBQVE7MENBQWMsNEVBQUNDO29DQUFFQyxJQUFHOzt3Q0FBc0I7c0RBQUMsOERBQUNDOzRDQUFLQyxNQUFLOzRDQUFHZCxXQUFXOzRDQUFHZSxhQUFVOzRDQUFVQyxHQUFFOzs7Ozs7d0NBQTRJOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNalcsOERBQUNDOzRCQUFHWCxVQUFVOzRCQUFHTixXQUFVOzs4Q0FDdkIsOERBQUNrQjs4Q0FDRyw0RUFBQzNCLGtEQUFJQTt3Q0FBQ2EsTUFBSztrREFBSTs7Ozs7O21DQURWOzs7OztnQ0FHUk4sTUFBTXFCLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsY0FBYyxLQUFLLElBQUksSUFBSSxDQUFDRCxFQUFFRSxXQUFXLEVBQUVDLEdBQUcsQ0FBRSxDQUFDSCxrQkFDbEUsOERBQUNGO2tEQUNHLDRFQUFDM0Isa0RBQUlBOzRDQUFDYSxNQUFNZ0IsRUFBRUksSUFBSTtzREFBR0osRUFBRUssS0FBSzs7Ozs7O3VDQUR2QkwsRUFBRVIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN2QztLQS9ETXBCO0FBaUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcz8zZDBlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmNvbnN0IE5hdmJhciA9ICh7c2l0ZX0pID0+IHtcblxuXG4gIC8vIGNvbnN0IHsgc2l0ZU5hbWUsIHNpdGVJbWdVcmwgfSAgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBzaXRlTmFtZSA9IHNpdGUubmFtZVxuXG4gICAgY29uc29sZS5sb2coc2l0ZSlcbiAgICBjb25zb2xlLmxvZyhzaXRlLnBhZ2VzKVxuICAgIGNvbnN0IHBhZ2VzID0gc2l0ZS5wYWdlcztcbiAgICBjb25zb2xlLmxvZyhwYWdlcylcbiAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgYmctcHJpbWFyeSBzdGlja3kgdGV4dC1wcmltYXJ5LWNvbnRlbnQgcC0yICB0b3AtMCB6LTUwXCI+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0IFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzaXRlLmxvZ29faW1hZ2VfdXJsID9cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzaXRlLmxvZ29faW1hZ2VfdXJsfSBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgcm91bmRlZC1mdWxsIG1yLTIgYmctbmV1dHJhbC1jb250ZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NpdGUubG9nb19pbWFnZV91cmx9IGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLWZ1bGwgbXItMiBiZy1uZXV0cmFsLWNvbnRlbnRcIiAvPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cImNsYXNzTmFtZT1cImJ0bi1tZCAgaGlkZGVuIHNtOmJsb2NrIGJ0bi1naG9zdCBzZWxmLWNlbnRlciB0ZXh0LWxnIGxnOnRleHQtMnhsIHRleHQtcHJpbWFyeS1jb250ZW50IGJyZWFrLXdvcmRzIHB4LTAgbXgtMCBcIj4gICAgIHtzaXRlTmFtZX08L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY2VudGVyIHNtOmhpZGRlbiBcIj5cbiAgICAgICAgICAgICAgey8qPGltZyBzcmM9e3NpdGVEYXRhLnNpdGVfaW1hZ2V9IGNsYXNzTmFtZT1cInctMTYgcm91bmRlZC1mdWxsIG1yLTJcIiAvPiovfVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiY2xhc3NOYW1lPVwiYnRuLW1kICAgYnRuLWdob3N0IHNlbGYtY2VudGVyIHRleHQtMnhsIHRleHQtcHJpbWFyeS1jb250ZW50IGJyZWFrLXdvcmRzIHB4LTAgbXgtMCBcIj5cblxuICAgICAgICAgICAgICAgICAge3NpdGVOYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kXCI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1lbmRcIj5cblxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0ICBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3ZnIHdpZHRoPVwiNjRweFwiIGhlaWdodD1cIjY0cHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxwYXRoIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTkgNGExIDEgMCAwMS0xIDFIMmExIDEgMCAwMTAtMmgxNmExIDEgMCAwMTEgMXptMCA2YTEgMSAwIDAxLTEgMUgyYTEgMSAwIDExMC0yaDE2YTEgMSAwIDAxMSAxem0tMSA3YTEgMSAwIDEwMC0ySDJhMSAxIDAgMTAwIDJoMTZ6XCI+PC9wYXRoPiA8L2c+PC9zdmc+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC01IHctNSAgZmlsbC1wcmltYXJ5IHN0cm9rZS1hY2NlbnRcIiBzdHJva2Utd2lkdGg9JzEuMycgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiAgPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8cGF0aCBmaWxsPVwiXCIgY2xhc3NOYW1lPSBcIlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE5IDRhMSAxIDAgMDEtMSAxSDJhMSAxIDAgMDEwLTJoMTZhMSAxIDAgMDExIDF6bTAgNmExIDEgMCAwMS0xIDFIMmExIDEgMCAxMTAtMmgxNmExIDEgMCAwMTEgMXptLTEgN2ExIDEgMCAxMDAtMkgyYTEgMSAwIDEwMCAyaDE2elwiPjwvcGF0aD4gPC9nPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cImgtNSB3LTUgc3Ryb2tlLWN1cnJlbnRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiAgc3Ryb2tlLXdpZHRoPVwiMlwiKi99XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgey8qPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHJvdW5kZWQtYnRuXCI+RHJvcGRvd248L2xhYmVsPiovfVxuICAgICAgICAgICAgICAgICAgey8qPHVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJtZW51IGRyb3Bkb3duLWNvbnRlbnQgICAgYmctcHJpbWFyeS1jb250ZW50IHRleHQtcHJpbWFyeSAgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IG14LWF1dG8gdy03MiBtdC00IHAtMFwiPiovfVxuXG4gICAgICAgICAgICAgICAgICA8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgbWVudSBwLTIgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsnaG9tZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFnZXMuZmlsdGVyKHAgPT4gcC5zaG93X2luX25hdmJhciA9PT0gdHJ1ZSAmJiAhcC5pc19ob21lcGFnZSkubWFwKCAocCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Auc2x1Z30+e3AudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG5cblxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgKVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiTmF2YmFyIiwic2l0ZSIsInNpdGVOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlcyIsImRpdiIsImNsYXNzTmFtZSIsImxvZ29faW1hZ2VfdXJsIiwiaW1nIiwic3JjIiwiaHJlZiIsImxhYmVsIiwidGFiSW5kZXgiLCJzdmciLCJ4bWxucyIsInN0cm9rZS13aWR0aCIsInZpZXdCb3giLCJnIiwiaWQiLCJwYXRoIiwiZmlsbCIsImZpbGwtcnVsZSIsImQiLCJ1bCIsImxpIiwiZmlsdGVyIiwicCIsInNob3dfaW5fbmF2YmFyIiwiaXNfaG9tZXBhZ2UiLCJtYXAiLCJzbHVnIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});