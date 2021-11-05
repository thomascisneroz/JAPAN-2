import React from 'react'
import '../../App.css'
import JapCuisine from '../JapCuisine'
import {useEffect, useState} from 'react'

function Foods() {
    const [foods, setFoods] = useState ([])

    useEffect(()=>{
        fetch('http://localhost:3000/Foods')
        .then(resp => resp.json())
        .then(fetchedFood => {
            setFoods(fetchedFood)
        })
    }, [] )
    return(
        <div>
            <h1 className="foods">FOODS</h1>
            <JapCuisine foodMap={foods}/>
        </div>
    )
}
export default Foods;