import { useState, type ReactElement } from 'react';
import { sidebarItems } from '../model/items';
import { Wrapper } from './styles';
import SidebarItem from './sidebar-item';

const Sidebar = (): ReactElement => {
	const [open, setOpen] = useState(true)
	return (
		<Wrapper $open={open}>
			{sidebarItems.map((item, index) => (
				<SidebarItem key={item.name + index} item={item} />
			))}
		</Wrapper>
	);
};

export default Sidebar;
