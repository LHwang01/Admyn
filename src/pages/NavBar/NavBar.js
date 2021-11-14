import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <div className="NavBar">
            
            <nav>
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