import { useEffect, useState } from "react";
import { galleryImages } from "../content";
import { Img } from "react-image";
import { HashLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import Animated from "../components/Animated";
function Gallery({ language, chooseTextLanguage }) {
    const [activeImgIndex, setActiveImgIndex] = useState(null);
    const [cacheBuster, setCacheBuster] = useState(Date.now());

    useEffect(() => {
        setCacheBuster(Date.now());
    }, []);

    return (
        <Animated>
            <motion.main className="gallery">
                {activeImgIndex !== null && (
                    <NavigationButton
                        direction="next"
                        setActiveImgIndex={setActiveImgIndex}
                        activeImgIndex={activeImgIndex}
                        galleryImages={galleryImages}
                        chooseTextLanguage={chooseTextLanguage}
                    />
                )}
                {galleryImages.map((image, index) => {
                    return (
                        <motion.div
                            layout
                            onClick={(event) => {
                                if (
                                    event.currentTarget.classList.contains(
                                        "active-gallery-img"
                                    )
                                ) {
                                    setActiveImgIndex(null);
                                    return;
                                }
                                setActiveImgIndex(index);
                            }}
                            className={
                                "gallery-img " +
                                (activeImgIndex === index
                                    ? "active-gallery-img"
                                    : "")
                            }
                            key={index}
                        >
                            <Img
                                loader={<HashLoader color="#36d7b7" />}
                                src={`${image.src}?${cacheBuster}`} // Append cache buster
                                alt={image.alt}
                                key={Math.random()}
                            />
                        </motion.div>
                    );
                })}
                {activeImgIndex !== null && (
                    <NavigationButton
                        direction="previous"
                        setActiveImgIndex={setActiveImgIndex}
                        activeImgIndex={activeImgIndex}
                        galleryImages={galleryImages}
                        chooseTextLanguage={chooseTextLanguage}
                    />
                )}
            </motion.main>
        </Animated>
    );
}

export default Gallery;

function NavigationButton({
    direction,
    setActiveImgIndex,
    activeImgIndex,
    galleryImages,
    chooseTextLanguage,
}) {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (
            (direction === "next" &&
                galleryImages.length - 1 === activeImgIndex) ||
            (direction === "previous" && activeImgIndex === 0)
        ) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [direction, activeImgIndex, galleryImages]);

    function handleClick() {
        setActiveImgIndex((prevIndex) => {
            if (direction === "next")
                return prevIndex === galleryImages.length - 1
                    ? prevIndex
                    : prevIndex + 1;

            return prevIndex === 0 ? prevIndex : prevIndex - 1;
        });
    }
    return (
        <AnimatePresence>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileTap={!isDisabled ? { scale: 1.1 } : null}
                onClick={() => {
                    handleClick();
                }}
                className={"gallery-nav-btn " + direction}
                disabled={isDisabled}
            >
                {direction === "next"
                    ? chooseTextLanguage("next", "التالي")
                    : chooseTextLanguage("previous", "السابق")}
            </motion.button>
        </AnimatePresence>
    );
}
