import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { userApi } from '../api';
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
        return !!get().token?.access_token;
      },

      setToken: (token: string): void => {
        set(() => ({
          token: {
            access_token: token,
          },
        }));
      },

      loginWithGithub: async (code: string): Promise<void> => {
        const token = await userApi.loginWithGithub(code);
        set(() => ({
          token: {
            access_token: token.access_token,
          },
        }));
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
