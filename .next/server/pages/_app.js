(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.jsx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "D:\\Blockchain_html\\0726_Next\\blog\\front\\pages\\_app.jsx";
// 모든 컴포넌트에 공통적인 걸 넣고 싶을 때 사용한다 - 보통 common.css 를 import 할때 많이 사용한다. 







const App = ({
  Component
}) => {
  const globalContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer, globalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: ["        ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), "       "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__.default.withRedux(App));

/***/ }),

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initalState = {
  menu: [{
    id: '1',
    category: 'HTML',
    url: '/posts/HTML'
  }, {
    id: '2',
    category: 'C++',
    url: '/posts/C++'
  }, {
    id: '3',
    category: 'CSS',
    url: '/posts/CSS'
  }, {
    id: '4',
    category: 'JAVA',
    url: '/posts/JAVA'
  }, {
    id: '5',
    category: 'JS',
    url: '/posts/JS'
  }]
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 모든 데이터에 관련된것은 reducer 에 해놓는 것이 좋다. - initalState 안에 저장 - reducer를 쪼개서 사용해보자
// 2. 여기서 초기값을 설정해준다. - 여기서 초기값 설정해준걸 쪼개준거임 - 필요없어져서 지움




const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  category: _category__WEBPACK_IMPORTED_MODULE_3__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);






const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action); // object
  //console.log(dispatch)       // function
  //console.log(getState)       // function
  //console.log(getState());

  return next(action);
};

const configureStore = () => {
  const middlewares = [loggerMiddleware, (redux_thunk__WEBPACK_IMPORTED_MODULE_4___default())];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares)); // composeWithDevTools 얘는 코드를 실행할때마다 dispatch를 남겨놓는다.

  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default, enhancer);
  return Store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
}); // 첫번째 인자값에 Store를 넣어준다 두번째 인자값에는 debug 어쩌구 - 개발 모드일때만.
// <Store.Provider></Store.Provider> 이거 대신 쓰려고 만듦
// _app.jsx 가서

