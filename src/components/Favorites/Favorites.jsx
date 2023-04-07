import { useSelector } from 'react-redux';
import FilterButton from '../FilterButton/FilterButton';
import Hotel from '../Hotel/Hotel';
import './Favorites.css'
import { useState } from 'react';

function Favorites () {
  const [buttonPraceState, setButtonPraceState] = useState(0);
  const [buttonRaitingState, setButtonRaitingState] = useState(0);
  const favoriteshotels = useSelector(state => state.favoriteshotels.favoriteshotels)

  if(buttonPraceState === 1){
    favoriteshotels.sort(function(a, b) {
      return a.hotel.priceAvg-b.hotel.priceAvg
    })
  } else if (buttonPraceState === 2){
    favoriteshotels.sort(function(a, b) {
      return b.hotel.priceAvg-a.hotel.priceAvg
    })
  } 

  if(buttonRaitingState === 1){
    favoriteshotels.sort(function(a, b) {
      return a.hotel.priceAvg-b.hotel.priceAvg
    })
  } else if (buttonRaitingState === 2){
    favoriteshotels.sort(function(a, b) {
      return b.hotel.priceAvg-a.hotel.priceAvg
    })
  } 


  console.log(buttonPraceState)

  const hotelCardsList = favoriteshotels.map((hotel, i) => (
    // console.log(hotel.searchData),
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
        <FilterButton name={'Рейтиг'} buttonState={buttonRaitingState} setButtonState={setButtonRaitingState}/>
        <FilterButton name={'Цена'} buttonState={buttonPraceState} setButtonState={setButtonPraceState}/>
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