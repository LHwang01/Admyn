import './Journal.css';
import './DayCounter/DayCounter';
import NavBar from '../NavBar/NavBar';
import DayCounter from './DayCounter/DayCounter';
import PanicButton from './PanicButton/PanicButton';

const Journal = () => {
    return (
        <div>
            <NavBar />
            <div className="journal">
                <p>How did you feel today?</p>
                <div className="journalEntry">
                </div>
            </div>
            <DayCounter />
            <PanicButton />
        </div>
    );
}

export default Journal;