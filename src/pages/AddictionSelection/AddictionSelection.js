import './AddictionSelection.css'
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';

//Addiction selection card

const AddictionSelection = () => {
    return (
        <div>
            <NavBar />
            <div className="addictionCard">
                <h2> Choose your focus:</h2>
                <form className="addictions">
                    <label className='selection'>
                        <input className='selection' type="radio" name="radio" checked />
                        <span>Social Media</span>
                    </label>
                    <label className='selection'>
                        <input className='selection' type="radio" name="radio" />
                        <span>Video Game</span>
                    </label>
                    <label className='selection'>
                        <input className='selection' type="radio" name="radio" />
                        <span>Shopping</span>
                    </label>
                    <label className='selection'>
                        <input className='selection' type="radio" name="radio" />
                        <span>NSFW</span>
                    </label>
                    <label className='selection'>
                        <input type="radio" name="reason" value="" /> Other <input type="text" name="other_reason" />

                    </label>
                </form>

                <div className="signup-submission-trailer">
                    <button> <a href="/journal">Submit</a></button>
                </div>
            </div>
        </div>


    );
}

export default AddictionSelection;