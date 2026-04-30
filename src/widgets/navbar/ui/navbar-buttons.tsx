import { GithubIcon, t } from '~/shared';
import { Bell } from 'lucide-react';
import { Button, ButtonWrapper, ProfileImage } from './styles';

const NavbarButtons = () => {
  const handleGithubClick = () => {
    window.open('https://github.com');
  };
  return (
    <ButtonWrapper>
      <Button onClick={handleGithubClick} title={t('navbar:github')}>
        <GithubIcon height='24px' width='24px' />
      </Button>
      <Button title={t('navbar:notification')}>
        <Bell height='24px' width='24px' />
      </Button>
      <ProfileImage src='https://tse2.mm.bing.net/th/id/OIP.n98N2oHzhrYGYd-b6RAGRQHaGN?rs=1&pid=ImgDetMain&o=7&rm=3' />
    </ButtonWrapper>
  );
};

export default NavbarButtons;
