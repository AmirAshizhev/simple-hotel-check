import './Search.css';

function Search() {
  return (
    <section className='search'>
      <form className="search__form">
        <fieldset className="search__fieldset">
          <label className="search__field">
            <span className="search__input-label">Локация</span>
            <input 
              type="search"  
              name="search" 
              className="search__input" 
              defaultValue={'Москва'}
              required 
            />
          </label>
          <label className="search__field">
            <span className="search__input-label">Дата заселения</span>
              <input 
                type="date"  
                name="date" 
                className="search__input"  
                required 
              />
          </label>
          <label className="search__field">
            <span className="search__input-label">Количество дней</span>
              <input 
                type="number"  
                name="number" 
                className="search__input"  
                required 
              />
          </label>
        </fieldset>
        <button className="search__button" type="submit" aria-label="Войти">Войти</button>
      </form>
    </section>
  )
}

export default Search;