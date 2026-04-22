import { Info } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

export type SidebarItem = {
	name: string;
	href: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const sidebarItems: SidebarItem[] = [
	{
		name: 'tets',
		href: '#',
		icon: Info as ComponentType<SVGProps<SVGSVGElement>>,
	},
];
