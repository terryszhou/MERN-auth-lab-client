import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Do axios call!")
    }

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
                    type='submit'
                    value='Login'
                />
            </form>
        </div>
    )
}