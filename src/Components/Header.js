import '../Components/Css/Header.css'
import logo from '../Images/logo.png'
import React,{useState} from 'react';


export const Header=()=>{

  const [search,setSearch]=useState("")
console.log(search);
    return(
    
        <nav >
        <img src={logo} alt='logo' />
        <div className='push'>
        <select className='searchbar' onChange={(e)=> setSearch(e.target.value)} value={search}>
            <option disabled selected value> -- select an option -- </option>
            <option value="" selected></option>
            <option>Chennai</option>
            <option>Tirunelveli</option>
            <option>Madurai</option>
            <option>Vellore</option>
        </select> 
    
        <i class="bi bi-search"></i>
        </div>
        </nav>
        
    );
}