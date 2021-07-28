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
    date: '2021-07-28',
    hit: '0'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8 \uD398\uC774\uC9C0"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwiZGF0YSIsImlkIiwic3ViamVjdCIsImNvbnRlbnQiLCJkYXRlIiwiaGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZjtBQUNBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEIsQ0FGZSxDQUVpQjs7QUFGakIsTUFHUEMsSUFITyxHQUdFRixNQUFNLENBQUNHLEtBSFQsQ0FHUEQsSUFITyxFQUdxQjtBQUNwQztBQUNBOztBQUNBO0FBQ0o7QUFDQTs7QUFFSSxNQUFNRSxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxNQUFFLEVBQUcsR0FEVDtBQUVJQyxXQUFPLEVBQUcsYUFGZDtBQUdJQyxXQUFPLEVBQUcsYUFIZDtBQUlJQyxRQUFJLEVBQUcsWUFKWDtBQUtJQyxPQUFHLEVBQUc7QUFMVixHQURTLEVBUVQ7QUFDSUosTUFBRSxFQUFHLEdBRFQ7QUFFSUMsV0FBTyxFQUFHLGFBRmQ7QUFHSUMsV0FBTyxFQUFHLGNBSGQ7QUFJSUMsUUFBSSxFQUFHLFlBSlg7QUFLSUMsT0FBRyxFQUFHO0FBTFYsR0FSUyxFQWVUO0FBQ0lKLE1BQUUsRUFBRyxHQURUO0FBRUlDLFdBQU8sRUFBRyxhQUZkO0FBR0lFLFFBQUksRUFBRyxZQUhYO0FBSUlDLE9BQUcsRUFBRztBQUpWLEdBZlMsQ0FBYjtBQXNCQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSSw4REFBQywyREFBRDtBQUFBLGlCQUNLUCxJQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUEsa0JBREo7QUFXSCxDQTNDRDs7R0FBTUgsSTtVQUVhRSxrRDs7O0tBRmJGLEk7QUE2Q04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RdLmU3ODUyMzkyMTRlYjVlOTBlOWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9nTGF5b3V0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gICAgLy8g6rKM7Iuc6riA65OkLi4uXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKSAgICAgIC8vIOq3uOuDpSDsmbjsmrDquLBcclxuICAgIGNvbnN0IHsgcG9zdCB9ID0gcm91dGVyLnF1ZXJ5ICAgICAgIC8vIOyWmOqwgCDsubTthYzqs6Drpqwg7J2066aEXHJcbiAgICAvLyBwb3N0IOuKlCDsubTthYzsvZTrpqzsnZgg67KI7Zi4IERCIGlkeCBpZCBcclxuICAgIC8vIHNlcnZlciDsmpTssq3tlbTshJwgaWQg6rSA66Co65CcIOqyjOyLnOusvOuTpOydhCDqsIDsoLjsmKwg7IiYIOyeiOuPhOuhnVxyXG4gICAgLyog6rKM7Iuc6riAIO2VmOuCmOuniOuLpCDspIQg7IiYIOyeiOuKlOqxsOuKlFxyXG4gICAgICAgIOqyjOyLnCDrsojtmLggLyDsoJzrqqkgLyDrgqDsp5wgLyDsobDtmozsiJggLSBqc29uIO2Yle2DnOulvCDrp4zrk6TslrTso7zrqbTrkJzri6QuXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZCA6ICcxJyxcclxuICAgICAgICAgICAgc3ViamVjdCA6ICdpbmdvb3MgYmxvZycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiAnSFRNTOydhCDsi5zsnpHtlbTrs7TsnpAnLFxyXG4gICAgICAgICAgICBkYXRlIDogJzIwMjEtMDctMjgnLFxyXG4gICAgICAgICAgICBoaXQgOiAnMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQgOiAnMicsXHJcbiAgICAgICAgICAgIHN1YmplY3QgOiAnaW5nb29zIGJsb2cnLFxyXG4gICAgICAgICAgICBjb250ZW50IDogJ0hUTUzsnYQg7Iuc7J6R7ZW067O07J6QMicsXHJcbiAgICAgICAgICAgIGRhdGUgOiAnMjAyMS0wNy0yOCcsXHJcbiAgICAgICAgICAgIGhpdCA6ICcwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZCA6ICczJyxcclxuICAgICAgICAgICAgc3ViamVjdCA6ICdpbmdvb3MgYmxvZycsXHJcbiAgICAgICAgICAgIGRhdGUgOiAnMjAyMS0wNy0yOCcsXHJcbiAgICAgICAgICAgIGhpdCA6ICcwJ1xyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCBMaXN0PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPEJsb2dMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICB7cG9zdH0g66as7Iqk7Yq4IO2OmOydtOyngFxyXG4gICAgICAgICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9