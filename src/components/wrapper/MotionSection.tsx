import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = MotionProps & {
    children: ReactNode;
    id?: string;
    className?: string;
};

const MotionSection = ({ children, id, className, ...motionProps }: MotionSectionProps) => {
    return (
        <motion.section
            //@ts-ignore
            id={id}
            className={className}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...motionProps} // allows you to override if needed
        >
            {children}
        </motion.section>
    );
};

export default MotionSection;
