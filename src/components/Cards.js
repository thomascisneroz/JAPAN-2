import React from 'react'
import CardItems from './Carditems'
import  './cards.css';

function Cards() {

    
    
    return(
        <div className="cards">
            <h1>Some destinations you might enjoy</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-item">
                        <CardItems src="https://i.pinimg.com/564x/79/34/e0/7934e0161db959113b98e3e2e80b3bf7.jpg" path='/locations' label='Sites'text='Famous the world over for the most polite Deers' />
                    </ul>
                    <ul className="cards-item">
                        <CardItems src='https://www.wandercooks.com/wp-content/uploads/2019/09/takoyaki-recipe-ft-500x500.jpg' path='/Foods' label='Food'text='Takoyaki is a ball-shaped Japanese snack made of a wheat flour-based batter and cooked in a special molded pan.'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;