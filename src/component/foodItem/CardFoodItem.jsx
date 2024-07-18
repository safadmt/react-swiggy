import React from 'react'

function CardFoodItem({restaurant}) {
  return (
    <div >
        
            <img width={"144px"} height={"180px"} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${restaurant.imageId}`} alt="Fooditem" />
    </div>
  )
}

export default CardFoodItem