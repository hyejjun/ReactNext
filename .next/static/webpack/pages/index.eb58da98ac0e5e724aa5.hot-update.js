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
})(["position:absolute;width:100%;left:0px;top:10vh;z-index:5;background:#fff;padding:5vh 0;& > ul{display:flex;flex-direction:column;}& > ul >li{margin-top:20px;text-align:center;}"]);
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
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-toggle",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {
        children: ["             ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2741"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2742"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2743"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2744"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uB300\uBD84\uB958\uBA54\uB2745"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZUb2dnbGUuanN4Il0sIm5hbWVzIjpbIlRvZ2dsZSIsIlN0eWxlZCIsIkFjY29yZGlvbiIsIk5hdlRvZ2dsZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoYW5kbGVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsdXdCQUFaO0tBQU1ELE07QUFvQ04sSUFBTUUsU0FBUyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3TEFBZjtNQUFNQyxTOztBQXNCTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCO0FBRG9CLGtCQUVVQywrQ0FBUSxDQUFDLEtBQUQsQ0FGbEI7QUFBQSxNQUViQyxPQUZhO0FBQUEsTUFFSkMsVUFGSTs7QUFJcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSTtBQUNyQkQsY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxNQUFEO0FBQUEsOEJBQ0k7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLFVBQUUsRUFBQyxZQUZQO0FBR0ksaUJBQVMsRUFBQyxZQUhkO0FBSUksZUFBTyxFQUFFRTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JO0FBQU8sZUFBTyxFQUFDLFlBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosZUFhSSw4REFBQyxTQUFEO0FBQUEsaURBQ0k7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQTJCSCxDQW5DRDs7R0FBTUosUzs7TUFBQUEsUztBQXFDTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYjU4ZGE5OGFjMGU1ZTcyNGFhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUb2dnbGUgPSBTdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yIDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlIHtcclxuICAgICAgICBkaXNwbGF5IDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICAgICAgd2lkdGggOiAyLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0IDogMnJlbTtcclxuICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgICAgIGN1cnNvciA6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlICsgbGFiZWwgPiBzcGFue1xyXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICBoZWlnaHQgOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZCA6ICMwMDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbiA6IGFsbCAuMzVzO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAubmF2LXRvZ2dsZSArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMSl7IHRvcCA6IDAgfVxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgyKXsgdG9wIDogNTAlOyB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVZKC01MCUpIH1cclxuICAgICYgPiAubmF2LXRvZ2dsZSArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMyl7IGJvdHRvbSA6IDAgfVxyXG5cclxuXHJcbiAgICAmID4gLm5hdi10b2dnbGU6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMSl7IHRvcCA6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7IH1cclxuICAgICYgPiAubmF2LXRvZ2dsZTpjaGVja2VkICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgyKXsgb3BhY2l0eSA6IDAgfVxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDMpeyBib3R0b20gOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHJvdGF0ZSgtNDVkZWcpOyB9XHJcbmBcclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQgOiAwcHg7XHJcbiAgICB0b3A6IDEwdmg7XHJcbiAgICB6LWluZGV4IDogNTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nIDogNXZoIDA7XHJcblxyXG4gICAgJiA+IHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiB1bCA+bGkge1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgTmF2VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgLy8g7IOB7YOc6rCS7J2EIOyEpOygle2VqFxyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCk9PntcclxuICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXYtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgey8qIOuplOuJtOyDneyEsSAqL31cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24+ICAgICAgICAgICAgIHsvKiBzdHlsZWQgY29tcG9uZW50IOuKlCBwcm9wcyDqsJLsnYQg7KSEIOyImCDsnojri6QuKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+64yA67aE66WY66mU64m0MTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7rjIDrtoTrpZjrqZTribQyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuuMgOu2hOulmOuplOuJtDM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+64yA67aE66WY66mU64m0NDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7rjIDrtoTrpZjrqZTribQ1PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDwvVG9nZ2xlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZUb2dnbGUiXSwic291cmNlUm9vdCI6IiJ9