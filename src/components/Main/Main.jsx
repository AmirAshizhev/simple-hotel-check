import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import SearchRecult from '../SearchRecult/SearchRecult';
import './Main.css';

function Main(){
  return (
    <div className='main'>
      <Search/>
      <SearchRecult/>
      <Favorites/>
    </div>
  )
}

export default Main;