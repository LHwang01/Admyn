import './LoginPage.css'
import { Link } from "react-router-dom";

//The login card

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
            <Link to="/signup"><h5 className="go-to-signup">Sign up?</h5> </Link>
        </div>
    </div>

        
    );
}

export default LoginCard;