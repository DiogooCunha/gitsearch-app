import { assert } from '@diogoocunha/asser-ts';
import { request } from '~/shared';
import type { createUserTodoBody, UserTodo } from '../model';
import type { Token } from '../model/types';

export const userApi = {
	fetchFakeUser: async (id: string): Promise<UserTodo> => {
		assert.isString(id, 'id should be a string');

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
		assert.isObject(body, 'body should be an object');

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
		assert.isString(code, 'code should be a string');

		const res = await request.post(`/auth/github?code=${code}`);
		return res.data;
	},
};
