import { GET_ROLE } from "../constants";

export const getRole=(authUser)=>(dispatch)=>{
    fetch(`https://edu--pro--pro.herokuapp.com/getRole?id=${authUser.uid}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(`https://edu--pro--pro.herokuapp.com/getRole?id=${authUser.uid}`);
        console.log("json",json)
        
        dispatch({type: GET_ROLE, payload:json.role});
    });
}