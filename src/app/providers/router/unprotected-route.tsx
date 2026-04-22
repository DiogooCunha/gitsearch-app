import { useUserStore } from '~/entities';
import { PATHS } from '~/shared';
import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type UnprotectedRouteProps = {
	childElement: ReactElement;
};

const UnprotectedRoute = ({ childElement }: UnprotectedRouteProps) => {
	const isUserLoggedIn = useUserStore((state) => state.isUserLoggedIn());
	if (isUserLoggedIn) {
		return <Navigate to={PATHS.HOME} replace />;
	}

	return childElement;
};

export default UnprotectedRoute;
