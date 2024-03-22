import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Animated from "../components/Animated";
import { courses, departments, tabs, tabsContent } from "../content.jsx";
import { motion } from "framer-motion";
import Courses from "../components/Courses.jsx";
import Footer from "../components/Footer.jsx";
function Departments({ language, chooseTextLanguage }) {
    const depsIndices = {
        biology: 1,
        chemistry: 2,
        physics: 3,
        "computer-science": 4,
        mathematics: 5,
    };
    const subTabsIndices = {
        intro: 1,
        courses: 2,
        vision: 3,
        goals: 4,
    };
    const { id } = useParams();
    const navigate = useNavigate();
    const [showedDepartment, setShowedDepartment] = useState(id);
    const [activeTab, setActiveTab] = useState("intro");
    function handleDepartmentClick(path) {
        setShowedDepartment(path);
        navigate(`/departments/${path}`);
    }

    useEffect(() => {
        setActiveTab("intro");
    }, []);
    return (
        <Animated>
            <main className="department-dashboard">
                <div className="department-navigation">
                    {departments.map((department, index) => (
                        <motion.button
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                            whileTap={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                            onClick={() => {
                                handleDepartmentClick(department.path);
                            }}
                            key={language + index}
                            className={
                                "department-btn fade-in" +
                                (showedDepartment === department.path
                                    ? " active-tab"
                                    : "")
                            }
                        >
                            {department[language].heading}
                        </motion.button>
                    ))}
                    <motion.div
                        layout
                        transition={{ type: "tween" }}
                        className="indicator"
                        style={{
                            gridColumn: `${depsIndices[showedDepartment]}/${depsIndices[showedDepartment]}`,
                        }}
                    ></motion.div>
                </div>
                <div className="sub-tabs">
                    {tabs.map((tab) => {
                        return (
                            <motion.button
                                whileHover={{
                                    backgroundColor: "rgba(0,0,0,0.2)",
                                }}
                                whileTap={{
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                }}
                                onClick={() => setActiveTab(tab.tabId)}
                                key={language + tab.tabId}
                                className={
                                    "department-btn fade-in " +
                                    (activeTab === tab.tabId
                                        ? "active-tab"
                                        : "")
                                }
                            >
                                {tab[language]}
                            </motion.button>
                        );
                    })}
                    {activeTab && (
                        <motion.div
                            layout
                            transition={{ type: "tween" }}
                            className="indicator sub"
                            style={{
                                gridColumn: `${subTabsIndices[activeTab]}/${subTabsIndices[activeTab]}`,
                            }}
                        ></motion.div>
                    )}
                </div>
                <motion.div className="dashboard-content">
                    {activeTab && activeTab !== "courses" && (
                        <article
                            style={{
                                direction: language == "ar" ? "rtl" : "ltr",
                                whiteSpace:
                                    activeTab === "goals"
                                        ? "pre-line"
                                        : "normal",
                            }}
                            className="showed-department-content"
                        >
                            {tabsContent[activeTab][showedDepartment][language]}
                        </article>
                    )}

                    {activeTab === "courses" && (
                        <Courses
                            language={language}
                            content={courses}
                            dep={showedDepartment}
                        />
                    )}
                </motion.div>
                <Footer chooseTextLanguage={chooseTextLanguage} />
            </main>
        </Animated>
    );
}

export default Departments;
