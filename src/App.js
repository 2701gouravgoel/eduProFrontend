import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Classrooms from './classrooms';
import Facultyclassroom from './facultyclassroom';
import store from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useAuth } from './AuthUserContext';
import Login from './Login';
import { useEffect, useState } from 'react';
import Register from './Register';
// import AskDoubt from './AskDoubt';
import AdminRegisteration from './adminRegister';
import Facultynavigation from './facultynavigation';
import Adminnavigation from './adminnavigation';
import { getRole } from './actions/userAction';
import Todo from './Todo';
import Footer from './footer';
import Chat from './Chat';
import Addnotes from './addnotes';

function App() {
  
  const navigate = useNavigate();
  const {authUser, loading } = useAuth();
  const dispatch = useDispatch();
 let type=useSelector(state=>state.user.role);
 console.log(type,"type")
  useEffect(() => {
      if (!loading && !authUser)
      {
        navigate('/login')
      }
      else if(authUser){
        dispatch(getRole(authUser));
      }
  }, [authUser, loading])

  
  return (
    
    <div className="App" style={{flex:1}}>   
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
          <Route path='/classroom/:classId' element={<Chat/>} />
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/facultyclassroom' element={<Facultyclassroom/>}/> 
          <Route path='/addnotes' element={<Addnotes/>}/>  
          <Route path='/adminRegisteration' element={<AdminRegisteration/>}/>              
      </Routes> 
      <div style={{position:'absolute',bottom:10,right:10}}>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
