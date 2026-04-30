import { Box, Divider, Typography } from '~/shared';
import NavbarButtons from './navbar-buttons';

const Navbar = () => {
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
