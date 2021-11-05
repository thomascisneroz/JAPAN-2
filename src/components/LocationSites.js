import React from 'react'
import SiteCard from './SiteCard'
import '../components/SiteCard.css'

function LocationSites(props) {
    // console.log(props)
    return(
        <div className="site-card-container">
            {
                props.sitesMap.map(eachSite => { 
                    return (
                        <SiteCard key={eachSite.id} eachSite={eachSite} label={eachSite.name}/>
                    )
                })
            }
        </div>
    )
}
export default LocationSites