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

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)(); //dispatch({type : 'USER_LOGIN'})       -이거를 index.js 에서 미리 설정해놓고

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
                userid: userid.value,
                userpw: userpw.value
              };
              _context.next = 4;
              return dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_9__.UserLoginAction)(data));

            case 4:
              // 비동기 처리를 하면 이게 요청이 실행되기 전까지 밑에 코드가 실행되지 않음 
              // try catch 문이 완료 될때까지 기다렸다가 에러가 나면 그때 아래 코드를 실행시켜준다.
              userid.value === 'web7722' && userpw.value === '1234' ? next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/') : alert('아이디와 패스워드가 다릅니다.');

            case 5:
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
        lineNumber: 37,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
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


_s(Login, "CRISIr58QPKrrf3vO9CBbdD/Esc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJpZCIsInVzZUlucHV0IiwidXNlcnB3IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInZhbHVlIiwiVXNlckxvZ2luQWN0aW9uIiwiUm91dGVyIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDd0Q7O0FBR3hELElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QixDQURnQixDQUdoQjs7QUFHQSxNQUFNQyxNQUFNLEdBQUdDLHdEQUFRLENBQUMsRUFBRCxDQUF2QixDQU5nQixDQU1vQjs7QUFDcEMsTUFBTUMsTUFBTSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FQZ0IsQ0FPb0I7O0FBRXBDLE1BQU1FLFlBQVk7QUFBQSwrUkFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGVBQUMsQ0FBQ0MsY0FBRixHQURpQixDQUVqQjs7QUFDTUMsa0JBSFcsR0FHSjtBQUNUTixzQkFBTSxFQUFHQSxNQUFNLENBQUNPLEtBRFA7QUFFVEwsc0JBQU0sRUFBR0EsTUFBTSxDQUFDSztBQUZQLGVBSEk7QUFBQTtBQUFBLHFCQU9YVCxRQUFRLENBQUNVLCtEQUFlLENBQUNGLElBQUQsQ0FBaEIsQ0FQRzs7QUFBQTtBQVFqQjtBQUNBO0FBRUFOLG9CQUFNLENBQUNPLEtBQVAsS0FBaUIsU0FBakIsSUFBOEJMLE1BQU0sQ0FBQ0ssS0FBUCxLQUFpQixNQUEvQyxHQUNFRSx1REFBQSxDQUFZLEdBQVosQ0FERixHQUVFQyxLQUFLLENBQUMsa0JBQUQsQ0FGUDs7QUFYaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlAsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFnQkEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxnQkFBUSxFQUFFQSxZQUFoQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBdUJILE1BQXZCO0FBQStCLHFCQUFXLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBMkJFLE1BQTNCO0FBQW1DLHFCQUFXLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQWVILENBeENEO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTdETUwsSztVQUNlRSxvRCxFQUtGRSxvRCxFQUNBQSxvRDs7O0tBUGJKLEs7QUErRE4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uM2FjNjNkNTc0NDk0ZDViZTc5OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1MYXlvdXRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBVc2VyTG9naW5BY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiICAgICAgLy8gaW5kZXjsl5Ag7JeG6rOgIHVzZXLsl5Ag7J6I7Jy864uI6rmMLlxyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgLy9kaXNwYXRjaCh7dHlwZSA6ICdVU0VSX0xPR0lOJ30pICAgICAgIC3snbTqsbDrpbwgaW5kZXguanMg7JeQ7IScIOuvuOumrCDshKTsoJXtlbTrhpPqs6BcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKSAgICAgICAgIC8vIOqysOqzvOusvOydtCBPYmplY3RcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSwgdXNlcnB3LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VyaWQgOiB1c2VyaWQudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJwdyA6IHVzZXJwdy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBkaXNwYXRjaChVc2VyTG9naW5BY3Rpb24oZGF0YSkpXHJcbiAgICAgICAgLy8g67mE64+Z6riwIOyymOumrOulvCDtlZjrqbQg7J206rKMIOyalOyyreydtCDsi6TtlonrkJjquLAg7KCE6rmM7KeAIOuwkeyXkCDsvZTrk5zqsIAg7Iuk7ZaJ65CY7KeAIOyViuydjCBcclxuICAgICAgICAvLyB0cnkgY2F0Y2gg66y47J20IOyZhOujjCDrkKDrlYzquYzsp4Ag6riw64uk66C464uk6rCAIOyXkOufrOqwgCDrgpjrqbQg6re465WMIOyVhOuemCDsvZTrk5zrpbwg7Iuk7ZaJ7Iuc7Lyc7KSA64ukLlxyXG4gICAgICAgIFxyXG4gICAgICAgIHVzZXJpZC52YWx1ZSA9PT0gJ3dlYjc3MjInICYmIHVzZXJwdy52YWx1ZSA9PT0gJzEyMzQnXHJcbiAgICAgICAgPyBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgOiBhbGVydCgn7JWE7J2065SU7JmAIO2MqOyKpOybjOuTnOqwgCDri6TrpoXri4jri6QuJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCBsb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+66Gc6re47J24PC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VyaWR9IHBsYWNlaG9sZGVyPSfslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBwbGFjZWhvbGRlcj0n7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+66Gc6re47J24PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuICAgIOydtOqxsCDsmZwg65CY64OQPyAgICBcclxuICAgIHsuLi51c2VyaWR9XHJcbiAgICB7Li4udXNlcnB3fVxyXG5cclxuICAgIDEuIOychCDslYTrnpgg64+Z7J287ZWc6rGw7J6EXHJcbiAgICB2YWx1ZSA9ICdvaydcclxuICAgIHsuLi57J3ZhbHVlJzonb2snfX1cclxuXHJcbiAgICAyLiDsnIQg7JWE656YIOuPmeydvO2VnOqxsOyehFxyXG4gICAgey4uLnt2YWx1ZSA6J3dlYjc3MjInLCBvbkNoYW5nZTooKT0+e2FsZXJ0KDEpfX19XHJcbiAgICB2YWx1ZSA9ICd3ZWI3NzIyJyBvbkNoYW5nZT17KCk9PnthbGVydCgxKX19XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAge3ZhbHVlOlwiXCIsIG9uQ2hhbmdlOmZ9XHJcbiAgICDsnbTroIfqsowg7LCN7Z6YXHJcbiAgICDsnITsl5Dsspjrn7wg67CU67KoIOusuOuyleycvOuhnCDsk7gg7IiYIOyeiOqyjCDqsJ3ssrQg7ZiV7YOc66GcIOuwmO2ZmOydtCDrkJjrj4TroZ0g7ZW07KSA6rGw7J6EIOq3uOuemOyEnFxyXG4gICAgaW5wdXQg7JeQ64uk6rCAIHsuLi51c2VyaWR9IO2VmOuptCDsoIDroIfqsowg7IKs7Jqp7J20IOqwgOuKpe2VnOqxsOyehFxyXG5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==