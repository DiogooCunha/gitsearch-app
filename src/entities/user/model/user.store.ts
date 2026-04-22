import { request } from '~/shared';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialUser, type UserStore } from './types';

// Toda entidade, se necessário, deve ter sua própria store,
// estados globais devem ser tratados na sessionStore
const useUserStore = create<UserStore>()(
	// Esse persist faz com que a gente possa guardar estados no storage, e manter entre sessoes
	persist(
		(set, get) => ({
			userData: initialUser,
			token: null,

			isUserLoggedIn: (): boolean => {
				return !!get().token?.accessToken;
			},

			setToken: (token: string): void => {
				set(() => ({
					token: {
						accessToken: token,
					},
				}));
			},

			loginWithGithub: async (code: string): Promise<void> => {
				try {
					const res = await request.post(`/auth/github?code=${code}`);

					set(() => ({
						token: {
							accessToken: res.data.access_token,
						},
					}));
				} catch (error) {
					throw error;
				}
			},
		}),
		// Nessa parte voçês vao botar as propriedades que precisam ser persistidas,
		// NAO sai botando tudo PFVR
		{
			name: 'UserData',
			partialize: (state) => ({
				userData: state.userData,
				token: state.token,
			}),
		},
	),
);

export default useUserStore;
