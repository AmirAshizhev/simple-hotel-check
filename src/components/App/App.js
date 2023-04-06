// import logo from './logo.svg';
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Page from '../Page/Page';
import './App.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  // const [loggedIn, setLoggedIn] = useState(true)

  const loggedIn = useSelector(state => state.loggedIn)

  function handleLogin(email) {
    // setLoggedIn(true)
    localStorage.setItem('token', email)
    dispatch({type: "LOGIN", payload: {email}})
    navigate('/test')
  }

  function handleLogout() {
    // setLoggedIn(false)
    dispatch({type: "LOGOUT"})
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
