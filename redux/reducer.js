import { combineReducers } from "redux"
const initialState={
    couters: 0
}

const numberReducer=(state=initialState,action)=>{
switch(action.type){
    case 'INCREMENT_NUMBER':
        return{
            ...state,
            couters:state.couters+1
        };
        case 'DECREMENT_NUMBER':
            return{
                ...state,
                couters: state.couters-1
            }
            default: 
            return state
}
}


export default combineReducers({
     numberReducer,
})