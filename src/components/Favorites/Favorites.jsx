import { useSelector } from 'react-redux';
import FilterButton from '../FilterButton/FilterButton';
import Hotel from '../Hotel/Hotel';
import './Favorites.css'

function Favorites () {

  const favoriteshotels = useSelector(state => state.favoriteshotels.favoriteshotels)
  console.log(favoriteshotels)

  const hotelCardsList = favoriteshotels.map((hotel, i) => (
    console.log(hotel.searchData),
    <Hotel
    {...hotel.hotel}
    hotel={hotel.hotel}
    searchData={hotel.searchData.data[i]}
    date={hotel.searchData.date}
    days={hotel.searchData.days}
    key={hotel.hotel.hotelId}

    />
  ))

  return (
    <section className='favorites'>
      <h2 className='favorites__title'>Избранное</h2>
      <div className='favorites__filters'>
        <FilterButton name={'Рейтиг'}/>
        <FilterButton name={'Цена'}/>
      </div>
      <ul className='favorites__list'>
        {hotelCardsList}
        {/* <Hotel/>
        <hr className='favorites__line'/>
        <Hotel/>
        <hr className='favorites__line'/>
        <Hotel/> */}
      </ul>

    </section>
  )
}

export default Favorites;