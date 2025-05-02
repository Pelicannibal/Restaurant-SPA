import { useEffect,useState } from "react";
import clsx from 'clsx';
import Logo from '/RBBW_Logo_Dark.png';

import style from './gallery.module.css';

type RotatingGalleryProps = {
    images:string[];
    interval?: number;
};

export const RotatingGallery: React.FC<RotatingGalleryProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className={style.rotatingGallery}>
            <img src={Logo} className={style.mainLogo} />
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Gallery image ${index}`}
                    className={clsx(style.rotatingImage, {
                        [style.active]: index === currentIndex,
                      })}
                />
            ))}
        </div>
    );
}