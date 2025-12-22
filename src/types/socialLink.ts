import type { ReactNode } from 'react';

export type SocialLink = {
  icon: ReactNode;
  href: string;
  color?: string;
  hover?: string;
  target?: '_blank' | '_self';
};
