"use client";

import { experiences } from "../../data/experience";
import { motion } from "framer-motion";
import { FiCircle } from "react-icons/fi";
import { Particles } from "../ui/shadcn-io/particles";
import MotionSection from "../wrapper/MotionSection";

const Experience = () => {
    return (
        <MotionSection
            id="experiences"
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
                Experiences
                <span className="block mx-auto mt-4 w-24 h-1 bg-linear-to-r from-indigo-500  to-black-900 rounded-full"></span>
            </motion.h2>


            <div className="relative max-w-6xl mx-auto px-4">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700" />

                <div className="space-y-16 md:space-y-24">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative md:flex md:items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                }`}
                        >
                            <motion.div
                                className="absolute md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-full shadow-lg z-10 flex items-center justify-center"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <FiCircle className="text-gray-900 text-sm" />
                            </motion.div>

                            <motion.div
                                className={`mt-8 md:mt-0 md:w-1/2 px-6 py-6 bg-linear-to-br from-gray-800/60 to-gray-700/30 backdrop-blur-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 text-white ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                                    }`}
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold">{exp.title}</h3>
                                <p className="text-gray-300 mt-1 text-sm sm:text-base">
                                    {exp.company} {exp.period && <span>| {exp.period}</span>}{" "}
                                    {exp.location && <span>| {exp.location}</span>}
                                </p>
                                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-200 text-sm sm:text-base">
                                    {exp.achievements.map((ach, i) => (
                                        <li key={i}>{ach}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <Particles
                    className="absolute inset-0"
                    quantity={100}
                    ease={80}
                    staticity={50}
                    color="#ffffff"
                    size={0.8}
                />
            </div>
        </MotionSection>
    );
};

export default Experience;
