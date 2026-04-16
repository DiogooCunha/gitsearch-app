import { type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, LoginPage } from '~/pages';
import { PATHS } from '~/shared';

import ProtectedRoute from './protected-route';
import UnprotectedRoute from './unprotected-route';

const AppRouter = (): ReactElement => {
	return (
		<Routes>
			<Route
				path={PATHS.HOME}
				element={<ProtectedRoute childElement={<HomePage />} />}
			/>
			<Route
				path={PATHS.LOGIN}
				element={<UnprotectedRoute childElement={<LoginPage />} />}
			/>
		</Routes>
	);
};

export default AppRouter;
