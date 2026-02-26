import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaCloud,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiJest,
  SiPostman,
  SiMaterialdesign,
  SiDotnet,
  SiJson,
  SiJavascript,
  SiSharp,
  SiNgrx,
  SiPhp,
  SiIonic,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: { icon: React.ComponentType<any>; iconClass: string };
  pos: { top: string; left: string };
  level: 'strong' | 'familiar';
}

export const skills: Skill[] = [
  {
    name: 'React',
    icon: { icon: FaReact, iconClass: 'text-blue-400' },
    pos: { top: '45%', left: '30%' },
    level: 'strong',
  },
  {
    name: 'Angular',
    icon: { icon: FaAngular, iconClass: 'text-red-500' },
    pos: { top: '30%', left: '45%' },
    level: 'strong',
  },
  {
    name: 'React Query / Zustand',
    icon: { icon: SiRedux, iconClass: 'text-purple-500' },
    pos: { top: '20%', left: '10%' },
    level: 'strong',
  },
  {
    name: '.NET Core',
    icon: { icon: SiDotnet, iconClass: 'text-purple-600' },
    pos: { top: '15%', left: '35%' },
    level: 'strong',
  },
  {
    name: 'Node.js',
    icon: { icon: FaNodeJs, iconClass: 'text-green-500' },
    pos: { top: '25%', left: '60%' },
    level: 'strong',
  },
  {
    name: 'JavaScript',
    icon: { icon: SiJavascript, iconClass: 'text-yellow-500' },
    pos: { top: '45%', left: '63%' },
    level: 'strong',
  },
  {
    name: 'TypeScript',
    icon: { icon: SiTypescript, iconClass: 'text-blue-600' },
    pos: { top: '60%', left: '45%' },
    level: 'strong',
  },
  {
    name: 'Redux',
    icon: { icon: SiRedux, iconClass: 'text-purple-500' },
    pos: { top: '10%', left: '50%' },
    level: 'strong',
  },
  {
    name: 'GraphQL',
    icon: { icon: SiGraphql, iconClass: 'text-pink-500' },
    pos: { top: '40%', left: '85%' },
    level: 'familiar',
  },

  {
    name: 'AWS Basics',
    icon: { icon: FaAws, iconClass: 'text-orange-500' },
    pos: { top: '80%', left: '50%' },
    level: 'familiar',
  },
  {
    name: 'Docker',
    icon: { icon: FaDocker, iconClass: 'text-blue-400' },
    pos: { top: '70%', left: '80%' },
    level: 'familiar',
  },
  {
    name: 'Material UI',
    icon: { icon: SiMaterialdesign, iconClass: 'text-blue-500' },
    pos: { top: '70%', left: '60%' },
    level: 'familiar',
  },
  {
    name: 'REST / JWT',
    icon: { icon: FaDatabase, iconClass: 'text-yellow-500' },
    pos: { top: '10%', left: '80%' },
    level: 'strong',
  },
  {
    name: 'MySql/SQL',
    icon: { icon: FaDatabase, iconClass: 'text-yellow-500' },
    pos: { top: '75%', left: '30%' },
    level: 'strong',
  },
  {
    name: 'CI / CD',
    icon: { icon: FaGitAlt, iconClass: 'text-orange-600' },
    pos: { top: '25%', left: '25%' },
    level: 'familiar',
  },
  {
    name: 'Testing',
    icon: { icon: SiJest, iconClass: 'text-red-600' },
    pos: { top: '70%', left: '20%' },
    level: 'strong',
  },
  {
    name: 'C#',
    icon: { icon: SiSharp, iconClass: 'text-purple-500' },
    pos: { top: '45%', left: '15%' },
    level: 'strong',
  },
  {
    name: 'PHP',
    icon: { icon: SiPhp, iconClass: 'text-orange-500' },
    pos: { top: '56%', left: '8%' },
    level: 'familiar',
  },
  {
    name: 'Postman',
    icon: { icon: SiPostman, iconClass: 'text-orange-500' },
    pos: { top: '75%', left: '8%' },
    level: 'strong',
  },
  {
    name: 'JSON',
    icon: { icon: SiJson, iconClass: 'text-blue-400' },
    pos: { top: '80%', left: '70%' },
    level: 'strong',
  },
  {
    name: 'Azure',
    icon: { icon: FaCloud, iconClass: 'text-blue-400' },
    pos: { top: '9%', left: '65%' },
    level: 'familiar',
  },
  {
    name: 'Ngrx',
    icon: { icon: SiNgrx, iconClass: 'text-blue-400' },
    pos: { top: '35%', left: '75%' },
    level: 'strong',
  },
  {
    name: 'Ionic',
    icon: { icon: SiIonic, iconClass: 'text-blue-400' },
    pos: { top: '55%', left: '75%' },
    level: 'strong',
  },
];
