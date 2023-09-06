import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="Navbar"> 
            <Link to="/"> Home</Link>
            <Link to="/About"> About</Link>
        </div>
    );
} 
 export default Navbar; 