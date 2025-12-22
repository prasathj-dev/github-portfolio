import { motion } from 'framer-motion';
import type { IconType } from 'react-icons/lib';

type SkillCardProps = {
    icon: React.ReactElement<IconType>;
    name: string;
    level: 'strong' | 'familiar';
};

const SkillCard = ({ icon, name, level }: SkillCardProps) => (
    <motion.div
        className={`
      flex flex-col items-center gap-2 p-3 rounded-2xl
      border ${level === 'strong' ? 'border-indigo-900' : 'border-white/10'}
      bg-white/5 backdrop-blur-md
      hover:scale-105 hover:bg-white/10
      transition-all duration-300
    `}
    >
        <div className={`w-12 h-12 flex items-center justify-center ${level === 'strong' ? 'scale-125' : ''}`}>
            {icon}
        </div>
        <span
            className={`text-[9px] text-gray-400 uppercase tracking-widest font-bold text-center ${level === 'strong' ? 'text-white' : ''
                }`}
        >
            {name}
        </span>
    </motion.div>
);

export default SkillCard;
