import FilterButton from '../FilterButton/FilterButton';
import Hotel from '../Hotel/Hotel';
import './Favorites.css'

function Favorites () {
  return (
    <section className='favorites'>
      <h2 className='favorites__title'>Избранное</h2>
      <div className='favorites__filters'>
        <FilterButton name={'Рейтиг'}/>
        <FilterButton name={'Цена'}/>
      </div>
      <ul className='favorites__list'>
        <Hotel/>
        <hr className='favorites__line'/>
        <Hotel/>
        <hr className='favorites__line'/>
        <Hotel/>
      </ul>

    </section>
  )
}

export default Favorites;