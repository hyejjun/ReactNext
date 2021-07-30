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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\login.jsx",
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // index에 없고 user에 있으니까.



var Login = function Login() {
  _s2();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.user;
  }),
      loading = _useSelector.loading,
      IsLogin = _useSelector.IsLogin; // 로딩값을가져오고


  console.log("loading = ", loading); //dispatch({type : 'USER_LOGIN'})       -이거를 index.js 에서 미리 설정해놓고

  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(''); // 결과물이 Object

  var userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(''); // 결과물이 Object

  var handleSubmit = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)(_s( /*#__PURE__*/D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var data;
      return D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              e.preventDefault(); // console.log(userid.value, userpw.value);

              data = {
                // 객체를 만들어서 백쪽으로 던져준다
                userid: userid.value,
                userpw: userpw.value
              };
              _context.next = 5;
              return dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_9__.UserLoginAction)(data));

            case 5:
              (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
                IsLogin === true ? next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/') : alert('아이디와 패스워드가 다릅니다.');
              }, [IsLogin]); //await dispatch(UserLoginAction(data))
              // 비동기 처리를 하면 이게 요청이 실행되기 전까지 밑에 코드가 실행되지 않음 
              // try catch 문이 완료 될때까지 기다렸다가 에러가 나면 그때 아래 코드를 실행시켜준다.

              /*userid.value === 'web7722' && userpw.value === '1234'
              ? Router.push('/')
              : alert('아이디와 패스워드가 다릅니다.')*/

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "OD7bBpZva5O2jO+Puf00hKivP7c="));

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
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this), loading ? '로그인로딩중!' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 44
        }, _this), "      "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
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


