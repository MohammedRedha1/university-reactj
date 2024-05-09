import { motion } from "framer-motion";
const animationSettings = {
    variants: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    },
    transition: { duration: 1, type: "spring", ease: "easeInOut" },
};

function Animated({ children }) {
    return (
        <motion.div
            className="animated-container"
            variants={animationSettings.variants}
            transition={animationSettings.transition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}

export default Animated;
