import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUserStore } from '~/entities';
import { Box, GlobalStyles } from '~/shared';
import { Navbar, Sidebar } from '~/widgets';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppRouter } from './providers';

const queryClient = new QueryClient();

function App() {
  const isUserLoggedIn = useUserStore((state) => state.isUserLoggedIn());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer transition={Zoom} limit={5} />
        <GlobalStyles />
        <Navbar />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Sidebar />

          <Box
            sx={{
              flexGrow: 1,
              width: isUserLoggedIn ? 'calc(100dvw - 300px)' : '100dvw',
            }}
          >
            <AppRouter />
          </Box>
        </Box>
      </QueryClientProvider>
    </>
  );
}

export default App;
