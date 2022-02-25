import { FETCHING_PRODUCT } from "../constants";

export const getProdctList=(id)=>(dispatch)=>{
    console.log("called");
    return fetch(`https://edu--pro--pro.herokuapp.com/getclass?id='${id}`)
    .then((res) => res.json())
    .then((json) => {
        console.log("json",json)
        dispatch({type: FETCHING_PRODUCT, payload:json.list});
    });
}
