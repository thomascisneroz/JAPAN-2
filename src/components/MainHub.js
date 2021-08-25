import React from 'react'
import { Button } from './Button'
import './Mainhub.css'
import '../App.css'
 
function MainHub() {
    return(
        <div className="Main-hub-container">
            <video src='/videos/video.mp4' autoPlay loop muted />
            <h1>Enjoy Your Trip</h1>
            <p>Lets go</p>
            <div className="hub-btn">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch More <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}
export default MainHub;