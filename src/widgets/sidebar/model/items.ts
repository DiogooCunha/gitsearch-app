import { PATHS } from '~/shared';
import { House } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

export type SidebarItemType = {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const sidebarItems: SidebarItemType[] = [
  {
    name: 'home',
    href: PATHS.HOME,
    icon: House as ComponentType<SVGProps<SVGSVGElement>>,
  },
  // Adicionar as futuras páginas aqui
];
