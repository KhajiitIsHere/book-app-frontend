import classes from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className={classes.header}>
            <div><h2>Books API</h2></div>
            <div className={classes['nav-bar']}>
                <Link to={'/books'}>Books</Link>
                <Link to={'/categories'}>Categories</Link>
            </div>
        </div>
    )
}

export default Header