import type { ComponentType, SVGProps } from 'react';

import { House, GitPullRequest, FolderOpen, TriangleAlert } from 'lucide-react';
import { PATHS } from '~/shared';

export type SidebarItem = {
	name: string;
	href: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const sidebarItems: SidebarItem[] = [
	{
		name: 'Home',
		href: PATHS.HOME,
		icon: House as ComponentType<SVGProps<SVGSVGElement>>,
	},
	{
		name: 'Pull Request',
		href: '#',
		icon: GitPullRequest as ComponentType<SVGProps<SVGSVGElement>>,
	},
	{
		name: 'Repositories',
		href: '#',
		icon: FolderOpen as ComponentType<SVGProps<SVGSVGElement>>,
	},
	{
		name: 'Issues',
		href: '#',
		icon: TriangleAlert as ComponentType<SVGProps<SVGSVGElement>>,
	},
];
