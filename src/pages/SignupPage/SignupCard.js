import './SignupPage.css'
import { Link } from "react-router-dom";

//The login card

const SignUpCard = () => {
    return (
        <div className="signupCard">
            <h2> Welcome!</h2>

            <div className="signup-input-forms">
                <label> Name </label>
                <input className="input-item" type="text" placeholder="John Doe" />

                <label> Email </label>
                <input className="input-item" type="email" placeholder="example@email.com" />

                <label> Password </label>
                <input className="input-item" type="password" placeholder="*********" />

                <label> Confirm Password </label>
                <input className="input-item" type="password" placeholder="*********" />
            </div>

            <div className="signup-submission-trailer">
                <button> <a href="/goal">Sign Up</a> </button>
                <br />
                <Link to="/login"><h5 className="go-to-login">Log in?</h5> </Link>
            </div>
        </div>


    );
}

export default SignUpCard;