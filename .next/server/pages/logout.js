(function() {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.jsx":
/*!**************************!*\
  !*** ./pages/logout.jsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


//import Store from "../store/context"





const logout = () => {
  //const {dispatch} = useContext(Store)      - Store ver
  // 로그아웃 버튼 누르면 logout... 나온다음에 1초뒤에 로그인 버튼으로 바뀜
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    //dispatch({type : 'LOGOUT'})  이거 대신   
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_4__.UserLogoutAction)()); // 이걸로 쓴다 - redux 

    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().back();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "logout...."
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (logout);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initalState = {
  IsLogin: false,
  loading: false
};
/*
    dispatch({type : 'USER_LOGIN'})
    이전엔 하나씩 세팅해줬는데 (스트링으로) 이거의 단점 - 오타가 났을때 확인이 어렵다
    그래서 type값을 대부분 상수로 많이 지정한다.
*/
// 3. 상수로 type 값을 바꿔준다.

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
const USER_LOGOUT = "USER_LOGOUT";
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

const UserLoginAction = data => {
  return async dispatch => {
    dispatch(UserLogin_REQUEST()); // 여기까지는 상태값이 바뀐게 없음

    try {
      //fetch 성공적인 부분
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(_objectSpread({}, data)) // data는 객체로 들어가면 절대 안된다. 그래서 string 형태로.

      }); // 결과값은 Promise 객체 - async await 로

      const result = await response.json();
      result.result === 'OK' ? dispatch(UserLogin_SUCCESS(result)) : dispatch(UserLogin_ERROR());
      dispatch(UserLogin_SUCCESS(result));
    } catch (e) {
      // error         
      dispatch(UserLogin_ERROR());
    }
  };
};
const UserLogin_REQUEST = data => {
  // 단순히 객체를 반환해주는 녀석 - reducer 호출
  return {
    type: USER_LOGIN_REQUEST
  };
};
const UserLogin_SUCCESS = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
const UserLogin_ERROR = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
const UserLogoutAction = data => {
  // 미리 여기서 설정을 다 해놓는다.
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initalState, action) => {
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
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

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

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/logout.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL2xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibG9nb3V0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIlVzZXJMb2dvdXRBY3Rpb24iLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwiaW5pdGFsU3RhdGUiLCJJc0xvZ2luIiwibG9hZGluZyIsIlVTRVJfTE9HSU5fUkVRVUVTVCIsIlVTRVJfTE9HSU5fU1VDQ0VTUyIsIlVTRVJfTE9HSU5fRVJST1IiLCJVU0VSX0xPR09VVCIsIlVzZXJMb2dpbkFjdGlvbiIsImRhdGEiLCJVc2VyTG9naW5fUkVRVUVTVCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwiVXNlckxvZ2luX1NVQ0NFU1MiLCJVc2VyTG9naW5fRVJST1IiLCJlIiwidHlwZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakI7QUFDQTtBQUVBLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQUMsa0RBQVMsQ0FBQyxNQUFJO0FBQ1Y7QUFDQUYsWUFBUSxDQUFDRyxnRUFBZ0IsRUFBakIsQ0FBUixDQUZVLENBRXNCOztBQUNoQ0MsY0FBVSxDQUFDLE1BQUk7QUFDWEMsNkRBQUE7QUFDSCxLQUZTLEVBRVIsSUFGUSxDQUFWO0FBR0gsR0FOUSxFQU1QLEVBTk8sQ0FBVDtBQVFBLHNCQUNJO0FBQUE7QUFBQSxtQkFESjtBQUtILENBbEJEOztBQXFCQSwrREFBZU4sTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLE1BQU1PLFdBQVcsR0FBRztBQUNoQkMsU0FBTyxFQUFFLEtBRE87QUFFaEJDLFNBQU8sRUFBRztBQUZNLENBQXBCO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLGVBQWUsR0FBR0MsSUFBSSxJQUFJO0FBQ25DLFNBQU8sTUFBT2QsUUFBUCxJQUFtQjtBQUN0QkEsWUFBUSxDQUFDZSxpQkFBaUIsRUFBbEIsQ0FBUixDQURzQixDQUNjOztBQUNwQyxRQUFJO0FBQ0E7QUFDQSxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlDQUFELEVBQW1DO0FBQzNEQyxjQUFNLEVBQUcsTUFEa0Q7QUFFM0RDLGVBQU8sRUFBRztBQUNOLDBCQUFpQjtBQURYLFNBRmlEO0FBSzNEQyxZQUFJLEVBQUdDLElBQUksQ0FBQ0MsU0FBTCxtQkFBbUJSLElBQW5CLEVBTG9ELENBS25COztBQUxtQixPQUFuQyxDQUE1QixDQUZBLENBUUc7O0FBQ0gsWUFBTVMsTUFBTSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFyQjtBQUNBRCxZQUFNLENBQUNBLE1BQVAsS0FBa0IsSUFBbEIsR0FDRXZCLFFBQVEsQ0FBQ3lCLGlCQUFpQixDQUFDRixNQUFELENBQWxCLENBRFYsR0FHRXZCLFFBQVEsQ0FBQzBCLGVBQWUsRUFBaEIsQ0FIVjtBQUtBMUIsY0FBUSxDQUFDeUIsaUJBQWlCLENBQUNGLE1BQUQsQ0FBbEIsQ0FBUjtBQUNILEtBaEJELENBZ0JFLE9BQU9JLENBQVAsRUFBVTtBQUNSO0FBQ0EzQixjQUFRLENBQUMwQixlQUFlLEVBQWhCLENBQVI7QUFDSDtBQUNKLEdBdEJEO0FBdUJILENBeEJNO0FBMEJBLE1BQU1YLGlCQUFpQixHQUFHRCxJQUFJLElBQUk7QUFDckM7QUFDQSxTQUFNO0FBQ0ZjLFFBQUksRUFBR25CO0FBREwsR0FBTjtBQUlILENBTk07QUFPQSxNQUFNZ0IsaUJBQWlCLEdBQUcsTUFBTTtBQUNuQyxTQUFNO0FBQ0ZHLFFBQUksRUFBR2xCO0FBREwsR0FBTjtBQUlILENBTE07QUFNQSxNQUFNZ0IsZUFBZSxHQUFHLE1BQU07QUFDakMsU0FBTTtBQUNGRSxRQUFJLEVBQUdqQjtBQURMLEdBQU47QUFJSCxDQUxNO0FBT0EsTUFBTVIsZ0JBQWdCLEdBQUdXLElBQUksSUFBSTtBQUFHO0FBQ3ZDLFNBQU87QUFDSGMsUUFBSSxFQUFFaEI7QUFESCxHQUFQO0FBR0gsQ0FKTTs7QUFPUCxNQUFNaUIsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR3hCLFdBQVQsRUFBc0J5QixNQUF0QixLQUFpQztBQUM3QyxVQUFRQSxNQUFNLENBQUNILElBQWY7QUFDSSxTQUFLbkIsa0JBQUw7QUFDSSw2Q0FDT3FCLEtBRFA7QUFFSXRCLGVBQU8sRUFBRztBQUZkOztBQUlKLFNBQUtFLGtCQUFMO0FBQ0ksNkNBQ09vQixLQURQO0FBRUl2QixlQUFPLEVBQUcsSUFGZDtBQUdJQyxlQUFPLEVBQUc7QUFIZDs7QUFLSixTQUFLRyxnQkFBTDtBQUNJLDZDQUNPbUIsS0FEUDtBQUVJdEIsZUFBTyxFQUFHO0FBRmQ7O0FBSUo7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVRLFNBQUtJLFdBQUw7QUFDSSw2Q0FDT2tCLEtBRFA7QUFFSXZCLGVBQU8sRUFBRTtBQUZiOztBQUtKO0FBQ0ksYUFBT3VCLEtBQVA7QUEvQlI7QUFpQ0gsQ0FsQ0Q7O0FBcUNBLCtEQUFlRCxPQUFmLEU7Ozs7Ozs7Ozs7O0FDekhBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IFN0b3JlIGZyb20gXCIuLi9zdG9yZS9jb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFVzZXJMb2dvdXRBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiXHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnN0IHtkaXNwYXRjaH0gPSB1c2VDb250ZXh0KFN0b3JlKSAgICAgIC0gU3RvcmUgdmVyXHJcbiAgICAvLyDroZzqt7jslYTsm4Mg67KE7Yq8IOuIhOultOuptCBsb2dvdXQuLi4g64KY7Jio64uk7J2M7JeQIDHstIjrkqTsl5Ag66Gc6re47J24IOuyhO2KvOycvOuhnCDrsJTrgJxcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vZGlzcGF0Y2goe3R5cGUgOiAnTE9HT1VUJ30pICDsnbTqsbAg64yA7IugICAgXHJcbiAgICAgICAgZGlzcGF0Y2goVXNlckxvZ291dEFjdGlvbigpKSAgICAvLyDsnbTqsbjroZwg7JO064ukIC0gcmVkdXggXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBSb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICBsb2dvdXQuLi4uXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dvdXQiLCJjb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuICAgIElzTG9naW46IGZhbHNlLFxyXG4gICAgbG9hZGluZyA6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuLypcclxuICAgIGRpc3BhdGNoKHt0eXBlIDogJ1VTRVJfTE9HSU4nfSlcclxuICAgIOydtOyghOyXlCDtlZjrgpjslKkg7IS47YyF7ZW07KSs64qU642wICjsiqTtirjrp4HsnLzroZwpIOydtOqxsOydmCDri6jsoJAgLSDsmKTtg4DqsIAg64Ks7J2E65WMIO2ZleyduOydtCDslrTroLXri6RcclxuICAgIOq3uOuemOyEnCB0eXBl6rCS7J2EIOuMgOu2gOu2hCDsg4HsiJjroZwg66eO7J20IOyngOygle2VnOuLpC5cclxuKi9cclxuLy8gMy4g7IOB7IiY66GcIHR5cGUg6rCS7J2EIOuwlOq/lOykgOuLpC5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gXCJVU0VSX0xPR0lOX1JFUVVFU1RcIlxyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSBcIlVTRVJfTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSBcIlVTRVJfTE9HSU5fRVJST1JcIlxyXG5jb25zdCBVU0VSX0xPR09VVCA9IFwiVVNFUl9MT0dPVVRcIiAgICAgXHJcblxyXG4vKmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSBkYXRhID0+IHsgIC8vIOuvuOumrCDsl6zquLDshJwgYWN0aW9uIOqwkiDshKTsoJXsnYQg64ukIO2VtOuGk+uKlOuLpC4gKDA3MjkpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFVTRVJfTE9HSU4sXHJcblxyXG4gICAgfVxyXG59Ly8g6re465+wIOuLpOydjCDroZzqt7jsnbgg7Y6Y7J207KeA66GcIOqwgOyEnCBkaXNwYXRjaOuhnCDrs7TrgrzrlYwgTE9HSU4oKSDsnbTroIfqsowg7ZWo7IiY66eMIOuztOuCtOuptCDrkJzri6QuXHJcblxyXG4vKlxyXG4gICAgWzA3MzBdXHJcbiAgICByZWR1eF90aHVuayDsk7jrlYxcclxuICAgIDPri6jqs4Qg7JqU7LKtIC0g7JmE66OMIC0g7JeQ65+sXHJcbiAgICBzdGF0ZeyXkCBsb2FkaW5nIOydtOuegCDqsJLsnYQg7LaU6rCA7ZWY6rOgXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gZGF0YSA9PiB7ICBcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9SRVFVRVNUKCkpICAgICAgIC8vIOyXrOq4sOq5jOyngOuKlCDsg4Htg5zqsJLsnbQg67CU64CQ6rKMIOyXhuydjFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vZmV0Y2gg7ISx6rO17KCB7J24IOu2gOu2hFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5IDogSlNPTi5zdHJpbmdpZnkoey4uLmRhdGF9KSAgICAgICAgLy8gZGF0YeuKlCDqsJ3ssrTroZwg65Ok7Ja06rCA66m0IOygiOuMgCDslYjrkJzri6QuIOq3uOuemOyEnCBzdHJpbmcg7ZiV7YOc66GcLlxyXG4gICAgICAgICAgICB9KSAvLyDqsrDqs7zqsJLsnYAgUHJvbWlzZSDqsJ3ssrQgLSBhc3luYyBhd2FpdCDroZxcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHJlc3VsdC5yZXN1bHQgPT09ICdPSydcclxuICAgICAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5fU1VDQ0VTUyhyZXN1bHQpKVxyXG5cclxuICAgICAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5fRVJST1IoKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBlcnJvciAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fRVJST1IoKSkgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fUkVRVUVTVCA9IGRhdGEgPT4ge1xyXG4gICAgLy8g64uo7Iic7Z6IIOqwneyytOulvCDrsJjtmZjtlbTso7zripQg64WA7ISdIC0gcmVkdWNlciDtmLjstpxcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogVVNFUl9MT0dJTl9SRVFVRVNULFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fU1VDQ0VTUyA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogVVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fRVJST1IgPSAoKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IFVTRVJfTE9HSU5fRVJST1IsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gZGF0YSA9PiB7ICAvLyDrr7jrpqwg7Jes6riw7IScIOyEpOygleydhCDri6Qg7ZW064aT64qU64ukLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBVU0VSX0xPR09VVCxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvKmNhc2UgVVNFUl9MT0dJTjpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn66Gc6re47J24IOyLoO2YuCDsmZTri6QnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAgIC8vIGluaXRhbFN0YXRl7J2YIOuCtOyaqeydhCDri6Qg67O17IKs7ZWc6rGw7J6EXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbjogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9