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
      //console.log(getState)       // function
      //console.log(getState());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiU3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBV0MsUUFBWCxRQUFXQSxRQUFYO0FBQUEsU0FBeUIsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsVUFBQ0MsTUFBRCxFQUFZO0FBQ3BFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQURvRSxDQUN4QztBQUM1QjtBQUNBO0FBQ0E7O0FBQ0EsYUFBT0QsSUFBSSxDQUFDQyxNQUFELENBQVg7QUFDSCxLQU5pRDtBQUFBLEdBQXpCO0FBQUEsQ0FBekI7O0FBUUEsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFJO0FBQ3ZCLE1BQU1DLFdBQVcsR0FBRyxDQUFDUixnQkFBRCxFQUFrQlMsZ0RBQWxCLENBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQ2ZDLENBRGUsR0FFZkMsNkVBQW1CLENBQUNDLHdEQUFBLFNBQW1CTCxXQUFuQixDQUFELENBRnJCLENBRnVCLENBS3ZCOztBQUNBLE1BQU1NLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ0MsOENBQUQsRUFBU04sUUFBVCxDQUF6QjtBQUNBLFNBQU9JLEtBQVA7QUFDSCxDQVJEOztBQVdBLElBQU1HLE9BQU8sR0FBR0MsaUVBQWEsQ0FBQ1gsY0FBRCxFQUFnQjtBQUN6Q1ksT0FBSztBQURvQyxDQUFoQixDQUE3QixDLENBRU87QUFDUDtBQUNBOztBQUNBLCtEQUFlRixPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWY2YjM2OTg0OTEyNmEyYThkMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJyAgICAgICBcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHtkaXNwYXRjaCxnZXRTdGF0ZX0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pICAgICAgICAgLy8gb2JqZWN0XHJcbiAgICAvL2NvbnNvbGUubG9nKGRpc3BhdGNoKSAgICAgICAvLyBmdW5jdGlvblxyXG4gICAgLy9jb25zb2xlLmxvZyhnZXRTdGF0ZSkgICAgICAgLy8gZnVuY3Rpb25cclxuICAgIC8vY29uc29sZS5sb2coZ2V0U3RhdGUoKSk7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCk9PntcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dlck1pZGRsZXdhcmUsdGh1bmtNaWRkbGV3YXJlXVxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgLy8gY29tcG9zZVdpdGhEZXZUb29scyDslpjripQg7L2U65Oc66W8IOyLpO2Wie2VoOuVjOuniOuLpCBkaXNwYXRjaOulvCDrgqjqsqjrhpPripTri6QuXHJcbiAgICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpXHJcbiAgICByZXR1cm4gU3RvcmVcclxufVxyXG5cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHtcclxuICAgIGRlYnVnIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxufSkgICAgIC8vIOyyq+uyiOynuCDsnbjsnpDqsJLsl5AgU3RvcmXrpbwg64Sj7Ja07KSA64ukIOuRkOuyiOynuCDsnbjsnpDqsJLsl5DripQgZGVidWcg7Ja07KmM6rWsIC0g6rCc67CcIOuqqOuTnOydvOuVjOunjC5cclxuLy8gPFN0b3JlLlByb3ZpZGVyPjwvU3RvcmUuUHJvdmlkZXI+IOydtOqxsCDrjIDsi6Ag7JOw66Ck6rOgIOunjOuTplxyXG4vLyBfYXBwLmpzeCDqsIDshJxcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=