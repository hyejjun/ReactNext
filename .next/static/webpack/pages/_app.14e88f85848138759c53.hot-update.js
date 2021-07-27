self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/context */ "./pages/store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducer */ "./pages/store/reducer.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\_app.jsx",
    _this = undefined,
    _s = $RefreshSig$();

// 모든 컴포넌트에 공통적인 걸 넣고 싶을 때 사용한다 - 보통 common.css 를 import 할때 많이 사용한다. 






var App = function App(_ref) {
  _s();

  var Component = _ref.Component;
  var globalContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer, globalContext),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,700;0,800;0,900;1,300;1,600&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
      value: {
        state: state,
        dispatch: dispatch
      },
      children: ["        ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), "       "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(App, "cvfmFiQSlhMgIqyc0YZTr20Vd/g=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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

/***/ "./pages/store/reducer.jsx":
/*!*********************************!*\
  !*** ./pages/store/reducer.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread({}, state);

    case "LOGOUT":
      return _objectSpread({}, state);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUvcmVkdWNlci5qc3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiZ2xvYmFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJTdG9yZSIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDM0IsTUFBTUMsYUFBYSxHQUFHQyxpREFBVSxDQUFDQyxtREFBRCxDQUFoQzs7QUFEMkIsb0JBRUZDLGlEQUFVLENBQUNDLG1EQUFELEVBQVNKLGFBQVQsQ0FGUjtBQUFBLE1BRXBCSyxLQUZvQjtBQUFBLE1BRWRDLFFBRmM7O0FBRzNCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQywyQkFBNUI7QUFBd0QsbUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFNLFlBQUksRUFBQyxzSEFBWDtBQUFrSSxXQUFHLEVBQUM7QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBT0ksOERBQUMsNERBQUQ7QUFBZ0IsV0FBSyxFQUFFO0FBQUNELGFBQUssRUFBTEEsS0FBRDtBQUFPQyxnQkFBUSxFQUFSQTtBQUFQLE9BQXZCO0FBQUEsMENBQ0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEo7QUFBQSxrQkFESjtBQWNILENBakJEOztHQUFNUixHOztLQUFBQSxHO0FBbUJOLCtEQUFlQSxHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTyxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFFLE1BQVIsRUFBbUI7QUFDdEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksK0JBQ09ILEtBRFA7O0FBR0osU0FBSyxRQUFMO0FBQ0ksK0JBQ09BLEtBRFA7QUFOUjtBQVVILENBWE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNGU4OGY4NTg0ODEzODc1OWM1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLy8g66qo65OgIOy7tO2PrOuEjO2KuOyXkCDqs7XthrXsoIHsnbgg6rG4IOuEo+qzoCDsi7bsnYQg65WMIOyCrOyaqe2VnOuLpCAtIOuztO2GtSBjb21tb24uY3NzIOulvCBpbXBvcnQg7ZWg65WMIOunjuydtCDsgqzsmqntlZzri6QuIFxyXG5pbXBvcnQgJy4uL2luZGV4LmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgU3RvcmUse2luaXRhbFN0YXRlfSBmcm9tICcuL3N0b3JlL2NvbnRleHQnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vc3RvcmUvcmVkdWNlcidcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBnbG9iYWxDb250ZXh0ID0gdXNlQ29udGV4dChTdG9yZSlcclxuICAgIGNvbnN0IFtzdGF0ZSxkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsZ2xvYmFsQ29udGV4dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49J3RydWUnIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDUwMDswLDcwMDswLDgwMDswLDkwMDsxLDMwMDsxLDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7LyogaGVsbG8hISEgKi99XHJcbiAgICAgICAgICAgIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLGRpc3BhdGNofX0+ICAgICAgICB7LyogaW5pdGFsU3RhdGUg7J2YIOqwkuydhCDrsJTqvrjqs6Ag7Iu27J2E65WM64qUIOyXrOq4sOyEnCDrsJTqvrjrqbQg65CoIHsndXNlcmlkJzogJ3dlYjc3MjInfSDsnbTrn7Dsi53snLzroZwgKi99XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+ICAgICAgIHsvKiDsnbQg7JyE7LmY7JeQIOyasOumrOqwgCDrp4zrk6Ag7YyM7J28KGluZGV4LmpzeCAvbG9naW4uanN4IC8gam9pbi5qc3gp65Ok7J20IOuTpOyWtOqwhOuLpC4gKi99XHJcbiAgICAgICAgICAgIDwvU3RvcmUuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIHsvKiBFbmQgKi99XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsImV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiTE9HSU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiTE9HT1VUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9