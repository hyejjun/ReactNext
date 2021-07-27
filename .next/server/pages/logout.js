(function() {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.jsx":
/*!**************************!*\
  !*** ./pages/logout.jsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/context */ "./pages/store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






const logout = () => {
  const {
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_1__.default); // 로그아웃 버튼 누르면 logout... 나온다음에 1초뒤에 로그인 버튼으로 바뀜

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch({
      type: 'LOGOUT'
    });
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().back();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "logout...."
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (logout);

/***/ }),

/***/ "./pages/store/context.jsx":
/*!*********************************!*\
  !*** ./pages/store/context.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalState": function() { return /* binding */ initalState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  IsLogin: true
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/logout.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL2xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9zdG9yZS9jb250ZXh0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibG9nb3V0IiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwic2V0VGltZW91dCIsIlJvdXRlciIsImluaXRhbFN0YXRlIiwiSXNMb2dpbiIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQU07QUFBQ0M7QUFBRCxNQUFhQyxpREFBVSxDQUFDQyxtREFBRCxDQUE3QixDQURpQixDQUVqQjs7QUFDQUMsa0RBQVMsQ0FBQyxNQUFJO0FBQ1ZILFlBQVEsQ0FBQztBQUFDSSxVQUFJLEVBQUc7QUFBUixLQUFELENBQVI7QUFFQUMsY0FBVSxDQUFDLE1BQUk7QUFDWEMsNkRBQUE7QUFDSCxLQUZTLEVBRVIsSUFGUSxDQUFWO0FBR0gsR0FOUSxFQU1QLEVBTk8sQ0FBVDtBQVFBLHNCQUNJO0FBQUE7QUFBQSxtQkFESjtBQUtILENBaEJEOztBQW1CQSwrREFBZVAsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVPLE1BQU1RLFdBQVcsR0FBRztBQUN2QkMsU0FBTyxFQUFFO0FBRGMsQ0FBcEI7QUFJUCxNQUFNTixLQUFLLGdCQUFHTyxvREFBYSxDQUFDRixXQUFELENBQTNCO0FBRUEsK0RBQWVMLEtBQWYsRTs7Ozs7Ozs7Ozs7QUNSQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9sb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSBcIi4vc3RvcmUvY29udGV4dFwiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChTdG9yZSlcclxuICAgIC8vIOuhnOq3uOyVhOybgyDrsoTtirwg64iE66W066m0IGxvZ291dC4uLiDrgpjsmKjri6TsnYzsl5AgMey0iOuSpOyXkCDroZzqt7jsnbgg67KE7Yq87Jy866GcIOuwlOuAnFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGUgOiAnTE9HT1VUJ30pICAgICBcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBSb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICBsb2dvdXQuLi4uXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dvdXQiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbiAgICBJc0xvZ2luOiB0cnVlLFxyXG5cclxufVxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGFsU3RhdGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==