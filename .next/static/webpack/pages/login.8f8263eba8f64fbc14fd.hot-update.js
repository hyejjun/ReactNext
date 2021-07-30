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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\login.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // index에 없고 user에 있으니까.

var Login = function Login() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.user;
  }),
      loading = _useSelector.loading,
      IsLogin = _useSelector.IsLogin; // 로딩값을가져오고


  console.log("loading = ", loading); //dispatch({type : 'USER_LOGIN'})       -이거를 index.js 에서 미리 설정해놓고

  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__.default)(''); // 결과물이 Object

  var userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__.default)(''); // 결과물이 Object

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.log(userid.value, userpw.value);

    var data = {
      // 객체를 만들어서 백쪽으로 던져준다
      userid: userid.value,
      userpw: userpw.value
    };
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_7__.UserLoginAction)(data));
    IsLogin === true ? next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/') : alert('아이디와 패스워드가 다릅니다.'); //await dispatch(UserLoginAction(data))
    // 비동기 처리를 하면 이게 요청이 실행되기 전까지 밑에 코드가 실행되지 않음 
    // try catch 문이 완료 될때까지 기다렸다가 에러가 나면 그때 아래 코드를 실행시켜준다.

    /*userid.value === 'web7722' && userpw.value === '1234'
    ? Router.push('/')
    : alert('아이디와 패스워드가 다릅니다.')*/
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), loading ? '로그인로딩중!' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 44
        }, _this), "      "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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


