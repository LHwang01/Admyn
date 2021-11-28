import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <div className="NavBar">
            <nav>
                <ul>
                    <li>
                       <Link to="/"> <a> Admyn </a></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Learn More</a>
                    </li>
                    <li>
                        <a>Premium</a>
                    </li>
                    <li>
                        <Link to="/login"> <button> Sign in </button></Link> 
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;