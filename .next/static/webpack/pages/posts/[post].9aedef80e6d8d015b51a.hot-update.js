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
  url: '/posts/JS'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiQWNjb3JkaW9uIiwidmlzaWJsZSIsImhhbmRsZVRvZ2dsZSIsImhhbmRlbENsaWNrIiwibWFwIiwidiIsIkFjY29yZGlvbk1lbnUiLCJTdHlsZWQiLCJwcm9wcyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRSxHQURSO0FBRUlDLFVBQVEsRUFBRSxNQUZkO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBRFMsRUFNVDtBQUNJRixJQUFFLEVBQUUsR0FEUjtBQUVJQyxVQUFRLEVBQUUsTUFGZDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQU5TLEVBV1Q7QUFDSUYsSUFBRSxFQUFFLEdBRFI7QUFFSUMsVUFBUSxFQUFFLEtBRmQ7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FYUyxFQWdCVDtBQUNJRixJQUFFLEVBQUUsR0FEUjtBQUVJQyxVQUFRLEVBQUUsTUFGZDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQWhCUyxFQXFCVDtBQUNJRixJQUFFLEVBQUUsR0FEUjtBQUVJQyxVQUFRLEVBQUUsSUFGZDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQXJCUyxDQUFiOztBQTZCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUU5QztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDckJELGdCQUFZO0FBQ2YsR0FGRCxDQUg4QyxDQU05Qzs7O0FBRUEsTUFBTUosUUFBUSxHQUFHRixJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFBTztBQUNwQyx3QkFDSTtBQUFlLGFBQU8sRUFBRUYsV0FBeEI7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUUsQ0FBQyxDQUFDTixHQUFkO0FBQUEsK0JBQ0k7QUFBQSxvQkFDS00sQ0FBQyxDQUFDUDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosT0FBU08sQ0FBQyxDQUFDUixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQVNILEdBVmdCLENBQWpCO0FBYUEsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxhQUFEO0FBQWUsVUFBSSxFQUFFSSxPQUFyQjtBQUFBLCtDQUNJO0FBQUEsa0JBQ0tIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBU0gsQ0E5QkQ7O0tBQU1FLFM7QUFnQ04sK0RBQWVBLFNBQWY7QUFFQSxJQUFNTSxhQUFhLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNNQVVILFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLElBQU4sR0FBYSxPQUFiLEdBQXVCLE1BQTVCO0FBQUEsQ0FWRixDQUFuQjtNQUFNSCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS45YWVkZWY4MGU2ZDhkMDE1YjUxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyBzZXJ2ZXIg7JeQ7IScIOydtOugh+qyjCDrjbDsnbTthLDqsIAg65Ok7Ja07JmU64uk6rOgIOqwgOygle2VmOqzoH5cclxuY29uc3QgbWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnSFRNTCcsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzL0hUTUwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdIVE1MJyxcclxuICAgICAgICB1cmw6ICcvcG9zdHMvSFRNTCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICBjYXRlZ29yeTogJ0NTUycsXHJcbiAgICAgICAgdXJsOiAnL3Bvc3RzL0NTUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc0JyxcclxuICAgICAgICBjYXRlZ29yeTogJ0pBVkEnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cy9KQVZBJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnSlMnLFxyXG4gICAgICAgIHVybDogJy9wb3N0cy9KUydcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9ICh7IHZpc2libGUgLCBoYW5kbGVUb2dnbGUgfSkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyDsl6zquLDshJwgTmF2VG9nZ2xlLmpzeCDsl5Ag7J6I64qUIHZpc2libGUg6rCS7J2EIOyhsOyeke2VmOq4sCDsnITtlbTshJwgaGFuZGxlVG9nZ2xl64+EIOuEmOqyqCDrsJvsnYwuIC0g7JWE7L2U65SU7Ja47J2EIOuLq+2eiOqzoCDsl7Trpqzqsowg7ZWY64qUIOq4sOuKpSBcclxuICAgIGNvbnN0IGhhbmRlbENsaWNrID0gKCkgPT57XHJcbiAgICAgICAgaGFuZGxlVG9nZ2xlKClcclxuICAgIH1cclxuICAgIC8vIO2YueydgCBvbkNsaWNrIOyXkCDrsJTroZwgaGFuZGxlVG9nZ2xlIOyNqOuPhCDrkJzri6QuXHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBtZW51Lm1hcCgodikgPT4geyAgICAgIC8vIHYg64qUIOqwneyytOulvCDrsJjtmZjtlbTspIxcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXt2LmlkfSBvbkNsaWNrPXtoYW5kZWxDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2LnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2LmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25NZW51IGZsYWc9e3Zpc2libGV9PiAgICAgICAgICAgICB7Lyogc3R5bGVkIGNvbXBvbmVudCDripQgcHJvcHMg6rCS7J2EIOykhCDsiJgg7J6I64ukLiovfVxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uTWVudT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXHJcblxyXG5jb25zdCBBY2NvcmRpb25NZW51ID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdCA6IDBweDtcclxuICAgIHRvcDogMTB2aDtcclxuICAgIHotaW5kZXggOiA1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmcgOiA1dmggMDtcclxuXHJcbiAgICAvKiBqYXZhc2NyaXB0IOyYgeyXreydtOuLpCAtIOyVhOy9lOuUlOyWuOydtCB2aXNpYmxlIOqwkuyXkCDrlLDrnbwg67O07J206rOgIOyViOuztOydtOqyjOuBlCDtlaggKi9cclxuICAgIGRpc3BsYXk6ICAke3Byb3BzID0+IChwcm9wcy5mbGFnID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG5cclxuICAgICYgPiB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAmID4gdWwgPmxpIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgfVxyXG5gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=