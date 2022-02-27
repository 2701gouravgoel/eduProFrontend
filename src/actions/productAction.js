import { FETCHING_CLASS_TO_JOIN, FETCHING_PRODUCT } from "../constants";

export const getClassList=(id)=>(dispatch)=>{
    console.log("called");
    return fetch(`https://edu--pro--pro.herokuapp.com/getStudentClass?id=${id}`)
    .then((res) => res.json())
    .then((json) => {
        console.log("ok",json)
        dispatch({type: FETCHING_PRODUCT, payload:json.list});
    });
}
export const getClassToJoinList=(id)=>(dispatch)=>{
    console.log("called");
    return fetch(`https://edu--pro--pro.herokuapp.com/getClasstoJoinStudent?id=${id}`)
    .then((res) => res.json())
    .then((json) => {
        console.log("ok",json)
        dispatch({type: FETCHING_CLASS_TO_JOIN, payload:json.list});
    });
}
export const getFacultyClassList=(id)=>(dispatch)=>{
    return fetch(`https://edu--pro--pro.herokuapp.com/getclassFaculty?id=${id}`)
    .then((res) => res.json())
    .then((json) => {
        dispatch({type: FETCHING_PRODUCT, payload:json.list});
    });
}
