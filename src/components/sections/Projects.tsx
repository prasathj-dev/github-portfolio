"use client";

import { projects } from "@/data/projects";
import { motion, type Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import MotionSection from "../wrapper/MotionSection";
import { SiIonic } from "react-icons/si";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <MotionSection
            id="project"
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

                Projects
                <span className="block mx-auto mt-4 w-24 h-1 bg-linear-to-r from-indigo-500  to-black-900 rounded-full"></span>

            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projects.map((proj, index) => (


                    <motion.div key={index} variants={cardVariants}>
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            glareEnable={true}
                            glareMaxOpacity={0.2}
                            className="relative group p-6 bg-linear-to-br from-gray-800/70 to-gray-700/50 backdrop-blur-xl rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            {proj.image && (
                                <div className="w-full h-52 sm:h-60 mb-4 rounded-xl overflow-hidden relative">
                                    <img
                                        src={proj.image}
                                        alt={proj.name}
                                        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center text-center p-4">
                                        <h4 className="text-white font-semibold mb-2 text-lg sm:text-xl">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {proj.tech?.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs sm:text-sm text-white px-2 py-1 bg-indigo-500/30 rounded-md backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Project Info */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                {proj.name}
                            </h3>
                            <p className="text-gray-300 mb-4 line-clamp-4">{proj.description}</p>

                            <div className="flex flex-wrap justify-end gap-3 mt-4">
                                {proj.link && (
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
                                    >
                                        <FaEye />
                                        <span className="text-sm font-semibold">View</span>
                                    </a>
                                )}
                                {proj?.github && (
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                    >
                                        <FaGithub />
                                        <span className="text-sm font-semibold">Code</span>
                                    </a>
                                )}
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>
        </MotionSection>
    );
};

export default Projects;
