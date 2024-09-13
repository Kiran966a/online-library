import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">Kiran's Book Loft</div>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/browse">Browse Books</Link>
                    <Link to="/add">Add Book</Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
