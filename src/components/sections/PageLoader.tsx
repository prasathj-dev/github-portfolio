// components/PageLoader.tsx
import { motion, type Variants } from "framer-motion";

const loaderVariants: Variants = {
    rotate: {
        rotate: [0, 360],
        transition: {
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
        },
    },
    fade: {
        opacity: [0.3, 1, 0.3],
        transition: {
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
        },
    },
};

const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
            <motion.div
                className="text-6xl sm:text-8xl text-indigo-500 font-bold"
                variants={loaderVariants}
                animate="rotate"
            >
                &#123;&#125;
            </motion.div>

            {/* Animated Dots */}
            <div className="flex mt-6 space-x-2">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="block w-3 h-3 rounded-full bg-indigo-500"
                        variants={loaderVariants}
                        animate="fade"
                        transition={{ delay: i * 0.2 }}
                    />
                ))}
            </div>

            <p className="mt-6 text-gray-400 text-sm sm:text-base tracking-widest">
                Loading portfolio...
            </p>
        </div>
    );
};

export default PageLoader;
