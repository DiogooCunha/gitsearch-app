import type { OAuthResponse } from '@react-oauth/github';
import { useUserStore } from '~/entities';

export const onAuthSuccess = async (response: OAuthResponse): Promise<void> => {
	console.log(useUserStore.getState().token);
	console.log(response);

	const loginWithGithub = useUserStore.getState().loginWithGithub;
	await loginWithGithub(response.code);
};
