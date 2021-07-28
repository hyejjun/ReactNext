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
  url: '/posts/3'
}, {
  id: '4',
  category: '대분류메뉴4',
  url: '/posts/4'
}, {
  id: '5',
  category: '대분류메뉴5',
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiQWNjb3JkaW9uIiwidmlzaWJsZSIsImhhbmRsZVRvZ2dsZSIsImhhbmRlbENsaWNrIiwibWFwIiwidiIsIkFjY29yZGlvbk1lbnUiLCJTdHlsZWQiLCJwcm9wcyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRSxHQURSO0FBRUlDLFVBQVEsRUFBRSxNQUZkO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBRFMsRUFNVDtBQUNJRixJQUFFLEVBQUUsR0FEUjtBQUVJQyxVQUFRLEVBQUUsTUFGZDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQU5TLEVBV1Q7QUFDSUYsSUFBRSxFQUFFLEdBRFI7QUFFSUMsVUFBUSxFQUFFLEtBRmQ7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FYUyxFQWdCVDtBQUNJRixJQUFFLEVBQUUsR0FEUjtBQUVJQyxVQUFRLEVBQUUsUUFGZDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQWhCUyxFQXFCVDtBQUNJRixJQUFFLEVBQUUsR0FEUjtBQUVJQyxVQUFRLEVBQUUsUUFGZDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQXJCUyxDQUFiOztBQTZCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUU5QztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDckJELGdCQUFZO0FBQ2YsR0FGRCxDQUg4QyxDQU05Qzs7O0FBRUEsTUFBTUosUUFBUSxHQUFHRixJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFBTztBQUNwQyx3QkFDSTtBQUFlLGFBQU8sRUFBRUYsV0FBeEI7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUUsQ0FBQyxDQUFDTixHQUFkO0FBQUEsK0JBQ0k7QUFBQSxvQkFDS00sQ0FBQyxDQUFDUDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosT0FBU08sQ0FBQyxDQUFDUixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQVNILEdBVmdCLENBQWpCO0FBYUEsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxhQUFEO0FBQWUsVUFBSSxFQUFFSSxPQUFyQjtBQUFBLCtDQUNJO0FBQUEsa0JBQ0tIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBU0gsQ0E5QkQ7O0tBQU1FLFM7QUFnQ04sK0RBQWVBLFNBQWY7QUFFQSxJQUFNTSxhQUFhLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNNQVVILFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLElBQU4sR0FBYSxPQUFiLEdBQXVCLE1BQTVCO0FBQUEsQ0FWRixDQUFuQjtNQUFNSCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS42Yzc1ZGY2MDlhNDdjOTkxZDhhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyBzZXJ2ZXIg7JeQ7IScIOydtOugh+qyjCDrjbDsnbTthLDqsIAg65Ok7Ja07JmU64uk6rOgIOqwgOygle2VmOqzoH5cclxuY29uc3QgbWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnSFRNTCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzL0hUTUwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdIVE1MJyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMvSFRNTCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICBjYXRlZ29yeTogJ0NTUycsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzLzMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICfrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMvNCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc1JyxcclxuICAgICAgICBjYXRlZ29yeTogJ+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cy81J1xyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gKHsgdmlzaWJsZSAsIGhhbmRsZVRvZ2dsZSB9KSA9PiB7XHJcbiAgICBcclxuICAgIC8vIOyXrOq4sOyEnCBOYXZUb2dnbGUuanN4IOyXkCDsnojripQgdmlzaWJsZSDqsJLsnYQg7KGw7J6R7ZWY6riwIOychO2VtOyEnCBoYW5kbGVUb2dnbGXrj4Qg64SY6rKoIOuwm+ydjC4gLSDslYTsvZTrlJTslrjsnYQg64ur7Z6I6rOgIOyXtOumrOqyjCDtlZjripQg6riw64qlIFxyXG4gICAgY29uc3QgaGFuZGVsQ2xpY2sgPSAoKSA9PntcclxuICAgICAgICBoYW5kbGVUb2dnbGUoKVxyXG4gICAgfVxyXG4gICAgLy8g7Zi57J2AIG9uQ2xpY2sg7JeQIOuwlOuhnCBoYW5kbGVUb2dnbGUg7I2o64+EIOuQnOuLpC5cclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IG1lbnUubWFwKCh2KSA9PiB7ICAgICAgLy8gdiDripQg6rCd7LK066W8IOuwmO2ZmO2VtOykjFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3YuaWR9IG9uQ2xpY2s9e2hhbmRlbENsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3YudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3YuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEFjY29yZGlvbk1lbnUgZmxhZz17dmlzaWJsZX0+ICAgICAgICAgICAgIHsvKiBzdHlsZWQgY29tcG9uZW50IOuKlCBwcm9wcyDqsJLsnYQg7KSEIOyImCDsnojri6QuKi99XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25NZW51PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25cclxuXHJcbmNvbnN0IEFjY29yZGlvbk1lbnUgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0IDogMHB4O1xyXG4gICAgdG9wOiAxMHZoO1xyXG4gICAgei1pbmRleCA6IDU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZyA6IDV2aCAwO1xyXG5cclxuICAgIC8qIGphdmFzY3JpcHQg7JiB7Jet7J2064ukIC0g7JWE7L2U65SU7Ja47J20IHZpc2libGUg6rCS7JeQIOuUsOudvCDrs7TsnbTqs6Ag7JWI67O07J206rKM64GUIO2VqCAqL1xyXG4gICAgZGlzcGxheTogICR7cHJvcHMgPT4gKHByb3BzLmZsYWcgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcblxyXG4gICAgJiA+IHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiB1bCA+bGkge1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==