import './HomePage.css'
import NavBar from '../NavBar/NavBar'
import MainCard from './MainCard';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div>
                <LeftCard />
                <MainCard />
                <RightCard />
            </div>
        </div>
    )
}

export default HomePage;