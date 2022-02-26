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
import AskDoubt from './AskDoubt';

function App() {
  
  const navigate = useNavigate();
  const {  authUser, loading } = useAuth();
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
      if (!loading && !authUser)
      {
        navigate('/login')
      }
  }, [authUser, loading])

  
  return (
    
    <Provider store={store}>
    <div className="App">   
    <Navigation authUser={authUser}/>
            <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route path='/classrooms' element={<Classrooms />} />
          <Route path='/askdoubt' element={<AskDoubt/>}/>
        </Routes>        
    </div>
    
    </Provider>
  );
}

export default App;
