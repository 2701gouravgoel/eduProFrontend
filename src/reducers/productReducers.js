import { FETCHING_PRODUCT } from "../constants";

function productReducer(state = {list:[]},action){
    switch(action.type)
    {
        case FETCHING_PRODUCT:
            return { ...state,list:action.payload};
        default:
            return state;
    }
}


export {productReducer};