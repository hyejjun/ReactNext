self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\login.jsx",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* userid userpw 한번에 통제 - custum hook - 이제부터 많이 쓸거임*/

var useInput = function useInput(defaultValue) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultValue),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = function onChange(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setValue(value);
  };

  return {
    value: value,
    onChange: onChange
  };
};

_s(useInput, "+di++irDcPspjmhJVP9frUKGzpo=");

var Login = function Login() {
  _s2();

  var userid = useInput(''); // 결과물이 Object

  var userpw = useInput(''); // 결과물이 Object

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.log(userid.value, userpw.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};
/*
    이거 왜 되냐?    
    {...userid}
    {...userpw}

    1. 위 아래 동일한거임
    value = 'ok'
    {...{'value':'ok'}}

    2. 위 아래 동일한거임
    {
        value :'web7722'
        onChange:()=>{alert(1)}
    }
    value = 'web7722' onChange={()=>{alert(1)}}

*/


_s2(Login, "wZnsC4osjeiB9zZYfGE2dWljL8E=", false, function () {
  return [useInput, useInput];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbInVzZUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiTG9naW4iLCJ1c2VyaWQiLCJ1c2VycHciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxZQUFELEVBQWtCO0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQUNELFlBQUQsQ0FESDtBQUFBLE1BQ3hCRSxLQUR3QjtBQUFBLE1BQ2pCQyxRQURpQjs7QUFFL0IsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsQ0FBQyxFQUFJO0FBQUEsc0NBQ0tBLENBQUMsQ0FBQ0MsTUFEUDtBQUFBLFFBQ1ZKLEtBRFUsYUFDVkEsS0FEVTs7QUFFbEJDLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxTQUFPO0FBQ0hBLFNBQUssRUFBTEEsS0FERztBQUVIRSxZQUFRLEVBQVJBO0FBRkcsR0FBUDtBQUlILENBWEQ7O0dBQU1MLFE7O0FBYU4sSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdULFFBQVEsQ0FBQyxFQUFELENBQXZCLENBRGdCLENBQ29COztBQUNwQyxNQUFNVSxNQUFNLEdBQUdWLFFBQVEsQ0FBQyxFQUFELENBQXZCLENBRmdCLENBRW9COztBQUVwQyxNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ00sY0FBRixHQUR3QixDQUV4QjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxnQkFBUSxFQUFFRCxZQUFoQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBdUJGLE1BQXZCO0FBQStCLHFCQUFXLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBMkJDLE1BQTNCO0FBQW1DLHFCQUFXLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQWVILENBeEJEO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQTFDTUYsSztVQUNhUixRLEVBQ0FBLFE7OztLQUZiUSxLO0FBNENOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjJkOWZhYmMwMTYyNmJlNDhjMzIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG4vKiB1c2VyaWQgdXNlcnB3IO2VnOuyiOyXkCDthrXsoJwgLSBjdXN0dW0gaG9vayAtIOydtOygnOu2gO2EsCDrp47snbQg7JO46rGw7J6EKi9cclxuY29uc3QgdXNlSW5wdXQgPSAoZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSlcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0geyAuLi5lLnRhcmdldCB9XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBvbkNoYW5nZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSwgdXNlcnB3LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCBsb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+66Gc6re47J24PC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VyaWR9IHBsYWNlaG9sZGVyPSfslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBwbGFjZWhvbGRlcj0n7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+66Gc6re47J24PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuICAgIOydtOqxsCDsmZwg65CY64OQPyAgICBcclxuICAgIHsuLi51c2VyaWR9XHJcbiAgICB7Li4udXNlcnB3fVxyXG5cclxuICAgIDEuIOychCDslYTrnpgg64+Z7J287ZWc6rGw7J6EXHJcbiAgICB2YWx1ZSA9ICdvaydcclxuICAgIHsuLi57J3ZhbHVlJzonb2snfX1cclxuXHJcbiAgICAyLiDsnIQg7JWE656YIOuPmeydvO2VnOqxsOyehFxyXG4gICAge1xyXG4gICAgICAgIHZhbHVlIDond2ViNzcyMidcclxuICAgICAgICBvbkNoYW5nZTooKT0+e2FsZXJ0KDEpfVxyXG4gICAgfVxyXG4gICAgdmFsdWUgPSAnd2ViNzcyMicgb25DaGFuZ2U9eygpPT57YWxlcnQoMSl9fVxyXG5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==