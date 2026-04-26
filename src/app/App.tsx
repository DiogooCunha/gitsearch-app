import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles, PATHS } from '~/shared';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppRouter } from './providers';
import { Sidebar } from '~widgets';
import { AppLayout, MainContent } from '../shared/ui/layout/layout';
import { useLocation } from 'react-router-dom';

const queryClient = new QueryClient();
// Filtra todas as rotas protegidas, para colocar sidebar somente nelas
const PRIVATE_ROUTES = Object.values(PATHS).filter(
    path => path !== PATHS.LOGIN && path !== PATHS.NOTFOUND
) as string[];

function AppContent() {
    const { pathname } = useLocation();
    const hasSidebar = PRIVATE_ROUTES.includes(pathname);

    return (
        <AppLayout>
            {hasSidebar && <Sidebar />}
            <MainContent $hasSidebar={hasSidebar}>
                <AppRouter />
            </MainContent>
        </AppLayout>
    );
}


function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ToastContainer transition={Zoom} limit={5} />
				<GlobalStyles />
				<AppContent />
			</QueryClientProvider>
		</>
	);
}

export default App;
