(function() {
var exports = {};
exports.id = "pages/join";
exports.ids = ["pages/join"];
exports.modules = {

/***/ "./components/FormLayout.jsx":
/*!***********************************!*\
  !*** ./components/FormLayout.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\components\\FormLayout.jsx";
// 회원가입, 로그인일 때만 쓰는 폼 이라고 생각하면됨 - 요즘 트랜드는 개별 페이지로 되어있음 그리고 위에 헤더부분이 없음
 //import styled from './FormLayout.module.css'        // 객체 형태로 만들어짐


const Background = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width:100vw;
    height:100vh;
    background:#eee;
    display:flex;
    align-items:center;
    justify-content:center;

    & > div {
        width:300px;
        height:400px;
        background:#fff;
        padding:20px;
    }
`;

const FormLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: () => {
            next_router__WEBPACK_IMPORTED_MODULE_1___default().back();
          },
          children: "\uB4A4\uB85C\uAC00\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./pages/join.jsx":
/*!************************!*\
  !*** ./pages/join.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\join.jsx";



const Join = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | join"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: "Join \uD398\uC774\uC9C0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/join.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9qb2luLmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiU3R5bGVkIiwiRm9ybUxheW91dCIsImNoaWxkcmVuIiwiUm91dGVyIiwiSm9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyw4REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZEE7O0FBaUJBLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNqQyxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUcsaUJBQU8sRUFBRSxNQUFNO0FBQUVDLG1FQUFBO0FBQWUsV0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFS0QsUUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFVSCxDQVhEOztBQWFBLCtEQUFlRCxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7O0FBRUEsTUFBTUcsSUFBSSxHQUFHLE1BQU07QUFDZixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxrQkFESjtBQVVILENBWEQ7O0FBYUEsK0RBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvam9pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIO2ajOybkOqwgOyehSwg66Gc6re47J247J28IOuVjOunjCDsk7DripQg7Y+8IOydtOudvOqzoCDsg53qsIHtlZjrqbTrkKggLSDsmpTsppgg7Yq4656c65Oc64qUIOqwnOuzhCDtjpjsnbTsp4DroZwg65CY7Ja07J6I7J2MIOq3uOumrOqzoCDsnITsl5Ag7Zek642U67aA67aE7J20IOyXhuydjFxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbi8vaW1wb3J0IHN0eWxlZCBmcm9tICcuL0Zvcm1MYXlvdXQubW9kdWxlLmNzcycgICAgICAgIC8vIOqwneyytCDtmJXtg5zroZwg66eM65Ok7Ja07KeQXHJcbmltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBTdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgRm9ybUxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHsgUm91dGVyLmJhY2soKSB9fT7rkqTroZzqsIDquLA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dCIsImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1MYXlvdXRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBKb2luID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIHwgam9pbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICBKb2luIO2OmOydtOyngFxyXG4gICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvaW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9