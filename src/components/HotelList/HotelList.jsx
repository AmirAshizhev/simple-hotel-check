import HotelCard from '../HotelCard/HotelCard';
import './HotelList.css'

function HotelList() {

  return (
    <div className='hotelList'>
      <h3 className='hotelList__title'>Добавлено в Избранное:<span className='hotelList__title-span'>5</span>отелей</h3>
      <div className='hotelList__countainer'>
        <ul className='hotelList__items'>
          <HotelCard/>
          <HotelCard/>
          <HotelCard/>
          <HotelCard/>
          <HotelCard/>
          <HotelCard/>
          <HotelCard/>
          <HotelCard/>
          <HotelCard/>

        </ul>
      </div>

    </div>
  )
} 

export default HotelList;