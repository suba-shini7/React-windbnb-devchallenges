import './App.css';
import { Cards } from './Components/Cards';
import { Footer } from './Components/Footer';
// import { Header } from './Components/Header';
import { data } from './data';
import './Components/Css/Header.css'
import logo from './Images/logo.png';
import React,{useState} from 'react';


function App() {
  const [search,setSearch]=useState('');
 
  
  return (
    <div>
      <div className='main-nav'>
      <nav >
    <img src={logo} alt='logo' />
    <div className='push'>
    <select className='searchbar' onChange={(e)=> setSearch(e.target.value)} value={search}>
        <option selected></option>
        <option>Chennai</option>
        <option>Tirunelveli</option>
        <option>Madurai</option>
        <option>Vellore</option>
    </select> 

    <i class="bi bi-search"></i>
    </div>
	</nav>
      </div>
    <div  className='cards'>
      {data.filter(e => search==='' ? e : e.location===search).map((e)=> {
        return(
          <div key={e.id}>
            <Cards imagePath={e.imageurl} txt={e.roomtype} rate={e.ratings} btmtxt={e.desc}></Cards>
            </div>
        )
      })

      }  
    </div>
     <Footer></Footer>
    </div>
  );
}

export default App;