_s(Login, "fWtgE8uwzU7X6wNOdS4FZ40hnU0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9hZGluZyIsIklzTG9naW4iLCJjb25zb2xlIiwibG9nIiwidXNlcmlkIiwidXNlSW5wdXQiLCJ1c2VycHciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidmFsdWUiLCJVc2VyTG9naW5BY3Rpb24iLCJSb3V0ZXIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDd0Q7O0FBR3hELElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEZ0IscUJBRVdDLHdEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FGdEI7QUFBQSxNQUVUQyxPQUZTLGdCQUVUQSxPQUZTO0FBQUEsTUFFQUMsT0FGQSxnQkFFQUEsT0FGQSxFQUU2Qzs7O0FBRTdEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCSCxPQUF6QixFQUpnQixDQU1oQjs7QUFHQSxNQUFNSSxNQUFNLEdBQUdDLHdEQUFRLENBQUMsRUFBRCxDQUF2QixDQVRnQixDQVNvQjs7QUFDcEMsTUFBTUMsTUFBTSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FWZ0IsQ0FVb0I7O0FBRXBDLE1BQU1FLFlBQVksR0FBSSxTQUFoQkEsWUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUYsR0FEeUIsQ0FFekI7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHO0FBQXVCO0FBQ2hDTixZQUFNLEVBQUdBLE1BQU0sQ0FBQ08sS0FEUDtBQUVUTCxZQUFNLEVBQUdBLE1BQU0sQ0FBQ0s7QUFGUCxLQUFiO0FBS0FoQixZQUFRLENBQUNpQiwrREFBZSxDQUFDRixJQUFELENBQWhCLENBQVI7QUFDQVQsV0FBTyxLQUFLLElBQVosR0FDQ1ksdURBQUEsQ0FBWSxHQUFaLENBREQsR0FFRUMsS0FBSyxDQUFDLGtCQUFELENBRlAsQ0FUeUIsQ0FhekI7QUFDQTtBQUNBOztBQUVBO0FBQ1I7QUFDQTtBQUNLLEdBcEJEOztBQXNCQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQywyREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLGdCQUFRLEVBQUVQLFlBQWhCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUM7QUFBWixXQUF1QkgsTUFBdkI7QUFBK0IscUJBQVcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUM7QUFBWixXQUEyQkUsTUFBM0I7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0tOLE9BQU8sR0FBRyxTQUFILGdCQUFlO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFlSCxDQWpERDtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F0RU1OLEs7VUFDZUUsb0QsRUFDVUMsb0QsRUFPWlEsb0QsRUFDQUEsb0Q7OztLQVZiWCxLO0FBd0VOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjhmODI2M2ViYThmNjRmYmMxNGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIlxyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFVzZXJMb2dpbkFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCIgICAgICAvLyBpbmRleOyXkCDsl4bqs6AgdXNlcuyXkCDsnojsnLzri4jquYwuXHJcblxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHtsb2FkaW5nLCBJc0xvZ2lufSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpICAvLyDroZzrlKnqsJLsnYTqsIDsoLjsmKTqs6BcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgPSBcIixsb2FkaW5nKTtcclxuXHJcbiAgICAvL2Rpc3BhdGNoKHt0eXBlIDogJ1VTRVJfTE9HSU4nfSkgICAgICAgLeydtOqxsOulvCBpbmRleC5qcyDsl5DshJwg66+466asIOyEpOygle2VtOuGk+qzoFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpICAgICAgICAgLy8g6rKw6rO866y87J20IE9iamVjdFxyXG4gICAgY29uc3QgdXNlcnB3ID0gdXNlSW5wdXQoJycpICAgICAgICAgLy8g6rKw6rO866y87J20IE9iamVjdFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSwgdXNlcnB3LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyAgICAgICAgICAgICAgICAgICAgICAvLyDqsJ3ssrTrpbwg66eM65Ok7Ja07IScIOuwseyqveycvOuhnCDrjZjsoLjspIDri6RcclxuICAgICAgICAgICAgdXNlcmlkIDogdXNlcmlkLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VycHcgOiB1c2VycHcudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbkFjdGlvbihkYXRhKSlcclxuICAgICAgICBJc0xvZ2luID09PSB0cnVlXHJcbiAgICAgICAgP1JvdXRlci5wdXNoKCcvJylcclxuICAgICAgICA6IGFsZXJ0KCfslYTsnbTrlJTsmYAg7Yyo7Iqk7JuM65Oc6rCAIOuLpOumheuLiOuLpC4nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vYXdhaXQgZGlzcGF0Y2goVXNlckxvZ2luQWN0aW9uKGRhdGEpKVxyXG4gICAgICAgIC8vIOu5hOuPmeq4sCDsspjrpqzrpbwg7ZWY66m0IOydtOqyjCDsmpTssq3snbQg7Iuk7ZaJ65CY6riwIOyghOq5jOyngCDrsJHsl5Ag7L2U65Oc6rCAIOyLpO2WieuQmOyngCDslYrsnYwgXHJcbiAgICAgICAgLy8gdHJ5IGNhdGNoIOusuOydtCDsmYTro4wg65Cg65WM6rmM7KeAIOq4sOuLpOuguOuLpOqwgCDsl5Drn6zqsIAg64KY66m0IOq3uOuVjCDslYTrnpgg7L2U65Oc66W8IOyLpO2WieyLnOy8nOykgOuLpC5cclxuICAgICAgICBcclxuICAgICAgICAvKnVzZXJpZC52YWx1ZSA9PT0gJ3dlYjc3MjInICYmIHVzZXJwdy52YWx1ZSA9PT0gJzEyMzQnXHJcbiAgICAgICAgPyBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgOiBhbGVydCgn7JWE7J2065SU7JmAIO2MqOyKpOybjOuTnOqwgCDri6TrpoXri4jri6QuJykqL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IGxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj7roZzqt7jsnbg8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gcGxhY2Vob2xkZXI9J+yVhOydtOuUlOulvCDsnoXroKXtlbTso7zshLjsmpQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi51c2VycHd9IHBsYWNlaG9sZGVyPSftjKjsiqTsm4zrk5zrpbwg7J6F66Cl7ZW07KO87IS47JqUJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ+uhnOq3uOyduOuhnOuUqeykkSEnIDogPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPuuhnOq3uOyduDwvYnV0dG9uPn0gICAgICB7LyogbG9hZGluZyDqsJLsnbQgdHJ1ZSDsnbzrlYzrp4wg66Gc6re47J24IOuyhO2KvOydhCDrs7Tsl6zso7zqsoztlaggKi99XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuICAgIOydtOqxsCDsmZwg65CY64OQPyAgICBcclxuICAgIHsuLi51c2VyaWR9XHJcbiAgICB7Li4udXNlcnB3fVxyXG5cclxuICAgIDEuIOychCDslYTrnpgg64+Z7J287ZWc6rGw7J6EXHJcbiAgICB2YWx1ZSA9ICdvaydcclxuICAgIHsuLi57J3ZhbHVlJzonb2snfX1cclxuXHJcbiAgICAyLiDsnIQg7JWE656YIOuPmeydvO2VnOqxsOyehFxyXG4gICAgey4uLnt2YWx1ZSA6J3dlYjc3MjInLCBvbkNoYW5nZTooKT0+e2FsZXJ0KDEpfX19XHJcbiAgICB2YWx1ZSA9ICd3ZWI3NzIyJyBvbkNoYW5nZT17KCk9PnthbGVydCgxKX19XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAge3ZhbHVlOlwiXCIsIG9uQ2hhbmdlOmZ9XHJcbiAgICDsnbTroIfqsowg7LCN7Z6YXHJcbiAgICDsnITsl5Dsspjrn7wg67CU67KoIOusuOuyleycvOuhnCDsk7gg7IiYIOyeiOqyjCDqsJ3ssrQg7ZiV7YOc66GcIOuwmO2ZmOydtCDrkJjrj4TroZ0g7ZW07KSA6rGw7J6EIOq3uOuemOyEnFxyXG4gICAgaW5wdXQg7JeQ64uk6rCAIHsuLi51c2VyaWR9IO2VmOuptCDsoIDroIfqsowg7IKs7Jqp7J20IOqwgOuKpe2VnOqxsOyehFxyXG5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==