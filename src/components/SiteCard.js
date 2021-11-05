import React from 'react'
import {Link} from 'react-router-dom'
import '../components/SiteCard.css'

function SiteCard(props) {
    console.log(props)
    return (
    
        <div className="site-card">
            <Link className="site-card-link" to='/locations'>
                <figure className="site-card-wrapper" data-category={props.label}> 
                    <img className="site-card-pic" src={props.eachSite.image} alt="Site pic"/>
                </figure>
                    <div className="site-card-info">
                        <h5 className="site-description">{props.eachSite.description}</h5>
                    </div>
            </Link>
        </div>
    
    )
}
export default SiteCard;