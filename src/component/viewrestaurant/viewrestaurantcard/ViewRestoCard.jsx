import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import './viewrestocard.css';

function ViewRestoCard({menuitem}) {

  return (
    <div className='viewrestocard'>
        <div>
            <div>
                {menuitem?.card?.info?.ribbon && <div style={{color:"#EE4E4E"}}>{menuitem.card.info.ribbon?.text}</div>}
                <div style={{color: "rgba(2, 6, 12, 0.75)"}}><strong>{menuitem?.card?.info?.name}</strong></div>
                {(menuitem?.card?.info?.finalPrice || menuitem?.card?.info?.price)&&<div><FaRupeeSign/><strong>{menuitem?.card?.info?.finalPrice?.toString().split('').slice(0,-2) || menuitem?.card?.info?.price?.toString().split('').slice(0,-2)}</strong></div>}
                {menuitem?.card?.info?.ratings?.aggregatedRating?.rating && 
                <div className=''><div><IoIosStar/> {menuitem?.card?.info?.ratings?.aggregatedRating?.rating}</div> ({menuitem?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</div>}
            </div>
            <div>
                <div>
                    <button className='resto-button'>ADD</button>
                    <div className='option-resto'>costomisable</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewRestoCard