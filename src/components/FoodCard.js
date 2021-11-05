import React from 'react'
import {Link} from 'react-router-dom'
import '../components/FoodCard.css'


function FoodCard(props){
    return (
        <div className="food-card">
        <Link className="food-card-link" to='/foods'>
            <figure className="food-card-wrapper" data-category={props.label}> 
                <img className="food-card-pic" src={props.eachFood.image} alt="Food pic"/>
            </figure>
                <div className="food-card-info">
                    <h5 className="food-description">{props.eachFood.description}</h5>
                </div>
        </Link>
    </div>
    )
}
export default FoodCard;