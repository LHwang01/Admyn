import './PlusButton.css';
import React, { useState } from "react";

const PlusButton = (props) => {

    return (
        <div className="PlusButton">
            <img src={require('../../../../images/plus-sign.png').default} onClick={() => props.setCount(props.count + 1)} width={"50%"} height={"100%"} alt={'Plus Sign'} />
        </div>
    );
}

export default PlusButton;