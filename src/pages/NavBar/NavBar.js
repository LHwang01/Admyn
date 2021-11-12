import './NavBar.css'

const NavBar = () => {
    return (  
        <div className="NavBar">
            <nav>
                <ul>
                    <li>
                        <a href="/">Learn More</a>
                    </li>
                    <li>
                        <a href="/#about">Premium</a>
                    </li>
                    <li>
                        <a href="/#skills">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;