// import logo from './logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import './App.css';

function App() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/test')
  }

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login handleLogin={handleLogin}/>}/>
        <Route path='/test' element={<h1>test</h1>}/>


      </Routes>
      
    </div>
  );
}

export default App;
