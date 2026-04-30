import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SessionStore } from './types';

const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      count: 0,

      increment: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      clearCount: () =>
        set(() => ({
          count: 0,
        })),
    }),
    {
      name: 'SessionStore',
      partialize: (state) => ({
        count: state.count,
      }),
    },
  ),
);

export default useSessionStore;
