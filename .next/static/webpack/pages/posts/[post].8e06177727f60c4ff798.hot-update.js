self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./components/Accordion.jsx":
/*!**********************************!*\
  !*** ./components/Accordion.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\components\\Accordion.jsx",
    _this = undefined;


 // server 에서 이렇게 데이터가 들어왔다고 가정하고~

var menu = [{
  id: '1',
  category: 'HTML',
  url: '/posts/HTML'
}, {
  id: '2',
  category: 'HTML',
  url: '/posts/HTML'
}, {
  id: '3',
  category: 'CSS',
  url: '/posts/CSS'
}, {
  id: '4',
  category: 'JAVA',
  url: '/posts/JAVA'
}, {
  id: '5',
  category: 'JS',
  url: '/posts/5'
}];

var Accordion = function Accordion(_ref) {
  var visible = _ref.visible,
      handleToggle = _ref.handleToggle;

  // 여기서 NavToggle.jsx 에 있는 visible 값을 조작하기 위해서 handleToggle도 넘겨 받음. - 아코디언을 닫히고 열리게 하는 기능 
  var handelClick = function handelClick() {
    handleToggle();
  }; // 혹은 onClick 에 바로 handleToggle 써도 된다.


  var category = menu.map(function (v) {
    // v 는 객체를 반환해줌
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      onClick: handelClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
      flag: visible,
      children: ["             ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c = Accordion;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);
var AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "Accordion__AccordionMenu",
  componentId: "sc-wg3e6s-0"
})(["position:absolute;width:100%;left:0px;top:10vh;z-index:5;background:#fff;padding:5vh 0;display:", ";& > ul{display:flex;flex-direction:column;}& > ul >li{margin-top:20px;text-align:center;}"], function (props) {
  return props.flag ? 'block' : 'none';
});
_c2 = AccordionMenu;

var _c, _c2;

$RefreshReg$(_c, "Accordion");
$RefreshReg$(_c2, "AccordionMenu");

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


/***/ }),

