self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initalState = {
  IsLogin: false,
  loading: false
};
/*
    dispatch({type : 'USER_LOGIN'})
    이전엔 하나씩 세팅해줬는데 (스트링으로) 이거의 단점 - 오타가 났을때 확인이 어렵다
    그래서 type값을 대부분 상수로 많이 지정한다.
*/
// 3. 상수로 type 값을 바꿔준다.

var USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
var USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
var USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
var USER_LOGOUT = "USER_LOGOUT";
/*export const UserLoginAction = data => {  // 미리 여기서 action 값 설정을 다 해놓는다. (0729)
    return {
        type: USER_LOGIN,

    }
}// 그런 다음 로그인 페이지로 가서 dispatch로 보낼때 LOGIN() 이렇게 함수만 보내면 된다.

/*
    [0730]
    redux_thunk 쓸때
    3단계 요청 - 완료 - 에러
    state에 loading 이란 값을 추가하고
*/

var UserLoginAction = function UserLoginAction(data) {
  return /*#__PURE__*/function () {
    var _ref = (0,D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var response, result;
      return D_Blockchain_html_0726_Next_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(UserLogin_REQUEST());
              _context.prev = 1;
              _context.next = 4;
              return fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify(_objectSpread({}, data)) // data는 객체로 들어가면 절대 안된다. 그래서 string 형태로.

              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;
              dispatch(UserLogin_SUCCESS(result));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              // error         
              dispatch(UserLogin_ERROR());

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
_c = UserLoginAction;
var UserLogin_REQUEST = function UserLogin_REQUEST(data) {
  return {
    type: USER_LOGIN_REQUEST,
    data: data
  };
};
_c2 = UserLogin_REQUEST;
var UserLogin_SUCCESS = function UserLogin_SUCCESS() {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
_c3 = UserLogin_SUCCESS;
var UserLogin_ERROR = function UserLogin_ERROR() {
  return {
    type: USER_LOGIN_ERROR
  };
};
_c4 = UserLogin_ERROR;
var UserLogoutAction = function UserLogoutAction(data) {
  // 미리 여기서 설정을 다 해놓는다.
  return {
    type: USER_LOGOUT
  };
};
_c5 = UserLogoutAction;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread({}, state);

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
      });

    case USER_LOGIN_ERROR:
      return _objectSpread({}, state);

    case USER_LOGIN:
      //console.log('로그인 신호 왔다');
      return _objectSpread(_objectSpread({}, state), {}, {
        // initalState의 내용을 다 복사한거임
        IsLogin: true
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "UserLoginAction");
$RefreshReg$(_c2, "UserLogin_REQUEST");
$RefreshReg$(_c3, "UserLogin_SUCCESS");
$RefreshReg$(_c4, "UserLogin_ERROR");
$RefreshReg$(_c5, "UserLogoutAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0YWxTdGF0ZSIsIklzTG9naW4iLCJsb2FkaW5nIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiVXNlckxvZ2luX1JFUVVFU1QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIlVzZXJMb2dpbl9TVUNDRVNTIiwiVXNlckxvZ2luX0VSUk9SIiwidHlwZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJVU0VSX0xPR0lOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxLQURPO0FBRWhCQyxTQUFPLEVBQUc7QUFGTSxDQUFwQjtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLElBQUksRUFBSTtBQUNuQztBQUFBLCtSQUFPLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQSxzQkFBUSxDQUFDQyxpQkFBaUIsRUFBbEIsQ0FBUjtBQURHO0FBQUE7QUFBQSxxQkFJd0JDLEtBQUssQ0FBQyxpQ0FBRCxFQUFtQztBQUMzREMsc0JBQU0sRUFBRyxNQURrRDtBQUUzREMsdUJBQU8sRUFBRztBQUNOLGtDQUFpQjtBQURYLGlCQUZpRDtBQUszREMsb0JBQUksRUFBR0MsSUFBSSxDQUFDQyxTQUFMLG1CQUFtQlIsSUFBbkIsRUFMb0QsQ0FLbkI7O0FBTG1CLGVBQW5DLENBSjdCOztBQUFBO0FBSU9TLHNCQUpQO0FBQUE7QUFBQSxxQkFXc0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQVh0Qjs7QUFBQTtBQVdPQyxvQkFYUDtBQVlDVixzQkFBUSxDQUFDVyxpQkFBaUIsQ0FBQ0QsTUFBRCxDQUFsQixDQUFSO0FBWkQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFjQztBQUNBVixzQkFBUSxDQUFDWSxlQUFlLEVBQWhCLENBQVI7O0FBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCSCxDQW5CTTtLQUFNZCxlO0FBcUJOLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUYsSUFBSSxFQUFJO0FBQ3JDLFNBQU07QUFDRmMsUUFBSSxFQUFHbkIsa0JBREw7QUFFRkssUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNO01BQU1FLGlCO0FBTU4sSUFBTVUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ25DLFNBQU07QUFDRkUsUUFBSSxFQUFHbEI7QUFETCxHQUFOO0FBR0gsQ0FKTTtNQUFNZ0IsaUI7QUFLTixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDakMsU0FBTTtBQUNGQyxRQUFJLEVBQUdqQjtBQURMLEdBQU47QUFHSCxDQUpNO01BQU1nQixlO0FBTU4sSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBZixJQUFJLEVBQUk7QUFBRztBQUN2QyxTQUFPO0FBQ0hjLFFBQUksRUFBRWhCO0FBREgsR0FBUDtBQUlILENBTE07TUFBTWlCLGdCOztBQVFiLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QnpCLFdBQXdCO0FBQUEsTUFBWDBCLE1BQVc7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNJLFNBQUtuQixrQkFBTDtBQUNJLCtCQUNPc0IsS0FEUDs7QUFHSixTQUFLckIsa0JBQUw7QUFDSSw2Q0FDT3FCLEtBRFA7QUFFSXhCLGVBQU8sRUFBRztBQUZkOztBQUlKLFNBQUtJLGdCQUFMO0FBQ0ksK0JBQ09vQixLQURQOztBQUdKLFNBQUtFLFVBQUw7QUFDSTtBQUNBLDZDQUNPRixLQURQO0FBQ2dCO0FBQ1p4QixlQUFPLEVBQUU7QUFGYjs7QUFLSixTQUFLSyxXQUFMO0FBQ0ksNkNBQ09tQixLQURQO0FBRUl4QixlQUFPLEVBQUU7QUFGYjs7QUFLSjtBQUNJLGFBQU93QixLQUFQO0FBNUJSO0FBOEJILENBL0JEOztBQWtDQSwrREFBZUQsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg4NWJmZDQwYzBlMWVjODhjZTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuICAgIElzTG9naW46IGZhbHNlLFxyXG4gICAgbG9hZGluZyA6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuLypcclxuICAgIGRpc3BhdGNoKHt0eXBlIDogJ1VTRVJfTE9HSU4nfSlcclxuICAgIOydtOyghOyXlCDtlZjrgpjslKkg7IS47YyF7ZW07KSs64qU642wICjsiqTtirjrp4HsnLzroZwpIOydtOqxsOydmCDri6jsoJAgLSDsmKTtg4DqsIAg64Ks7J2E65WMIO2ZleyduOydtCDslrTroLXri6RcclxuICAgIOq3uOuemOyEnCB0eXBl6rCS7J2EIOuMgOu2gOu2hCDsg4HsiJjroZwg66eO7J20IOyngOygle2VnOuLpC5cclxuKi9cclxuLy8gMy4g7IOB7IiY66GcIHR5cGUg6rCS7J2EIOuwlOq/lOykgOuLpC5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gXCJVU0VSX0xPR0lOX1JFUVVFU1RcIlxyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSBcIlVTRVJfTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSBcIlVTRVJfTE9HSU5fRVJST1JcIlxyXG5jb25zdCBVU0VSX0xPR09VVCA9IFwiVVNFUl9MT0dPVVRcIiAgICAgXHJcblxyXG4vKmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSBkYXRhID0+IHsgIC8vIOuvuOumrCDsl6zquLDshJwgYWN0aW9uIOqwkiDshKTsoJXsnYQg64ukIO2VtOuGk+uKlOuLpC4gKDA3MjkpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFVTRVJfTE9HSU4sXHJcblxyXG4gICAgfVxyXG59Ly8g6re465+wIOuLpOydjCDroZzqt7jsnbgg7Y6Y7J207KeA66GcIOqwgOyEnCBkaXNwYXRjaOuhnCDrs7TrgrzrlYwgTE9HSU4oKSDsnbTroIfqsowg7ZWo7IiY66eMIOuztOuCtOuptCDrkJzri6QuXHJcblxyXG4vKlxyXG4gICAgWzA3MzBdXHJcbiAgICByZWR1eF90aHVuayDsk7jrlYxcclxuICAgIDPri6jqs4Qg7JqU7LKtIC0g7JmE66OMIC0g7JeQ65+sXHJcbiAgICBzdGF0ZeyXkCBsb2FkaW5nIOydtOuegCDqsJLsnYQg7LaU6rCA7ZWY6rOgXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gZGF0YSA9PiB7ICBcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9SRVFVRVNUKCkpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9mZXRjaCDshLHqs7XsoIHsnbgg67aA67aEXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YX0pICAgICAgICAvLyBkYXRh64qUIOqwneyytOuhnCDrk6TslrTqsIDrqbQg7KCI64yAIOyViOuQnOuLpC4g6re4656Y7IScIHN0cmluZyDtmJXtg5zroZwuXHJcbiAgICAgICAgICAgIH0pIC8vIOqysOqzvOqwkuydgCBQcm9taXNlIOqwneyytCAtIGFzeW5jIGF3YWl0IOuhnFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1NVQ0NFU1MocmVzdWx0KSlcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGVycm9yICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKSAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9SRVFVRVNUID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9TVUNDRVNTID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiBVU0VSX0xPR0lOX1NVQ0NFU1MsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9FUlJPUiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogVVNFUl9MT0dJTl9FUlJPUixcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSBkYXRhID0+IHsgIC8vIOuvuOumrCDsl6zquLDshJwg7ISk7KCV7J2EIOuLpCDtlbTrhpPripTri6QuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luIDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTjpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn66Gc6re47J24IOyLoO2YuCDsmZTri6QnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAgIC8vIGluaXRhbFN0YXRl7J2YIOuCtOyaqeydhCDri6Qg67O17IKs7ZWc6rGw7J6EXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=