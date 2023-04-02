// import logo from './logo.svg';
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Page from '../Page/Page';
import './App.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true)

  function handleLogin() {
    setLoggedIn(true)
    navigate('/test')
  }

  function handleLogout() {
    setLoggedIn(false)
  }


  return (
    <div className="App">

      <Routes>
        <Route path='/sign-in' element={<Login handleLogin={handleLogin}/>}/>
        <Route path='/' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Page handleLogout={handleLogout}/>
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
