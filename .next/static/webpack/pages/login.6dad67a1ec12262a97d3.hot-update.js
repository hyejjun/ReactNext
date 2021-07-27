self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/FormLayout.jsx":
/*!***********************************!*\
  !*** ./components/FormLayout.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\components\\FormLayout.jsx",
    _this = undefined;

function _templateObject() {
  var data = (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    width:100vw;\n    height:100vh;\n    background:#eee;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n\n    & > div {\n        width:300px;\n        height:500px;\n        background:#fff;\n        padding:20px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// 회원가입, 로그인일 때만 쓰는 폼 이라고 생각하면됨 - 요즘 트랜드는 개별 페이지로 되어있음 그리고 위에 헤더부분이 없음
 //import styled from './FormLayout.module.css'        // 객체 형태로 만들어짐

var Background = Styled.div(_templateObject());
_c = Background;

var FormLayout = function FormLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: function onClick() {
            next_router__WEBPACK_IMPORTED_MODULE_2___default().back();
          },
          children: "\uB4A4\uB85C\uAC00\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c2 = FormLayout;
/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

var _c, _c2;

$RefreshReg$(_c, "Background");
$RefreshReg$(_c2, "FormLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiU3R5bGVkIiwiZGl2IiwiRm9ybUxheW91dCIsImNoaWxkcmVuIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUdBLElBQU1BLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUFoQjtLQUFNRixVOztBQWlCTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNqQyxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBRSxtQkFBTTtBQUFFQyxtRUFBQTtBQUFlLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUtELFFBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBVUgsQ0FYRDs7TUFBTUQsVTtBQWFOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjZkYWQ2N2ExZWMxMjI2MmE5N2QzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDtmozsm5DqsIDsnoUsIOuhnOq3uOyduOydvCDrlYzrp4wg7JOw64qUIO2PvCDsnbTrnbzqs6Ag7IOd6rCB7ZWY66m065CoIC0g7JqU7KaYIO2KuOuenOuTnOuKlCDqsJzrs4Qg7Y6Y7J207KeA66GcIOuQmOyWtOyeiOydjCDqt7jrpqzqs6Ag7JyE7JeQIO2XpOuNlOu2gOu2hOydtCDsl4bsnYxcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG4vL2ltcG9ydCBzdHlsZWQgZnJvbSAnLi9Gb3JtTGF5b3V0Lm1vZHVsZS5jc3MnICAgICAgICAvLyDqsJ3ssrQg7ZiV7YOc66GcIOunjOuTpOyWtOynkFxyXG5cclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBTdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIGhlaWdodDo1MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgRm9ybUxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBSb3V0ZXIuYmFjaygpIH19PuuSpOuhnOqwgOq4sDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9