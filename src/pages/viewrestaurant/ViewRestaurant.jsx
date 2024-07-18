import React, { useEffect, useState } from 'react';
import { MdStars } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";
import "./viewrestaurant.css";
import ViewRestoCard from '../../component/viewrestaurant/viewrestaurantcard/ViewRestoCard';
import { useCommonStateProvider } from '../../contextandreducer/restolinkcontext';
import axios from 'axios';

function ViewRestaurant() {
    const {state,dispatch} = useCommonStateProvider()
    const restoid = state.restoId || localStorage.getItem('restoId')
    const [restoData, setRestoData] = useState([])
    const [restoMenu, setRestoMenu] = useState([])
    useEffect(()=> {
        
        const fetchData = async ()=> {
            const restos = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.91850&lng=76.25580&restaurantId=${restoid}&catalog_qa=undefined&submitAction=ENTER`)
            console.log(restos)
            setRestoData(restos?.data?.data?.cards[2]?.card?.card?.info)
            const menuItem = []
            restos?.data?.data?.cards[4]?.groupedCard?.
                cardGroupMap?.REGULAR?.cards?.forEach((item,index)=> {
                    if(item?.card?.card?.itemCards) {
                        menuItem.push(...item.card.card.itemCards)
                        
                    }
                })
                setRestoMenu(menuItem)
        }
        fetchData()
    }, [])
    
  return (
    <div className='view-restaurant-page'>
        {restoMenu?.length === 0 || restoData?.length === 0 ? 
        <div>Loading ...</div> : <div>
        <div className='router-path'>
        Home/ {restoData?.city} / {restoData?.name}
        </div>
       
        <div>
            <div className='cafe-name-heading'>
                <h1>{restoData?.name}</h1></div>
            <div className='cafe-details-parent-div'>
            <div className='cafe-details'>
                <div><MdStars size={18} color='green'/> <span>{restoData?.avgRating} ({restoData?.totalRatingsString})</span> - <FaRupeeSign size={14}/> 
                <span>{restoData?.costForTwoMessage}</span></div>
                <div>{restoData?.cuisines?.join(',')}</div>
                <div className='cl-hash deliver-details'><span><IoBicycle/></span>{restoData?.sla?.lastMileTravelString} | {restoData?.feeDetails?.message?.split("|")[1]}</div>
            </div>
            </div>
        </div>
        <div>
           <div className='food-menu'>Menu</div> 
           <div>
            {restoMenu?.map((item,index)=> {
                return  <ViewRestoCard menuitem={item} key={index}/>
            })}
                
           </div>
           
        </div>
        </div>
}
    </div>
  )
}

export default ViewRestaurant