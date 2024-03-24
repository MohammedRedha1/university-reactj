import { Link, useResolvedPath, useLocation } from "react-router-dom";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar({
    language,
    setLanguage,
    className,
    chooseTextLanguage,
    currentTheme,
    setCurrentTheme,
    optionalStyle,
}) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrollDiff, setScrollDiff] = useState(0); // Track scroll difference
    const threshold = 150;
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest === 0) {
            setHidden(false);
            setScrollDiff(0);
            return;
        }
        const previousScrollY = scrollY.getPrevious();
        const currentDiff = Math.abs(latest - previousScrollY);

        setScrollDiff((prevDiff) => prevDiff + currentDiff); // Accumulate difference
        // Check if the total difference exceeds the threshold
        if (scrollDiff >= threshold) {
            setHidden(latest > previousScrollY ? true : false); // Toggle visibility
            setScrollDiff(0); // Reset the difference counter
        }
    });

    return (
        <motion.nav
            variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className={className}
        >
            {className == "navbar" && (
                <>
                    <div className="left-nav">
                        <Link to="/" className="site-title">
                            {chooseTextLanguage("Home", "الرئيسية")}
                        </Link>
                        <input
                            type="checkbox"
                            id="dark-mode-toggle"
                            className="dark-mode-toggle"
                            onChange={() => {
                                setCurrentTheme(
                                    currentTheme === "dark" ? "light" : "dark"
                                );
                            }}
                        />
                        <label
                            htmlFor="dark-mode-toggle"
                            className="dark-mode-toggle-label"
                        >
                            <img src="../assets/images/moon-solid.svg" alt="" />
                            <img src="../assets/images/sun-solid.svg" alt="" />
                        </label>
                    </div>
                </>
            )}
            <menu className={"nav-links " + optionalStyle}>
                <CustomLink to="/about" language={language}>
                    {chooseTextLanguage("About", "حول")}
                </CustomLink>
                <CustomLink to="/apply" language={language}>
                    {chooseTextLanguage("Apply", "قدم الآن")}
                </CustomLink>
                <CustomLink to="/departments" language={language}>
                    {chooseTextLanguage("Departments", "الأقسام")}
                </CustomLink>
                <CustomLink to="/research" language={language}>
                    {chooseTextLanguage("Research", "البحث العلمي")}
                </CustomLink>
                <CustomLink to="/gallery" language={language}>
                    {chooseTextLanguage("Gallery", "الصور")}
                </CustomLink>
                {className == "navbar" && (
                    <button
                        className="toggle-lang-btn"
                        onClick={() =>
                            setLanguage(language == "en" ? "ar" : "en")
                        }
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_72_34)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 2.375C5.51269 2.375 1.875 6.01269 1.875 10.5C1.875 14.9873 5.51269 18.625 10 18.625C14.4873 18.625 18.125 14.9873 18.125 10.5C18.1203 6.01465 14.4853 2.37974 10 2.375ZM7.93984 13.625H12.0602C11.6406 15.0578 10.9375 16.3492 10 17.3664C9.0625 16.3492 8.35938 15.0578 7.93984 13.625ZM7.65625 12.375C7.44896 11.1336 7.44896 9.86641 7.65625 8.625H12.3438C12.551 9.86641 12.551 11.1336 12.3438 12.375H7.65625ZM3.125 10.5C3.12446 9.86597 3.21201 9.23493 3.38516 8.625H6.38984C6.20339 9.86805 6.20339 11.132 6.38984 12.375H3.38516C3.21201 11.7651 3.12446 11.134 3.125 10.5ZM12.0602 7.375H7.93984C8.35938 5.94219 9.0625 4.65078 10 3.63359C10.9375 4.65078 11.6406 5.94219 12.0602 7.375ZM13.6102 8.625H16.6148C16.9617 9.85093 16.9617 11.1491 16.6148 12.375H13.6102C13.7966 11.132 13.7966 9.86805 13.6102 8.625ZM16.1227 7.375H13.3547C13.0357 6.11993 12.5001 4.93019 11.7719 3.85938C13.6532 4.36494 15.2333 5.64178 16.1227 7.375ZM8.22812 3.85938C7.49992 4.93019 6.96427 6.11993 6.64531 7.375H3.87734C4.76666 5.64178 6.34682 4.36494 8.22812 3.85938ZM3.87734 13.625H6.64531C6.96427 14.8801 7.49992 16.0698 8.22812 17.1406C6.34682 16.6351 4.76666 15.3582 3.87734 13.625ZM11.7719 17.1406C12.5001 16.0698 13.0357 14.8801 13.3547 13.625H16.1227C15.2333 15.3582 13.6532 16.6351 11.7719 17.1406Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_72_34">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                        transform="translate(0 0.5)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="current-language">
                            {language == "en" ? "English" : "العربية"}
                        </span>
                    </button>
                )}
            </menu>
        </motion.nav>
    );
}

export function CustomLink({ to, children, language, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const currentPath = useLocation().pathname;
    const isActive = currentPath.startsWith(resolvedPath.pathname);

    // const isActive = useMatch({
    //     path: resolvedPath.pathname,
    //     end: true,
    // });
    return (
        <motion.li
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={(isActive ? "active " : "") + "nav-link fade-in"}
            key={language}
        >
            <Link to={to} {...props}>
                {children}
            </Link>
        </motion.li>
    );
}
