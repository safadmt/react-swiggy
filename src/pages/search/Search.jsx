import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import './search.css'
import FilterWithRestaurants from '../../component/filterwithrestaurant/FilterWithRestaurants';
import CardFoodItem from '../../component/foodItem/CardFoodItem';
import UserFavorite from '../../component/userfovorite/UserFavorite';
import axios from 'axios';
function Search() {
    const [data,setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [cardFoodItem, setCardFoodItem] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(()=> {
      async function fetchdata () {
        try{
          const datas = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
          setData(datas?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
        setSearchText("")
        setFiltered([])
      }
    },[])
const handleSearch = () => {
      
        const regex = new RegExp(searchText, "i")
      const filteredResto = data.filter((item)=> {
        return regex.test(item?.info?.name) || regex.test(item?.info?.locality)
      })

      searchText === "" ? setFiltered([]) : setFiltered(filteredResto)
      }
      
    
    useEffect(()=> {
      handleSearch()
    },[searchText])
    
  return (
    <div className='search-page'>
            <div>
              <div className='search-input-group'>
                <input type="text" 
                placeholder='Search for Restaurants' 
                value={searchText} 
                name="search" 
                id="" 
                onChange={(e)=> setSearchText(e.target.value)}/>
                <IoSearch size={25} color='#282c3f' style={{marginTop:"16px"}}/>
              </div>
            </div>
           {filtered?.length === 0 && <div>
              <UserFavorite data={cardFoodItem} id={"favorite1"} containerClassName={"card-food-item-div"} CardComponent={CardFoodItem}/>

            </div>}
            <div>
              {filtered && filtered?.length !== 0 ? 
              <FilterWithRestaurants data={filtered}/>
              :  <div>
                {
                  searchText !== "" && <div>all result for {searchText}</div> 
                }
                 
                 </div> 
              }
            </div>
            
        </div>
  )
}

export default Search