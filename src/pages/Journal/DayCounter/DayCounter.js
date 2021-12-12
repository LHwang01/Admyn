import './DayCounter.css'
import RelapseButton from './RelapseButton/RelapseButton';
import PlusButton from './PlusButton/PlusButton'
import React, { useState } from "react";

const DayCounter = () => {
    const[count,setCount] = useState(0);

    return (  
        <div className="DayCounter">
            <PlusButton />
            <RelapseButton />
            <h2>Days Clean</h2>
            <h1>0</h1>
            <h2>Keep Going!</h2>
        </div>
    );
}

export default DayCounter;