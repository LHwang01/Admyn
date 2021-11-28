import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import MainCard from './MainCard';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import BottomCard from './BottomCard';
import BottomCardOverlay from './BottomCardOverlay';
import Footer from '../../Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div className="spacer">
                <LeftCard />
                <MainCard />
                <RightCard />
            </div>
            <div className="spacer">
                <img src={require('../../images/lady.svg').default} width={"60%"} height={"100%"} alt={'Illustration of a woman working.'} />
                <BottomCard />
                <BottomCardOverlay />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;