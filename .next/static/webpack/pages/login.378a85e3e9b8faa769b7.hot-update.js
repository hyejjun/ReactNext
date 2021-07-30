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

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.user;
  }),
      loading = _useSelector.loading,
      IsLogin = _useSelector.IsLogin; // 로딩값을가져오고


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
              dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_9__.UserLoginAction)(data));
              IsLogin; //await dispatch(UserLoginAction(data))
              // 비동기 처리를 하면 이게 요청이 실행되기 전까지 밑에 코드가 실행되지 않음 
              // try catch 문이 완료 될때까지 기다렸다가 에러가 나면 그때 아래 코드를 실행시켜준다.

              /*userid.value === 'web7722' && userpw.value === '1234'
              ? Router.push('/')
              : alert('아이디와 패스워드가 다릅니다.')*/

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
        lineNumber: 43,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), loading ? '로그인로딩중!' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 44
        }, _this), "      "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9hZGluZyIsIklzTG9naW4iLCJjb25zb2xlIiwibG9nIiwidXNlcmlkIiwidXNlSW5wdXQiLCJ1c2VycHciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidmFsdWUiLCJVc2VyTG9naW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDd0Q7O0FBR3hELElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEZ0IscUJBRVdDLHdEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FGdEI7QUFBQSxNQUVUQyxPQUZTLGdCQUVUQSxPQUZTO0FBQUEsTUFFQUMsT0FGQSxnQkFFQUEsT0FGQSxFQUU2Qzs7O0FBRTdEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCSCxPQUF6QixFQUpnQixDQU1oQjs7QUFHQSxNQUFNSSxNQUFNLEdBQUdDLHdEQUFRLENBQUMsRUFBRCxDQUF2QixDQVRnQixDQVNvQjs7QUFDcEMsTUFBTUMsTUFBTSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FWZ0IsQ0FVb0I7O0FBRXBDLE1BQU1FLFlBQVk7QUFBQSwrUkFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGVBQUMsQ0FBQ0MsY0FBRixHQURpQixDQUVqQjs7QUFDTUMsa0JBSFcsR0FHSjtBQUF1QjtBQUNoQ04sc0JBQU0sRUFBR0EsTUFBTSxDQUFDTyxLQURQO0FBRVRMLHNCQUFNLEVBQUdBLE1BQU0sQ0FBQ0s7QUFGUCxlQUhJO0FBT2pCaEIsc0JBQVEsQ0FBQ2lCLCtEQUFlLENBQUNGLElBQUQsQ0FBaEIsQ0FBUjtBQUVBVCxxQkFBTyxDQVRVLENBVWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNSO0FBQ0E7O0FBaEJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTSxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQW1CQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQywyREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLGdCQUFRLEVBQUVBLFlBQWhCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUM7QUFBWixXQUF1QkgsTUFBdkI7QUFBK0IscUJBQVcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUM7QUFBWixXQUEyQkUsTUFBM0I7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0tOLE9BQU8sR0FBRyxTQUFILGdCQUFlO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFlSCxDQTlDRDtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FuRU1OLEs7VUFDZUUsb0QsRUFDVUMsb0QsRUFPWlEsb0QsRUFDQUEsb0Q7OztLQVZiWCxLO0FBcUVOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjM3OGE4NWUzZTliOGZhYTc2OWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIlxyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFVzZXJMb2dpbkFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCIgICAgICAvLyBpbmRleOyXkCDsl4bqs6AgdXNlcuyXkCDsnojsnLzri4jquYwuXHJcblxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHtsb2FkaW5nLCBJc0xvZ2lufSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpICAvLyDroZzrlKnqsJLsnYTqsIDsoLjsmKTqs6BcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgPSBcIixsb2FkaW5nKTtcclxuXHJcbiAgICAvL2Rpc3BhdGNoKHt0eXBlIDogJ1VTRVJfTE9HSU4nfSkgICAgICAgLeydtOqxsOulvCBpbmRleC5qcyDsl5DshJwg66+466asIOyEpOygle2VtOuGk+qzoFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpICAgICAgICAgLy8g6rKw6rO866y87J20IE9iamVjdFxyXG4gICAgY29uc3QgdXNlcnB3ID0gdXNlSW5wdXQoJycpICAgICAgICAgLy8g6rKw6rO866y87J20IE9iamVjdFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcmlkLnZhbHVlLCB1c2VycHcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7ICAgICAgICAgICAgICAgICAgICAgIC8vIOqwneyytOulvCDrp4zrk6TslrTshJwg67Cx7Kq97Jy866GcIOuNmOyguOykgOuLpFxyXG4gICAgICAgICAgICB1c2VyaWQgOiB1c2VyaWQudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJwdyA6IHVzZXJwdy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5BY3Rpb24oZGF0YSkpXHJcblxyXG4gICAgICAgIElzTG9naW5cclxuICAgICAgICAvL2F3YWl0IGRpc3BhdGNoKFVzZXJMb2dpbkFjdGlvbihkYXRhKSlcclxuICAgICAgICAvLyDruYTrj5nquLAg7LKY66as66W8IO2VmOuptCDsnbTqsowg7JqU7LKt7J20IOyLpO2WieuQmOq4sCDsoITquYzsp4Ag67CR7JeQIOy9lOuTnOqwgCDsi6TtlonrkJjsp4Ag7JWK7J2MIFxyXG4gICAgICAgIC8vIHRyeSBjYXRjaCDrrLjsnbQg7JmE66OMIOuQoOuVjOq5jOyngCDquLDri6TroLjri6TqsIAg7JeQ65+s6rCAIOuCmOuptCDqt7jrlYwg7JWE656YIOy9lOuTnOulvCDsi6Ttlonsi5zsvJzspIDri6QuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyp1c2VyaWQudmFsdWUgPT09ICd3ZWI3NzIyJyAmJiB1c2VycHcudmFsdWUgPT09ICcxMjM0J1xyXG4gICAgICAgID8gUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIDogYWxlcnQoJ+yVhOydtOuUlOyZgCDtjKjsiqTsm4zrk5zqsIAg64uk66aF64uI64ukLicpKi9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCBsb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+66Gc6re47J24PC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VyaWR9IHBsYWNlaG9sZGVyPSfslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBwbGFjZWhvbGRlcj0n7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalCcgLz5cclxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICfroZzqt7jsnbjroZzrlKnspJEhJyA6IDxidXR0b24gdHlwZT0nc3VibWl0Jz7roZzqt7jsnbg8L2J1dHRvbj59ICAgICAgey8qIGxvYWRpbmcg6rCS7J20IHRydWUg7J2865WM66eMIOuhnOq3uOyduCDrsoTtirzsnYQg67O07Jes7KO86rKM7ZWoICovfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbi8qXHJcbiAgICDsnbTqsbAg7JmcIOuQmOuDkD8gICAgXHJcbiAgICB7Li4udXNlcmlkfVxyXG4gICAgey4uLnVzZXJwd31cclxuXHJcbiAgICAxLiDsnIQg7JWE656YIOuPmeydvO2VnOqxsOyehFxyXG4gICAgdmFsdWUgPSAnb2snXHJcbiAgICB7Li4ueyd2YWx1ZSc6J29rJ319XHJcblxyXG4gICAgMi4g7JyEIOyVhOuemCDrj5nsnbztlZzqsbDsnoRcclxuICAgIHsuLi57dmFsdWUgOid3ZWI3NzIyJywgb25DaGFuZ2U6KCk9PnthbGVydCgxKX19fVxyXG4gICAgdmFsdWUgPSAnd2ViNzcyMicgb25DaGFuZ2U9eygpPT57YWxlcnQoMSl9fVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgIHt2YWx1ZTpcIlwiLCBvbkNoYW5nZTpmfVxyXG4gICAg7J2066CH6rKMIOywje2emFxyXG4gICAg7JyE7JeQ7LKY65+8IOuwlOuyqCDrrLjrspXsnLzroZwg7JO4IOyImCDsnojqsowg6rCd7LK0IO2Yle2DnOuhnCDrsJjtmZjsnbQg65CY64+E66GdIO2VtOykgOqxsOyehCDqt7jrnpjshJxcclxuICAgIGlucHV0IOyXkOuLpOqwgCB7Li4udXNlcmlkfSDtlZjrqbQg7KCA66CH6rKMIOyCrOyaqeydtCDqsIDriqXtlZzqsbDsnoRcclxuXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=