import React from 'react'
import '../../App.css'
import {useEffect, useState} from 'react'
import LocationSites from '../LocationSites'



function Locations() {
    const [japSites, setJapSites] = useState ([])
    // console.log(japSites)
    // const [listedSites, setListedSites] = useState ([])

    useEffect( () =>{
        fetch('http://localhost:3000/Japan-sites')
        .then(resp => resp.json())
        .then(sitesData => {
            setJapSites(sitesData)
        })
    }, [])


    return(
        <div >
            <h1 className="locations">LOCATIONS</h1>
            <LocationSites sitesMap={japSites}/>
        </div>
    )
}
export default Locations;