import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Profile } from './components/Profile'

export const App = () => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {

    })

    const handleLogOut = () => console.log("Log the user out!")

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
                    render={props => <Profile {...props} 
                        currentUser={currentUser} 
                        setCurrentUser={setCurrentUser}
                    />}
                />
            </Switch>
        </Router>
    )
}
