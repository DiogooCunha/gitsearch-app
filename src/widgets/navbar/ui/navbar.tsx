import { Box, Divider, Typography } from '~/shared';
import NavbarButtons from './navbar-buttons';

const Navbar = () => {
  return (
    <>
      <Box
        display='flex'
        height='64px'
        justifyContent='space-between'
        margin='0 38px'
        alignItems='center'
      >
        <Typography tag='h3'>GitSearch</Typography>
        <NavbarButtons />
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
