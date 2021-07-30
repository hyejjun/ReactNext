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
    type: USER_LOGIN_SUCCESS,
    loading: false
  };
};
_c3 = UserLogin_SUCCESS;
var UserLogin_ERROR = function UserLogin_ERROR() {
  return {
    type: USER_LOGIN_ERROR,
    loading: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0YWxTdGF0ZSIsIklzTG9naW4iLCJsb2FkaW5nIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiVXNlckxvZ2luX1JFUVVFU1QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIlVzZXJMb2dpbl9TVUNDRVNTIiwiVXNlckxvZ2luX0VSUk9SIiwidHlwZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRztBQUNoQkMsU0FBTyxFQUFFLEtBRE87QUFFaEJDLFNBQU8sRUFBRztBQUZNLENBQXBCO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsSUFBSSxFQUFJO0FBQ25DO0FBQUEsK1JBQU8saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hBLHNCQUFRLENBQUNDLGlCQUFpQixFQUFsQixDQUFSLENBREcsQ0FDaUM7O0FBRGpDO0FBQUE7QUFBQSxxQkFJd0JDLEtBQUssQ0FBQyxpQ0FBRCxFQUFtQztBQUMzREMsc0JBQU0sRUFBRyxNQURrRDtBQUUzREMsdUJBQU8sRUFBRztBQUNOLGtDQUFpQjtBQURYLGlCQUZpRDtBQUszREMsb0JBQUksRUFBR0MsSUFBSSxDQUFDQyxTQUFMLG1CQUFtQlIsSUFBbkIsRUFMb0QsQ0FLbkI7O0FBTG1CLGVBQW5DLENBSjdCOztBQUFBO0FBSU9TLHNCQUpQO0FBQUE7QUFBQSxxQkFXc0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQVh0Qjs7QUFBQTtBQVdPQyxvQkFYUDtBQVlDQSxvQkFBTSxDQUFDQSxNQUFQLEtBQWtCLElBQWxCLEdBQ0VWLFFBQVEsQ0FBQ1csaUJBQWlCLENBQUNELE1BQUQsQ0FBbEIsQ0FEVixHQUdFVixRQUFRLENBQUNZLGVBQWUsRUFBaEIsQ0FIVjtBQUtBWixzQkFBUSxDQUFDVyxpQkFBaUIsQ0FBQ0QsTUFBRCxDQUFsQixDQUFSO0FBakJEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJDO0FBQ0FWLHNCQUFRLENBQUNZLGVBQWUsRUFBaEIsQ0FBUjs7QUFwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCSCxDQXhCTTtLQUFNZCxlO0FBMEJOLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUYsSUFBSSxFQUFJO0FBQ3JDO0FBQ0EsU0FBTTtBQUNGYyxRQUFJLEVBQUduQjtBQURMLEdBQU47QUFJSCxDQU5NO01BQU1PLGlCO0FBT04sSUFBTVUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ25DLFNBQU07QUFDRkUsUUFBSSxFQUFHbEIsa0JBREw7QUFFRkYsV0FBTyxFQUFHO0FBRlIsR0FBTjtBQUlILENBTE07TUFBTWtCLGlCO0FBTU4sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ2pDLFNBQU07QUFDRkMsUUFBSSxFQUFHakIsZ0JBREw7QUFFRkgsV0FBTyxFQUFHO0FBRlIsR0FBTjtBQUlILENBTE07TUFBTW1CLGU7QUFPTixJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFmLElBQUksRUFBSTtBQUFHO0FBQ3ZDLFNBQU87QUFDSGMsUUFBSSxFQUFFaEI7QUFESCxHQUFQO0FBR0gsQ0FKTTtNQUFNaUIsZ0I7O0FBT2IsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUM7QUFBQSxNQUFoQ0MsS0FBZ0MsdUVBQXhCekIsV0FBd0I7QUFBQSxNQUFYMEIsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS25CLGtCQUFMO0FBQ0ksK0JBQ09zQixLQURQOztBQUdKLFNBQUtyQixrQkFBTDtBQUNJLDZDQUNPcUIsS0FEUDtBQUVJeEIsZUFBTyxFQUFHO0FBRmQ7O0FBSUosU0FBS0ksZ0JBQUw7QUFDSSwrQkFDT29CLEtBRFA7O0FBR0o7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVRLFNBQUtuQixXQUFMO0FBQ0ksNkNBQ09tQixLQURQO0FBRUl4QixlQUFPLEVBQUU7QUFGYjs7QUFLSjtBQUNJLGFBQU93QixLQUFQO0FBNUJSO0FBOEJILENBL0JEOztBQWtDQSwrREFBZUQsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5mZjAyODc5MWQwY2RlY2Q1YzEyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbiAgICBJc0xvZ2luOiBmYWxzZSxcclxuICAgIGxvYWRpbmcgOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbi8qXHJcbiAgICBkaXNwYXRjaCh7dHlwZSA6ICdVU0VSX0xPR0lOJ30pXHJcbiAgICDsnbTsoITsl5Qg7ZWY64KY7JSpIOyEuO2Mhe2VtOykrOuKlOuNsCAo7Iqk7Yq466eB7Jy866GcKSDsnbTqsbDsnZgg64uo7KCQIC0g7Jik7YOA6rCAIOuCrOydhOuVjCDtmZXsnbjsnbQg7Ja066C164ukXHJcbiAgICDqt7jrnpjshJwgdHlwZeqwkuydhCDrjIDrtoDrtoQg7IOB7IiY66GcIOunjuydtCDsp4DsoJXtlZzri6QuXHJcbiovXHJcbi8vIDMuIOyDgeyImOuhnCB0eXBlIOqwkuydhCDrsJTqv5TspIDri6QuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9IFwiVVNFUl9MT0dJTl9SRVFVRVNUXCJcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gXCJVU0VSX0xPR0lOX1NVQ0NFU1NcIlxyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gXCJVU0VSX0xPR0lOX0VSUk9SXCJcclxuY29uc3QgVVNFUl9MT0dPVVQgPSBcIlVTRVJfTE9HT1VUXCIgICAgIFxyXG5cclxuLypleHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gZGF0YSA9PiB7ICAvLyDrr7jrpqwg7Jes6riw7IScIGFjdGlvbiDqsJIg7ISk7KCV7J2EIOuLpCDtlbTrhpPripTri6QuICgwNzI5KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBVU0VSX0xPR0lOLFxyXG5cclxuICAgIH1cclxufS8vIOq3uOufsCDri6TsnYwg66Gc6re47J24IO2OmOydtOyngOuhnCDqsIDshJwgZGlzcGF0Y2jroZwg67O064K865WMIExPR0lOKCkg7J2066CH6rKMIO2VqOyImOunjCDrs7TrgrTrqbQg65Cc64ukLlxyXG5cclxuLypcclxuICAgIFswNzMwXVxyXG4gICAgcmVkdXhfdGh1bmsg7JO465WMXHJcbiAgICAz64uo6rOEIOyalOyyrSAtIOyZhOujjCAtIOyXkOufrFxyXG4gICAgc3RhdGXsl5AgbG9hZGluZyDsnbTrnoAg6rCS7J2EIOy2lOqwgO2VmOqzoFxyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IGRhdGEgPT4geyAgXHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKT0+IHtcclxuICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fUkVRVUVTVCgpKSAgICAgICAvLyDsl6zquLDquYzsp4DripQg7IOB7YOc6rCS7J20IOuwlOuAkOqyjCDsl4bsnYxcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2ZldGNoIOyEseqzteyggeyduCDrtoDrtoRcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhfSkgICAgICAgIC8vIGRhdGHripQg6rCd7LK066GcIOuTpOyWtOqwgOuptCDsoIjrjIAg7JWI65Cc64ukLiDqt7jrnpjshJwgc3RyaW5nIO2Yle2DnOuhnC5cclxuICAgICAgICAgICAgfSkgLy8g6rKw6rO86rCS7J2AIFByb21pc2Ug6rCd7LK0IC0gYXN5bmMgYXdhaXQg66GcXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICByZXN1bHQucmVzdWx0ID09PSAnT0snXHJcbiAgICAgICAgICAgID8gZGlzcGF0Y2goVXNlckxvZ2luX1NVQ0NFU1MocmVzdWx0KSlcclxuXHJcbiAgICAgICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fU1VDQ0VTUyhyZXN1bHQpKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gZXJyb3IgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1JFUVVFU1QgPSBkYXRhID0+IHtcclxuICAgIC8vIOuLqOyInO2eiCDqsJ3ssrTrpbwg67CY7ZmY7ZW07KO864qUIOuFgOyEnSAtIHJlZHVjZXIg7Zi47LacXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1NVQ0NFU1MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IFVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9FUlJPUiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogVVNFUl9MT0dJTl9FUlJPUixcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gZGF0YSA9PiB7ICAvLyDrr7jrpqwg7Jes6riw7IScIOyEpOygleydhCDri6Qg7ZW064aT64qU64ukLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBVU0VSX0xPR09VVCxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbiA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvKmNhc2UgVVNFUl9MT0dJTjpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn66Gc6re47J24IOyLoO2YuCDsmZTri6QnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAgIC8vIGluaXRhbFN0YXRl7J2YIOuCtOyaqeydhCDri6Qg67O17IKs7ZWc6rGw7J6EXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbjogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==