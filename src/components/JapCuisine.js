import React from 'react'
import FoodCard from './FoodCard';

function JapCuisine(props) {
    // console.log(props)
    return(
        <div className="foods-container">
            {
                props.foodMap.map(eachFood => {
                    return (
                        <FoodCard key={eachFood.id} eachFood={eachFood} label={eachFood.name}/>
                    )
                })
            }
        </div>
    )
}
export default JapCuisine;