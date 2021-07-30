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
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\login.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // index에 없고 user에 있으니까.

var Login = function Login() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.user.loading;
  }); // 로딩값을가져오고

  console.log("loading = ", loading); //dispatch({type : 'USER_LOGIN'})       -이거를 index.js 에서 미리 설정해놓고

  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(''); // 결과물이 Object

  var userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(''); // 결과물이 Object

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var data;
      return D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // console.log(userid.value, userpw.value);

              data = {
                // 객체를 만들어서 백쪽으로 던져준다
                userid: userid.value,
                userpw: userpw.value
              };
              _context.next = 4;
              return dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_9__.UserLoginAction)(data));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 34
        }, _this), "      "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
    {...{value :'web7722', onChange:()=>{alert(1)}}}
    value = 'web7722' onChange={()=>{alert(1)}}

    console.log(userid)
    {value:"", onChange:f}
    이렇게 찍힘
    위에처럼 바벨 문법으로 쓸 수 있게 객체 형태로 반환이 되도록 해준거임 그래서
    input 에다가 {...userid} 하면 저렇게 사용이 가능한거임

*/


_s(Login, "1vHfESQwygubuz7cDxAnMM3HGmw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJ1c2VJbnB1dCIsInVzZXJwdyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ2YWx1ZSIsIlVzZXJMb2dpbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUN3RDs7QUFHeEQsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsT0FBcEI7QUFBQSxHQUFELENBQTNCLENBRmdCLENBRTBDOztBQUUxREksU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QkwsT0FBekIsRUFKZ0IsQ0FNaEI7O0FBR0EsTUFBTU0sTUFBTSxHQUFHQyx3REFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FUZ0IsQ0FTb0I7O0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0Qsd0RBQVEsQ0FBQyxFQUFELENBQXZCLENBVmdCLENBVW9COztBQUVwQyxNQUFNRSxZQUFZO0FBQUEsK1JBQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxlQUFDLENBQUNDLGNBQUYsR0FEaUIsQ0FFakI7O0FBQ01DLGtCQUhXLEdBR0o7QUFBdUI7QUFDaENOLHNCQUFNLEVBQUdBLE1BQU0sQ0FBQ08sS0FEUDtBQUVUTCxzQkFBTSxFQUFHQSxNQUFNLENBQUNLO0FBRlAsZUFISTtBQUFBO0FBQUEscUJBT1hmLFFBQVEsQ0FBQ2dCLCtEQUFlLENBQUNGLElBQUQsQ0FBaEIsQ0FQRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWdCQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQywyREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLGdCQUFRLEVBQUVBLFlBQWhCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUM7QUFBWixXQUF1QkgsTUFBdkI7QUFBK0IscUJBQVcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUM7QUFBWixXQUEyQkUsTUFBM0I7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0ssQ0FBQ1IsT0FBRCxpQkFBWTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBZUgsQ0EzQ0Q7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBaEVNSCxLO1VBQ2VFLG9ELEVBQ0RFLG9ELEVBT0RNLG9ELEVBQ0FBLG9EOzs7S0FWYlYsSztBQWtFTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42ZTc0ODhhOTE0ZWQwZWVkOTkxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUxheW91dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCJcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBVc2VyTG9naW5BY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiICAgICAgLy8gaW5kZXjsl5Ag7JeG6rOgIHVzZXLsl5Ag7J6I7Jy864uI6rmMLlxyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlci5sb2FkaW5nKSAgLy8g66Gc65Sp6rCS7J2E6rCA7KC47Jik6rOgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nID0gXCIsbG9hZGluZyk7XHJcblxyXG4gICAgLy9kaXNwYXRjaCh7dHlwZSA6ICdVU0VSX0xPR0lOJ30pICAgICAgIC3snbTqsbDrpbwgaW5kZXguanMg7JeQ7IScIOuvuOumrCDshKTsoJXtlbTrhpPqs6BcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSwgdXNlcnB3LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyAgICAgICAgICAgICAgICAgICAgICAvLyDqsJ3ssrTrpbwg66eM65Ok7Ja07IScIOuwseyqveycvOuhnCDrjZjsoLjspIDri6RcclxuICAgICAgICAgICAgdXNlcmlkIDogdXNlcmlkLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VycHcgOiB1c2VycHcudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goVXNlckxvZ2luQWN0aW9uKGRhdGEpKVxyXG4gICAgICAgIC8vIOu5hOuPmeq4sCDsspjrpqzrpbwg7ZWY66m0IOydtOqyjCDsmpTssq3snbQg7Iuk7ZaJ65CY6riwIOyghOq5jOyngCDrsJHsl5Ag7L2U65Oc6rCAIOyLpO2WieuQmOyngCDslYrsnYwgXHJcbiAgICAgICAgLy8gdHJ5IGNhdGNoIOusuOydtCDsmYTro4wg65Cg65WM6rmM7KeAIOq4sOuLpOuguOuLpOqwgCDsl5Drn6zqsIAg64KY66m0IOq3uOuVjCDslYTrnpgg7L2U65Oc66W8IOyLpO2WieyLnOy8nOykgOuLpC5cclxuICAgICAgICBcclxuICAgICAgICAvKnVzZXJpZC52YWx1ZSA9PT0gJ3dlYjc3MjInICYmIHVzZXJwdy52YWx1ZSA9PT0gJzEyMzQnXHJcbiAgICAgICAgPyBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgOiBhbGVydCgn7JWE7J2065SU7JmAIO2MqOyKpOybjOuTnOqwgCDri6TrpoXri4jri6QuJykqL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IGxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj7roZzqt7jsnbg8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gcGxhY2Vob2xkZXI9J+yVhOydtOuUlOulvCDsnoXroKXtlbTso7zshLjsmpQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi51c2VycHd9IHBsYWNlaG9sZGVyPSftjKjsiqTsm4zrk5zrpbwg7J6F66Cl7ZW07KO87IS47JqUJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+66Gc6re47J24PC9idXR0b24+fSAgICAgIHsvKiBsb2FkaW5nIOqwkuydtCB0cnVlIOydvOuVjOunjCDroZzqt7jsnbgg67KE7Yq87J2EIOuztOyXrOyjvOqyjO2VqCAqL31cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4vKlxyXG4gICAg7J206rGwIOyZnCDrkJjrg5A/ICAgIFxyXG4gICAgey4uLnVzZXJpZH1cclxuICAgIHsuLi51c2VycHd9XHJcblxyXG4gICAgMS4g7JyEIOyVhOuemCDrj5nsnbztlZzqsbDsnoRcclxuICAgIHZhbHVlID0gJ29rJ1xyXG4gICAgey4uLnsndmFsdWUnOidvayd9fVxyXG5cclxuICAgIDIuIOychCDslYTrnpgg64+Z7J287ZWc6rGw7J6EXHJcbiAgICB7Li4ue3ZhbHVlIDond2ViNzcyMicsIG9uQ2hhbmdlOigpPT57YWxlcnQoMSl9fX1cclxuICAgIHZhbHVlID0gJ3dlYjc3MjInIG9uQ2hhbmdlPXsoKT0+e2FsZXJ0KDEpfX1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB7dmFsdWU6XCJcIiwgb25DaGFuZ2U6Zn1cclxuICAgIOydtOugh+qyjCDssI3tnphcclxuICAgIOychOyXkOyymOufvCDrsJTrsqgg66y467KV7Jy866GcIOyTuCDsiJgg7J6I6rKMIOqwneyytCDtmJXtg5zroZwg67CY7ZmY7J20IOuQmOuPhOuhnSDtlbTspIDqsbDsnoQg6re4656Y7IScXHJcbiAgICBpbnB1dCDsl5Dri6TqsIAgey4uLnVzZXJpZH0g7ZWY66m0IOyggOugh+qyjCDsgqzsmqnsnbQg6rCA64ql7ZWc6rGw7J6EXHJcblxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9