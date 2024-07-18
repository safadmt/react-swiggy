import React from "react";
import "./card.css";
import { FaRupeeSign } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { useCommonStateProvider } from "../../contextandreducer/restolinkcontext";
import { useNavigate } from "react-router-dom";

function Card({restaurant}) {
  const {state,dispatch} = useCommonStateProvider()
  const Navigate = useNavigate()
  
  const handleNavigate = ()=> {
    localStorage.setItem('restoId', restaurant?.info?.id)
    dispatch({type : "resto_id", payload: restaurant?.info?.id})
    Navigate(`/restaurants/${restaurant?.cta?.link.split('/')[4]}`)
  }
  return (
    
    <div className="card" onClick={handleNavigate}>
      <div className="imgdiv">
        <div className="">
          <img
            width="100%"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`}
            alt=""
          />
        </div>
        <div className="content-text-offer-div">
          <div className="content-text-offer">
            50% OFF UPTO <FaRupeeSign /> 100
          </div>
        </div>
      </div>
      <div className="card-description">
        <div className="card-resto-name">{restaurant?.info?.name}</div>
        <div className="rating-time-main-div">
          <div className="star-icon-div">
            <MdStars className="staricon" color="green" size={24}/>
          </div>
          <div className="ratingtime">
             {restaurant?.info?.avgRating} <span className="star">,</span> {restaurant?.info?.sla?.slaString}</div>
          </div>
           
        
        <div className="card-description-address">
          <div>{restaurant?.info?.cuisins?.join(",")}</div>
          <div>{restaurant?.info?.locality}</div>
        </div>
      </div>
    </div>
    
  );
}

export default Card;
