import type { ReactElement } from 'react';
import type { SidebarItemType } from '../model/items';
import { Li, NavLink } from './styles';

type SidebarItemProps = {
  item: SidebarItemType;
};

const SidebarItem = ({ item }: SidebarItemProps): ReactElement => {
  return (
    <Li>
      <NavLink to={item.href}>
        <item.icon width={20} height={20} />
        {item?.name}
      </NavLink>
    </Li>
  );
};

export default SidebarItem;
