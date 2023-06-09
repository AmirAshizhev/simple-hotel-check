import { useSelector } from 'react-redux';
import HotelCard from '../HotelCard/HotelCard';
import './HotelList.css'
import { declesionOfHotel } from '../../utils/handlersOfDeclension';

function HotelList() {

  const searchResult = useSelector(state => state.search.data);
  const favoriteshotels = useSelector(state => state.favoriteshotels.favoriteshotels)

  const hotelCardsList = searchResult.map((hotel, i) => (
    <HotelCard
      {...hotel}
      hotel={hotel}
      key={hotel.hotelId}

    />
  ))

  return (
    <div className='hotelList'>
      <h3 className='hotelList__title'>Добавлено в Избранное:<span className='hotelList__title-span'>{favoriteshotels.length}</span>{declesionOfHotel(favoriteshotels.length)}</h3>
      <div className='hotelList__countainer'>
        <ul className='hotelList__items'>
          {hotelCardsList}
        </ul>
      </div>

    </div>
  )
} 

export default HotelList;