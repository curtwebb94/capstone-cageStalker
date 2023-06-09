import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNavBar = () => {
    const navigate = useNavigate()



    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/profile">myProfile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/athletes">Fighters</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/myStalker">myStalker</Link>
            </li>
            
            {
                localStorage.getItem("cage_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("cage_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

