import './Journal.css'
import NavBar from '../NavBar/NavBar';

const Journal = () => {
    return (
        <div>
            <NavBar />
            <div className="journal">
                <p>How did you feel today?</p>
                <div className="journalEntry">
                </div>
            </div>

        </div>
    );
}

export default Journal;