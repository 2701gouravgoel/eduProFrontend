import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Classrooms from './classrooms';
import Facultyclassroom from './facultyclassroom';
import store from './store';
import { Provider } from 'react-redux';
import { useAuth } from './AuthUserContext';
import Login from './Login';
import { useEffect, useState } from 'react';
import Register from './Register';
// import AskDoubt from './AskDoubt';
import AdminRegisteration from './adminRegister';
import Facultynavigation from './facultynavigation';
import Adminnavigation from './adminnavigation';

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
        navigate('/login')
      }
      else if(authUser){
        getRole();
      }
  }, [authUser, loading])

  
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
        
    {type==='admin'&&
    <Adminnavigation authUser={authUser}/>
  }
            <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route path='/classrooms' element={<Classrooms />} />
          {/* <Route path='/askdoubt' element={<AskDoubt/>}/> */}
          <Route path='/facultyclassroom' element={<Facultyclassroom/>}/>  
          <Route path='/adminRegisteration' element={<AdminRegisteration/>}/>              
        </Routes>        
    </div>
    
    </Provider>
  );
}

export default App;
