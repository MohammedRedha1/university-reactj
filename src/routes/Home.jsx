import { departments, news } from "../content.jsx";
import DepartmentCard from "../components/DepartmentCard";
import News from "../components/News";
import Header from "../components/Header.jsx";
import Animated from "../components/Animated.jsx";
import Footer from "../components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// requestAnimationFrame(raf);
function Home({ language, chooseTextLanguage, currentTheme }) {
    const animations = new Array(
        "flip-left",
        "flip-right",
        "flip-up",
        "flip-down"
    );
    function randomIndex() {
        return Math.floor(Math.random() * animations.length);
    }
    return (
        <Animated>
            <Header
                chooseTextLanguage={chooseTextLanguage}
                currentTheme={currentTheme}
            />

            <section className="departments-section">
                <h2 className="heading-200 fade-in" key={language}>
                    {chooseTextLanguage("Departments", "الأقسام")}
                </h2>
                <div className="departments-container">
                    {departments.map((department, index) => {
                        return (
                            <DepartmentCard
                                dataAos={animations[randomIndex()]}
                                key={index}
                                {...department[language]}
                                iconSrc={department.iconSrc[currentTheme]}
                                to={`/departments/${department.path}`}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="news-section">
                <h2 className="heading-200 fade-in" key={language}>
                    {chooseTextLanguage("Latest news", "أحدث الأخبار")}
                </h2>
                {news.map((newsItem, index) => {
                    return (
                        <News
                            dataAos={
                                index % 2 === 0 ? "fade-right" : "fade-left"
                            }
                            key={index}
                            {...newsItem[language]}
                            chooseTextLanguage={chooseTextLanguage}
                        />
                    );
                })}
            </section>
            <Footer
                chooseTextLanguage={chooseTextLanguage}
                currentTheme={currentTheme}
            />
        </Animated>
    );
}

export default Home;
