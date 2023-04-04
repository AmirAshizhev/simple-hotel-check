import Hotel from '../Hotel/Hotel';
import './Favorites.css'

function Favorites () {
  return (
    <section className='favorites'>
      <h2 className='favorites__title'>Избранное</h2>
      <div>
        <button>Рейтинг</button>
        <button>Цена</button>
      </div>
      <ul className='favorites__list'>
        <Hotel/>
        <Hotel/>
        <Hotel/>
      </ul>

    </section>
  )
}

export default Favorites;