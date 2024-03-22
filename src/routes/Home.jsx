import { departments, news } from "../content.jsx";
import DepartmentCard from "../components/DepartmentCard";
import News from "../components/News";
import Header from "../components/Header.jsx";
import Animated from "../components/Animated.jsx";
import Footer from "../components/Footer.jsx";
// const lenis = new Lenis();

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
function Home({ language, chooseTextLanguage, currentTheme }) {
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
                            key={index}
                            {...newsItem[language]}
                            chooseTextLanguage={chooseTextLanguage}
                        />
                    );
                })}
            </section>
            <Footer chooseTextLanguage={chooseTextLanguage} />
        </Animated>
    );
}

export default Home;
