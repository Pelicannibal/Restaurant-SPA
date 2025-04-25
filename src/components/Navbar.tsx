import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import style from './navbar.module.css';

import Logo from '/RBBW_Logo.png';

interface IDictionary {
    [key: string]: string;
}

const items = ["Contact", "Menu", "Home"];

const link_dictionary: IDictionary = {
    "Home" : "/",
    "Contact" : "/contact",
    "Menu" : "/menu",
};


function Navbar(){
    return(
        <>
            <ul className={style.navList}>
                <li key='logo' className={style.logo}>
                    <NavLink to='/'>
                        <img className={style.logoImage} src={Logo} alt='logo' height='50em'></img>
                    </NavLink>
                </li>
                {items.map((item) => (
                    <li key={item} className={style.navItem}>
                        <NavLink
                            className={({ isActive }) => clsx(style.link, isActive && style.active)}
                            to={link_dictionary[item]}>{item}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Navbar;