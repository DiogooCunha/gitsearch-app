export const initialUser = {
	username: '',
	email: '',
};

export type Token = {
	access_token?: string;
	refresh_token?: string;
	expires_in?: number;
};

type UserStoreState = {
	userData: typeof initialUser;
	token: Token | null;
};

type UserStoreActions = {
	isUserLoggedIn: () => boolean;
	setToken: (token: string) => void;
	loginWithGithub: (code: string) => Promise<void>;
};

export type UserStore = UserStoreState & UserStoreActions;

export type UserTodo = {
	userId: string;
	id: string;
	title: string;
	completed: boolean;
};

export type createUserTodoBody = {
	title: string;
	body: string;
	userId: number;
};