_s2(Login, "vv2jJmktx7bpZH2fQfRuRVXI4YA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9hZGluZyIsIklzTG9naW4iLCJjb25zb2xlIiwibG9nIiwidXNlcmlkIiwidXNlSW5wdXQiLCJ1c2VycHciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidmFsdWUiLCJVc2VyTG9naW5BY3Rpb24iLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQ3dEOztBQUN4RDs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRGdCLHFCQUVhQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZ4QjtBQUFBLE1BRVJDLE9BRlEsZ0JBRVJBLE9BRlE7QUFBQSxNQUVDQyxPQUZELGdCQUVDQSxPQUZELEVBRWlEOzs7QUFFakVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILE9BQTFCLEVBSmdCLENBTWhCOztBQUdBLE1BQU1JLE1BQU0sR0FBR0Msd0RBQVEsQ0FBQyxFQUFELENBQXZCLENBVGdCLENBU29COztBQUNwQyxNQUFNQyxNQUFNLEdBQUdELHdEQUFRLENBQUMsRUFBRCxDQUF2QixDQVZnQixDQVVvQjs7QUFFcEMsTUFBTUUsWUFBWTtBQUFBOztBQUFBLGtTQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNqQkEsZUFBQyxDQUFDQyxjQUFGLEdBRGlCLENBRWpCOztBQUNNQyxrQkFIVyxHQUdKO0FBQXVCO0FBQ2hDTixzQkFBTSxFQUFFQSxNQUFNLENBQUNPLEtBRE47QUFFVEwsc0JBQU0sRUFBRUEsTUFBTSxDQUFDSztBQUZOLGVBSEk7QUFBQTtBQUFBLHFCQVFYaEIsUUFBUSxDQUFDaUIsK0RBQWUsQ0FBQ0YsSUFBRCxDQUFoQixDQVJHOztBQUFBO0FBVWpCRywrREFBUyxDQUFDLFlBQU07QUFDWlosdUJBQU8sS0FBSyxJQUFaLEdBQ01hLHVEQUFBLENBQVksR0FBWixDQUROLEdBRU1DLEtBQUssQ0FBQyxrQkFBRCxDQUZYO0FBR0gsZUFKUSxFQUlOLENBQUNkLE9BQUQsQ0FKTSxDQUFULENBVmlCLENBaUJqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDUjtBQUNBOztBQXZCeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWk0sWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUEwQkEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxnQkFBUSxFQUFFQSxZQUFoQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBdUJILE1BQXZCO0FBQStCLHFCQUFXLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBMkJFLE1BQTNCO0FBQW1DLHFCQUFXLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixFQUdLTixPQUFPLEdBQUcsU0FBSCxnQkFBZTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBZUgsQ0FyREQ7QUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBMUVNTixLO1VBQ2VFLG9ELEVBQ1lDLG9ELEVBT2RRLG9ELEVBQ0FBLG9EOzs7S0FWYlgsSztBQTRFTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5lNTU3NzE5NzQ4MmU0ZGZmZTc1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUxheW91dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCJcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFVzZXJMb2dpbkFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCIgICAgICAvLyBpbmRleOyXkCDsl4bqs6AgdXNlcuyXkCDsnojsnLzri4jquYwuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHsgbG9hZGluZywgSXNMb2dpbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKSAgLy8g66Gc65Sp6rCS7J2E6rCA7KC47Jik6rOgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nID0gXCIsIGxvYWRpbmcpO1xyXG5cclxuICAgIC8vZGlzcGF0Y2goe3R5cGUgOiAnVVNFUl9MT0dJTid9KSAgICAgICAt7J206rGw66W8IGluZGV4LmpzIOyXkOyEnCDrr7jrpqwg7ISk7KCV7ZW064aT6rOgXHJcblxyXG5cclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSwgdXNlcnB3LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyAgICAgICAgICAgICAgICAgICAgICAvLyDqsJ3ssrTrpbwg66eM65Ok7Ja07IScIOuwseyqveycvOuhnCDrjZjsoLjspIDri6RcclxuICAgICAgICAgICAgdXNlcmlkOiB1c2VyaWQudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJwdzogdXNlcnB3LnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBkaXNwYXRjaChVc2VyTG9naW5BY3Rpb24oZGF0YSkpXHJcblxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIElzTG9naW4gPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgICAgOiBhbGVydCgn7JWE7J2065SU7JmAIO2MqOyKpOybjOuTnOqwgCDri6TrpoXri4jri6QuJylcclxuICAgICAgICB9LCBbSXNMb2dpbl0pXHJcblxyXG5cclxuICAgICAgICAvL2F3YWl0IGRpc3BhdGNoKFVzZXJMb2dpbkFjdGlvbihkYXRhKSlcclxuICAgICAgICAvLyDruYTrj5nquLAg7LKY66as66W8IO2VmOuptCDsnbTqsowg7JqU7LKt7J20IOyLpO2WieuQmOq4sCDsoITquYzsp4Ag67CR7JeQIOy9lOuTnOqwgCDsi6TtlonrkJjsp4Ag7JWK7J2MIFxyXG4gICAgICAgIC8vIHRyeSBjYXRjaCDrrLjsnbQg7JmE66OMIOuQoOuVjOq5jOyngCDquLDri6TroLjri6TqsIAg7JeQ65+s6rCAIOuCmOuptCDqt7jrlYwg7JWE656YIOy9lOuTnOulvCDsi6Ttlonsi5zsvJzspIDri6QuXHJcblxyXG4gICAgICAgIC8qdXNlcmlkLnZhbHVlID09PSAnd2ViNzcyMicgJiYgdXNlcnB3LnZhbHVlID09PSAnMTIzNCdcclxuICAgICAgICA/IFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICA6IGFsZXJ0KCfslYTsnbTrlJTsmYAg7Yyo7Iqk7JuM65Oc6rCAIOuLpOumheuLiOuLpC4nKSovXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIHwgbG9naW48L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgyPuuhnOq3uOyduDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcmlkfSBwbGFjZWhvbGRlcj0n7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgey4uLnVzZXJwd30gcGxhY2Vob2xkZXI9J+2MqOyKpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAn66Gc6re47J2466Gc65Sp7KSRIScgOiA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+66Gc6re47J24PC9idXR0b24+fSAgICAgIHsvKiBsb2FkaW5nIOqwkuydtCB0cnVlIOydvOuVjOunjCDroZzqt7jsnbgg67KE7Yq87J2EIOuztOyXrOyjvOqyjO2VqCAqL31cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4vKlxyXG4gICAg7J206rGwIOyZnCDrkJjrg5A/ICAgIFxyXG4gICAgey4uLnVzZXJpZH1cclxuICAgIHsuLi51c2VycHd9XHJcblxyXG4gICAgMS4g7JyEIOyVhOuemCDrj5nsnbztlZzqsbDsnoRcclxuICAgIHZhbHVlID0gJ29rJ1xyXG4gICAgey4uLnsndmFsdWUnOidvayd9fVxyXG5cclxuICAgIDIuIOychCDslYTrnpgg64+Z7J287ZWc6rGw7J6EXHJcbiAgICB7Li4ue3ZhbHVlIDond2ViNzcyMicsIG9uQ2hhbmdlOigpPT57YWxlcnQoMSl9fX1cclxuICAgIHZhbHVlID0gJ3dlYjc3MjInIG9uQ2hhbmdlPXsoKT0+e2FsZXJ0KDEpfX1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB7dmFsdWU6XCJcIiwgb25DaGFuZ2U6Zn1cclxuICAgIOydtOugh+qyjCDssI3tnphcclxuICAgIOychOyXkOyymOufvCDrsJTrsqgg66y467KV7Jy866GcIOyTuCDsiJgg7J6I6rKMIOqwneyytCDtmJXtg5zroZwg67CY7ZmY7J20IOuQmOuPhOuhnSDtlbTspIDqsbDsnoQg6re4656Y7IScXHJcbiAgICBpbnB1dCDsl5Dri6TqsIAgey4uLnVzZXJpZH0g7ZWY66m0IOyggOugh+qyjCDsgqzsmqnsnbQg6rCA64ql7ZWc6rGw7J6EXHJcblxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9