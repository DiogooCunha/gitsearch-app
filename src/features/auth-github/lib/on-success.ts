import type { OAuthResponse } from '@react-oauth/github';

import { useUserStore } from '~/entities';

export const onAuthSuccess = (response: OAuthResponse): void => {
	console.log(useUserStore.getState().token);
	console.log(response);
};
