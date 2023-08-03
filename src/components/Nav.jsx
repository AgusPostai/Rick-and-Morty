import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <hr />
            <Link to='/about'>
                <button>About</button>
            </Link>
        </nav>
    )
};

export default Nav;