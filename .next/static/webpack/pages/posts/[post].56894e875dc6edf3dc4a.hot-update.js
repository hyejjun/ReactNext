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

  var post = router.query.post; // post 는 카테코리의 번호 DB idx id 
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
    id: '1',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwiZGF0YSIsImlkIiwic3ViamVjdCIsImRhdGUiLCJoaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQUZlLENBRWlCOztBQUZqQixNQUdQQyxJQUhPLEdBR0VGLE1BQU0sQ0FBQ0csS0FIVCxDQUdQRCxJQUhPLEVBSWY7QUFDQTs7QUFDQTtBQUNKO0FBQ0E7O0FBRUksTUFBTUUsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsTUFBRSxFQUFHLEdBRFQ7QUFFSUMsV0FBTyxFQUFHLGFBRmQ7QUFHSUMsUUFBSSxFQUFHLFlBSFg7QUFJSUMsT0FBRyxFQUFHO0FBSlYsR0FEUyxFQU9UO0FBQ0lILE1BQUUsRUFBRyxHQURUO0FBRUlDLFdBQU8sRUFBRyxhQUZkO0FBR0lDLFFBQUksRUFBRyxZQUhYO0FBSUlDLE9BQUcsRUFBRztBQUpWLEdBUFMsRUFhVDtBQUNJSCxNQUFFLEVBQUcsR0FEVDtBQUVJQyxXQUFPLEVBQUcsYUFGZDtBQUdJQyxRQUFJLEVBQUcsWUFIWDtBQUlJQyxPQUFHLEVBQUc7QUFKVixHQWJTLENBQWI7QUFvQkEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0ksOERBQUMsMkRBQUQ7QUFBQSxpQkFDS04sSUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURKO0FBV0gsQ0F6Q0Q7O0dBQU1ILEk7VUFFYUUsa0Q7OztLQUZiRixJO0FBMkNOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS41Njg5NGU4NzVkYzZlZGYzZGM0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBCbG9nTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvZ0xheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICAgIC8vIOqyjOyLnOq4gOuTpC4uLlxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCkgICAgICAvLyDqt7jrg6Ug7Jm47Jqw6riwXHJcbiAgICBjb25zdCB7IHBvc3QgfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgLy8gcG9zdCDripQg7Lm07YWM7L2U66as7J2YIOuyiO2YuCBEQiBpZHggaWQgXHJcbiAgICAvLyBzZXJ2ZXIg7JqU7LKt7ZW07IScIGlkIOq0gOugqOuQnCDqsozsi5zrrLzrk6TsnYQg6rCA7KC47JisIOyImCDsnojrj4TroZ1cclxuICAgIC8qIOqyjOyLnOq4gCDtlZjrgpjrp4jri6Qg7KSEIOyImCDsnojripTqsbDripRcclxuICAgICAgICDqsozsi5wg67KI7Zi4IC8g7KCc66qpIC8g64Kg7KecIC8g7KGw7ZqM7IiYIC0ganNvbiDtmJXtg5zrpbwg66eM65Ok7Ja07KO866m065Cc64ukLlxyXG4gICAgKi9cclxuXHJcbiAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQgOiAnMScsXHJcbiAgICAgICAgICAgIHN1YmplY3QgOiAnaW5nb29zIGJsb2cnLFxyXG4gICAgICAgICAgICBkYXRlIDogJzIwMjEtMDctMjgnLFxyXG4gICAgICAgICAgICBoaXQgOiAnMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQgOiAnMicsXHJcbiAgICAgICAgICAgIHN1YmplY3QgOiAnaW5nb29zIGJsb2cnLFxyXG4gICAgICAgICAgICBkYXRlIDogJzIwMjEtMDctMjgnLFxyXG4gICAgICAgICAgICBoaXQgOiAnMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQgOiAnMScsXHJcbiAgICAgICAgICAgIHN1YmplY3QgOiAnaW5nb29zIGJsb2cnLFxyXG4gICAgICAgICAgICBkYXRlIDogJzIwMjEtMDctMjgnLFxyXG4gICAgICAgICAgICBoaXQgOiAnMCdcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIHwgTGlzdDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge3Bvc3R9IOumrOyKpO2KuCDtjpjsnbTsp4BcclxuICAgICAgICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==