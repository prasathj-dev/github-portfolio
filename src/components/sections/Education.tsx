import { educations } from "@/data/educations";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import MotionSection from "../wrapper/MotionSection";

const Education = () => {
    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            filter: "blur(4px)",
        }),
        show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
    };

    return (
        <MotionSection
            id="education"
            className="relative py-20 bg-linear-to-b from-gray-900/90 to-black/95 text-gray-100"
        >
            <motion.h2
                className="
                        text-center mb-16
                        text-4xl sm:text-5xl
                        font-extrabold tracking-wide
                        bg-linear-to-r  via-white/90 from-indigo-500  to-black-900 
                        bg-clip-text text-transparent
                    "
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Education
                <span className="block mx-auto mt-4 w-24 h-1 bg-linear-to-r from-indigo-500  to-black-900 rounded-full"></span>

            </motion.h2>
            <div className="relative max-w-5xl mx-auto px-4">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    {educations.map((edu, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            className={`relative md:flex md:items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                }`}
                            whileHover={{ rotate: 2, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <motion.div
                                className="absolute md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-full shadow-lg z-10 flex items-center justify-center"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: index * 0.2 }}
                            >
                                <FaGraduationCap className="text-white text-sm" />
                            </motion.div>

                            <div
                                className={`mt-8 md:mt-0 md:w-1/2 px-6 py-6 bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl text-white ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                                    }`}
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold">{edu.degree}</h3>
                                <p className="text-gray-300 mt-1 text-sm sm:text-base">{edu.institution}</p>
                                {edu.period && <p className="text-gray-400 mt-1 text-sm sm:text-base">{edu.period}</p>}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </MotionSection>
    );
};

export default Education;
