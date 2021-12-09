import './DayCounter.css'
import RelapseButton from '../RelapseButton/RelapseButton';

const DayCounter = () => {
    return (  
        <div className="DayCounter">
            <RelapseButton />
            <h2>Days Clean</h2>
            <h1>90</h1>
            <h2>Keep Going!</h2>
        </div>
    );
}

export default DayCounter;