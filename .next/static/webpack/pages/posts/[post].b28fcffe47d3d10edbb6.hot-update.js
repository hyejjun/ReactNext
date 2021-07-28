self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./pages/posts/[post].jsx":
/*!********************************!*\
  !*** ./pages/posts/[post].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\posts\\[post].jsx",
    _this = undefined,
    _s = $RefreshSig$();




var data = [{
  id: '1',
  subject: 'ingoos blog',
  content: 'HTML을 시작해보자',
  date: '2021-07-28',
  hit: '0'
}, {
  id: '2',
  subject: 'ingoos blog',
  content: 'HTML을 시작해보자2',
  date: '2021-07-28',
  hit: '0'
}, {
  id: '3',
  subject: 'ingoos blog',
  content: 'HTML을 시작해보자3',
  date: '2021-07-28',
  hit: '0'
}];

var Post = function Post() {
  _s();

  // 게시글들...
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); // 그냥 외우기

  var post = router.query.post; // 얘가 카테고리 이름
  // post 는 카테코리의 번호 DB idx id 
  // server 요청해서 id 관련된 게시물들을 가져올 수 있도록

  /* 게시글 하나마다 줄 수 있는거는
      게시 번호 / 제목 / 날짜 / 조회수 - json 형태를 만들어주면된다.
  */

  var list = data.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8 \uD398\uC774\uC9C0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJzdWJqZWN0IiwiY29udGVudCIsImRhdGUiLCJoaXQiLCJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwibGlzdCIsIm1hcCIsInYiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRyxHQURUO0FBRUlDLFNBQU8sRUFBRyxhQUZkO0FBR0lDLFNBQU8sRUFBRyxhQUhkO0FBSUlDLE1BQUksRUFBRyxZQUpYO0FBS0lDLEtBQUcsRUFBRztBQUxWLENBRFMsRUFRVDtBQUNJSixJQUFFLEVBQUcsR0FEVDtBQUVJQyxTQUFPLEVBQUcsYUFGZDtBQUdJQyxTQUFPLEVBQUcsY0FIZDtBQUlJQyxNQUFJLEVBQUcsWUFKWDtBQUtJQyxLQUFHLEVBQUc7QUFMVixDQVJTLEVBZVQ7QUFDSUosSUFBRSxFQUFHLEdBRFQ7QUFFSUMsU0FBTyxFQUFHLGFBRmQ7QUFHSUMsU0FBTyxFQUFHLGNBSGQ7QUFJSUMsTUFBSSxFQUFHLFlBSlg7QUFLSUMsS0FBRyxFQUFHO0FBTFYsQ0FmUyxDQUFiOztBQXdCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2Y7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCLENBRmUsQ0FFaUI7O0FBRmpCLE1BR1BDLElBSE8sR0FHRUYsTUFBTSxDQUFDRyxLQUhULENBR1BELElBSE8sRUFHcUI7QUFDcEM7QUFDQTs7QUFDQTtBQUNKO0FBQ0E7O0FBRUksTUFBTUUsSUFBSSxHQUFHWCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUs7QUFDdkIsd0JBQ0k7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUEsb0JBQUtBLENBQUMsQ0FBQ0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBS0QsQ0FBQyxDQUFDVjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLG9CQUFLVSxDQUFDLENBQUNDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFTSCxHQVZZLENBQWI7QUFZQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSSw4REFBQywyREFBRDtBQUFBLGlCQUNLTCxJQURMLHlEQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURKO0FBY0gsQ0FwQ0Q7O0dBQU1ILEk7VUFFYUUsa0Q7OztLQUZiRixJO0FBc0NOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS5iMjhmY2ZmZTQ3ZDNkMTBlZGJiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBCbG9nTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvZ0xheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZCA6ICcxJyxcclxuICAgICAgICBzdWJqZWN0IDogJ2luZ29vcyBibG9nJyxcclxuICAgICAgICBjb250ZW50IDogJ0hUTUzsnYQg7Iuc7J6R7ZW067O07J6QJyxcclxuICAgICAgICBkYXRlIDogJzIwMjEtMDctMjgnLFxyXG4gICAgICAgIGhpdCA6ICcwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZCA6ICcyJyxcclxuICAgICAgICBzdWJqZWN0IDogJ2luZ29vcyBibG9nJyxcclxuICAgICAgICBjb250ZW50IDogJ0hUTUzsnYQg7Iuc7J6R7ZW067O07J6QMicsXHJcbiAgICAgICAgZGF0ZSA6ICcyMDIxLTA3LTI4JyxcclxuICAgICAgICBoaXQgOiAnMCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiAnMycsXHJcbiAgICAgICAgc3ViamVjdCA6ICdpbmdvb3MgYmxvZycsXHJcbiAgICAgICAgY29udGVudCA6ICdIVE1M7J2EIOyLnOyeke2VtOuztOyekDMnLFxyXG4gICAgICAgIGRhdGUgOiAnMjAyMS0wNy0yOCcsXHJcbiAgICAgICAgaGl0IDogJzAnXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gICAgLy8g6rKM7Iuc6riA65OkLi4uXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKSAgICAgIC8vIOq3uOuDpSDsmbjsmrDquLBcclxuICAgIGNvbnN0IHsgcG9zdCB9ID0gcm91dGVyLnF1ZXJ5ICAgICAgIC8vIOyWmOqwgCDsubTthYzqs6Drpqwg7J2066aEXHJcbiAgICAvLyBwb3N0IOuKlCDsubTthYzsvZTrpqzsnZgg67KI7Zi4IERCIGlkeCBpZCBcclxuICAgIC8vIHNlcnZlciDsmpTssq3tlbTshJwgaWQg6rSA66Co65CcIOqyjOyLnOusvOuTpOydhCDqsIDsoLjsmKwg7IiYIOyeiOuPhOuhnVxyXG4gICAgLyog6rKM7Iuc6riAIO2VmOuCmOuniOuLpCDspIQg7IiYIOyeiOuKlOqxsOuKlFxyXG4gICAgICAgIOqyjOyLnCDrsojtmLggLyDsoJzrqqkgLyDrgqDsp5wgLyDsobDtmozsiJggLSBqc29uIO2Yle2DnOulvCDrp4zrk6TslrTso7zrqbTrkJzri6QuXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgodik9PntcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2LnRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2LmNvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e3YudGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IExpc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8QmxvZ0xheW91dD5cclxuICAgICAgICAgICAgICAgIHtwb3N0fSDrpqzsiqTtirgg7Y6Y7J207KeAXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9