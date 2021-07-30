(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/FormLayout.jsx":
/*!***********************************!*\
  !*** ./components/FormLayout.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\components\\FormLayout.jsx";
// 회원가입, 로그인일 때만 쓰는 폼 이라고 생각하면됨 - 요즘 트랜드는 개별 페이지로 되어있음 그리고 위에 헤더부분이 없음
 //import styled from './FormLayout.module.css'        // 객체 형태로 만들어짐


const Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "FormLayout__Background",
  componentId: "sc-f90v8c-0"
})(["width:100vw;height:100vh;background:#eee;display:flex;align-items:center;justify-content:center;& > div{width:300px;height:400px;background:#fff;padding:20px;}"]);

const FormLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: () => {
            next_router__WEBPACK_IMPORTED_MODULE_1___default().back();
          },
          children: "\uB4A4\uB85C\uAC00\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./hooks/useInput.jsx":
/*!****************************!*\
  !*** ./hooks/useInput.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* userid userpw 한번에 통제 - custum hook - 이제부터 많이 쓸거임*/

const useInput = defaultValue => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);

  const onChange = e => {
    const {
      value
    } = _objectSpread({}, e.target);

    setValue(value);
  };

  return {
    value,
    onChange
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\login.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // index에 없고 user에 있으니까.



const Login = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    loading,
    IsLogin
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user); // 로딩값을가져오고

  console.log("loading = ", loading); //dispatch({type : 'USER_LOGIN'})       -이거를 index.js 에서 미리 설정해놓고

  const userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)(''); // 결과물이 Object

  const userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)(''); // 결과물이 Object

  const handleSubmit = async e => {
    e.preventDefault(); // console.log(userid.value, userpw.value);

    const data = {
      // 객체를 만들어서 백쪽으로 던져준다
      userid: userid.value,
      userpw: userpw.value
    };
    await dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_6__.UserLoginAction)(data)); //await dispatch(UserLoginAction(data))
    // 비동기 처리를 하면 이게 요청이 실행되기 전까지 밑에 코드가 실행되지 않음 
    // try catch 문이 완료 될때까지 기다렸다가 에러가 나면 그때 아래 코드를 실행시켜준다.

    /*userid.value === 'web7722' && userpw.value === '1234'
    ? Router.push('/')
    : alert('아이디와 패스워드가 다릅니다.')*/
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    IsLogin === true && next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/'); //: alert('아이디와 패스워드가 다릅니다.')
  }, [loading]); // useEffect - componentDidMount 배열값이 비어있으면 . 배열안에 특정 값이 있으면 loading값이 바뀔때마다 실행됨

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), loading ? '로그인로딩중!' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 44
        }, undefined), "      "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined)]
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


