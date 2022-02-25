import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthUserContext";
import { secondaryAuth } from "./configuration/FirebaseConfig";
import "./register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
  const { signInWithEmailAndPassword, createUserWithEmailAndPassword, authUser, loading } = useAuth();
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
        navigate('/');
    }
}, [authUser, loading])
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