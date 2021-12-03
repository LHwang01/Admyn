import './PanicButton.css'
import { Link } from "react-router-dom";

const PanicButton = () => {
    return (
        <div>
            <Link to="/learn-more"><button className="PanicButton"> Panic </button></Link>
        </div>
    );
}

export default PanicButton;