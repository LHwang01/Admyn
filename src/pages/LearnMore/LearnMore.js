import NavBar from '../NavBar/NavBar';
import './LearnMore.css';
import { Link } from "react-router-dom";

const LearnMore = () => {
    return (
        <div>
            <NavBar />
            <div className='welcome'>
                <h1 className="heading">Welcome to Admyn!</h1>
                <p className="paragraph">
                    There is always light at the end of the tunnel! <br></br> We are here to help you recover from any addiction you might be facing.
                </p>
                <p className="paragraph">
                    Addiction recovery is the process of working towards rebuilding your life after being addicted to something. If you have
                    ever felt like something you are habitually doing is negatively harming you, such as harming your physical wellbeing,
                    negatively impacting your mental happiness, or causing harm to yourself or those around, you are likey dealing with
                    an addiction.
                </p>
                <p className="paragraph">
                    Admyn provides you with several scientifically tested and proven recovery techniques, such as a day counter, a journal,
                    and more!
                </p>
                <Link id="learnButton" to="/signup"><button>Explore</button> </Link>
            </div>

        </div>
    );
}

export default LearnMore;