import type { ReactElement } from 'react';
import { sidebarItems } from '../model/items';
import { Wrapper } from './styles';
import SidebarItem from './sidebar-item';

const Sidebar = (): ReactElement => {
	return (
		<Wrapper $open={true}>
			{sidebarItems.map((item, index) => (
				<SidebarItem key={item.name + index} item={item} />
			))}
		</Wrapper>
	);
};

export default Sidebar;
