import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Profile } from './components/Profile'

export const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route
                    exact path="/"
                    component={Welcome}
                    />
                <Route
                    path="/register"
                    render={props => <Register {...props} />}
                />
                <Route
                    path="/login"
                    render={props => <Login {...props} />}
                />
                <Route
                    path="/profile"
                    render={props => <Profile {...props} />}
                />
            </Switch>
        </Router>

    )
}
