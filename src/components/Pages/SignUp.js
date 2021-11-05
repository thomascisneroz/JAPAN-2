import React from 'react'
import '../../App.css'
import { useState } from 'react'
import '../Pages/SignUp.css'



function SignUp() {
    const [name, setName] = useState('')
    const userData = 'http://localhost:3000/Users'
    const headers = {
        Accepts: 'application/json',
        'Content-type': 'application/json',
    }

    fetch(userData)
    .then(resp => resp.json())
    .then(fetchedUsers => fetchedUsers)

    function addUser(name) {
        fetch(userData, {
            method: 'POST',
            body: JSON.stringify(name),
            headers,        
        })
        .then((resp) => resp.json())
        .then((json) => setName([...name]))
    }

    function weSubmiting(e) {
        e.preventDefault()
        const newUser = {
            name,
        }
        addUser(newUser)
    }

    


    return ( 
        
        <div className="form-container">
            
                <video src="/videos/sign-up-vid.mp4" autoPlay muted loop/>
                    <h1 className="sign-up"> SIGN UP </h1>
            <form className="new-user-form" onSubmit={weSubmiting}> 
                    <h3 className="user-form-title">New User</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Username"
                    className="input-text"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
            </form>
            
        </div>
        
    )
}
export default SignUp;