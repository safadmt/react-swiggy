import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Login from './Login';
import Signup from './Signup';
import './sidebar.css'
import { useCommonStateProvider } from '../../contextandreducer/restolinkcontext';

function Sidebar() {
    const [isLogin, setIsLogin] = useState(true)
    const {state, dispatch} = useCommonStateProvider()
    function handleSidebar() {
        dispatch({type: "sidebar_is_open", payload: "sidebar-inactive"})
    }
  return (
    <div className={state.sidebar_class}>
        
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div><IoMdClose size={25} color='Gray' onClick={handleSidebar}/></div>
                <div>
                    <div>
                        {isLogin ? <h1>Login</h1> : <h1>Signup</h1> }
                        <div>or {isLogin ? <span onClick={()=> setIsLogin(false)}>create an account</span> : 
                        <span onClick={()=> setIsLogin(true)}>login to your account</span>}</div>
                    </div>
                </div>
                <div>

                {isLogin ? <Login/> :
                <Signup/> }
                </div>
                
            </div>
        </div>
        <div className='overlay' onClick={handleSidebar}>

        </div>
    </div>
  )
}

export default Sidebar