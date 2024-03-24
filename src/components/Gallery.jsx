function Gallery() {
    const imagesStructure = [
        // this shit is just a placeholder, and it can
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
        {
            src: "https://via.placeholder.com/500",
            alt: "placeholder",
        },
    ];
    return (
        <main className="gallery">
            {imagesStructure.map((image) => {
                return (
                    <img
                        className="gallery-img"
                        key={Math.random()}
                        src={image.src}
                        alt={image.alt}
                    />
                );
            })}
        </main>
    );
}

export default Gallery;
