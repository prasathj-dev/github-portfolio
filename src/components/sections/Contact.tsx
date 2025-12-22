import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion, type TargetAndTransition, type VariantLabels, type Variants } from "framer-motion";
import MotionSection from "../wrapper/MotionSection";
import { contactLinks } from "@/utils/util";

const Contact = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const socialHover: VariantLabels | TargetAndTransition = { scale: 1.1, y: -2, transition: { type: "spring", stiffness: 300 } };

  return (
    <MotionSection
      id="contact"
      className="relative py-20 bg-linear-to-b from-gray-900/90 to-black/95 text-gray-100"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-800/10 to-purple-800/10 blur-3xl -z-10"></div>

      <motion.h2
        className="text-center mb-16
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
        Contact
        <span className="block mx-auto mt-4 w-24 h-1 bg-linear-to-r from-indigo-500  to-black-900 rounded-full"></span>

      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto px-6 text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="flex items-center justify-center space-x-3 text-lg md:text-xl text-gray-200 hover:text-blue-400 transition-colors cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-blue-500" />
          <span>{contactLinks.mail}</span>
        </motion.p>

        <motion.p className="text-lg md:text-xl text-gray-200" variants={itemVariants}>
          Phone: {contactLinks.mobile}
        </motion.p>

        <motion.p className="text-lg md:text-xl text-gray-200" variants={itemVariants}>
          Location: Helsinki, Finland
        </motion.p>

        <motion.div className="flex justify-center flex-wrap gap-6 mt-6" variants={itemVariants}>
          <motion.a
            href={contactLinks.linkdin}
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
            whileHover={socialHover}
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href={contactLinks.gitgub}
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors"
            whileHover={socialHover}
          >
            <FaGithub /> <span>GitHub</span>
          </motion.a>
        </motion.div>

        <motion.p className="mt-6 text-gray-400 text-sm md:text-base" variants={itemVariants}>
          Languages: English (B2 Professional), Finnish (Basic, actively learning)
        </motion.p>
      </motion.div>
    </MotionSection>
  );
};

export default Contact;
