import './App.css';
import jwt from 'jsonwebtoken'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Profile } from './components/Profile'

export const App = () => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        // get token from localStorage
        const token = localStorage.getItem('jwtToken')
        // if token, set user
        if (token) {
            setCurrentUser(jwt.decode(token))
        // else set user state = null
        } else {
            setCurrentUser(null)
        }
    },[])

    const handleLogOut = () => {
        // delete jwt in localStorage
        if (localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken')
        // set user state to null
            setCurrentUser(null)
        }
    }

    return (
        <Router>
            <NavBar 
                currentUser={currentUser} 
                handleLogOut={handleLogOut}
            />
            <Switch>
                <Route
                    exact path="/"
                    component={Welcome}
                />
                <Route
                    path="/login"
                    render={props => <Login {...props} 
                        currentUser={currentUser} 
                        setCurrentUser={setCurrentUser}
                    />}
                />
                <Route
                    path="/register"
                    render={props => <Register {...props}
                        currentUser={currentUser} 
                        setCurrentUser={setCurrentUser}
                    />}
                />
                <Route
                    path="/profile"
                    render={props => currentUser ? 
                        <Profile {...props} 
                            currentUser={currentUser} 
                            handleLogOut={handleLogOut}
                        /> : <Redirect to="/login"/>
                    }
                />
            </Switch>
        </Router>
    )
}