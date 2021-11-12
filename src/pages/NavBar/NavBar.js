import classes from "./NavBar.css"

const NavBar = () => {
    return (  
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a>Learn More</a>
                    </li>
                    <li>
                        <a>Premium</a>
                    </li>
                    <li>
                        <a>Skills</a>
                    </li>
                    <li>
                        <a>Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;