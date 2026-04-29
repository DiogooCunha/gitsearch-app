import { request } from '~/shared';
import type { createUserTodoBody, UserTodo } from '../model';
import type { Token } from '../model/types';

export const userApi = {
	fetchFakeUser: async (id: string): Promise<UserTodo> => {
		try {
			const res = await request.get(
				`https://jsonplaceholder.typicode.com/todos/${id}`,
			);
			return res.data;
		} catch {
			throw new Error('erro na api');
		}
	},

	createUserTodo: async (body: createUserTodoBody): Promise<UserTodo> => {
		try {
			const res = await request.post(
				`https://jsonplaceholder.typicode.com/posts`,
				body,
			);
			return res.data;
		} catch {
			throw new Error('Errrororr');
		}
	},

	loginWithGithub: async (code: string): Promise<Token> => {
		const res = await request.post(`/auth/github?code=${code}`);
		return res.data;
	},
};
