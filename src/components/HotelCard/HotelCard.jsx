import './HotelCard.css'
import { useState } from 'react';

function HotelCard () {

  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () =>{
    setIsLiked(!isLiked)
  }

  const holelLikeClass = (
    `hotelCard__like ${isLiked && 'hotelCard__like_active'}`
  )

  return(
    <li className='hotelCard'>
      <div className='hotelCard__img'></div>

      <div className='hotelCard__title-group'>
        <h2 className='hotelCard__title'>Moscow Marriott Grand Hotel</h2>
        <div className='hotelCard__box'>
          <p className='hotelCard__date'>28 June, 2020</p>
          <hr className='hotelCard__date-line'/>
          <span className='hotelCard__duration'>1 день</span>
        </div>
        <ul className='hotelCard__rating'>
          <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li>
        </ul>
      </div>

      <div className='hotelCard__like-group'>
        <div className={holelLikeClass} onClick={handleClick}></div>
        <p className='hotelCard__price'>
          <span className='hotelCard__price-span'>Price: </span> 23 924 ₽
        </p>       
      </div>


    </li>
  )
}

export default HotelCard;