import type { OAuthResponse } from '@react-oauth/github';
import { useUserStore } from '~/entities';
import { toaster } from '~/shared';

export const onAuthSuccess = async (response: OAuthResponse): Promise<void> => {
	try {
		await useUserStore.getState().loginWithGithub(response.code);
		// TODD change typing
	} catch (error: any) {
		toaster({
			title: 'Login',
			message: `${error.message}`
		})
	}
};
