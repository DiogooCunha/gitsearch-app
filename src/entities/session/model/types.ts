type SessionStoreState = {
  count: number;
};

type SessionStoreActions = {
  increment: () => void;
  clearCount: () => void;
};

export type SessionStore = SessionStoreState & SessionStoreActions;
