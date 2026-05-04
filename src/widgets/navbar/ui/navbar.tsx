import { useUserStore } from '~/entities';
import { Box, Divider, Typography } from '~/shared';
import type { ReactElement } from 'react';
import NavbarButtons from './navbar-buttons';

const Navbar = (): ReactElement | null => {
  const isUserLoggedIn = useUserStore((state) => state.isUserLoggedIn());

  if (!isUserLoggedIn) {
    return null;
  }

  return (
    <>
      <Box
        display='flex'
        height='64px'
        margin='0 38px'
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography tag='h3'>GitSearch</Typography>
        <NavbarButtons />
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
