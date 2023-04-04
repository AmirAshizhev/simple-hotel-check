import './Hotel.css';

function Hotel () {
  return(
    <li className='hotel'>
      <h2 className='hotel__title'>Moscow Marriott Grand Hotel</h2>
      <div className='hotel__box'>
        <p className='hotel__date'>28 June, 2020 - </p>
        <span className='hotel__duration'>1 день</span>
      </div>
      <div className='hotel__like'></div>
      <p className='hotel__price'>
        <span className='hotel__price-span'>Price: </span> 23 924 ₽
      </p>
      <div className='hotel__rating'></div>
    </li>
  )
}

export default Hotel;