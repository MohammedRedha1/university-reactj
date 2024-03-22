import Animated from "../components/Animated";
import { motion } from "framer-motion";
import { aboutTabs } from "../content";
import { useState } from "react";

function About({ language, chooseTextLanguage }) {
    const direction = language === "ar" ? "rtl" : "ltr";
    const [activeTab, setActiveTab] = useState("historical");
    const indices = {
        historical: 1,
        location: 2,
        logo: 3,
        "vision-mission-objectives": 4,
    };
    const tabsContent = {
        historical: (
            <Historical
                chooseTextLanguage={chooseTextLanguage}
                direction={direction}
            />
        ),
        location: (
            <Location
                chooseTextLanguage={chooseTextLanguage}
                direction={direction}
            />
        ),
        logo: (
            <Logo
                chooseTextLanguage={chooseTextLanguage}
                direction={direction}
            />
        ),
        "vision-mission-objectives": (
            <VisionMissionObjectives
                chooseTextLanguage={chooseTextLanguage}
                direction={direction}
            />
        ),
    };
    return (
        <Animated>
            <main className="department-dashboard">
                <div
                    className="sub-tabs"
                    style={{
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "0",
                        columnGap: "4rem",
                    }}
                >
                    {aboutTabs.map((tab, index) => (
                        <motion.button
                            onClick={() => {
                                setActiveTab(tab.id);
                            }}
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                            whileTap={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                            key={language + index}
                            className={
                                "department-btn fade-in" +
                                (activeTab === tab.id ? " active-tab" : "")
                            }
                        >
                            {tab.label[language]}
                        </motion.button>
                    ))}
                    <motion.div
                        layout
                        transition={{ type: "tween" }}
                        className="indicator"
                        style={{
                            gridColumn: `${indices[activeTab]}/${indices[activeTab]}`,
                        }}
                    ></motion.div>
                </div>
                <article className="dashboard-content">
                    {tabsContent[activeTab]}
                </article>
            </main>
        </Animated>
    );
}

export default About;

// conditionally rendered content is the about page
function Historical({ chooseTextLanguage, direction }) {
    return (
        <>
            <p
                className="showed-department-content"
                style={{ direction: direction }}
            >
                {chooseTextLanguage(
                    "The College of Education for Pure Science (Ibn Al-Haitham) is considered an extension of the High School of Teachers, which is considered one of the old colleges in Iraq, if not the oldest one after the College of Law. It was able to receive great encouragement over the years, which enabled her to develop naturally in raising its scientific levels to complete many lacked factors for the various progress.",
                    "كلية التربية للعلوم الصرفة (ابن الهيثم) تعتبر تمديداً للمدرسة العالية للمعلمين، والتي تعتبر من الكليات القديمة في العراق، إن لم تكن الأقدم بعد كلية القانون. وقد تمكنت منذ تأسيسها من الحصول على تشجيع كبير على مر السنين، مما مكنها من التطور بشكل طبيعي في رفع مستوياتها العلمية لتكمل العديد من العوامل المفقودة للتقدم المختلف."
                )}
            </p>
            <div className="about-img">
                <img src="../../assets/images/history1.jpg" alt="" />
            </div>

            <p
                className="showed-department-content"
                style={{ direction: direction }}
            >
                {chooseTextLanguage(
                    "The efforts of an excellent elite of teachers and educators and their such as (Sati’ al-Husri, Taha al-Hashemi, Matti Aqrawi, Fadel al-Jamali, Taha al-Rawi, Abd al-Wahhab Azzam and Ahmed Hassan al-Zayyat) and others contributed to building this institution in the stage of establishment through teaching and guidance. This college was not limited to learn knowledge as much as it is a deep awareness of the general and social goals of the nation, how to act in a way that suits the needs of the generation in Iraq and the Arab world.",
                    "جهود نخبة ممتازة من المعلمين والمربين ومنهم (ساطع الحسري، طه الهاشمي، متي أقراوي، فاضل الجمالي، طه الراوي، عبد الوهاب عزام وأحمد حسن الزيات) وغيرهم ساهموا في بناء هذه المؤسسة في مرحلة التأسيس من خلال التدريس والإرشاد. لم تقتصر هذه الكلية على تعلم المعرفة بقدر ما هي وعي عميق بالأهداف العامة والاجتماعية للأمة، وكيفية التصرف بطريقة تتناسب مع احتياجات الجيل في العراق والعالم العربي."
                )}
            </p>
            <div className="about-img">
                <img src="../../assets/images/history2.png" alt="" />
            </div>

            <p
                className="showed-department-content"
                style={{ direction: direction }}
            >
                {chooseTextLanguage(
                    "A number of educators have graduated from this college since its founding in 1923 when it was an evening study where primary school teachers joined it to be the first seed for secondary school teachers. In the year 1935, its educational requirements were completed to ensure the achievement of its goals, and the study period in the Higher Teachers’ House in 1937 became three years in that  female students were admitted for the first timewhich is the same period that the college works ,Then it changed its name to the College of Education in 1958 when the University of Baghdad was established to  join to it and continued to supply the community with its graduates until it was canceled in 1969.The college  reopened in 1972 to rehabilitate  the graduates of bachelor’s degree in science and literature for a period of one academic year to prepare them for the teaching profession in the subjects of educational science Psychology and teaching methods until the college reopened in 1973 for the initial four-year university study in the name of the College of Education.",
                    "تخرج من هذه الكلية عدد من المربين منذ تأسيسها عام 1923 عندما كانت دراسة مسائية حيث انضم إليها معلمو المدارس الابتدائية لتكون البذرة الأولى لمعلمي المدارس الثانوية. في العام 1935 تم استكمال متطلباتها التعليمية لضمان تحقيق أهدافها، وأصبحت مدة الدراسة في البيت العالي للمعلمين عام 1937 ثلاث سنوات في ذلك الوقت تم قبول الطالبات لأول مرة وهو نفس الفترة التي تعمل فيها الكلية، ثم تغير اسمها إلى كلية التربية عام 1958 عندما تأسست جامعة بغداد للانضمام إليها واستمرت في تزويد المجتمع بخريجيها حتى تم إلغاؤها عام 1969. أعيدت الكلية فتحها عام 1972 لإعادة تأهيل خريجي البكالوريوس في العلوم والآداب لمدة سنة دراسية واحدة لإعدادهم لمهنة التدريس في مواد العلوم التربوية وعلم النفس وطرق التدريس حتى أعيدت الكلية فتحها عام 1973 للدراسة الجامعية الأولية لمد"
                )}
            </p>
            <div className="about-img">
                <img src="../../assets/images/history3.jpg" alt="" />
            </div>
            <div className="about-img">
                <img src="../../assets/images/history4.png" alt="" />
            </div>

            <p
                className="showed-department-content"
                style={{ direction: direction }}
            >
                {chooseTextLanguage(
                    `In 1988, the college was divided into two specialized colleges, the first concerned with human studies and called the College of Education – Ibn Rushd, the second with scientific studies, it was called the College of Education Ibn Al-Haitham, is to take care of specialized studies and provide their requirements to ensure the preparation of students. This division enabled the provision of intensive care to prepare the student in a scientific solid preparation, in addition to giving the student with an integrated culture in educational and artistic science in the fields of thought and creativity.
The college continues to keep up  with development (scientific and educational) by developing its curricula and scientific laboratories to ensure keeping pace with the prevailing scientific and technical development in the world
       Among the basic duties of this college, help students to develop their mental , social powers and abilities necessary to lead Iraqi youth, an intelligent leadership to ensure an emphasis on developing their intellect, self-reliance, strengthening the spirit of creativity and morality at work`,
                    `في عام 1988 تم تقسيم الكلية إلى كليتين متخصصتين، الأولى تهتم بالدراسات الإنسانية وسميت بكلية التربية – ابن رشد، والثانية بالدراسات العلمية، سميت بكلية التربية ابن الهيثم، لتولي الدراسات المتخصصة وتوفير متطلباتها لضمان إعداد الطلبة. هذا التقسيم سمح بتوفير الرعاية المكثفة لإعداد الطالب في إعداد علمي صلب، بالإضافة إلى إعطاء الطالب ثقافة متكاملة في العلوم التربوية والفنية في مجالات الفكر والإبداع.`
                )}
            </p>
        </>
    );
}

function Location({ chooseTextLanguage, direction }) {
    return (
        <>
            <p
                className="showed-department-content"
                style={{ direction: direction }}
            >
                {chooseTextLanguage(
                    `The college is located on the banks of the immortal Tigris River, at Al-Rusafa Side, in the Al-Adhamiya neighborhood, close to the city center.
College address : (Iraq – Baghdad – Adhamiya District – Adhamiya District – Antar Square – Street 20, Locality 308.`,
                    `تقع الكلية على ضفاف نهر دجلة الخالد، في الجانب الرصافي، في حي الأعظمية، قرب وسط المدينة.`
                )}
            </p>
            <div className="about-img">
                <img src="../../assets/images/location.jpg" alt="" />
            </div>
        </>
    );
}

function Logo({ chooseTextLanguage, direction }) {
    return (
        <>
            <div className="about-img">
                <img src="../../assets/images/logo.png" alt="" />
            </div>

            <p
                className="showed-department-content"
                style={{ whiteSpace: "pre-line", direction: direction }}
            >
                {chooseTextLanguage(
                    `College logo (symbolism and significance)

                    The symbolic significance of the logo of the College of Education for Pure Sciences (Ibn Al-Haitham)
                    
                    The logo of the College of Education for Pure Sciences – Ibn Al-Haitham embodies the scientific and educational mission rooted in civilization and history that characterizes it
                    
                    Here is the wall of the city of Baghdad (Al-Zawraa) that frames the contents of the logo, symbolizing the city of science, culture, literature, and the era of scientific prosperity that began with the construction of Al-Zawraa in the Abbasid era, where this symbol was borrowed from the same logo of the University of Baghdad, which bears the same significance
                    
                    In the middle of this wall or frame are scientific and educational symbols, with their existence, carrying connotations to the scientific and educational college departments, we find the following scientific symbols
                    
                    The Latin letter Sikma:- is used in mathematics and its applications to denote the grand total. The symbol (∑) was used to denote the two sections of mathematics and computer science (considering that the last section) depends in essence on mathematical sciences
                    
                    The symbol of the atom with the nucleus: – centered in its center and surrounded by electronic orbits). This symbol was used to denote the departments of chemistry and physics sciences, which study the states of matter, their interactions and their existence in nature based on its basis, which is the atom
                    
                     The pictorial form of DNA:-was used to denote the Department of Biology, where this symbol was chosen as the common factor between all living organisms and the last thing to decode it and the smallest bearer of the characteristics of living organisms
                    
                    The pen: – which is mentioned in the Holy Qur’an to denote the process of teaching and learning, giving knowledge and the principles of education. Thus, it came in the symbol of the College of Education for Pure Sciences (Ibn Al-Haitham) to denote the Department of Psychological and Educational Sciences
                    
                    According to the union of these four symbols above, the complete and comprehensive picture of the departments and mission of the College of Education for Pure Sciences (Ibn Al-Haitham) is formed`,
                    "شعار الكلية (الرمزية والدلالية)\n\nالدلالة الرمزية لشعار كلية التربية للعلوم الصرفة (ابن الهيثم)\n\nشعار كلية التربية للعلوم الصرفة – ابن الهيثم يجسد المهمة العلمية والتربوية المتجذرة في الحضارة والتاريخ التي تميزها\n\nهنا جدار مدينة بغداد (الزوراء) الذي يحيط بمحتويات الشعار، رمزاً لمدينة العلم والثقافة والأدب وعصر الازدهار العلمي الذي بدأ ببناء الزوراء في العصر العباسي، حيث تم استعارة هذا الرمز من نفس شعار جامعة بغداد، الذي يحمل نفس الدلالة\n\nفي منتصف هذا الجدار أو الإطار رموز علمية وتربوية، بوجودها، تحمل دلالات إلى أقسام الكلية العلمية والتربوية، نجد الرموز العلمية التالية\n\nالحرف اللاتيني سيكما:- يستخدم في الرياضيات وتطبيقاتها للدلالة على المجموع الكلي. تم استخدام الرمز (∑) للدلالة على قسمي الرياضيات وعلوم الحاسوب (مع النظر إلى أن القسم الأخير) يعتمد في جوهره على الع"
                )}
            </p>
        </>
    );
}

function VisionMissionObjectives({ chooseTextLanguage, direction }) {
    return (
        <>
            <p className="heading-300" style={{ direction: direction }}>
                {chooseTextLanguage("The Vision of the College", "رؤية الكلية")}
                <br />
            </p>
            <p
                className="showed-department-content"
                style={{ direction: direction }}
            >
                {chooseTextLanguage(
                    "The college must be one of the leading educational colleges with a good standing and reputation in the country to prepare good cadres of graduates and faculty to work in departments, institutions and community service.",
                    "يجب أن تكون الكلية من الكليات التربوية الرائدة ذات المكانة والسمعة الطيبة في البلاد لإعداد كوادر جيدة من الخريجين والهيئة التدريسية للعمل في الأقسام والمؤسسات والخدمة المجتمعية."
                )}
            </p>
            <br />
            <p className="heading-300" style={{ direction: direction }}>
                {chooseTextLanguage(
                    "The Mission of the College",
                    "رسالة الكلية"
                )}
            </p>
            <br />
            <p
                className="showed-department-content"
                style={{ direction: direction }}
            >
                {chooseTextLanguage(
                    "The mission of the College of Education for Pure Sciences (Ibn Al-Haitham) is to prepare faculty (leaders, educators, and researchers) in secondary schools , educational and scientific institutions who have the ability to contribute effectively to creating scientific, cultural and social changes, by raising the new generation in a way that serves the country and helps it keep pace with scientific development in The world and the development of education methods at all levels in cooperation with the colleges of the University of Baghdad, The Ministry of Education and Higher Education and other ministries to serve the community.",
                    "تتمثل مهمة كلية التربية للعلوم الصرفة (ابن الهيثم) في إعداد هيئة تدريسية (قادة ومربين وباحثين) في المدارس الثانوية والمؤسسات التربوية والعلمية الذين لديهم القدرة على المساهمة بفعالية في خلق التغييرات العلمية والثقافية والاجتماعية، من خلال تربية الجيل الجديد بطريقة تخدم البلاد وتساعدها على مواكبة التطور العلمي في العالم وتطوير طرق التعليم على جميع المستويات بالتعاون مع كليات جامعة بغداد ووزارة التربية والتعليم العالي والوزارات الأخرى لخدمة المجتمع."
                )}
            </p>
            <br />
            <p className="heading-300" style={{ direction: direction }}>
                {chooseTextLanguage(
                    "Objectives of the College",
                    "أهداف الكلية"
                )}
            </p>
            <br />
            <p
                className="showed-department-content"
                style={{ direction: direction, whiteSpace: "pre-line" }}
            >
                {chooseTextLanguage(
                    `In light of the vision and mission of the college, the goals of the College of Education for Pure Sciences (Ibn Al-Haitham) are divided into two types of goals (general and specific) as follows:

                            General Objectives:
                            
                            - Preparing qualified faculty according to modern educational trends to work in Iraqi secondary schools (intermediate and preparatory).
                            - Preparing qualified specialists to work in various applied fields such as schools, universities, hospitals, educational, industrial, social and other institutions.
                            - Contribute to raising the efficiency of faculty of the Ministry of Education and educational institutions by providing special training programs and courses.
                            - Preparing a generation of researchers in various educational and scientific disciplines, in which the college grants them master’s and doctoral degrees.
                            - Spreading educational and scientific awareness among the community by holding seminars, lectures through continuous education and community service.
                            - Contribute to solving problems for and private sectors through joint research and studies, providing consultations and coordinating with various other institutions and ministries.
                            - Creating a spirit of scientific approach in the faculty in his treatment of scientific and educational matters, as well as inculcating the scientific method in him.
                            - Preparing researchers with the conceptual and intellectual ability to deal and cooperate with scientific and educational institutions in a way that serves the individual and society in the future.
                            - Develop curricula and courses for undergraduate and postgraduate studies.
                            - Strengthening scientific and research cooperation mechanisms with universities, ministries and other institutions.
                            - Activating educational, scientific, humanitarian activities and communication in a way that serves the community and finding solutions to its problems.
                            - Work on the development of modern studies or specializations to serve the developments taking place in society and the labor market.
                            
                            The Special Objectives:
                            
                            - Work on consistency and integration with the orientations of the vision, mission and goals of the University of Baghdad.
                            - Develop and implement a strategy for the college to be in line with the strategy of the University of Baghdad.
                            - Seeking to enhance the capabilities of the college to sustain all scientific, research and educational outputs.
                            - Work on the completion and application of files related to quality assurance and academic accreditation, in a manner that achieves global progress for the college and the university.
                            - Seeking to obtain academic, institutional or program accreditation for the college globally or regionally.
                            - Work to support the implementation of the draft government program for the year (2018-2022) prepared by the Ministry.
                            - Preparing for the application and implementation of the curriculum accreditation system program prepared by the Ministry of Higher Education and Scientific Research.
                            `,
                    `تهدف كلية التربية للعلوم الصرفة (ابن الهيثم)، في ضوء رؤيتها ورسالتها، إلى تحقيق أهداف متنوعة تنقسم إلى نوعين من الأهداف (العامة والخاصة) على النحو التالي:

                            أهداف عامة:
                            
                            - إعداد كوادر تدريسية مؤهلة وفقًا للاتجاهات التربوية الحديثة للعمل في المدارس الثانوية العراقية (المتوسطة والإعدادية).
                            - إعداد متخصصين مؤهلين للعمل في مجالات تطبيقية متنوعة مثل المدارس والجامعات والمستشفيات والمؤسسات التعليمية والصناعية والاجتماعية وغيرها.
                            - المساهمة في رفع كفاءة هيئة التدريس في وزارة التربية والمؤسسات التعليمية من خلال تقديم برامج تدريبية خاصة ودورات.
                            - إعداد جيل من الباحثين في مختلف التخصصات التربوية والعلمية، حيث تمنح الكلية لهم درجات الماجستير والدكتوراه.
                            - نشر الوعي التربوي والعلمي بين المجتمع من خلال عقد الندوات والمحاضرات عبر التعليم المستمر وخدمة المجتمع.
                            - المساهمة في حل مشاكل القطاعين العام والخاص من خلال البحوث المشتركة والدراسات، وتقديم الاستشارات والتنسيق مع مؤسسات ووزارات مختلفة.
                            - خلق روح النهج العلمي للهيئة التدريسية في التعامل مع المسائل العلمية والتعليمية، بالإضافة إلى غرس الأسلوب العلمي فيها.
                            - إعداد الباحثين بالقدرة المفهومية والفكرية للتعامل والتعاون مع المؤسسات العلمية والتعليمية بما يخدم الفرد والمجتمع في المستقبل.
                            - تطوير المناهج والدورات الدراسية للدراسات الجامعية والدراسات العليا.
                            - تعزيز آليات التعاون العلمي والبحثي مع الجامعات والوزارات والمؤسسات الأخرى.
                            - تفعيل الأنشطة التربوية والعلمية والإنسانية والتواصل بما يخدم المجتمع ويجد حلولًا لمشاكله.
                              
                            أهداف خاصة:
                            
                            - العمل على التناسق والتكامل مع توجيهات رؤية ورسالة وأهداف جامعة بغداد.
                            - وضع وتنفيذ استراتيجية للكلية تكون متماشية مع استراتيجية جامعة بغداد.
                            - السعي لتعزيز قدرات الكلية للحفاظ على جميع النواتج العلمية والبحثية والتعليمية.
                            - العمل على استكمال وتطبيق الملفات المتعلقة بضمان الجودة والاعتماد الأكاديمي، بطريقة تحقق التقدم العالمي للكلية والجامعة.
                            - السعي للحصول على الاعتماد الأكاديمي للكلية على المستوى العالمي أو الإقليمي.
                            - العمل على دعم تنفيذ برنامج الحكومة للعام (2018-2022) المعد من قبل الوزارة.
                            - الاستعداد لتطبيق وتنفيذ برنامج نظام اعتماد المناهج الدراسية المعد من قبل وزارة التعليم العالي والبحث العلمي.`
                )}
            </p>
        </>
    );
}
