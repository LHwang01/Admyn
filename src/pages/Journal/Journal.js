import './Journal.css';
import './DayCounter/DayCounter';
import NavBar from '../NavBar/NavBar';
import DayCounter from './DayCounter/DayCounter';

const Journal = () => {
    return (
        <div>
            <NavBar />
            <DayCounter />
        </div>
    );
}

export default Journal;