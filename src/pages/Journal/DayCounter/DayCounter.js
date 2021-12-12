import './DayCounter.css'
import RelapseButton from './RelapseButton/RelapseButton';
import PlusButton from './PlusButton/PlusButton'
import React, { useState } from "react";

const DayCounter = () => {
    const[count, setCount] = useState(0);    
    
    return (  
        <div className="DayCounter">
            <PlusButton setCount={setCount} count={count}/>
            <RelapseButton setCount={setCount}/>
            <h2>Days Clean</h2>
            <h1>{count}</h1>
            <h2>Keep Going!</h2>
        </div>
    );
}

export default DayCounter;