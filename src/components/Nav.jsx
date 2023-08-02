import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <Link to='/home'>
                <button>Home</button>
            </Link>

            <Link to='/about'>
                <button>About</button>
            </Link>
        </nav>
    )
};

export default Nav;