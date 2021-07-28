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
    date: '2021-07-28',
    hit: '0'
  }, {
    id: '2',
    subject: 'ingoos blog',
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
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8 \uD398\uC774\uC9C0"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwiZGF0YSIsImlkIiwic3ViamVjdCIsImRhdGUiLCJoaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQUZlLENBRWlCOztBQUZqQixNQUdQQyxJQUhPLEdBR0VGLE1BQU0sQ0FBQ0csS0FIVCxDQUdQRCxJQUhPLEVBR3FCO0FBQ3BDO0FBQ0E7O0FBQ0E7QUFDSjtBQUNBOztBQUVJLE1BQU1FLElBQUksR0FBRyxDQUNUO0FBQ0lDLE1BQUUsRUFBRyxHQURUO0FBRUlDLFdBQU8sRUFBRyxhQUZkO0FBR0lDLFFBQUksRUFBRyxZQUhYO0FBSUlDLE9BQUcsRUFBRztBQUpWLEdBRFMsRUFPVDtBQUNJSCxNQUFFLEVBQUcsR0FEVDtBQUVJQyxXQUFPLEVBQUcsYUFGZDtBQUdJQyxRQUFJLEVBQUcsWUFIWDtBQUlJQyxPQUFHLEVBQUc7QUFKVixHQVBTLEVBYVQ7QUFDSUgsTUFBRSxFQUFHLEdBRFQ7QUFFSUMsV0FBTyxFQUFHLGFBRmQ7QUFHSUMsUUFBSSxFQUFHLFlBSFg7QUFJSUMsT0FBRyxFQUFHO0FBSlYsR0FiUyxDQUFiO0FBb0JBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUtJLDhEQUFDLDJEQUFEO0FBQUEsaUJBQ0tOLElBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFESjtBQVdILENBekNEOztHQUFNSCxJO1VBRWFFLGtEOzs7S0FGYkYsSTtBQTJDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdF0uOTI1ZDhmOTE5MDAzZmFmZWE4ZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQmxvZ0xheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2dMYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgICAvLyDqsozsi5zquIDrk6QuLi5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpICAgICAgLy8g6re464OlIOyZuOyasOq4sFxyXG4gICAgY29uc3QgeyBwb3N0IH0gPSByb3V0ZXIucXVlcnkgICAgICAgLy8g7JaY6rCAIOy5tO2FjOqzoOumrCDsnbTrpoRcclxuICAgIC8vIHBvc3Qg64qUIOy5tO2FjOy9lOumrOydmCDrsojtmLggREIgaWR4IGlkIFxyXG4gICAgLy8gc2VydmVyIOyalOyyre2VtOyEnCBpZCDqtIDroKjrkJwg6rKM7Iuc66y865Ok7J2EIOqwgOyguOyYrCDsiJgg7J6I64+E66GdXHJcbiAgICAvKiDqsozsi5zquIAg7ZWY64KY66eI64ukIOykhCDsiJgg7J6I64qU6rGw64qUXHJcbiAgICAgICAg6rKM7IucIOuyiO2YuCAvIOygnOuqqSAvIOuCoOynnCAvIOyhsO2ajOyImCAtIGpzb24g7ZiV7YOc66W8IOunjOuTpOyWtOyjvOuptOuQnOuLpC5cclxuICAgICovXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIDogJzEnLFxyXG4gICAgICAgICAgICBzdWJqZWN0IDogJ2luZ29vcyBibG9nJyxcclxuICAgICAgICAgICAgZGF0ZSA6ICcyMDIxLTA3LTI4JyxcclxuICAgICAgICAgICAgaGl0IDogJzAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIDogJzInLFxyXG4gICAgICAgICAgICBzdWJqZWN0IDogJ2luZ29vcyBibG9nJyxcclxuICAgICAgICAgICAgZGF0ZSA6ICcyMDIxLTA3LTI4JyxcclxuICAgICAgICAgICAgaGl0IDogJzAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIDogJzMnLFxyXG4gICAgICAgICAgICBzdWJqZWN0IDogJ2luZ29vcyBibG9nJyxcclxuICAgICAgICAgICAgZGF0ZSA6ICcyMDIxLTA3LTI4JyxcclxuICAgICAgICAgICAgaGl0IDogJzAnXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IExpc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8QmxvZ0xheW91dD5cclxuICAgICAgICAgICAgICAgIHtwb3N0fSDrpqzsiqTtirgg7Y6Y7J207KeAXHJcbiAgICAgICAgICAgIDwvQmxvZ0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=