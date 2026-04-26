import type { ComponentType, SVGProps } from 'react';

import { House, GitPullRequest, FolderOpen, TriangleAlert } from 'lucide-react';
import { PATHS } from '~/shared';

export type SidebarItemType = {
	name: string;
	href: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const sidebarItems: SidebarItemType[] = [
	{
		name: 'Home',
		href: PATHS.HOME,
		icon: House,
	},
	{
		name: 'Pull Request',
		href: '#',
		icon: GitPullRequest,
	},
	{
		name: 'Repositories',
		href: '#',
		icon: FolderOpen,
	},
	{
		name: 'Issues',
		href: '#',
		icon: TriangleAlert,
	},
];
