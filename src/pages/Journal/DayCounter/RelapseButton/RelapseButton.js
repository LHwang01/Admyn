import './RelapseButton.css';

const RelapseButton = (props) => {
    return (
        <div className="RelapseButton">
            <img src={require('../../../../images/relapse-button.png').default} onClick={() => props.setCount(0)} width={"60%"} height={"100%"} alt={'Relapse Button'} />
        </div>
    );
}

export default RelapseButton;