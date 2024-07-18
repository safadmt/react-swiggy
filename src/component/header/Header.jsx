import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logoimage from '../../assets/logos/Swiggy-emblem-removebg-preview.jpg';
import "./header.css"
import { Link ,useNavigate} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useCommonStateProvider } from '../../contextandreducer/restolinkcontext';
function Header() {
  const Navigate = useNavigate()
  const {state,dispatch} = useCommonStateProvider()
  const [toggleClassName, setToggleClassName] = useState("")
   

    function handleToggle () {
      setToggleClassName(previouClassName=> previouClassName === "" ? "active" : "")
    }
    function handleSidebarActive() {
      
      dispatch({type:"sidebar_is_open" , payload: "sidebar-active"})
    }
  return (
    <header id='header'>
      <div className='container'>
        <div className='headlogo'>
            <img src={logoimage} alt="logoImage" onClick={()=> Navigate('/')} />
        </div>
        <FaBars size={30} color='black' onClick={handleToggle} className='hamburger'/>
        <nav className={toggleClassName}>
          <ul>
         
              <Link to={"/search"}>
              <IoSearch size={18}/>
              <span>Search</span>
            </Link>
            <li onClick={handleSidebarActive}>
              <FaUser size={18}/>
              {state.username ? <span>{state.username}</span> : <span>SignIn</span>}
            </li>
            <Link to={"/cart"}>
              <FaCartShopping size={18}/>
              <span>Cart</span>
            </Link>
          </ul>
        </nav>
        
        </div>
    </header>
  )
}

export default Header