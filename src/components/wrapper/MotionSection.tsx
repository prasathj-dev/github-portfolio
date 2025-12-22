import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
    children: ReactNode;
    id?: string;
    className?: string;
};

const MotionSection = ({ children, id, className }: MotionSectionProps) => {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

export default MotionSection;
