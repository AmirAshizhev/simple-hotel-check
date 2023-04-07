// import logo from './logo.svg';
// import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Page from '../Page/Page';
import './App.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import hotelApi from '../../utils/HotelApi';

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  // useEffect(() => {
  //   hotelApi.getHotel()
  //   .then((res) => {
  //     console.log(res)
  //   })
  // }, [])
  // const [loggedIn, setLoggedIn] = useState(true)

  const loggedIn = useSelector(state => state.auth.loggedIn)
  // const search = useSelector(state => state.search)

  // dispatch({
  //   type: 'FETCH_HOTELS',
  //   payload: search
  // })

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
