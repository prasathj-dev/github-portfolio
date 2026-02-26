import { Typewriter } from 'react-simple-typewriter';
import { HeroGeometric } from '../ui/shadcn-io/shape-landing-hero';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MotionSection from '../wrapper/MotionSection';
import { contactLinks } from '@/utils/util';
import type { SocialLink } from '@/types/socialLink';



const socialLinks: SocialLink[] = [
    {
        icon: <FaLinkedin />,
        href: contactLinks.linkdin,
        color: 'text-blue-500',
        hover: 'hover:text-blue-400',
        target: '_blank'
    },
    {
        icon: <FaGithub />,
        href: contactLinks.gitgub,
        color: 'text-gray-300',
        hover: 'hover:text-gray-100',
        target: '_blank'
    },
    {
        icon: <FaEnvelope />,
        href: `mailto:${contactLinks.mail}`,
        color: 'text-pink-500',
        hover: 'hover:text-pink-400',
        target: '_blank'
    },
    {
        icon: <FaPhone />,
        href: `tel:${contactLinks.mobile}`,
        color: 'text-green-500',
        hover: 'hover:text-green-400',
    }
];
const description = "Senior Full‑Stack Engineer with 5+ years of experience delivering large‑scale, customer‑facing applications across Europe, Asia, and Australia. Strong expertise in React (v17+), Angular with NgRx, .NET/.NET Core ,Node.js, and TypeScript, with proven success architecting scalable UIs and secure APIs. Skilled in React Query, Zustand, performance optimization, and expanding into Next.js, Vue, GraphQL, and modern frontend architectures. Experienced in Azure cloud services, CI/CD pipelines, Docker, Kubernetes, and observability practices. Proven leader in mentoring engineers and driving technical projects."


const Hero = () => {
    return (
        <MotionSection
            id="hero" className="relative bg-gray-900 min-h-screen">
            <HeroGeometric
                badge="Full work rights in Finland | Immediate start"
                title1="Prasath Jeyabaskaran"
                title2={
                    <span>
                        <Typewriter
                            words={['Senior Full-Stack', 'Frontend Engineer']}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                            loop={true}
                        />
                    </span>
                }
                description={description}
                className="bg-gray-900 relative min-h-screen"
            />

            <motion.div
                className="
                            absolute
                            bottom-6 left-1/2 -translate-x-1/2
                            flex flex-row space-x-6
                            z-20

                            md:bottom-auto
                            md:top-1/2 md:right-6 md:left-auto
                            md:-translate-y-1/2
                            md:translate-x-0
                            md:flex-col md:space-y-6 md:space-x-0
                    "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {socialLinks.map((link, index) => (
                    <motion.a
                        target={link.target}
                        key={index}
                        href={link.href}
                        className={`${link.color} ${link.hover} transition-colors text-2xl`}
                        whileHover={{ scale: 1.5, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="social-link"
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </motion.div>

        </MotionSection>
    );
};

export default Hero;
