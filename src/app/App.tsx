import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from '~/shared';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppRouter } from './providers';
import { Sidebar } from '~widgets';
import { AppLayout, MainContent } from '../shared/ui/layout/layout';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ToastContainer transition={Zoom} limit={5} />
				<GlobalStyles />
				<AppLayout>
					<Sidebar />
					<MainContent>
						<AppRouter />
					</MainContent>
				</AppLayout>
			</QueryClientProvider>
		</>
	);
}

export default App;
