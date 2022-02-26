import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Classrooms from './classrooms';
import store from './store';
import { Provider } from 'react-redux';
import { useAuth } from './AuthUserContext';
import Login from './Login';
import { useEffect, useState } from 'react';
import Register from './Register';
import AdminRegisteration from './adminRegister';
import Facultynavigation from './facultynavigation';

function App() {
  
  const navigate = useNavigate();
  const {authUser, loading } = useAuth();
 const [type,settype]=useState("");
  const getRole=()=>{
    console.log(authUser);
    fetch(`https://edu--pro--pro.herokuapp.com/getRole?id=${authUser.uid}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(`https://edu--pro--pro.herokuapp.com/getRole?id=${authUser.uid}`);
        console.log("json",json)
        settype(json.role)
    });
  }
  useEffect(() => {
      if (!loading && !authUser)
      {
        setIsLogined(true);
      }
      else if(authUser){
        getRole();
      }
  }, [authUser, loading])

  if(isLogined)
    navigate('/login')
  
  return (
    
    <Provider store={store}>
    <div className="App">   
    {type==='faculty' &&
    <div >
      <Facultynavigation authUser={authUser}/>
      </div>
    }
    {type==='student'&&
    <Navigation authUser={authUser}/>
  }
            <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route path='/classrooms' element={<Classrooms/>}/>  
          <Route path='/adminRegisteration' element={<AdminRegisteration/>}/>              
        </Routes>        
    </div>
    
    </Provider>
  );
}

export default App;
