import { motion } from "framer-motion";
const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

function Animated({ children }) {
    return (
        <motion.div
            className="animated-container"
            variants={animations}
            transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}

export default Animated;
