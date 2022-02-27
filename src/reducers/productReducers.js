import { FETCHING_CLASS_TO_JOIN, FETCHING_PRODUCT } from "../constants";

function productReducer(state = {list:[],classToJoin:[]},action){
    switch(action.type)
    {
        case FETCHING_PRODUCT:
            return { ...state,list:action.payload};
        case FETCHING_CLASS_TO_JOIN:
            return { ...state,classToJoin:action.payload};
        default:
            return state;
    }
}


export {productReducer};