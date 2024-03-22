const imagesStructure = [
    // this shit is just a placeholder, and it can
    {
        src: "https://via.placeholder.com/150",
        alt: "placeholder",
        caption: "Placeholder",
    },
    {
        src: "https://via.placeholder.com/150",
        alt: "placeholder",
        caption: "Placeholder",
    },
    {
        src: "https://via.placeholder.com/150",
        alt: "placeholder",
        caption: "Placeholder",
    },
];

function Gallery({ images }) {
    return (
        <div className="gallery">
            {images.map((image) => {
                return (
                    <img
                        className="fade-in gallery-img"
                        key={Math.random()}
                        src={image.src}
                        alt={image.alt}
                    />
                );
            })}
        </div>
    );
}

export default Gallery;
