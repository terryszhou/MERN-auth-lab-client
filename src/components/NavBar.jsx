import { NavLink } from 'react-router-dom'
// import { useState, useEffect } from 'react'

export const NavBar = (props) => {
    const loggedIn = (
        <>
        <NavLink 
            className="nav-link" 
            activeClassName="clicked-link"
            to="/profile"
            exact>
                Profile
        </NavLink>
        <a href="/login" className="nav-link">
            <span onClick={props.handleLogOut}>
                Log Out
            </span>
        </a>
        </>
    )

    const loggedOut = (
        <>
            <NavLink 
                className="nav-link" 
                activeClassName="clicked-link"
                to="/login"
                exact>
                    Login
            </NavLink>
            <NavLink 
                className="nav-link" 
                activeClassName="clicked-link"
                to="/register"
                exact>
                    Register
            </NavLink>
        </>
    )
    
    return (
        <nav>
            <NavLink 
                className="nav-link"
                activeClassName="clicked-link"
                to="/"
                exact>
                    Home
            </NavLink>
            {props.currentUser ? loggedIn : loggedOut}
        </nav>
    )
}

// SCRAP CODE

// const [logged, setLogged] = useState(props.currentUser)

// useEffect(() => {
//     if (props.currentUser !== null) {
//         setLogged (
//             <NavLink 
//             className="nav-link" 
//             activeClassName="clicked-link"
//             to="/"
//             exact>
//                 <span onClick={props.handleLogOut}>
//                     Log Out
//                 </span>
//             </NavLink>
//         )
//     } else {
//         setLogged (
//             <NavLink 
//             className="nav-link" 
//             activeClassName="clicked-link"
//             to="/login"
//             exact>
//                 Login
//             </NavLink>
//         )
//     }
// },[logged])