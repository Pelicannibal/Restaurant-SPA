import { MenuLayout } from './MenuLayout';
import { exampleSection } from '../menuitems';

function Menu(){
    return(
        <>
            <MenuLayout sections={ exampleSection } />
        </>
    )
}

export default Menu;