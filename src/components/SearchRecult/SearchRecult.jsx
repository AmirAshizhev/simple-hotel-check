import HotelList from '../HotelList/HotelList';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './SearchRecult.css';

function SearchRecult() {
  return (
    <section className='search-result'>
      <div className='search-result__text'>
        <h2 className='search-result__title'>Отели</h2>
        <p className='search-result__data'>07 июля 2020</p>
      </div>
      <ImageCarousel/>
      <HotelList/>
      
    </section>
  )
}

export default SearchRecult;