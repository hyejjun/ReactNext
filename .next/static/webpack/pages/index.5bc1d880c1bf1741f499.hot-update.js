self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavToggle.jsx":
/*!**********************************!*\
  !*** ./components/NavToggle.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\components\\NavToggle.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var Toggle = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "NavToggle__Toggle",
  componentId: "sc-1oox2ki-0"
})(["background:transparent;border-color:transparent;& > .nav-toggle{display:none;}& > .nav-toggle + label{display:block;width:2.5rem;height:2rem;position:relative;cursor:pointer;}& > .nav-toggle + label > span{display:block;position:absolute;width:100%;height:5px;border-radius:30px;background:#000;transition:all .35s;}& > .nav-toggle + label > span:nth-child(1){top:0}& > .nav-toggle + label > span:nth-child(2){top:50%;transform:translateY(-50%)}& > .nav-toggle + label > span:nth-child(3){bottom:0}& > .nav-toggle:checked + label > span:nth-child(1){top:50%;transform:translateY(-50%) rotate(45deg);}& > .nav-toggle:checked + label > span:nth-child(2){opacity:0}& > .nav-toggle:checked + label > span:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-45deg);}"]);
_c = Toggle;
var Accordion = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "NavToggle__Accordion",
  componentId: "sc-1oox2ki-1"
})(["position:absolute;width:100%;left:0px;top:10vh;z-index:5;background:#fff;padding:5vh 0;display:", ";display:", ";& > ul{display:flex;flex-direction:column;}& > ul >li{margin-top:20px;text-align:center;}"], function (props) {
  props.flag ? '' : '';
}, function (props) {
  return props.flag;
});
_c2 = Accordion;

var NavToggle = function NavToggle() {
  _s();

  // 상태값을 설정함
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var handleToggle = function handleToggle() {
    setVisible(!visible);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Toggle, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "checkbox",
        id: "nav-toggle",
        className: "nav-toggle",
        onClick: handleToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-toggle",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {
        flag: visible,
        children: ["             ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2741"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2742"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2743"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2744"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2745"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(NavToggle, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c3 = NavToggle;
/* harmony default export */ __webpack_exports__["default"] = (NavToggle);

var _c, _c2, _c3;

$RefreshReg$(_c, "Toggle");
$RefreshReg$(_c2, "Accordion");
$RefreshReg$(_c3, "NavToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZUb2dnbGUuanN4Il0sIm5hbWVzIjpbIlRvZ2dsZSIsIlN0eWxlZCIsIkFjY29yZGlvbiIsInByb3BzIiwiZmxhZyIsIk5hdlRvZ2dsZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoYW5kbGVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsdXdCQUFaO0tBQU1ELE07QUFvQ04sSUFBTUUsU0FBUyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtTkFVQyxVQUFDRSxLQUFELEVBQVM7QUFBRUEsT0FBSyxDQUFDQyxJQUFOLEdBQWEsRUFBYixHQUFrQixFQUFuQjtBQUF1QixDQVZsQyxFQVdDLFVBQUFELEtBQUs7QUFBQSxTQUFHQSxLQUFLLENBQUNDLElBQVQ7QUFBQSxDQVhOLENBQWY7TUFBTUYsUzs7QUEwQk4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQjtBQURvQixrQkFFVUMsK0NBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFYkMsT0FGYTtBQUFBLE1BRUpDLFVBRkk7O0FBSXBCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJELGNBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsTUFBRDtBQUFBLDhCQUNJO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxVQUFFLEVBQUMsWUFGUDtBQUdJLGlCQUFTLEVBQUMsWUFIZDtBQUlJLGVBQU8sRUFBRUU7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSTtBQUFPLGVBQU8sRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBYUksOERBQUMsU0FBRDtBQUFXLFlBQUksRUFBSUYsT0FBbkI7QUFBQSxpREFDSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBMkJILENBbkNEOztHQUFNRixTOztNQUFBQSxTO0FBcUNOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViYzFkODgwYzFiZjE3NDFmNDk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVG9nZ2xlID0gU3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvciA6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICYgPiAubmF2LXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheSA6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlICsgbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoIDogMi41cmVtO1xyXG4gICAgICAgIGhlaWdodCA6IDJyZW07XHJcbiAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAubmF2LXRvZ2dsZSArIGxhYmVsID4gc3BhbntcclxuICAgICAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0IDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQgOiAjMDAwO1xyXG4gICAgICAgIHRyYW5zaXRpb24gOiBhbGwgLjM1cztcclxuICAgIH1cclxuXHJcbiAgICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDEpeyB0b3AgOiAwIH1cclxuICAgICYgPiAubmF2LXRvZ2dsZSArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMil7IHRvcCA6IDUwJTsgdHJhbnNmb3JtIDogdHJhbnNsYXRlWSgtNTAlKSB9XHJcbiAgICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDMpeyBib3R0b20gOiAwIH1cclxuXHJcblxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDEpeyB0b3AgOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpOyB9XHJcbiAgICAmID4gLm5hdi10b2dnbGU6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMil7IG9wYWNpdHkgOiAwIH1cclxuICAgICYgPiAubmF2LXRvZ2dsZTpjaGVja2VkICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgzKXsgYm90dG9tIDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKSByb3RhdGUoLTQ1ZGVnKTsgfVxyXG5gXHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0IDogMHB4O1xyXG4gICAgdG9wOiAxMHZoO1xyXG4gICAgei1pbmRleCA6IDU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZyA6IDV2aCAwO1xyXG5cclxuICAgIC8qIGphdmFzY3JpcHQg7JiB7Jet7J2064ukIC0g7JWE7L2U65SU7Ja47J20IHZpc2libGUg6rCS7JeQIOuUsOudvCDrs7TsnbTqs6Ag7JWI67O07J206rKM64GUIO2VqCAqL1xyXG4gICAgZGlzcGxheSA6ICR7KHByb3BzKT0+eyhwcm9wcy5mbGFnID8gJycgOiAnJyl9fTtcclxuICAgIGRpc3BsYXk6ICAke3Byb3BzPT4ocHJvcHMuZmxhZyl9O1xyXG5cclxuICAgICYgPiB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAmID4gdWwgPmxpIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgfVxyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IE5hdlRvZ2dsZSA9ICgpID0+IHtcclxuICAgIC8vIOyDge2DnOqwkuydhCDshKTsoJXtlahcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXYtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgey8qIOuplOuJtOyDneyEsSAqL31cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gZmxhZyA9IHt2aXNpYmxlfT4gICAgICAgICAgICAgey8qIHN0eWxlZCBjb21wb25lbnQg64qUIHByb3BzIOqwkuydhCDspIQg7IiYIOyeiOuLpC4qL31cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7rjIDrtoTrpZjrqZTribQxPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuuMgOu2hOulmOuplOuJtDI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+64yA67aE66WY66mU64m0MzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7rjIDrtoTrpZjrqZTribQ0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuuMgOu2hOulmOuplOuJtDU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgPC9Ub2dnbGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=