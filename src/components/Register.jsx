import axios from 'axios'
import jwt from 'jsonwebtoken'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Profile } from './Profile'

export const Register = (props) => {
    // state for controlled form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for server flash message
    const [message, setMessage] = useState('')
    // function for form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            // 1. make request body
            const requestBody = { name, email, password }
            // 2. post request body to server
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)
            // 3. destructure token from response
            const { token } = response.data
            // 4. set token in local storage
            localStorage.setItem('jwtToken', token)
            // 5. decode token
            const decoded = jwt.decode(token)
            // 6. set user in App.js state
            props.setCurrentUser(decoded)
        } catch (err) {
            if (err.response.status === 400) {
                setMessage(err.response.data.msg)
            } else {
                console.dir(err)
            }
        }
    }
    // redirect if user is logged in
    if (props.currentUser) return (
        <Redirect 
            to='/profile' 
            component={Profile} 
            currentUser={props.currentUser}
        />    
    ) 

    return (
        <div>
            <h3>Register</h3>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name</label>
                <input
                    id="name-input"
                    type="text"
                    placeholder="Enter your username"
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="email-input">Email</label>
                <input
                    id="email-input"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password-input">Password</label>
                <input
                    id="password-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    className="button"
                    type='submit'
                    value='Register'
                />
            </form>
        </div>
    )
}