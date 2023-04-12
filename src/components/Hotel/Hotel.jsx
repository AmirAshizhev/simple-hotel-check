import { useState } from 'react';
import './Hotel.css';
import { useDispatch } from 'react-redux';
import { handlerDataFormat } from '../../utils/handlerDataFormat';
import { declesionOfDays } from '../../utils/handlersOfDeclension';

function Hotel ({hotel, searchData, days, date}) {

  const dispatch = useDispatch()

  const [isLiked, setIsLiked] = useState(true)

  const handleClick = () =>{
    setIsLiked(!isLiked)
    if(isLiked) {
      dispatch({type: "REMOVE_HOTEL", payload: hotel.hotelId})
    }
  }

  const holelLikeClass = (
    `hotel__like ${isLiked && 'hotel__like_active'}`
  )

  const rating = [];

  for (let i = 0; i < 5; i++) {
    if (i < hotel.stars) {
      rating.push(<li key={i} className="hotel__star hotel__star_active"></li>);
    } else {
      rating.push(<li key={i} className="hotel__star"></li>);
    }
  }
  
  return(
    <li className='hotel'>
      <h2 className='hotel__title'>{searchData.hotelName}</h2>
      <div className='hotel__box'>
        <p className='hotel__date'>{handlerDataFormat(date)}</p>
        <hr className='hotel__date-line'/>
        <span className='hotel__duration'>{declesionOfDays(days)}</span>
      </div>
      <div className={holelLikeClass} onClick={handleClick}></div>
      <p className='hotel__price'>
        <span className='hotel__price-span'>Price: </span> {hotel.priceAvg} ₽
      </p>
      <ul className='hotel__rating'>
        {rating}
      </ul>
    </li>
  )
}

export default Hotel;