import './App.css';
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

    useEffect(() => {})

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
                    path="/register"
                    render={props => <Register {...props}
                        currentUser={currentUser} 
                        setCurrentUser={setCurrentUser}
                    />}
                />
                <Route
                    path="/login"
                    render={props => <Login {...props} 
                        currentUser={currentUser} 
                        setCurrentUser={setCurrentUser}
                    />}
                />
                <Route
                    path="/profile"
                    render={props => currentUser ? <Profile {...props} 
                        currentUser={currentUser} 
                        handleLogOut={handleLogOut}
                    /> : <Redirect to="/login"/>}
                />
            </Switch>
        </Router>
    )
}
