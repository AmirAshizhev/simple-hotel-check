import { useDispatch, useSelector } from 'react-redux';
import './Search.css';

function Search() {


  const dispatch = useDispatch();
  const search = useSelector(state => state.search)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'FETCH_HOTELS',
      payload: search
    })
  }

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_INPUT_VALUE', 
      payload: {name: e.target.name, value: e.target.value}
    })
  }

  return (
    <section className='search'>
      <form className="search__form" onSubmit={handleSubmit}>
        <fieldset className="search__fieldset">
          <label className="search__field">
            <span className="search__input-label">Локация</span>
            <input 
              type="search"  
              name="locationName" 
              className="search__input" 
              value={search.locationName}
              onChange={handleChange}
              required 
            />
          </label>
          <label className="search__field">
            <span className="search__input-label">Дата заселения</span>
              <input 
                type="date"  
                name="date" 
                className="search__input"  
                value={search.date}
                onChange={handleChange}
                required 
              />
          </label>
          <label className="search__field">
            <span className="search__input-label">Количество дней</span>
              <input 
                type="number"  
                name="days" 
                className="search__input"  
                value={search.days}
                onChange={handleChange}
                required 
              />
          </label>
        </fieldset>
        <button className="search__button" type="submit" aria-label="Найти">Найти</button>
      </form>
    </section>
  )
}

export default Search;