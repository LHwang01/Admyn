import './PlusButton.css';

const PlusButton = () => {
    return (
        <div className="PlusButton">
            <img src={require('../../../../images/plus-sign.png').default} width={"50%"} height={"100%"} alt={'Plus Sign'} />
        </div>
    );
}

export default PlusButton;