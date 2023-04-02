import Header from '../Header/Header';
import Main from '../Main/Main';
import './Page.css';

function Page({handleLogout}){
  return (
    <div className='page'>
      <Header handleLogout={handleLogout}/>
      <Main/>
    </div>
  )
}

export default Page;