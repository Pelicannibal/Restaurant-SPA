import { RotatingGallery } from './components/Gallery';
import Logo from '/RBBW_Logo_Dark.png';

const galleryImages = [
    '/Bruschetta.jpg',
    '/lemonade.jpg',
    '/salmon.jpg',
    '/tiramisu.jpg',
]

function Home(){
    return(
        <>
        <img src={Logo}></img>
        <RotatingGallery images={galleryImages} interval={5000} />
        <b>We have the best food at our place in Washington.</b>
        </>
    )
}

export default Home;