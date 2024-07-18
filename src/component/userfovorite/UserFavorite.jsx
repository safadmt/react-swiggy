import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import './userfavorite.css'



function UserFavorite({id,data,containerClassName,CardComponent}) {
    function scrollL () {
        const displaycard = document.querySelector(`#${id} .display-card`)
        displaycard.scrollBy(350,0)
    }
    function scrollR () {
        const displaycard = document.querySelector(`#${id} .display-card`)
        displaycard.scrollBy(-350,0)
    }
  return (
    <div className='user-favorite-div' id={id}>
        {data?.length > 0 ? <div>
        <div className='userfavorite-heading-icons'>
            <div className='heading'>Top restaurant chains in Thrissur</div>
            <div className='userfavorite-icons'>
                <FaCircleArrowLeft size={30} color={"#B4B4B8"} onClick={scrollR}/>
                <FaCircleArrowRight size={30} color={"#B4B4B8"} onClick={scrollL} />
            </div>
        </div>
        <div className='display-card'>
            {data.map((item,index)=> {
                return <div className={containerClassName} key={index}><CardComponent restaurant={item} key={index}/></div>
            })}
            
            
        </div>
        </div>
   : <div>Loading</div>}
    </div>
  )
}

export default UserFavorite