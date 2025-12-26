import { useState, useEffect } from "react";

/**
 * @startDate 26/12/25
 * @lastUpdate 26/12/25 
 * 
 * @use
 *  1. Um componente que recebe uma array de imagens e alterna entre elas com o tempo. 
 * 
 * @returns
 */

export default function ImageSlider({ switchInterval, imageArray }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === imageArray.length - 1 ? 0 : prev + 1
            );
        }, switchInterval ? switchInterval : 10000); // 10 segundos

        return () => clearInterval(interval);
    }, [imageArray.length]);

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === imageArray.length - 1 ? 0 : prev + 1
        );
    };
    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? imageArray.length - 1 : prev - 1
        );
    };
    return (
        // IMAGEM
        < div className="relative w-full" >
            <img
                src={imageArray[currentIndex]}
                alt="Imagems do projeto"
                className="w-full rounded-md"
            />

            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 
                     bg-black/50 text-white px-3 py-2 rounded-full 
                     hover:bg-black/70 transition hover:scale-115 hover:text-[#DD01E6]"
            >
                ◀
            </button>

            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 
                     bg-black/50 text-white px-3 py-2 rounded-full 
                     hover:bg-black/70 transition hover:scale-115 hover:text-[#DD01E6]"
            >
                ▶
            </button>
        </div >
    )
}