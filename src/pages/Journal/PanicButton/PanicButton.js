import './PanicButton.css'
import { Link } from "react-router-dom";
import { getRandomLink } from "./Links";

const PanicButton = () => {
    return (
        <div>
            <button className="PanicButton" onClick={()=> window.open(getRandomLink())}> Panic </button>
        </div>
    );
}

export default PanicButton;