self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var loggerMiddleware = function loggerMiddleware(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      console.log(action); // object
      //console.log(dispatch)       // function

      console.log(getState); // function

      console.log(getState());
      return next(action);
    };
  };
};

var configureStore = function configureStore() {
  var middlewares = [loggerMiddleware, redux_thunk__WEBPACK_IMPORTED_MODULE_3__.default];
  var enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)(redux__WEBPACK_IMPORTED_MODULE_4__.applyMiddleware.apply(void 0, middlewares)); // composeWithDevTools 얘는 코드를 실행할때마다 dispatch를 남겨놓는다.

  var Store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.default, enhancer);
  return Store;
};

var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
}); // 첫번째 인자값에 Store를 넣어준다 두번째 인자값에는 debug 어쩌구 - 개발 모드일때만.
// <Store.Provider></Store.Provider> 이거 대신 쓰려고 만듦
// _app.jsx 가서

/* harmony default export */ __webpack_exports__["default"] = (wrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiU3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBV0MsUUFBWCxRQUFXQSxRQUFYO0FBQUEsU0FBeUIsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsVUFBQ0MsTUFBRCxFQUFZO0FBQ3BFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQURvRSxDQUN4QztBQUM1Qjs7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVosRUFIb0UsQ0FHeEM7O0FBQzVCRyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBUSxFQUFwQjtBQUNBLGFBQU9DLElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0gsS0FOaUQ7QUFBQSxHQUF6QjtBQUFBLENBQXpCOztBQVFBLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBSTtBQUN2QixNQUFNQyxXQUFXLEdBQUcsQ0FBQ1IsZ0JBQUQsRUFBa0JTLGdEQUFsQixDQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUNmQyxDQURlLEdBRWZDLDZFQUFtQixDQUFDQyx3REFBQSxTQUFtQkwsV0FBbkIsQ0FBRCxDQUZyQixDQUZ1QixDQUt2Qjs7QUFDQSxNQUFNTSxLQUFLLEdBQUdDLGtEQUFXLENBQUNDLDhDQUFELEVBQVNOLFFBQVQsQ0FBekI7QUFDQSxTQUFPSSxLQUFQO0FBQ0gsQ0FSRDs7QUFXQSxJQUFNRyxPQUFPLEdBQUdDLGlFQUFhLENBQUNYLGNBQUQsRUFBZ0I7QUFDekNZLE9BQUs7QUFEb0MsQ0FBaEIsQ0FBN0IsQyxDQUVPO0FBQ1A7QUFDQTs7QUFDQSwrREFBZUYsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIxODY2MzJiZGMyZTAwNTFkMDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycycgICAgICAgXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2gsZ2V0U3RhdGV9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKSAgICAgICAgIC8vIG9iamVjdFxyXG4gICAgLy9jb25zb2xlLmxvZyhkaXNwYXRjaCkgICAgICAgLy8gZnVuY3Rpb25cclxuICAgIGNvbnNvbGUubG9nKGdldFN0YXRlKSAgICAgICAvLyBmdW5jdGlvblxyXG4gICAgY29uc29sZS5sb2coZ2V0U3RhdGUoKSk7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCk9PntcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dlck1pZGRsZXdhcmUsdGh1bmtNaWRkbGV3YXJlXVxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgLy8gY29tcG9zZVdpdGhEZXZUb29scyDslpjripQg7L2U65Oc66W8IOyLpO2Wie2VoOuVjOuniOuLpCBkaXNwYXRjaOulvCDrgqjqsqjrhpPripTri6QuXHJcbiAgICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpXHJcbiAgICByZXR1cm4gU3RvcmVcclxufVxyXG5cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHtcclxuICAgIGRlYnVnIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxufSkgICAgIC8vIOyyq+uyiOynuCDsnbjsnpDqsJLsl5AgU3RvcmXrpbwg64Sj7Ja07KSA64ukIOuRkOuyiOynuCDsnbjsnpDqsJLsl5DripQgZGVidWcg7Ja07KmM6rWsIC0g6rCc67CcIOuqqOuTnOydvOuVjOunjC5cclxuLy8gPFN0b3JlLlByb3ZpZGVyPjwvU3RvcmUuUHJvdmlkZXI+IOydtOqxsCDrjIDsi6Ag7JOw66Ck6rOgIOunjOuTplxyXG4vLyBfYXBwLmpzeCDqsIDshJxcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=