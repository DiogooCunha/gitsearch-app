import { Divider } from '~/shared';
import { sidebarItems } from '../model/items';
import { Title, Wrapper } from './styles';

const Sidebar = () => {
  return (
    <Wrapper $open={true}>
      <Title>Sidebar</Title>
      <Divider />
      {sidebarItems?.map((item, index) => (
        <li key={item.name + index}>{item.name}</li>
      ))}
    </Wrapper>
  );
};

export default Sidebar;
