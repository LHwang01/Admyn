import './NavBar.css'

const NavBar = () => {
    return (  
        <div className="NavBar">
            <nav>
                <ul>
                    <li>
                        <a>Learn More</a>
                    </li>
                    <li>
                        <a>Premium</a>
                    </li>
                    <li>
                        <button>Sign Up</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;