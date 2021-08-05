(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5256:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./store/context.jsx

const initalState = {
  IsLogin: true
};
const Store = /*#__PURE__*/(0,external_react_.createContext)(initalState);
/* harmony default export */ var context = (Store);
;// CONCATENATED MODULE: ./store/reducer.jsx
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
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__(8226);
;// CONCATENATED MODULE: ./reducers/category.js
const category_initalState = {
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

const category_reducer = (state = category_initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ var category = (category_reducer);
;// CONCATENATED MODULE: ./reducers/index.js
function reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 모든 데이터에 관련된것은 reducer 에 해놓는 것이 좋다. - initalState 안에 저장 - reducer를 쪼개서 사용해보자
// 2. 여기서 초기값을 설정해준다. - 여기서 초기값 설정해준걸 쪼개준거임 - 필요없어져서 지움




const reducers_reducer = (0,external_redux_namespaceObject.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case external_next_redux_wrapper_namespaceObject.HYDRATE:
        return reducers_objectSpread(reducers_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: user/* default */.ZP,
  category: category
});
/* harmony default export */ var reducers = (reducers_reducer);
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./store/configureStore.js






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
  const middlewares = [loggerMiddleware, (external_redux_thunk_default())];
  const enhancer =  true ? (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middlewares)) : 0; // composeWithDevTools 얘는 코드를 실행할때마다 dispatch를 남겨놓는다.

  const Store = (0,external_redux_namespaceObject.createStore)(reducers, enhancer);
  return Store;
};

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(configureStore, {
  debug: false
}); // 첫번째 인자값에 Store를 넣어준다 두번째 인자값에는 debug 어쩌구 - 개발 모드일때만.
// <Store.Provider></Store.Provider> 이거 대신 쓰려고 만듦
// _app.jsx 가서

/* harmony default export */ var store_configureStore = (wrapper);
;// CONCATENATED MODULE: ./pages/_app.jsx



// 모든 컴포넌트에 공통적인 걸 넣고 싶을 때 사용한다 - 보통 common.css 를 import 할때 많이 사용한다. 







const App = ({
  Component
}) => {
  const globalContext = (0,external_react_.useContext)(context);
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, globalContext);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;900&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(context.Provider, {
      value: {
        state,
        dispatch
      },
      children: ["        ", /*#__PURE__*/jsx_runtime_.jsx(Component, {}), "       "]
    })]
  });
};

/* harmony default export */ var _app = (store_configureStore.withRedux(App));

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [226], function() { return __webpack_exec__(5256); });
module.exports = __webpack_exports__;

})();