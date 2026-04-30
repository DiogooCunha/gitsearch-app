import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from '~/shared';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppRouter } from './providers';
import { Navbar } from '~widgets';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ToastContainer transition={Zoom} limit={5} />
				<GlobalStyles />
				<Navbar />
				<div>
					<AppRouter />
				</div>
			</QueryClientProvider>
		</>
	);
}

export default App;