/***/ "./components/NavToggle.jsx":
/*!**********************************!*\
  !*** ./components/NavToggle.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion */ "./components/Accordion.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\components\\NavToggle.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var Toggle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "NavToggle__Toggle",
  componentId: "sc-1oox2ki-0"
})(["background:transparent;border-color:transparent;& > .nav-toggle{display:none;}& > .nav-toggle + label{display:block;width:2.5rem;height:2rem;position:relative;cursor:pointer;}& > .nav-toggle + label > span{display:block;position:absolute;width:100%;height:5px;border-radius:30px;background:#000;transition:all .35s;}& > .nav-toggle + label > span:nth-child(1){top:0}& > .nav-toggle + label > span:nth-child(2){top:50%;transform:translateY(-50%)}& > .nav-toggle + label > span:nth-child(3){bottom:0}& > .nav-toggle:checked + label > span:nth-child(1){top:50%;transform:translateY(-50%) rotate(45deg);}& > .nav-toggle:checked + label > span:nth-child(2){opacity:0}& > .nav-toggle:checked + label > span:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-45deg);}"]);
_c = Toggle;

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
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-toggle",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Accordion__WEBPACK_IMPORTED_MODULE_2__.default, {
        visible: visible,
        handleToggle: handleToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(NavToggle, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c2 = NavToggle;
/* harmony default export */ __webpack_exports__["default"] = (NavToggle);

var _c, _c2;

$RefreshReg$(_c, "Toggle");
$RefreshReg$(_c2, "NavToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdlRvZ2dsZS5qc3giXSwibmFtZXMiOlsibWVudSIsImlkIiwiY2F0ZWdvcnkiLCJ1cmwiLCJBY2NvcmRpb24iLCJ2aXNpYmxlIiwiaGFuZGxlVG9nZ2xlIiwiaGFuZGVsQ2xpY2siLCJtYXAiLCJ2IiwiQWNjb3JkaW9uTWVudSIsIlN0eWxlZCIsInByb3BzIiwiZmxhZyIsIlRvZ2dsZSIsIk5hdlRvZ2dsZSIsInVzZVN0YXRlIiwic2V0VmlzaWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFFLEdBRFI7QUFFSUMsVUFBUSxFQUFFLE1BRmQ7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FEUyxFQU1UO0FBQ0lGLElBQUUsRUFBRSxHQURSO0FBRUlDLFVBQVEsRUFBRSxNQUZkO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBTlMsRUFXVDtBQUNJRixJQUFFLEVBQUUsR0FEUjtBQUVJQyxVQUFRLEVBQUUsS0FGZDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQVhTLEVBZ0JUO0FBQ0lGLElBQUUsRUFBRSxHQURSO0FBRUlDLFVBQVEsRUFBRSxNQUZkO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBaEJTLEVBcUJUO0FBQ0lGLElBQUUsRUFBRSxHQURSO0FBRUlDLFVBQVEsRUFBRSxJQUZkO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBckJTLENBQWI7O0FBNkJBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWdDO0FBQUEsTUFBN0JDLE9BQTZCLFFBQTdCQSxPQUE2QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBRTlDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUNyQkQsZ0JBQVk7QUFDZixHQUZELENBSDhDLENBTTlDOzs7QUFFQSxNQUFNSixRQUFRLEdBQUdGLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBTztBQUFPO0FBQ3BDLHdCQUNJO0FBQWUsYUFBTyxFQUFFRixXQUF4QjtBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFRSxDQUFDLENBQUNOLEdBQWQ7QUFBQSwrQkFDSTtBQUFBLG9CQUNLTSxDQUFDLENBQUNQO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFTTyxDQUFDLENBQUNSLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBU0gsR0FWZ0IsQ0FBakI7QUFhQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLGFBQUQ7QUFBZSxVQUFJLEVBQUVJLE9BQXJCO0FBQUEsK0NBQ0k7QUFBQSxrQkFDS0g7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFTSCxDQTlCRDs7S0FBTUUsUztBQWdDTiwrREFBZUEsU0FBZjtBQUVBLElBQU1NLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsc01BVUgsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFBNUI7QUFBQSxDQVZGLENBQW5CO01BQU1ILGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FTjtBQUNBO0FBQ0E7QUFFQSxJQUFNSSxNQUFNLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLHV3QkFBWjtLQUFNRyxNOztBQXFDTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCO0FBRG9CLGtCQUVVQywrQ0FBUSxDQUFDLEtBQUQsQ0FGbEI7QUFBQSxNQUViWCxPQUZhO0FBQUEsTUFFSlksVUFGSTs7QUFJcEIsTUFBTVgsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QlcsY0FBVSxDQUFDLENBQUNaLE9BQUYsQ0FBVjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxNQUFEO0FBQUEsOEJBQ0k7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLFVBQUUsRUFBQyxZQUZQO0FBR0ksaUJBQVMsRUFBQyxZQUhkO0FBSUksZUFBTyxFQUFFQztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JO0FBQU8sZUFBTyxFQUFDLFlBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosZUFhSSw4REFBQywrQ0FBRDtBQUFXLGVBQU8sRUFBRUQsT0FBcEI7QUFBNkIsb0JBQVksRUFBRUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBbUJILENBM0JEOztHQUFNUyxTOztNQUFBQSxTO0FBNkJOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS44ZTA2MTc3NzI3ZjYwYzRmZjc5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyBzZXJ2ZXIg7JeQ7IScIOydtOugh+qyjCDrjbDsnbTthLDqsIAg65Ok7Ja07JmU64uk6rOgIOqwgOygle2VmOqzoH5cclxuY29uc3QgbWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnSFRNTCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzL0hUTUwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdIVE1MJyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMvSFRNTCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICBjYXRlZ29yeTogJ0NTUycsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzL0NTUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc0JyxcclxuICAgICAgICBjYXRlZ29yeTogJ0pBVkEnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cy9KQVZBJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnSlMnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cy81J1xyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gKHsgdmlzaWJsZSAsIGhhbmRsZVRvZ2dsZSB9KSA9PiB7XHJcbiAgICBcclxuICAgIC8vIOyXrOq4sOyEnCBOYXZUb2dnbGUuanN4IOyXkCDsnojripQgdmlzaWJsZSDqsJLsnYQg7KGw7J6R7ZWY6riwIOychO2VtOyEnCBoYW5kbGVUb2dnbGXrj4Qg64SY6rKoIOuwm+ydjC4gLSDslYTsvZTrlJTslrjsnYQg64ur7Z6I6rOgIOyXtOumrOqyjCDtlZjripQg6riw64qlIFxyXG4gICAgY29uc3QgaGFuZGVsQ2xpY2sgPSAoKSA9PntcclxuICAgICAgICBoYW5kbGVUb2dnbGUoKVxyXG4gICAgfVxyXG4gICAgLy8g7Zi57J2AIG9uQ2xpY2sg7JeQIOuwlOuhnCBoYW5kbGVUb2dnbGUg7I2o64+EIOuQnOuLpC5cclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IG1lbnUubWFwKCh2KSA9PiB7ICAgICAgLy8gdiDripQg6rCd7LK066W8IOuwmO2ZmO2VtOykjFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3YuaWR9IG9uQ2xpY2s9e2hhbmRlbENsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3YudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3YuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEFjY29yZGlvbk1lbnUgZmxhZz17dmlzaWJsZX0+ICAgICAgICAgICAgIHsvKiBzdHlsZWQgY29tcG9uZW50IOuKlCBwcm9wcyDqsJLsnYQg7KSEIOyImCDsnojri6QuKi99XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25NZW51PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25cclxuXHJcbmNvbnN0IEFjY29yZGlvbk1lbnUgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0IDogMHB4O1xyXG4gICAgdG9wOiAxMHZoO1xyXG4gICAgei1pbmRleCA6IDU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZyA6IDV2aCAwO1xyXG5cclxuICAgIC8qIGphdmFzY3JpcHQg7JiB7Jet7J2064ukIC0g7JWE7L2U65SU7Ja47J20IHZpc2libGUg6rCS7JeQIOuUsOudvCDrs7TsnbTqs6Ag7JWI67O07J206rKM64GUIO2VqCAqL1xyXG4gICAgZGlzcGxheTogICR7cHJvcHMgPT4gKHByb3BzLmZsYWcgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcblxyXG4gICAgJiA+IHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiB1bCA+bGkge1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuIiwiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcclxuXHJcbmNvbnN0IFRvZ2dsZSA9IFN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3IgOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAmID4gLm5hdi10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXkgOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAubmF2LXRvZ2dsZSArIGxhYmVse1xyXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgICAgICB3aWR0aCA6IDIuNXJlbTtcclxuICAgICAgICBoZWlnaHQgOiAycmVtO1xyXG4gICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICAgICAgY3Vyc29yIDogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW57XHJcbiAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodCA6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kIDogIzAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uIDogYWxsIC4zNXM7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgxKXsgdG9wIDogMCB9XHJcbiAgICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDIpeyB0b3AgOiA1MCU7IHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVkoLTUwJSkgfVxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgzKXsgYm90dG9tIDogMCB9XHJcblxyXG5cclxuICAgICYgPiAubmF2LXRvZ2dsZTpjaGVja2VkICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgxKXsgdG9wIDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTsgfVxyXG4gICAgJiA+IC5uYXYtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDIpeyBvcGFjaXR5IDogMCB9XHJcbiAgICAmID4gLm5hdi10b2dnbGU6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMyl7IGJvdHRvbSA6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSkgcm90YXRlKC00NWRlZyk7IH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IE5hdlRvZ2dsZSA9ICgpID0+IHtcclxuICAgIC8vIOyDge2DnOqwkuydhCDshKTsoJXtlahcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXYtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgey8qIOuplOuJtOyDneyEsSAqL31cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gdmlzaWJsZT17dmlzaWJsZX0gaGFuZGxlVG9nZ2xlPXtoYW5kbGVUb2dnbGV9Lz5cclxuICAgICAgICAgICAgPC9Ub2dnbGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=