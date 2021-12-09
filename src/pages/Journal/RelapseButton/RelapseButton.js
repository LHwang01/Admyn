import './RelapseButton.css';
import { Link } from "react-router-dom";

const RelapseButton = () => {
    return (
        <a href="/" className="RelapseButton">
            <img src={require('../../../images/relapse-button.png').default} width={"60%"} height={"100%"} alt={'Relapse Button'} />
        </a>
    );
}

export default RelapseButton;