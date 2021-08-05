const initalState = {
    IsLogin: false,
    loading : false,
}


/*
    dispatch({type : 'USER_LOGIN'})
    이전엔 하나씩 세팅해줬는데 (스트링으로) 이거의 단점 - 오타가 났을때 확인이 어렵다
    그래서 type값을 대부분 상수로 많이 지정한다.
*/
// 3. 상수로 type 값을 바꿔준다.
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"
const USER_LOGOUT = "USER_LOGOUT"     

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

export const UserLoginAction = data => {  
    return async (dispatch)=> {
        dispatch(UserLogin_REQUEST())       // 여기까지는 상태값이 바뀐게 없음
        try {
            //fetch 성공적인 부분
            const response = await fetch('http://localhost:3000/api/login',{
                method : 'POST',
                headers : {
                    "Content-type" : "application/json",
                },
                body : JSON.stringify({...data})        // data는 객체로 들어가면 절대 안된다. 그래서 string 형태로.
            }) // 결과값은 Promise 객체 - async await 로
            const result = await response.json()
            result.result === 'OK'
            ? dispatch(UserLogin_SUCCESS(result))

            : dispatch(UserLogin_ERROR())
            
            dispatch(UserLogin_SUCCESS(result))
        } catch (e) {
            // error         
            dispatch(UserLogin_ERROR())   
        }
    }
}

export const UserLogin_REQUEST = data => {
    // 단순히 객체를 반환해주는 녀석 - reducer 호출
    return{
        type : USER_LOGIN_REQUEST,
        
    }
}
export const UserLogin_SUCCESS = () => {
    return{
        type : USER_LOGIN_SUCCESS,
        
    }
}
export const UserLogin_ERROR = () => {
    return{
        type : USER_LOGIN_ERROR,
        
    }
}

export const UserLogoutAction = data => {  // 미리 여기서 설정을 다 해놓는다.
    return {
        type: USER_LOGOUT,
    }
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading : true,
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                IsLogin : true,
                loading : false,
            }
        case USER_LOGIN_ERROR:
            return{
                ...state,
                loading : false,
            }
        /*case USER_LOGIN:
            //console.log('로그인 신호 왔다');
            return {
                ...state,   // initalState의 내용을 다 복사한거임
                IsLogin: true,

            }*/
        case USER_LOGOUT:
            return {
                ...state,
                IsLogin: false,

            }
        default:
            return state
    }
}


export default reducer