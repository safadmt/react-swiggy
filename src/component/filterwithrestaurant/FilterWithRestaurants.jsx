import React from 'react'
import Filter from './Filter'
import Card from '../card/Card'

function FilterWithRestaurants({data}) {
    
  return (
    <div>
        {data?.length > 0 ? 
         <div>
            <div className='heading'>
            <div>Restaurants with online food delivery in Kochi</div>
        </div>
        <div className='filteration-div'>
            <Filter/>
           
        </div>
        <div>
            <div className='card-display-div'>
             {data.map((item,index)=> {
                return <Card restaurant={item} key={index}/>
             })}
            </div>
        </div>
        </div>

         : <div>Loading</div>}
        
    </div>
  )
}

export default FilterWithRestaurants