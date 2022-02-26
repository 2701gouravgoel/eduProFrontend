import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthUserContext";
import "./register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogined, setIsLogined] = useState(false);
//   const [name, setName] = useState("");
  const {createUserWithEmailAndPassword, authUser, loading } = useAuth();
  const navigate = useNavigate();
  const register = async() => {
    // if (!name) alert("Please enter name");
    createUserWithEmailAndPassword(email, password).then(()=>{
      // fetch(`https://edu-pro.herokuapp.com/registerStudent`)
      // .then((res) => res.json())
      // .then((json) => {
      // });
    })  
  };
  useEffect(() => {
      console.log(authUser);
    if (!loading && authUser) {
        setIsLogined(true);
    }
}, [authUser, loading])
if(isLogined)
navigate('/');
return (
    <div className="register">
      <div className="register__container">
        {/* <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        /> */}
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;