import { ADD_COURSE, DROP_COURSE, FETCHING_CLASS_TO_JOIN, FETCHING_PRODUCT } from "../constants";

function productReducer(state = {list:[],classToJoin:[]},action){
    switch(action.type)
    {
        case FETCHING_PRODUCT:
            return { ...state,list:action.payload};
        case FETCHING_CLASS_TO_JOIN:
            return { ...state,classToJoin:action.payload};
        case ADD_COURSE:
            let c=state.classToJoin;
            let a = c.find(elm=>elm.id===action.payload);
            let index = c.findIndex(elm=>elm.id===action.payload);
            let b=state.list;
            b.push(a);
            //  c.slice(index,1);
            // console.log(a,index,b,c);
            return {...state, list:b,classToJoin:c};
            
        case DROP_COURSE:
            let a1 = state.list.find(elm=>elm.id===action.payload);
            let index1 = state.list.findIndex(elm=>elm.id===action.payload);
            let b1=state.classToJoin;
            b1.push(a1);
            let c1=state.list;
            c1.slice(index1,1);
            return { ...state,list:c1,classToJoin:b1};
        case FETCHING_CLASS_TO_JOIN:
            return { ...state,classToJoin:action.payload};
        default:
            return state;
    }
}


export {productReducer};