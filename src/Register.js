import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthUserContext";
import "./register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [InstituteCode, setInstituteCode] = useState("");
  const [schoolName, setschoolName] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogined, setIsLogined] = useState(false);
//   const [name, setName] = useState("");
  const {createUserWithEmailAndPassword, authUser, loading } = useAuth();
  const navigate = useNavigate();
  const register = async() => {
    // if (!name) alert("Please enter name");

    
        
    createUserWithEmailAndPassword(email, password).then((authUser)=>{
      let option = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schoolName:schoolName,
          schoolCode:InstituteCode,
          id:authUser.user.uid,
          name:Name,
          password:password,
          email:email,


        }),
      };
      fetch(`https://edu--pro--pro.herokuapp.com/studentRegister`, option)
        .then((response) => response.json())
        .then(async(response) => 
        {
            if(response.statusCode===200)
            {
            }
        });
    })  
  };
  const facultyregister = async() => {
    // if (!name) alert("Please enter name");

    
        
    createUserWithEmailAndPassword(email, password).then((authUser)=>{
      let option = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schoolName:schoolName,
          schoolCode:InstituteCode,
          id:authUser.user.uid,
          name:Name,
          password:password,
          email:email,


        }),
      };
      fetch(`https://edu--pro--pro.herokuapp.com/facultyRegister`, option)
        .then((response) => response.json())
        .then(async(response) => 
        {
            if(response.statusCode===200)
            {
            }
        });
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
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
          <input
          type="text"
          className="register__textBox"
          value={InstituteCode}
          onChange={(e) => setInstituteCode(e.target.value)}
          placeholder="Institute Code"
        />
          <input
          type="text"
          className="register__textBox"
          value={schoolName}
          onChange={(e) => setschoolName(e.target.value)}
          placeholder="School Name"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register as student
        </button>
        <button className="register__btn" onClick={facultyregister}>
          Register as faculty
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
        <div>
          Register as Admin <Link to="/adminRegisteration">AdminRegisteration</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;