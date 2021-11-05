import React from 'react'
import { Link } from 'react-router-dom'

function CardItems (props) {
    return(
        <div>
            <li className="card-items">
                <Link className="card-items-link" to={props.path}>
                    <figure className="card-items-wrapper" data-category={props.label}> 
                        <img className="card-items-pic" src={props.src} alt="Travel pic"/>
                    </figure>
                    <div className="card-items-info">
                        <h5 className="card-items-text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}
export default CardItems;