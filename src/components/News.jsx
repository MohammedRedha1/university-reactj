// import "../../public/styles/news.min.css";

function News({
    imageSrc,
    dep,
    heading,
    content,
    chooseTextLanguage,
    dataAos,
}) {
    return (
        <div className="news-card" data-aos={dataAos}>
            <div className="news-text-box">
                <span className="news-department fade-in" key={Math.random()}>
                    {dep}
                </span>
                <h3 className="heading-300 fade-in" key={Math.random()}>
                    {heading}
                </h3>
                <p className="news-content fade-in" key={Math.random()}>
                    {content}
                </p>
                <a href="#" className="fade-in" key={Math.random()}>
                    {chooseTextLanguage(
                        "Read full story \u2192",
                        "\u2190 أكمل القراءة"
                    )}
                </a>
            </div>
            <div className="news-img-box">
                <img src={imageSrc} alt="" />
            </div>
        </div>
    );
}

export default News;
