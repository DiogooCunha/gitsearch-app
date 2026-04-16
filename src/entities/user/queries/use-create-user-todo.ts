import type { createUserTodoBody } from '../model';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userApi } from '../api';

export const useCreateUserTodo = (userTodo: createUserTodoBody) => {
	const queryClient = useQueryClient();

	// useMutation é pra requests que MODIFICAM data
	// POST, PATCH, DELETE, PUT
	return useMutation({
		mutationFn: () => userApi.createUserTodo(userTodo),
		// bota isso quando tu tem um outro request que chama um dado
		// e essa mutation altera os dados que esse request chama,
		//
		// isso faz com que o outro request seja chamado novamente
		// com os novos dados
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['fake-user'] });
		},
	});
};