/* harmony default export */ __webpack_exports__["default"] = (Login);

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/login.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ob29rcy91c2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9sb2dpbi5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsIlN0eWxlZCIsIkZvcm1MYXlvdXQiLCJjaGlsZHJlbiIsIlJvdXRlciIsInVzZUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiTG9naW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9hZGluZyIsIklzTG9naW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJ1c2VycHciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJVc2VyTG9naW5BY3Rpb24iLCJ1c2VFZmZlY3QiLCJpbml0YWxTdGF0ZSIsIlVTRVJfTE9HSU5fUkVRVUVTVCIsIlVTRVJfTE9HSU5fU1VDQ0VTUyIsIlVTRVJfTE9HSU5fRVJST1IiLCJVU0VSX0xPR09VVCIsIlVzZXJMb2dpbl9SRVFVRVNUIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJVc2VyTG9naW5fU1VDQ0VTUyIsIlVzZXJMb2dpbl9FUlJPUiIsInR5cGUiLCJVc2VyTG9nb3V0QWN0aW9uIiwicmVkdWNlciIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSx1S0FBaEI7O0FBaUJBLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNqQyxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUcsaUJBQU8sRUFBRSxNQUFNO0FBQUVDLG1FQUFBO0FBQWUsV0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFS0QsUUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFVSCxDQVhEOztBQWFBLCtEQUFlRCxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBRUE7O0FBQ0EsTUFBTUcsUUFBUSxHQUFJQyxZQUFELElBQWtCO0FBQy9CLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQ0gsWUFBRCxDQUFsQzs7QUFDQSxRQUFNSSxRQUFRLEdBQUdDLENBQUMsSUFBSTtBQUNsQixVQUFNO0FBQUVKO0FBQUYsMEJBQWlCSSxDQUFDLENBQUNDLE1BQW5CLENBQU47O0FBQ0FKLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxTQUFPO0FBQ0hBLFNBREc7QUFFSEc7QUFGRyxHQUFQO0FBSUgsQ0FYRDs7QUFhQSwrREFBZUwsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TztBQUNIb0IsUUFBSSxFQUFFYjtBQURILEdBQVA7QUFHSCxDQUpNOztBQU9QLE1BQU1lLE9BQU8sR0FBRyxDQUFDOUIsS0FBSyxHQUFHVyxXQUFULEVBQXNCb0IsTUFBdEIsS0FBaUM7QUFDN0MsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBQ0ksU0FBS2hCLGtCQUFMO0FBQ0ksNkNBQ09aLEtBRFA7QUFFSUgsZUFBTyxFQUFHO0FBRmQ7O0FBSUosU0FBS2dCLGtCQUFMO0FBQ0ksNkNBQ09iLEtBRFA7QUFFSUYsZUFBTyxFQUFHLElBRmQ7QUFHSUQsZUFBTyxFQUFHO0FBSGQ7O0FBS0osU0FBS2lCLGdCQUFMO0FBQ0ksNkNBQ09kLEtBRFA7QUFFSUgsZUFBTyxFQUFHO0FBRmQ7O0FBSUo7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVRLFNBQUtrQixXQUFMO0FBQ0ksNkNBQ09mLEtBRFA7QUFFSUYsZUFBTyxFQUFFO0FBRmI7O0FBS0o7QUFDSSxhQUFPRSxLQUFQO0FBL0JSO0FBaUNILENBbENEOztBQXFDQSwrREFBZThCLE9BQWYsRTs7Ozs7Ozs7Ozs7QUN6SEEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDtmozsm5DqsIDsnoUsIOuhnOq3uOyduOydvCDrlYzrp4wg7JOw64qUIO2PvCDsnbTrnbzqs6Ag7IOd6rCB7ZWY66m065CoIC0g7JqU7KaYIO2KuOuenOuTnOuKlCDqsJzrs4Qg7Y6Y7J207KeA66GcIOuQmOyWtOyeiOydjCDqt7jrpqzqs6Ag7JyE7JeQIO2XpOuNlOu2gOu2hOydtCDsl4bsnYxcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG4vL2ltcG9ydCBzdHlsZWQgZnJvbSAnLi9Gb3JtTGF5b3V0Lm1vZHVsZS5jc3MnICAgICAgICAvLyDqsJ3ssrQg7ZiV7YOc66GcIOunjOuTpOyWtOynkFxyXG5pbXBvcnQgU3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gU3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDojZWVlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IEZvcm1MYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiB7IFJvdXRlci5iYWNrKCkgfX0+65Kk66Gc6rCA6riwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXQiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG4vKiB1c2VyaWQgdXNlcnB3IO2VnOuyiOyXkCDthrXsoJwgLSBjdXN0dW0gaG9vayAtIOydtOygnOu2gO2EsCDrp47snbQg7JO46rGw7J6EKi9cclxuY29uc3QgdXNlSW5wdXQgPSAoZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSlcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0geyAuLi5lLnRhcmdldCB9XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBvbkNoYW5nZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dCIsImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1MYXlvdXRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBVc2VyTG9naW5BY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiICAgICAgLy8gaW5kZXjsl5Ag7JeG6rOgIHVzZXLsl5Ag7J6I7Jy864uI6rmMLlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIElzTG9naW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcikgIC8vIOuhnOuUqeqwkuydhOqwgOyguOyYpOqzoFxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyA9IFwiLCBsb2FkaW5nKTtcclxuXHJcbiAgICAvL2Rpc3BhdGNoKHt0eXBlIDogJ1VTRVJfTE9HSU4nfSkgICAgICAgLeydtOqxsOulvCBpbmRleC5qcyDsl5DshJwg66+466asIOyEpOygle2VtOuGk+qzoFxyXG5cclxuXHJcbiAgICBjb25zdCB1c2VyaWQgPSB1c2VJbnB1dCgnJykgICAgICAgICAvLyDqsrDqs7zrrLzsnbQgT2JqZWN0XHJcbiAgICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJykgICAgICAgICAvLyDqsrDqs7zrrLzsnbQgT2JqZWN0XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyaWQudmFsdWUsIHVzZXJwdy52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgICAgICAgICAgICAgICAgICAgICAgLy8g6rCd7LK066W8IOunjOuTpOyWtOyEnCDrsLHsqr3snLzroZwg642Y7KC47KSA64ukXHJcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcmlkLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VycHc6IHVzZXJwdy52YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goVXNlckxvZ2luQWN0aW9uKGRhdGEpKVxyXG5cclxuICAgICAgICAvL2F3YWl0IGRpc3BhdGNoKFVzZXJMb2dpbkFjdGlvbihkYXRhKSlcclxuICAgICAgICAvLyDruYTrj5nquLAg7LKY66as66W8IO2VmOuptCDsnbTqsowg7JqU7LKt7J20IOyLpO2WieuQmOq4sCDsoITquYzsp4Ag67CR7JeQIOy9lOuTnOqwgCDsi6TtlonrkJjsp4Ag7JWK7J2MIFxyXG4gICAgICAgIC8vIHRyeSBjYXRjaCDrrLjsnbQg7JmE66OMIOuQoOuVjOq5jOyngCDquLDri6TroLjri6TqsIAg7JeQ65+s6rCAIOuCmOuptCDqt7jrlYwg7JWE656YIOy9lOuTnOulvCDsi6Ttlonsi5zsvJzspIDri6QuXHJcblxyXG4gICAgICAgIC8qdXNlcmlkLnZhbHVlID09PSAnd2ViNzcyMicgJiYgdXNlcnB3LnZhbHVlID09PSAnMTIzNCdcclxuICAgICAgICA/IFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICA6IGFsZXJ0KCfslYTsnbTrlJTsmYAg7Yyo7Iqk7JuM65Oc6rCAIOuLpOumheuLiOuLpC4nKSovXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBJc0xvZ2luID09PSB0cnVlICYmIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAvLzogYWxlcnQoJ+yVhOydtOuUlOyZgCDtjKjsiqTsm4zrk5zqsIAg64uk66aF64uI64ukLicpXHJcbiAgICB9LCBbbG9hZGluZ10pXHJcbiAgICAvLyB1c2VFZmZlY3QgLSBjb21wb25lbnREaWRNb3VudCDrsLDsl7TqsJLsnbQg67mE7Ja07J6I7Jy866m0IC4g67Cw7Je07JWI7JeQIO2KueyglSDqsJLsnbQg7J6I7Jy866m0IGxvYWRpbmfqsJLsnbQg67CU64CU65WM66eI64ukIOyLpO2WieuQqFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IGxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj7roZzqt7jsnbg8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gcGxhY2Vob2xkZXI9J+yVhOydtOuUlOulvCDsnoXroKXtlbTso7zshLjsmpQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi51c2VycHd9IHBsYWNlaG9sZGVyPSftjKjsiqTsm4zrk5zrpbwg7J6F66Cl7ZW07KO87IS47JqUJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ+uhnOq3uOyduOuhnOuUqeykkSEnIDogPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPuuhnOq3uOyduDwvYnV0dG9uPn0gICAgICB7LyogbG9hZGluZyDqsJLsnbQgdHJ1ZSDsnbzrlYzrp4wg66Gc6re47J24IOuyhO2KvOydhCDrs7Tsl6zso7zqsoztlaggKi99XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuICAgIOydtOqxsCDsmZwg65CY64OQPyAgICBcclxuICAgIHsuLi51c2VyaWR9XHJcbiAgICB7Li4udXNlcnB3fVxyXG5cclxuICAgIDEuIOychCDslYTrnpgg64+Z7J287ZWc6rGw7J6EXHJcbiAgICB2YWx1ZSA9ICdvaydcclxuICAgIHsuLi57J3ZhbHVlJzonb2snfX1cclxuXHJcbiAgICAyLiDsnIQg7JWE656YIOuPmeydvO2VnOqxsOyehFxyXG4gICAgey4uLnt2YWx1ZSA6J3dlYjc3MjInLCBvbkNoYW5nZTooKT0+e2FsZXJ0KDEpfX19XHJcbiAgICB2YWx1ZSA9ICd3ZWI3NzIyJyBvbkNoYW5nZT17KCk9PnthbGVydCgxKX19XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAge3ZhbHVlOlwiXCIsIG9uQ2hhbmdlOmZ9XHJcbiAgICDsnbTroIfqsowg7LCN7Z6YXHJcbiAgICDsnITsl5Dsspjrn7wg67CU67KoIOusuOuyleycvOuhnCDsk7gg7IiYIOyeiOqyjCDqsJ3ssrQg7ZiV7YOc66GcIOuwmO2ZmOydtCDrkJjrj4TroZ0g7ZW07KSA6rGw7J6EIOq3uOuemOyEnFxyXG4gICAgaW5wdXQg7JeQ64uk6rCAIHsuLi51c2VyaWR9IO2VmOuptCDsoIDroIfqsowg7IKs7Jqp7J20IOqwgOuKpe2VnOqxsOyehFxyXG5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwiY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbiAgICBJc0xvZ2luOiBmYWxzZSxcclxuICAgIGxvYWRpbmcgOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbi8qXHJcbiAgICBkaXNwYXRjaCh7dHlwZSA6ICdVU0VSX0xPR0lOJ30pXHJcbiAgICDsnbTsoITsl5Qg7ZWY64KY7JSpIOyEuO2Mhe2VtOykrOuKlOuNsCAo7Iqk7Yq466eB7Jy866GcKSDsnbTqsbDsnZgg64uo7KCQIC0g7Jik7YOA6rCAIOuCrOydhOuVjCDtmZXsnbjsnbQg7Ja066C164ukXHJcbiAgICDqt7jrnpjshJwgdHlwZeqwkuydhCDrjIDrtoDrtoQg7IOB7IiY66GcIOunjuydtCDsp4DsoJXtlZzri6QuXHJcbiovXHJcbi8vIDMuIOyDgeyImOuhnCB0eXBlIOqwkuydhCDrsJTqv5TspIDri6QuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9IFwiVVNFUl9MT0dJTl9SRVFVRVNUXCJcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gXCJVU0VSX0xPR0lOX1NVQ0NFU1NcIlxyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gXCJVU0VSX0xPR0lOX0VSUk9SXCJcclxuY29uc3QgVVNFUl9MT0dPVVQgPSBcIlVTRVJfTE9HT1VUXCIgICAgIFxyXG5cclxuLypleHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gZGF0YSA9PiB7ICAvLyDrr7jrpqwg7Jes6riw7IScIGFjdGlvbiDqsJIg7ISk7KCV7J2EIOuLpCDtlbTrhpPripTri6QuICgwNzI5KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBVU0VSX0xPR0lOLFxyXG5cclxuICAgIH1cclxufS8vIOq3uOufsCDri6TsnYwg66Gc6re47J24IO2OmOydtOyngOuhnCDqsIDshJwgZGlzcGF0Y2jroZwg67O064K865WMIExPR0lOKCkg7J2066CH6rKMIO2VqOyImOunjCDrs7TrgrTrqbQg65Cc64ukLlxyXG5cclxuLypcclxuICAgIFswNzMwXVxyXG4gICAgcmVkdXhfdGh1bmsg7JO465WMXHJcbiAgICAz64uo6rOEIOyalOyyrSAtIOyZhOujjCAtIOyXkOufrFxyXG4gICAgc3RhdGXsl5AgbG9hZGluZyDsnbTrnoAg6rCS7J2EIOy2lOqwgO2VmOqzoFxyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IGRhdGEgPT4geyAgXHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKT0+IHtcclxuICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fUkVRVUVTVCgpKSAgICAgICAvLyDsl6zquLDquYzsp4DripQg7IOB7YOc6rCS7J20IOuwlOuAkOqyjCDsl4bsnYxcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2ZldGNoIOyEseqzteyggeyduCDrtoDrtoRcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhfSkgICAgICAgIC8vIGRhdGHripQg6rCd7LK066GcIOuTpOyWtOqwgOuptCDsoIjrjIAg7JWI65Cc64ukLiDqt7jrnpjshJwgc3RyaW5nIO2Yle2DnOuhnC5cclxuICAgICAgICAgICAgfSkgLy8g6rKw6rO86rCS7J2AIFByb21pc2Ug6rCd7LK0IC0gYXN5bmMgYXdhaXQg66GcXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICByZXN1bHQucmVzdWx0ID09PSAnT0snXHJcbiAgICAgICAgICAgID8gZGlzcGF0Y2goVXNlckxvZ2luX1NVQ0NFU1MocmVzdWx0KSlcclxuXHJcbiAgICAgICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fU1VDQ0VTUyhyZXN1bHQpKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gZXJyb3IgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1JFUVVFU1QgPSBkYXRhID0+IHtcclxuICAgIC8vIOuLqOyInO2eiCDqsJ3ssrTrpbwg67CY7ZmY7ZW07KO864qUIOuFgOyEnSAtIHJlZHVjZXIg7Zi47LacXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1NVQ0NFU1MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IFVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX0VSUk9SID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiBVU0VSX0xPR0lOX0VSUk9SLFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9IGRhdGEgPT4geyAgLy8g66+466asIOyXrOq4sOyEnCDshKTsoJXsnYQg64ukIO2VtOuGk+uKlOuLpC5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVVNFUl9MT0dPVVQsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbiA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLypjYXNlIFVTRVJfTE9HSU46XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+uhnOq3uOyduCDsi6DtmLgg7JmU64ukJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgICAvLyBpbml0YWxTdGF0ZeydmCDrgrTsmqnsnYQg64ukIOuzteyCrO2VnOqxsOyehFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbjogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==