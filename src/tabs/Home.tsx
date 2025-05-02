import { AnnouncementBanner } from '../components/Announcement';
import { RotatingGallery } from '../components/Gallery';

const galleryImages = [
    '/Bruschetta.jpg',
    '/lemonade.jpg',
    '/salmon.jpg',
    '/tiramisu.jpg',
]

function Home(){
    return(
        <>
            <RotatingGallery images={galleryImages} interval={5000} />
            <AnnouncementBanner />
            <b>We have the best food at our place in Washington.</b>
        </>
    )
}

export default Home;