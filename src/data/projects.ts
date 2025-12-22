import wastemPng from '@/assets/images/wastemanagement.png';
import portfolio from '@/assets/images/portfolio.png';
import ecom from '@/assets/images/e-commerce.png';
import random from '@/assets/images/random.png';
import type { Project } from '@/types/project';
import { contactLinks } from '@/utils/util';

export const projects: Project[] = [
  {
    name: 'React Corporate E-commerce Platform',
    description:
      'Contributed to the frontend development of a large-scale e-commerce platform. Implemented React components, responsive UI, and integrated REST APIs for product catalog and shopping cart. Worked on secure checkout and authentication features, collaborating with a team of developers.',
    link: '',
    github: '',
    image: random,
    tech: [
      'React 16',
      '.NodeJs',
      'TypeScript',
      'SCSS',
      'JWT',
      'React-Query',
      'Zustand',
      'Node.js',
      'Express',
      'MongoDB',
    ],
  },
  {
    name: 'Waste Management',
    description:
      'Enterprise-level waste management and clean-up booking system used by Australian local councils. Enables residents to schedule waste collection services, manage bookings, and authenticate users securely. Built with a scalable Angular frontend and .NET backend, featuring role-based access, JWT authentication, and integration with third-party services.',
    link: '',
    github: '',
    image: wastemPng,
    tech: ['Angular 16', '.Net', 'TypeScript', 'SCSS', 'JWT', 'Strip', 'SQL'],
  },
  {
    name: 'React E-commerce Platform - sample',
    description:
      'Full-stack e-commerce application with Node.js backend, React frontend, and integrated payment system.',
    image: ecom,
    github: `${contactLinks.gitgub}/e-commerce`,

    tech: [
      'React 19',
      'Tailwind CSS ',
      'TypeScript',
      'React-Query',
      'Zustand',
      'Node.js',
      'Express',
      'MongoDB',
    ],
  },
  {
    name: 'Banking Dashboard',
    description:
      'Maintained and improved React-based banking dashboards using Redux and Material UI. Optimized UI components and workflows, resulting in a 10% increase in customer satisfaction scores.',
    image: random,
    tech: ['React', 'Redux', 'Material UI', 'TypeScript'],
  },
  {
    name: 'Pharmacy Management App',
    description:
      'Contributed to Angular + .NET Core pharmacy application with NgRx. Improved prescription processing workflows, reducing processing time by 30%. Implemented secure forms and interactive dashboards for pharmacy staff.',
    image: random,
    tech: ['Angular', '.NET Core', 'NgRx', 'TypeScript', 'SCSS'],
  },
  {
    name: 'Task Management App',
    description:
      'Contributed a productivity app with task management, drag-and-drop functionality, and user authentication.',
    image: random,
    tech: ['Angular 16', 'TypeScript', 'NgRx', 'SCSS', '.Net'],
  },

  {
    name: 'Portfolio Website',
    description:
      'A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion for smooth animations.',
    link: `#`,
    github: `${contactLinks.gitgub}/github-portfolio`,
    image: portfolio,
    tech: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vite'],
  },
];
