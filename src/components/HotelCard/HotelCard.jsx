import './HotelCard.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HotelCard ({hotelName, priceAvg, stars, hotel}) {

  const [isLiked, setIsLiked] = useState(false)

  const search = useSelector(state => state.search)
  // const favoriteshotels = useSelector(state => state.favoriteshotels)
  const dispatch = useDispatch()
  // console.log(favoriteshotels)
  // console.log(isLiked)

  const handleClick = () =>{
    setIsLiked(!isLiked)

    if(!isLiked) {
      dispatch({type: "ADD_HOTEL", payload: {hotel: hotel, searchData: search}})
    } else if(isLiked) {
      dispatch({type: "REMOVE_HOTEL", payload: hotel.hotelId})
    }
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
          <span className='hotelCard__price-span'>Price: </span> {priceAvg} ₽
        </p>       
      </div>


    </li>
  )
}

export default HotelCard;