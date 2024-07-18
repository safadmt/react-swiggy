import React, { useEffect, useState } from 'react'
import './home.css'
import FilterWithRestaurants from '../../component/filterwithrestaurant/FilterWithRestaurants'
import UserFavorite from '../../component/userfovorite/UserFavorite';
import axios from 'axios'
import Card from '../../component/card/Card';
import CardFoodItem from '../../component/foodItem/CardFoodItem';


function Home() {
  let footItems = []
  const [data, setData] = useState([])
  const [userFavorite,setUserFavorite] = useState([])
  const [cardFoodItem, setCardFoodItem] = useState([])
  useEffect(()=> {
    async function fetchdata () {
      try{
        const datas = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        setUserFavorite(datas?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setData(datas?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        footItems = datas?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info?.filter(item=> {
          return item.imageId
        })
        setCardFoodItem(footItems)
            
      }catch(err) {
        console.log(err)
      }
    }
    fetchdata()

    return ()=> {
      setCardFoodItem([])
      setData([])
      setUserFavorite([])
    }
  },[])


  return (
    <div className='homediv'>
        <UserFavorite data={cardFoodItem} id={"favorite1"} containerClassName={"card-food-item-div"} CardComponent={CardFoodItem}/>
        <UserFavorite data={userFavorite} id={"favorite2"} containerClassName={"cart-parent-div"} CardComponent={Card}/>
        <FilterWithRestaurants data={data}/>
    </div>
  )
}

export default Home