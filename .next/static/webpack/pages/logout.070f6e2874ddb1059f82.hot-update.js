self["webpackHotUpdate_N_E"]("pages/logout",{

/***/ "./pages/logout.jsx":
/*!**************************!*\
  !*** ./pages/logout.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/context */ "./pages/store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();





var logout = function logout() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_1__.default),
      dispatch = _useContext.dispatch; // 로그아웃 버튼 누르면 logout... 나온다음에 1초뒤에 로그인 버튼으로 바뀜


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    dispatch({
      type: 'LOGOUT'
    });
    setTimeout(function () {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().back();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "logout...."
  }, void 0, false);
};

_s(logout, "WYqMn4gf+FCDQR7cbNAJVAJRW0M=");

/* harmony default export */ __webpack_exports__["default"] = (logout);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9nb3V0LmpzeCJdLCJuYW1lcyI6WyJsb2dvdXQiLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsInR5cGUiLCJzZXRUaW1lb3V0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsb0JBQ0VDLGlEQUFVLENBQUNDLG1EQUFELENBRFo7QUFBQSxNQUNWQyxRQURVLGVBQ1ZBLFFBRFUsRUFFakI7OztBQUNBQyxrREFBUyxDQUFDLFlBQUk7QUFDVkQsWUFBUSxDQUFDO0FBQUNFLFVBQUksRUFBRztBQUFSLEtBQUQsQ0FBUjtBQUVBQyxjQUFVLENBQUMsWUFBSTtBQUNYQyw2REFBQTtBQUNILEtBRlMsRUFFUixJQUZRLENBQVY7QUFHSCxHQU5RLEVBTVAsRUFOTyxDQUFUO0FBUUEsc0JBQ0k7QUFBQTtBQUFBLG1CQURKO0FBS0gsQ0FoQkQ7O0dBQU1QLE07O0FBbUJOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ291dC4wNzBmNmUyODc0ZGRiMTA1OWY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3JlIGZyb20gXCIuL3N0b3JlL2NvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcbiAgICAvLyDroZzqt7jslYTsm4Mg67KE7Yq8IOuIhOultOuptCBsb2dvdXQuLi4g64KY7Jio64uk7J2M7JeQIDHstIjrkqTsl5Ag66Gc6re47J24IOuyhO2KvOycvOuhnCDrsJTrgJxcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlIDogJ0xPR09VVCd9KSAgICAgXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgUm91dGVyLmJhY2soKVxyXG4gICAgICAgIH0sMTAwMClcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgbG9nb3V0Li4uLlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==