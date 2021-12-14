import './HomePage.css'
import { Link } from "react-router-dom";

const MainCard = () => {
    return (
        <div className="center-card">
            <div className="text">
                <h1>You're in charge.</h1>
                <p>All the tools to help you succeed in your addiction journey.</p>
                <Link to="/signup"><button>Explore</button> </Link>
            </div>
        </div>
    );
}

export default MainCard;