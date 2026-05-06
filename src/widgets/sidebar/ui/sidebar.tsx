import { useUserStore } from '~/entities';
import type { ReactElement } from 'react';
import { sidebarItems } from '../model/items';
import SidebarItem from './sidebar-item';
import { Wrapper } from './styles';

const Sidebar = (): ReactElement | null => {
  const isUserLoggedIn = useUserStore((state) => state.isUserLoggedIn());

  if (!isUserLoggedIn) {
    return null;
  }

  return (
    <Wrapper $open={true}>
      {sidebarItems?.map((item, index) => (
        <SidebarItem key={item.name + index} item={item} />
      ))}
    </Wrapper>
  );
};

export default Sidebar;
