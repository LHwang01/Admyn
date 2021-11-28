import './HomePage.css'
import { Link } from "react-router-dom";

const BottomCardOverlay = () => {
    return (  
        <div className="bottom-card-overlay">
            <div className="text">
                <h1>This is a judgement free zone.</h1>
                <p>We are here to help. Admyn features an abstinence day counter, a journal feature, and a panic button on a gamified
                    platform.
                </p>
                <h2>Sign up to get access to all of our free resources.</h2>
                <Link to="/signup"><button>Sign Up</button></Link>
            </div>
        </div>
    );
}

export default BottomCardOverlay;