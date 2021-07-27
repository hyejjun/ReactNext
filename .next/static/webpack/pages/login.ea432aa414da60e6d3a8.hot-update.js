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
};

_s(useInput, "AcDDI8uRc4A0dTIawjI1gJJfrJY=");

var Login = function Login() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      userid = _useState2[0],
      setUserid = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      userpw = _useState3[0],
      setUserpw = _useState3[1];

  var ChangeUserid = function ChangeUserid(e) {
    var _e$target2 = _objectSpread({}, e.target),
        value = _e$target2.value;

    setUserid(value);
  };

  var ChangeUserpw = function ChangeUserpw(e) {
    var _e$target3 = _objectSpread({}, e.target),
        value = _e$target3.value;

    setUserpw(value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(userid, userpw);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          onChange: ChangeUserid,
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          onChange: ChangeUserpw,
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s2(Login, "Rb3bcGEwyvLrFe8bnOr20lMi2Gw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbInVzZUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiTG9naW4iLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VycHciLCJzZXRVc2VycHciLCJDaGFuZ2VVc2VyaWQiLCJDaGFuZ2VVc2VycHciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFlBQUQsRUFBZ0I7QUFBQTs7QUFBQSxrQkFDSkMsK0NBQVEsQ0FBQ0QsWUFBRCxDQURKO0FBQUEsTUFDdEJFLEtBRHNCO0FBQUEsTUFDaEJDLFFBRGdCOztBQUU3QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxDQUFDLEVBQUc7QUFBQSxzQ0FDR0EsQ0FBQyxDQUFDQyxNQURMO0FBQUEsUUFDVkosS0FEVSxhQUNWQSxLQURVOztBQUVqQkMsWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDSCxHQUhEO0FBSUgsQ0FORDs7R0FBTUgsUTs7QUFRTixJQUFNUSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsbUJBQ1lOLCtDQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ1RPLE1BRFM7QUFBQSxNQUNEQyxTQURDOztBQUFBLG1CQUVZUiwrQ0FBUSxDQUFDLEVBQUQsQ0FGcEI7QUFBQSxNQUVUUyxNQUZTO0FBQUEsTUFFREMsU0FGQzs7QUFJaEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQVAsQ0FBQyxFQUFJO0FBQUEsdUNBQ0NBLENBQUMsQ0FBQ0MsTUFESDtBQUFBLFFBQ2RKLEtBRGMsY0FDZEEsS0FEYzs7QUFFdEJPLGFBQVMsQ0FBQ1AsS0FBRCxDQUFUO0FBQ0gsR0FIRDs7QUFLQSxNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBUixDQUFDLEVBQUk7QUFBQSx1Q0FDQ0EsQ0FBQyxDQUFDQyxNQURIO0FBQUEsUUFDZEosS0FEYyxjQUNkQSxLQURjOztBQUV0QlMsYUFBUyxDQUFDVCxLQUFELENBQVQ7QUFDSCxHQUhEOztBQUtBLE1BQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFULENBQUMsRUFBSTtBQUN0QkEsS0FBQyxDQUFDVSxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFaLEVBQW9CRSxNQUFwQjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxnQkFBUSxFQUFFSSxZQUFoQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsRUFBRUYsWUFBN0I7QUFBMkMscUJBQVcsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixrQkFBUSxFQUFFQyxZQUFqQztBQUErQyxxQkFBVyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFlSCxDQWxDRDs7SUFBTU4sSzs7S0FBQUEsSztBQW9DTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5lYTQzMmFhNDE0ZGE2MGU2ZDNhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUxheW91dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoZGVmYXVsdFZhbHVlKT0+e1xyXG4gICAgY29uc3QgW3ZhbHVlLHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSlcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZSA9PntcclxuICAgICAgICBjb25zdCB7dmFsdWV9ID0gey4uLmUudGFyZ2V0fVxyXG4gICAgICAgIHNldFZhbHVlKHZhbHVlKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt1c2VycHcsIHNldFVzZXJwd10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBDaGFuZ2VVc2VyaWQgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB7IC4uLmUudGFyZ2V0IH1cclxuICAgICAgICBzZXRVc2VyaWQodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ2hhbmdlVXNlcnB3ID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0geyAuLi5lLnRhcmdldCB9XHJcbiAgICAgICAgc2V0VXNlcnB3KHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZCwgdXNlcnB3KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCBsb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+66Gc6re47J24PC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtDaGFuZ2VVc2VyaWR9IHBsYWNlaG9sZGVyPSfslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17Q2hhbmdlVXNlcnB3fSBwbGFjZWhvbGRlcj0n7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+66Gc6re47J24PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9