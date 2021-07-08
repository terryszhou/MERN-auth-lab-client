import { NavLink } from 'react-router-dom'

export const NavBar = (props) => {
    return (
        <nav>
            <NavLink 
                className="nav-link"
                activeClassName="clicked-link"
                to="/">
                    Home
            </NavLink>
            <NavLink 
                className="nav-link" 
                activeClassName="clicked-link"
                to="/register">
                    Register
            </NavLink>
            <NavLink 
                className="nav-link" 
                activeClassName="clicked-link"
                to="/login">
                    Login
            </NavLink>
            <NavLink 
                className="nav-link" 
                activeClassName="clicked-link"
                to="/profile">
                    Profile
            </NavLink>
            <NavLink 
                className="nav-link" 
                to="/"
                activeClassName="clicked-link">
                    <span onClick={props.handleLogOut}>
                        Log Out
                    </span>
            </NavLink>
        </nav>
    )
}