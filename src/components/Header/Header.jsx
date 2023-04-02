import { Link } from 'react-router-dom';
import './Header.css';

import img from '../../images/exit.svg'

function Header({handleLogout}){
  return (
    <div className='header'>
      <div className='header__box'>
        <p className='header__text'>Simple Hotel Check</p>
        <Link className='header__link' to="/sign-in" onClick={handleLogout}>
          <p className='header__link-text'>Выход</p>
          <img className='header__img' src={img} alt='exit'/>
        </Link>
      </div>

    </div>
  )
}

export default Header;