/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalState": function() { return /* binding */ initalState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  IsLogin: true
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./store/reducer.jsx":
/*!***************************!*\
  !*** ./store/reducer.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread({}, state);

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });
  }
};

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvcmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJnbG9iYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIlN0b3JlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwid3JhcHBlciIsImluaXRhbFN0YXRlIiwibWVudSIsImlkIiwiY2F0ZWdvcnkiLCJ1cmwiLCJhY3Rpb24iLCJ0eXBlIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJJc0xvZ2luIiwibG9hZGluZyIsIlVTRVJfTE9HSU5fUkVRVUVTVCIsIlVTRVJfTE9HSU5fU1VDQ0VTUyIsIlVTRVJfTE9HSU5fRVJST1IiLCJVU0VSX0xPR09VVCIsIlVzZXJMb2dpbkFjdGlvbiIsImRhdGEiLCJVc2VyTG9naW5fUkVRVUVTVCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwiVXNlckxvZ2luX1NVQ0NFU1MiLCJVc2VyTG9naW5fRVJST1IiLCJlIiwiVXNlckxvZ291dEFjdGlvbiIsImxvZ2dlck1pZGRsZXdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsInRodW5rTWlkZGxld2FyZSIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDM0IsUUFBTUMsYUFBYSxHQUFHQyxpREFBVSxDQUFDQyxtREFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsaURBQVUsQ0FBQ0MsbURBQUQsRUFBVU4sYUFBVixDQUFwQztBQUNBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMkJBQTVCO0FBQXdELG1CQUFXLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxt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OztBQzlCQTtBQUVPLE1BQU1DLFdBQVcsR0FBRztBQUN2QlksU0FBTyxFQUFFO0FBRGMsQ0FBcEI7QUFJUCxNQUFNbEIsS0FBSyxnQkFBR3VELG9EQUFhLENBQUNqRCxXQUFELENBQTNCO0FBRUEsK0RBQWVOLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk8sTUFBTUksT0FBTyxHQUFHLENBQUNILEtBQUQsRUFBUVUsTUFBUixLQUFtQjtBQUN0QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLE9BQUw7QUFDSSwrQkFDT1gsS0FEUDs7QUFHSixTQUFLLFFBQUw7QUFDSSw2Q0FDT0EsS0FEUDtBQUVJaUIsZUFBTyxFQUFHO0FBRmQ7QUFOUjtBQVdILENBWk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOuqqOuToCDsu7Ttj6zrhIztirjsl5Ag6rO17Ya17KCB7J24IOqxuCDrhKPqs6Ag7Iu27J2EIOuVjCDsgqzsmqntlZzri6QgLSDrs7TthrUgY29tbW9uLmNzcyDrpbwgaW1wb3J0IO2VoOuVjCDrp47snbQg7IKs7Jqp7ZWc64ukLiBcclxuaW1wb3J0ICcuLi9pbmRleC5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFN0b3JlLCB7IGluaXRhbFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcidcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgZ2xvYmFsQ29udGV4dCA9IHVzZUNvbnRleHQoU3RvcmUpXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgZ2xvYmFsQ29udGV4dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDEwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHsvKiBoZWxsbyEhISAqL31cclxuICAgICAgICAgICAgPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT4gICAgICAgIHsvKiBpbml0YWxTdGF0ZSDsnZgg6rCS7J2EIOuwlOq+uOqzoCDsi7bsnYTrlYzripQg7Jes6riw7IScIOuwlOq+uOuptCDrkKggeyd1c2VyaWQnOiAnd2ViNzcyMid9IOydtOufsOyLneycvOuhnCAqL31cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgLz4gICAgICAgey8qIOydtCDsnITsuZjsl5Ag7Jqw66as6rCAIOunjOuToCDtjIzsnbwoaW5kZXguanN4IC9sb2dpbi5qc3ggLyBqb2luLmpzeCnrk6TsnbQg65Ok7Ja06rCE64ukLiAqL31cclxuICAgICAgICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuICAgICAgICAgICAgey8qIEVuZCAqL31cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCkiLCJjb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuICAgIG1lbnUgOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0hUTUwnLFxyXG4gICAgICAgICAgICB1cmw6ICcvcG9zdHMvSFRNTCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdDKysnLFxyXG4gICAgICAgICAgICB1cmw6ICcvcG9zdHMvQysrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0NTUycsXHJcbiAgICAgICAgICAgIHVybDogJy9wb3N0cy9DU1MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnNCcsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnSkFWQScsXHJcbiAgICAgICAgICAgIHVybDogJy9wb3N0cy9KQVZBJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzUnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0pTJyxcclxuICAgICAgICAgICAgdXJsOiAnL3Bvc3RzL0pTJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCIvLyDrqqjrk6Ag642w7J207YSw7JeQIOq0gOugqOuQnOqyg+ydgCByZWR1Y2VyIOyXkCDtlbTrhpPripQg6rKD7J20IOyii+uLpC4gLSBpbml0YWxTdGF0ZSDslYjsl5Ag7KCA7J6lIC0gcmVkdWNlcuulvCDsqrzqsJzshJwg7IKs7Jqp7ZW067O07J6QXHJcbi8vIDIuIOyXrOq4sOyEnCDstIjquLDqsJLsnYQg7ISk7KCV7ZW07KSA64ukLiAtIOyXrOq4sOyEnCDstIjquLDqsJIg7ISk7KCV7ZW07KSA6rG4IOyqvOqwnOykgOqxsOyehCAtIO2VhOyalOyXhuyWtOyguOyEnCDsp4Dsm4BcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXNlcjogdXNlcixcclxuICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcclxuXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgSXNMb2dpbjogZmFsc2UsXHJcbiAgICBsb2FkaW5nIDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICAgZGlzcGF0Y2goe3R5cGUgOiAnVVNFUl9MT0dJTid9KVxyXG4gICAg7J207KCE7JeUIO2VmOuCmOyUqSDshLjtjIXtlbTspKzripTrjbAgKOyKpO2KuOungeycvOuhnCkg7J206rGw7J2YIOuLqOygkCAtIOyYpO2DgOqwgCDrgqzsnYTrlYwg7ZmV7J247J20IOyWtOugteuLpFxyXG4gICAg6re4656Y7IScIHR5cGXqsJLsnYQg64yA67aA67aEIOyDgeyImOuhnCDrp47snbQg7KeA7KCV7ZWc64ukLlxyXG4qL1xyXG4vLyAzLiDsg4HsiJjroZwgdHlwZSDqsJLsnYQg67CU6r+U7KSA64ukLlxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSBcIlVTRVJfTE9HSU5fUkVRVUVTVFwiXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9IFwiVVNFUl9MT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9IFwiVVNFUl9MT0dJTl9FUlJPUlwiXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gXCJVU0VSX0xPR09VVFwiICAgICBcclxuXHJcbi8qZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IGRhdGEgPT4geyAgLy8g66+466asIOyXrOq4sOyEnCBhY3Rpb24g6rCSIOyEpOygleydhCDri6Qg7ZW064aT64qU64ukLiAoMDcyOSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVVNFUl9MT0dJTixcclxuXHJcbiAgICB9XHJcbn0vLyDqt7jrn7Ag64uk7J2MIOuhnOq3uOyduCDtjpjsnbTsp4DroZwg6rCA7IScIGRpc3BhdGNo66GcIOuztOuCvOuVjCBMT0dJTigpIOydtOugh+qyjCDtlajsiJjrp4wg67O064K066m0IOuQnOuLpC5cclxuXHJcbi8qXHJcbiAgICBbMDczMF1cclxuICAgIHJlZHV4X3RodW5rIOyTuOuVjFxyXG4gICAgM+uLqOqzhCDsmpTssq0gLSDsmYTro4wgLSDsl5Drn6xcclxuICAgIHN0YXRl7JeQIGxvYWRpbmcg7J20656AIOqwkuydhCDstpTqsIDtlZjqs6BcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSBkYXRhID0+IHsgIFxyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCk9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1JFUVVFU1QoKSkgICAgICAgLy8g7Jes6riw6rmM7KeA64qUIOyDge2DnOqwkuydtCDrsJTrgJDqsowg7JeG7J2MXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9mZXRjaCDshLHqs7XsoIHsnbgg67aA67aEXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YX0pICAgICAgICAvLyBkYXRh64qUIOqwneyytOuhnCDrk6TslrTqsIDrqbQg7KCI64yAIOyViOuQnOuLpC4g6re4656Y7IScIHN0cmluZyDtmJXtg5zroZwuXHJcbiAgICAgICAgICAgIH0pIC8vIOqysOqzvOqwkuydgCBQcm9taXNlIOqwneyytCAtIGFzeW5jIGF3YWl0IOuhnFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgcmVzdWx0LnJlc3VsdCA9PT0gJ09LJ1xyXG4gICAgICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcblxyXG4gICAgICAgICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1NVQ0NFU1MocmVzdWx0KSlcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGVycm9yICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKSAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9SRVFVRVNUID0gZGF0YSA9PiB7XHJcbiAgICAvLyDri6jsiJztnogg6rCd7LK066W8IOuwmO2ZmO2VtOyjvOuKlCDrhYDshJ0gLSByZWR1Y2VyIO2YuOy2nFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiBVU0VSX0xPR0lOX1JFUVVFU1QsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9TVUNDRVNTID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiBVU0VSX0xPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9FUlJPUiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogVVNFUl9MT0dJTl9FUlJPUixcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSBkYXRhID0+IHsgIC8vIOuvuOumrCDsl6zquLDshJwg7ISk7KCV7J2EIOuLpCDtlbTrhpPripTri6QuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW4gOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8qY2FzZSBVU0VSX0xPR0lOOlxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCfroZzqt7jsnbgg7Iug7Zi4IOyZlOuLpCcpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsICAgLy8gaW5pdGFsU3RhdGXsnZgg64K07Jqp7J2EIOuLpCDrs7XsgqztlZzqsbDsnoRcclxuICAgICAgICAgICAgICAgIElzTG9naW46IHRydWUsXHJcblxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycycgICAgICAgXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2gsZ2V0U3RhdGV9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKSAgICAgICAgIC8vIG9iamVjdFxyXG4gICAgLy9jb25zb2xlLmxvZyhkaXNwYXRjaCkgICAgICAgLy8gZnVuY3Rpb25cclxuICAgIC8vY29uc29sZS5sb2coZ2V0U3RhdGUpICAgICAgIC8vIGZ1bmN0aW9uXHJcbiAgICAvL2NvbnNvbGUubG9nKGdldFN0YXRlKCkpO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpPT57XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtsb2dnZXJNaWRkbGV3YXJlLHRodW5rTWlkZGxld2FyZV1cclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIC8vIGNvbXBvc2VXaXRoRGV2VG9vbHMg7JaY64qUIOy9lOuTnOulvCDsi6TtlontlaDrlYzrp4jri6QgZGlzcGF0Y2jrpbwg64Ko6rKo64aT64qU64ukLlxyXG4gICAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLGVuaGFuY2VyKVxyXG4gICAgcmV0dXJuIFN0b3JlXHJcbn1cclxuXHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx7XHJcbiAgICBkZWJ1ZyA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbn0pICAgICAvLyDssqvrsojsp7gg7J247J6Q6rCS7JeQIFN0b3Jl66W8IOuEo+yWtOykgOuLpCDrkZDrsojsp7gg7J247J6Q6rCS7JeQ64qUIGRlYnVnIOyWtOypjOq1rCAtIOqwnOuwnCDrqqjrk5zsnbzrlYzrp4wuXHJcbi8vIDxTdG9yZS5Qcm92aWRlcj48L1N0b3JlLlByb3ZpZGVyPiDsnbTqsbAg64yA7IugIOyTsOugpOqzoCDrp4zrk6ZcclxuLy8gX2FwcC5qc3gg6rCA7IScXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbiAgICBJc0xvZ2luOiB0cnVlLFxyXG5cclxufVxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGFsU3RhdGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZVxyXG4iLCJleHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkxPR09VVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==