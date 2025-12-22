import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '../ui/shadcn-io/background-beams-with-collision';
import { skills } from '@/data/skills';
import SkillCard from '../SkillCard';
import MotionSection from '../wrapper/MotionSection';

const Skills = () => {
    return (
        <MotionSection
            id="skills"
            className="relative py-20 bg-gradient-to-b from-gray-900/90 to-black/95 text-gray-100"
        >
            <BackgroundBeamsWithCollision>
                <div className="relative w-full min-h-[800px]">

                    {/* ---- MOBILE GRID ----- */}
                    <div className="sm:hidden pt-10">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-white">Core Skills</h2>
                            <div className="w-20 h-1 bg-indigo-500 mx-auto mt-2 rounded-full" />
                        </div>
                        <div className="grid grid-cols-3 gap-5 px-4 mt-8">
                            {skills.map((skill) => (
                                <SkillCard key={skill.name} icon={<skill.icon.icon className={`text-3xl ${skill.icon.iconClass}`} />} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>

                    {/* ----- DESKTOP TITLE ----- */}
                    <motion.div
                        className="hidden sm:flex absolute inset-0 z-50 items-center justify-center pointer-events-none"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <div className="text-center">
                            <h2 className="text-5xl font-extrabold text-white mb-2">Core Skills</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
                        </div>
                    </motion.div>

                    {/* ----- DESKTOP GALAXY ----- */}
                    <div className="hidden sm:block absolute inset-0 w-full h-full">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="absolute"
                                style={{ top: skill.pos.top, left: skill.pos.left }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.08, type: 'spring' }}
                            >
                                <motion.div
                                    animate={{ y: [0, index % 2 === 0 ? -12 : 12, 0] }}
                                    transition={{
                                        duration: 4 + Math.random() * 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <SkillCard icon={<skill.icon.icon className={`text-3xl ${skill.icon.iconClass}`} />} name={skill.name} level={skill.level} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </BackgroundBeamsWithCollision>
        </MotionSection>
    );
};

export default Skills;
