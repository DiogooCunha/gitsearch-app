import { type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserStore } from '~/entities';
import { GithubAuth } from '~/features';
import { PATHS } from '~/shared';

const LoginPage = (): ReactElement => {
	const setToken = useUserStore((state) => state.setToken);
	const navigate = useNavigate();

	const handleLogin = () => {
		setToken('hello');
		navigate(PATHS.HOME);
	};

	return (
		<div>
			LoginPage
			<button onClick={handleLogin}>set</button>
			<GithubAuth />
		</div>
	);
};

export default LoginPage;
