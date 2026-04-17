import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer, Zoom } from 'react-toastify';

import { GlobalStyles } from '~/shared';

import { AppRouter } from './providers';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ToastContainer transition={Zoom} limit={5} />
				<GlobalStyles />
				<div>
					<AppRouter />
				</div>
			</QueryClientProvider>
		</>
	);
}

export default App;
