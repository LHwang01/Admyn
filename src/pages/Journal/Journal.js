import './Journal.css'
import NavBar from '../NavBar/NavBar';
import '../../App.css'

const Journal = () => {
    return (
        <div>
            <NavBar />
            <div className="journal">
                <p>This is a journal</p>
            </div>
        </div>
    );
}
export default Journal;