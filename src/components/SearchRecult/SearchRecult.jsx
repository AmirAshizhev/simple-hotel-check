import { useSelector } from 'react-redux';
import HotelList from '../HotelList/HotelList';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './SearchRecult.css';
import { handlerDataFormat } from '../utils/handlerDataFormat';

function SearchRecult() {

  const search = useSelector(state => state.search)
 

  return (
    <section className='search-result'>
      <div className='search-result__text'>
        <h2 className='search-result__title'>Отели<span className='search-result__arrow'></span>{search.locationName}</h2>
        <p className='search-result__data'>{handlerDataFormat(search.date)}</p>
      </div>
      <ImageCarousel/>
      <HotelList/>
      
    </section>
  )
}

export default SearchRecult;