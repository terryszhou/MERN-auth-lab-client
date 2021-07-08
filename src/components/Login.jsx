import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import { Profile } from './Profile'

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            // post to backend with axios
            const requestBody = { email, password }
            const serverUrl = process.env.REACT_APP_SERVER_URL
            const response = await axios.post(`${serverUrl}/api-v1/users/login`, requestBody)
            console.log(response)

            // destructure response
            const { token } = response.data

            // save response to localStorage
            localStorage.setItem('jwtToken', token)

            // decode the jwt token
            const decoded = jwt.decode(token)

            // set user in App.jsx's state
            props.setCurrentUser(decoded)

        } catch(err) {
            if (err.response.status === 400) {
                setMessage(err.response.data.msg)
            } else {
                console.dir(err)
            }
        }
    }

    if (props.currentUser) return <Redirect to='/profile' component={Profile} currentUser={props.currentUser} />

    return (
        <div>
            <h3>Login</h3>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'email-input'}>Email</label>
                <input
                    id={'email-input'}
                    type="email"
                    placeholder="user@domain.com"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor={'password-input'}>Password</label>
                <input
                    id={'password-input'}
                    type="password"
                    placeholder="******"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    className="button"
                    type='submit'
                    value='Login'
                />
            </form>
        </div>
    )
}