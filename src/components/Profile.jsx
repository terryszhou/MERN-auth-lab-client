import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { Login } from './Login'

export const Profile = (props) => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        const getPrivateMessage = async () => {
            try {
                // get jwt from localStorage
                const token = localStorage.getItem('jwtToken')
                // make up auth headers
                const authHeaders = { Authorization: token }
                // hit auth-locked endpoint
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`,
                    { headers: authHeaders }
                )
                setMessage(response.data.msg)
            } catch (err) {
                props.handleLogOut()
            }
        }
        getPrivateMessage()
    },[props])

    if (!props.currentUser) return (
        <Redirect 
            to='/login' 
            component={ Login } 
            currentUser={ props.currentUser } 
        />
    ) 

    return (
        <div>
            <h3>Greetings {props.currentUser.name}!</h3>
            <h4>Your Email is {props.currentUser.email}</h4>
            <div>
                <p>You have a secret message from the authorized user area:</p>
                <p>{message}</p>
            </div>
        </div>
    )
}