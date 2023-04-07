import './HotelCard.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';

function HotelCard ({hotelName, priceAvg, stars}) {

  const [isLiked, setIsLiked] = useState(false)

  const search = useSelector(state => state.search)
  console.log(search)

  const handleClick = () =>{
    setIsLiked(!isLiked)
  }

  const holelLikeClass = (
    `hotelCard__like ${isLiked && 'hotelCard__like_active'}`
  )

  const rating = [];

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      rating.push(<li key={i} className="hotelCard__star hotelCard__star_active"></li>);
    } else {
      rating.push(<li key={i} className="hotelCard__star"></li>);
    }
  }


  return(
    <li className='hotelCard'>
      <div className='hotelCard__img'></div>

      <div className='hotelCard__title-group'>
        <h2 className='hotelCard__title'>{hotelName}</h2>
        <div className='hotelCard__box'>
          <p className='hotelCard__date'>{search.date}</p>
          <hr className='hotelCard__date-line'/>
          <span className='hotelCard__duration'>{search.days} дней</span>
        </div>
        <ul className='hotelCard__rating'>
          {rating}
          {/* <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li>
          <li className='hotelCard__star'></li> */}
        </ul>
      </div>

      <div className='hotelCard__like-group'>
        <div className={holelLikeClass} onClick={handleClick}></div>
        <p className='hotelCard__price'>
          <span className='hotelCard__price-span'>Price: </span> {priceAvg}
        </p>       
      </div>


    </li>
  )
}

export default HotelCard;