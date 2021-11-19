import './HomePage.css'
import NavBar from '../NavBar/NavBar'
import MainCard from './MainCard';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

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
                <img src={require('../../images/lady.svg').default} width={1000} height={700} alt={'Illustration of a woman working.'} />
                <RightCard />
            </div>
        </div>
    )
}

export default HomePage;