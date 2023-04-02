// import logo from './logo.svg';
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import './App.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false)

  function handleLogin() {
    setLoggedIn(true)
    navigate('/test')
  }



  return (
    <div className="App">

      <Routes>
        <Route path='/sign-in' element={<Login handleLogin={handleLogin}/>}/>
        <Route path='/' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <h1>test</h1>
          </ProtectedRoute>
        }/>
        <Route path='*' element={
          loggedIn ? <Navigate to='/'/> : <Navigate to='/sign-in'/>
        }
        />
      </Routes>      
    </div>
  );
}

export default App;
