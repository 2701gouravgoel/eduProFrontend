import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Classrooms from './classrooms';
import store from './store';
import { Provider } from 'react-redux';
import { AuthUserProvider, useAuth } from './AuthUserContext';
import Login from './Login';
import { useEffect } from 'react';
import Register from './Register';

function App() {
  
  const navigate = useNavigate();
  const { signOut, authUser, loading } = useAuth();

  useEffect(() => {
      if (!loading && !authUser)
      {
        console.log("ok")
        return navigate('/login')
      }
  }, [authUser, loading])
  
  return (
    
    <Provider store={store}>
    <div className="App">   
    <Navigation authUser={authUser}/>
            <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route path='/classrooms' element={<Classrooms/>}/>               
        </Routes>        
    </div>
    
    </Provider>
  );
}

export default App;
