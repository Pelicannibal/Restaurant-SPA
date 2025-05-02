import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import style from './navbar.module.css';

import { useIsDesktop } from '../hooks/CheckDesktop';

import Logo from '/RBBW_Logo.png';
import NavButton from '/navbutton.png';

interface IDictionary {
    [key: string]: string;
}

const items = ["Home", "Menu", "Admin", "Contact",];

const link_dictionary: IDictionary = {
    "Home" : "/",
    "Menu" : "/menu",
    "Admin" : "/admin",
};



const handleScrollToElement = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
}

type HamburgerProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerButton: React.FC<HamburgerProps> = ({isOpen, setIsOpen}) => {
    return (
        <a
            className={style.navButton}
            role='button'
            onClick={() => setIsOpen(!isOpen)}
            >
            <img className={style.hamburgerImage} src={NavButton} alt='navButton' />
        </a>
    );
}

const NavLayout = () => {
    const isDesktop = useIsDesktop();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ul className={style.layout}>
                <li key='logo' className={style.logo}>
                    <NavLink to='/'>
                        <img className={style.logoImage} src={Logo} alt='logo' height='50em' />
                    </NavLink>
                </li>
                <a className={clsx(style.navFocus, style.link, style.orderButton)}
                onClick={() => handleScrollToElement('order')}
                role='button'
                key='orderButton'>
                    Order Now
                </a>
                {isDesktop ?
                    <NavLinks isOpen={isOpen} setIsOpen={setIsOpen}/>
                    :
                    <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />}
            </ul>

            {!isDesktop && (
                <div className={clsx(style.slideContainer, isOpen && style.active)}>
                    <NavLinks isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            )}
        </>
    );
}

const NavLinks: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
    return(
        <div className={style.navList} key='navlinklist'>
            {items.map((item) => (
                item==='Contact' ? (
                    <a
                        className={clsx(style.link, style.navButton)}
                        onClick={() => {handleScrollToElement('contact'); setIsOpen(!isOpen)}}
                        role='button'
                        key={item}>
                        {item}
                    </a>
                ) : (
                    <NavLink
                        className={({ isActive }) => clsx(style.link, isActive && style.active)}
                        onClick={() => setIsOpen(!isOpen)}
                        to={link_dictionary[item]}
                        key={item}>
                        {item}
                    </NavLink>
                )
            ))}
        </div>
    );
}

function Navbar(){
    return (
        <NavLayout />
    );
}

export default Navbar;