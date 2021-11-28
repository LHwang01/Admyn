import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <div className="Footer">
            <nav>
                <ul>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;