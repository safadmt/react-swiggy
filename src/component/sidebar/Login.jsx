import React, { useState } from 'react'
import './sidebar.css'

function Login() {
    const [mobile,setMobile] = useState("")
  return (
    <div className='login'>
        <form action="">
        <div className='input-group'>
            <input type="Number" 
            placeholder='Enter you mobile number'  
            className='mobile' value={mobile} 
            onChange={(e)=> setMobile(e.target.value)}/>
        </div>
        <div>
            <input type='submit' className='button-sl' value={"Login"}/>
        </div>
        </form>
    </div>
  )
}

export default Login