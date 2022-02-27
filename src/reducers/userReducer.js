import { GET_ROLE } from "../constants";

function userReducer(state = {role:''},action){
    switch(action.type)
    {
        case GET_ROLE:
            return { ...state,role:action.payload};
        default:
            return state;
    }
}


export {userReducer};