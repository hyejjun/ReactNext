// 모든 데이터에 관련된것은 reducer 에 해놓는 것이 좋다. - initalState 안에 저장 - reducer를 쪼개서 사용해보자
// 2. 여기서 초기값을 설정해준다. - 여기서 초기값 설정해준걸 쪼개준거임 - 필요없어져서 지움
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from "redux";
import user from './user'
import category from './category'

const reducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return{
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    },

    user: user,
    category: category,


})

export default reducer