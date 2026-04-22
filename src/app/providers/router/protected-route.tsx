import { useUserStore } from '~/entities';
import { PATHS } from '~/shared';
import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
	childElement: ReactElement;
};

const ProtectedRoute = ({
	childElement,
}: ProtectedRouteProps): ReactElement => {
	const isUserLoggedIn = useUserStore((state) => state.isUserLoggedIn());

	if (!isUserLoggedIn) {
		return <Navigate to={PATHS.LOGIN} replace />;
	}

	return childElement;
};

export default ProtectedRoute;
