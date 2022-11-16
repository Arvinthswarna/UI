"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \" Welcome to Next.js !!!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\UI\\\\next-js\\\\pages\\\\index.js\",\n                lineNumber: 4,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" Next Count : \",\n                    props.count,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\UI\\\\next-js\\\\pages\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps(context) {\n    const res = await fetch(\"https://api.github.com/repos/vercel/next.js\");\n    const json = await res.json();\n    return {\n        props: {\n            count: json.size\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQSxTQUFTQSxRQUFRLENBQUNDLEtBQUssRUFBQztJQUNwQixxQkFDSjs7MEJBQ0EsOERBQUNDLEtBQUc7MEJBQUMseUJBQXVCOzs7OztvQkFBTTswQkFDbEMsOERBQUNDLElBQUU7O29CQUFDLGdCQUFjO29CQUFDRixLQUFLLENBQUNHLEtBQUs7b0JBQUMsR0FBQzs7Ozs7O29CQUFLOztvQkFDbEMsQ0FDRDtBQUNGLENBQUM7QUFJTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBQztJQUN6QyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLDZDQUE2QyxDQUFDO0lBQ3ZFLE1BQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNFLElBQUksRUFBRTtJQUM3QixPQUFNO1FBQ0ZSLEtBQUssRUFBRTtZQUNIRyxLQUFLLEVBQUVLLElBQUksQ0FBQ0MsSUFBSTtTQUNuQjtLQUNKO0FBQ0wsQ0FBQztBQUVELGlFQUFlVixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBIb21lUGFnZShwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbjw+XHJcbjxkaXY+IFdlbGNvbWUgdG8gTmV4dC5qcyAhISE8L2Rpdj5cclxuPGgyPiBOZXh0IENvdW50IDoge3Byb3BzLmNvdW50fSA8L2gyPlxyXG48Lz5cclxuICkgXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2ggKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzJylcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNvdW50OiBqc29uLnNpemVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsImRpdiIsImgyIiwiY291bnQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();