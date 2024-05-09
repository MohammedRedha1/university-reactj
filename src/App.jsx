import { useState, useEffect, useRef } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./routes/Home";
import About from "./routes/About";
import Apply from "./routes/Apply";
import Departments from "./routes/Departments";
import NotFound from "./routes/NotFound";
import Gallery from "./routes/Gallery";
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function App() {
    function chooseTextLanguage(englishText, arabicText) {
        return language == "en" ? englishText : arabicText;
    }

    const [language, setLanguage] = useState(
        localStorage.getItem("current language") || "en"
    );
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem("current theme") || "light"
    );

    const location = useLocation();
    useEffect(() => {
        const routeName = capitalize(
            location.pathname.replace("/", "") || "Home"
        );
        if (routeName.startsWith("Departments")) {
            document.title = "Departments";
            return;
        }
        document.title = routeName;
    }, [location.pathname]);
    const bodyReference = useRef(document.body);
    useEffect(() => {
        const body = bodyReference.current;
        body.classList.add(language == "ar" ? "arabic-font" : "english-font");
        body.classList.remove(
            language == "ar" ? "english-font" : "arabic-font"
        );
        localStorage.setItem("current language", language);

        return () => {
            body.classList.remove("arabic-font", "english-font");
        };
    }, [language]);

    useEffect(() => {
        const darkModeToggle = document.querySelector(".dark-mode-toggle");
        if (currentTheme === "dark") {
            darkModeToggle.checked = false;
        } else {
            darkModeToggle.checked = true;
        }
        localStorage.setItem("current theme", currentTheme);
    }, [currentTheme]);

    return (
        <>
            <Navbar
                chooseTextLanguage={chooseTextLanguage}
                language={language}
                setLanguage={setLanguage}
                className="navbar"
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
                isAnimated={true}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            language={language}
                            chooseTextLanguage={chooseTextLanguage}
                            currentTheme={currentTheme}
                        />
                    }
                />
                <Route
                    path="/apply"
                    element={
                        <Apply
                            language={language}
                            chooseTextLanguage={chooseTextLanguage}
                        />
                    }
                />
                <Route
                    path="/about"
                    element={
                        <About
                            language={language}
                            chooseTextLanguage={chooseTextLanguage}
                        />
                    }
                />
                <Route
                    path="/departments"
                    element={<Navigate to="/departments/biology" replace />}
                />
                <Route
                    path="/departments/:id"
                    element={
                        <Departments
                            language={language}
                            chooseTextLanguage={chooseTextLanguage}
                        />
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <Gallery
                            language={language}
                            chooseTextLanguage={chooseTextLanguage}
                        />
                    }
                />
                <Route path="/404" element={<NotFound language={language} />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </>
    );
}

export default App;
