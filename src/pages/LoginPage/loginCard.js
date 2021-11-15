import './loginPage.css'
import { Link } from "react-router-dom";

const LoginCard = () => {
    return (  
    <div className="loginCard">
        <h2> Welcome Back!</h2>

        <div className="input-forms">
            <label> Email </label>
            <input type="email" placeholder="example@email.com" />
            <br/>
            <br/>
            <label> Password </label>
            <input type="password" placeholder="*********" />
        </div>

        <div className="submission-trailer">
            <button> Log in </button>
            <br/>
            <Link to="/"><h5>Sign up?</h5> </Link>
        </div>
    </div>

        
    );
}

export default LoginCard;