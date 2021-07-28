const initalState = {
    user:{
        IsLogin: false
    },
    post : {

    },
    comment : {

    },
    category : {

    }
}

// dispatch({type : 'USER_LOGIN'})
/*
    이전엔 하나씩 세팅해줬는데 이거의 단점 - 오타가 났을때 확인이 어렵다
    그래서 type값을 대부분 상수로 많이 지정한다.
*/

const USER_LOGIN = "USER_LOGIN"     // 이런식으로 상수로 지정
const USER_LOGOUT = "USER_LOGOUT"     // 이런식으로 상수로 지정

export const USER_LOGIN_ACTION = data =>{  // 미리 여기서 설정을 다 해놓는다.
    return{
        type : USER_LOGIN,
        data,
    }
}//그런다음 로그인 페이지로 가서 dispatch로 보낼때 LOGIN() 이렇게 함수만 보내면 된다.

export const USER_LOGOUT_ACTION = data =>{  // 미리 여기서 설정을 다 해놓는다.
    return{
        type : USER_LOGOUT,
        data,
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user : {
                    ...state.user,
                    IsLogin : false
                },
            }
        case USER_LOGOUT:
            return {
                ...state,
                user : {
                    ...state.user,
                    IsLogin : true
                },
            }
        default:
            return state
    }
}

export default reducer