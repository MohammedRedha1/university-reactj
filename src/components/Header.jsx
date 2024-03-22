// import "../../public/styles/header.min.css";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    animate,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect } from "react";
function Header({ chooseTextLanguage, currentTheme }) {
    const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
    const color = useMotionValue(COLORS[0]);
    const bgColor = currentTheme === "dark" ? "#060916" : "#d1ecfa";
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${bgColor} 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0 4px 44px ${color}`;
    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);
    return (
        <motion.header
            style={{
                backgroundImage,
                // marginTop: "-80px",
            }}
            className="header"
        >
            <h1 className="primary-heading">
                Welcome to the University of Baghdad
            </h1>
            <p className="header-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                quis provident, iste excepturi explicabo necessitatibus
                veritatis exercitationem quod dicta hic alias eaque, numquam
                molestias quaerat accusamus voluptates nihil! Porro, voluptas.
                Placeat, dolor quibusdam! Placeat labore provident eius
                accusamus ad error dolorem beatae, aliquid officiis autem.
            </p>
            <motion.form
                style={{ border, boxShadow }}
                className="header-form"
                action=""
            >
                <img src="../assets/images/search.svg" alt="" />
                <input
                    className="fade-in"
                    key={Math.random()}
                    type="text"
                    placeholder={chooseTextLanguage("Search", "بحث")}
                />
                <motion.button
                    style={{ backgroundColor: color, boxShadow }}
                    className="fade-in"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    key={Math.random()}
                >
                    {chooseTextLanguage("Search", "بحث")}
                </motion.button>
            </motion.form>
            <div style={{ position: "absolute", inset: "0", zIndex: "0" }}>
                <Canvas>
                    <Stars
                        radius={50}
                        count={2500}
                        factor={4}
                        saturation={0}
                        fade
                    />
                </Canvas>
            </div>
        </motion.header>
    );
}

export default Header;
