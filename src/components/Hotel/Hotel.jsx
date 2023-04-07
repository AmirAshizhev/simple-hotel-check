import { useState } from 'react';
import './Hotel.css';
import { useDispatch, useSelector } from 'react-redux';

function Hotel ({hotel, searchData, days, date}) {

  const search = useSelector(state => state.search)
  const favoriteshotels = useSelector(state => state.favoriteshotels)
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

  console.log(favoriteshotels)
  console.log(searchData)

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
        <p className='hotel__date'>{date}</p>
        <hr className='hotel__date-line'/>
        <span className='hotel__duration'>{days} день</span>
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