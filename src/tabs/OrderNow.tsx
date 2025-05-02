import style from './ordernow.module.css';

const handleScrollToSection = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
}

type NavButtonProps = {
    image: string;
    sectionName: string;
};

const NavButton: React.FC<NavButtonProps> = ({ image, sectionName }) => {
    return(
        <a className={style.navButton}
        onClick={() => handleScrollToSection(sectionName)}
        role='button'>
            <img src={image} className={style.navButtonImage} />
            <div className={style.navButtonText}>
                {sectionName}
            </div>
        </a>
    )
}

const FoodNavbar: React.FC = () => {
    return (
        <ul key='foodnav' className={style.foodNav}>
            <NavButton image='' sectionName='' />
        </ul>
    )
};

// Just reuse MenuLayout, but have the style changed to one column. Or reuse the components and functions
const Menu: React.FC = () => {
    return (
        <div key='menuarea' className={style.menuArea}>

        </div>
    )
};

function OrderNow() {
    return (
        <>
            <div key='foodtabs' className={style.layout}>
                <FoodNavbar />
                <Menu />
            </div>
        </>
    )
};

export default OrderNow;