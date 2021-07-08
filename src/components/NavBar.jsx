import { NavLink } from 'react-router-dom'
// import { useState, useEffect } from 'react'

export const NavBar = (props) => {
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
    
    return (
        <nav>
            <NavLink 
                className="nav-link"
                activeClassName="clicked-link"
                to="/"
                exact>
                    Home
            </NavLink>
            <NavLink 
                className="nav-link" 
                activeClassName="clicked-link"
                to="/register"
                exact>
                    Register
            </NavLink>
            <NavLink 
                className="nav-link" 
                activeClassName="clicked-link"
                to="/profile"
                exact>
                    Profile
            </NavLink>
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
                to="/"
                exact>
                    <span onClick={props.handleLogOut}>
                        Log Out
                    </span>
                </NavLink>
            {/* {logged} */}
        </nav>
    )
}