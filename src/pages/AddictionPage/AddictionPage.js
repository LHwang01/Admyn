import './AddictionPage.css';
import '../LoginPage/LoginPage.css'
import NavBar from '../NavBar/NavBar';

const AddictionPage = () => {
    return (
        <div>
            <NavBar />
            <div className="loginCard">
                <h2>Let's get started.</h2>
                <h4>What addiction do you wish to target: </h4>
                <div className="list">
                </div>
            </div>
        </div>
    );
}
export default AddictionPage;