import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GlobalStyles } from '~/shared';

import { AppRouter } from './providers';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<div>
					<AppRouter />
				</div>
			</QueryClientProvider>
		</>
	);
}

export default App;
