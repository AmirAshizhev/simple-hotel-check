import { useState } from 'react';
import './Hotel.css';

function Hotel () {

  const [isLiked, setIsLiked] = useState(false)

  console.log(isLiked)
  const handleClick = () =>{
    setIsLiked(!isLiked)
  }

  const holelLikeClass = (
    `hotel__like ${isLiked && 'hotel__like_active'}`
  )

  return(
    <li className='hotel'>
      <h2 className='hotel__title'>Moscow Marriott Grand Hotel</h2>
      <div className='hotel__box'>
        <p className='hotel__date'>28 June, 2020</p>
        <hr className='hotel__date-line'/>
        <span className='hotel__duration'>1 день</span>
      </div>
      <div className={holelLikeClass} onClick={handleClick}></div>
      <p className='hotel__price'>
        <span className='hotel__price-span'>Price: </span> 23 924 ₽
      </p>
      <ul className='hotel__rating'>
        <li className='hotel__star'></li>
        <li className='hotel__star'></li>
        <li className='hotel__star'></li>
        <li className='hotel__star'></li>
        <li className='hotel__star'></li>
      </ul>
    </li>
  )
}

export default Hotel;