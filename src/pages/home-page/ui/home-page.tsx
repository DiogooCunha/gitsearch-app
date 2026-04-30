import { toaster, Typography } from '~/shared';

const HomePage = () => {
  return (
    <div>
      Home Page
      <button
        onClick={() => {
          toaster({
            title: 'test',
            message: 'test',
            type: 'success',
          });
        }}
      >
        CLICK
      </button>
      <Typography>Hello</Typography>
    </div>
  );
};

export default HomePage;
