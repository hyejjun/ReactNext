self["webpackHotUpdate_N_E"]("pages/login",{

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
              dispatch(UserLogin_REQUEST()); // 여기까지는 상태값이 바뀐게 없음

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
              result.result === 'OK' ? dispatch(UserLogin_SUCCESS(result)) : dispatch(UserLogin_ERROR());
              dispatch(UserLogin_SUCCESS(result));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              // error         
              dispatch(UserLogin_ERROR());

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
_c = UserLoginAction;
var UserLogin_REQUEST = function UserLogin_REQUEST(data) {
  // 단순히 객체를 반환해주는 녀석 - reducer 호출
  return {
    type: USER_LOGIN_REQUEST
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
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        loading: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread({}, state);

    /*case USER_LOGIN:
        //console.log('로그인 신호 왔다');
        return {
            ...state,   // initalState의 내용을 다 복사한거임
            IsLogin: true,
          }*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0YWxTdGF0ZSIsIklzTG9naW4iLCJsb2FkaW5nIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiVXNlckxvZ2luX1JFUVVFU1QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIlVzZXJMb2dpbl9TVUNDRVNTIiwiVXNlckxvZ2luX0VSUk9SIiwidHlwZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRztBQUNoQkMsU0FBTyxFQUFFLEtBRE87QUFFaEJDLFNBQU8sRUFBRztBQUZNLENBQXBCO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsSUFBSSxFQUFJO0FBQ25DO0FBQUEsK1JBQU8saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hBLHNCQUFRLENBQUNDLGlCQUFpQixFQUFsQixDQUFSLENBREcsQ0FDaUM7O0FBRGpDO0FBQUE7QUFBQSxxQkFJd0JDLEtBQUssQ0FBQyxpQ0FBRCxFQUFtQztBQUMzREMsc0JBQU0sRUFBRyxNQURrRDtBQUUzREMsdUJBQU8sRUFBRztBQUNOLGtDQUFpQjtBQURYLGlCQUZpRDtBQUszREMsb0JBQUksRUFBR0MsSUFBSSxDQUFDQyxTQUFMLG1CQUFtQlIsSUFBbkIsRUFMb0QsQ0FLbkI7O0FBTG1CLGVBQW5DLENBSjdCOztBQUFBO0FBSU9TLHNCQUpQO0FBQUE7QUFBQSxxQkFXc0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQVh0Qjs7QUFBQTtBQVdPQyxvQkFYUDtBQVlDQSxvQkFBTSxDQUFDQSxNQUFQLEtBQWtCLElBQWxCLEdBQ0VWLFFBQVEsQ0FBQ1csaUJBQWlCLENBQUNELE1BQUQsQ0FBbEIsQ0FEVixHQUdFVixRQUFRLENBQUNZLGVBQWUsRUFBaEIsQ0FIVjtBQUtBWixzQkFBUSxDQUFDVyxpQkFBaUIsQ0FBQ0QsTUFBRCxDQUFsQixDQUFSO0FBakJEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJDO0FBQ0FWLHNCQUFRLENBQUNZLGVBQWUsRUFBaEIsQ0FBUjs7QUFwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCSCxDQXhCTTtLQUFNZCxlO0FBMEJOLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUYsSUFBSSxFQUFJO0FBQ3JDO0FBQ0EsU0FBTTtBQUNGYyxRQUFJLEVBQUduQjtBQURMLEdBQU47QUFJSCxDQU5NO01BQU1PLGlCO0FBT04sSUFBTVUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ25DLFNBQU07QUFDRkUsUUFBSSxFQUFHbEI7QUFETCxHQUFOO0FBSUgsQ0FMTTtNQUFNZ0IsaUI7QUFNTixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDakMsU0FBTTtBQUNGQyxRQUFJLEVBQUdqQjtBQURMLEdBQU47QUFJSCxDQUxNO01BQU1nQixlO0FBT04sSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBZixJQUFJLEVBQUk7QUFBRztBQUN2QyxTQUFPO0FBQ0hjLFFBQUksRUFBRWhCO0FBREgsR0FBUDtBQUdILENBSk07TUFBTWlCLGdCOztBQU9iLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QnpCLFdBQXdCO0FBQUEsTUFBWDBCLE1BQVc7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNJLFNBQUtuQixrQkFBTDtBQUNJLDZDQUNPc0IsS0FEUDtBQUVJdkIsZUFBTyxFQUFHO0FBRmQ7O0FBSUosU0FBS0Usa0JBQUw7QUFDSSw2Q0FDT3FCLEtBRFA7QUFFSXhCLGVBQU8sRUFBRyxJQUZkO0FBR0lDLGVBQU8sRUFBRztBQUhkOztBQUtKLFNBQUtHLGdCQUFMO0FBQ0ksK0JBQ09vQixLQURQOztBQUdKO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUSxTQUFLbkIsV0FBTDtBQUNJLDZDQUNPbUIsS0FEUDtBQUVJeEIsZUFBTyxFQUFFO0FBRmI7O0FBS0o7QUFDSSxhQUFPd0IsS0FBUDtBQTlCUjtBQWdDSCxDQWpDRDs7QUFvQ0EsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOWI0OWI5NmJjNDI5OWI2ODVjNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgSXNMb2dpbjogZmFsc2UsXHJcbiAgICBsb2FkaW5nIDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICAgZGlzcGF0Y2goe3R5cGUgOiAnVVNFUl9MT0dJTid9KVxyXG4gICAg7J207KCE7JeUIO2VmOuCmOyUqSDshLjtjIXtlbTspKzripTrjbAgKOyKpO2KuOungeycvOuhnCkg7J206rGw7J2YIOuLqOygkCAtIOyYpO2DgOqwgCDrgqzsnYTrlYwg7ZmV7J247J20IOyWtOugteuLpFxyXG4gICAg6re4656Y7IScIHR5cGXqsJLsnYQg64yA67aA67aEIOyDgeyImOuhnCDrp47snbQg7KeA7KCV7ZWc64ukLlxyXG4qL1xyXG4vLyAzLiDsg4HsiJjroZwgdHlwZSDqsJLsnYQg67CU6r+U7KSA64ukLlxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSBcIlVTRVJfTE9HSU5fUkVRVUVTVFwiXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9IFwiVVNFUl9MT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9IFwiVVNFUl9MT0dJTl9FUlJPUlwiXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gXCJVU0VSX0xPR09VVFwiICAgICBcclxuXHJcbi8qZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IGRhdGEgPT4geyAgLy8g66+466asIOyXrOq4sOyEnCBhY3Rpb24g6rCSIOyEpOygleydhCDri6Qg7ZW064aT64qU64ukLiAoMDcyOSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVVNFUl9MT0dJTixcclxuXHJcbiAgICB9XHJcbn0vLyDqt7jrn7Ag64uk7J2MIOuhnOq3uOyduCDtjpjsnbTsp4DroZwg6rCA7IScIGRpc3BhdGNo66GcIOuztOuCvOuVjCBMT0dJTigpIOydtOugh+qyjCDtlajsiJjrp4wg67O064K066m0IOuQnOuLpC5cclxuXHJcbi8qXHJcbiAgICBbMDczMF1cclxuICAgIHJlZHV4X3RodW5rIOyTuOuVjFxyXG4gICAgM+uLqOqzhCDsmpTssq0gLSDsmYTro4wgLSDsl5Drn6xcclxuICAgIHN0YXRl7JeQIGxvYWRpbmcg7J20656AIOqwkuydhCDstpTqsIDtlZjqs6BcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSBkYXRhID0+IHsgIFxyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCk9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1JFUVVFU1QoKSkgICAgICAgLy8g7Jes6riw6rmM7KeA64qUIOyDge2DnOqwkuydtCDrsJTrgJDqsowg7JeG7J2MXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9mZXRjaCDshLHqs7XsoIHsnbgg67aA67aEXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YX0pICAgICAgICAvLyBkYXRh64qUIOqwneyytOuhnCDrk6TslrTqsIDrqbQg7KCI64yAIOyViOuQnOuLpC4g6re4656Y7IScIHN0cmluZyDtmJXtg5zroZwuXHJcbiAgICAgICAgICAgIH0pIC8vIOqysOqzvOqwkuydgCBQcm9taXNlIOqwneyytCAtIGFzeW5jIGF3YWl0IOuhnFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgcmVzdWx0LnJlc3VsdCA9PT0gJ09LJ1xyXG4gICAgICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcblxyXG4gICAgICAgICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1NVQ0NFU1MocmVzdWx0KSlcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGVycm9yICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKSAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9SRVFVRVNUID0gZGF0YSA9PiB7XHJcbiAgICAvLyDri6jsiJztnogg6rCd7LK066W8IOuwmO2ZmO2VtOyjvOuKlCDrhYDshJ0gLSByZWR1Y2VyIO2YuOy2nFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiBVU0VSX0xPR0lOX1JFUVVFU1QsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9TVUNDRVNTID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiBVU0VSX0xPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9FUlJPUiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogVVNFUl9MT0dJTl9FUlJPUixcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSBkYXRhID0+IHsgIC8vIOuvuOumrCDsl6zquLDshJwg7ISk7KCV7J2EIOuLpCDtlbTrhpPripTri6QuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW4gOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8qY2FzZSBVU0VSX0xPR0lOOlxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCfroZzqt7jsnbgg7Iug7Zi4IOyZlOuLpCcpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsICAgLy8gaW5pdGFsU3RhdGXsnZgg64K07Jqp7J2EIOuLpCDrs7XsgqztlZzqsbDsnoRcclxuICAgICAgICAgICAgICAgIElzTG9naW46IHRydWUsXHJcblxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9