import { motion, AnimatePresence } from "framer-motion";
function Courses({ content, language, dep }) {
    function chooseTextLanguage(englishText, arabicText) {
        return language == "en" ? englishText : arabicText;
    }
    return (
        <div style={{ overflow: "hidden" }}>
            <motion.table
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "tween" }}
                className="courses-table"
                style={{ direction: language == "en" ? "ltr" : "rtl" }}
            >
                <thead>
                    <tr
                        className="table-row"
                        style={{
                            direction: language == "en" ? "ltr" : "rtl",
                        }}
                    >
                        <th className="table-heading" scope="col">
                            {chooseTextLanguage("Year", "المرحلة")}
                        </th>
                        <th className="table-heading" scope="col">
                            {chooseTextLanguage("Subjects", "المواد")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {content[dep].map((course, index) => (
                        <tr
                            className="table-row"
                            style={{
                                direction: language == "en" ? "ltr" : "rtl",
                            }}
                            key={index}
                        >
                            <td className="table-data">{course.year}</td>
                            <td className="table-data">
                                {course.material[language]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </motion.table>
        </div>
    );
}

export default Courses;
