import { useQuery } from '@tanstack/react-query';
import { userApi } from '../api';

// useQuery é pra request que BUSCAM data
// GET
export const useFetchFakeUser = (id: string) => {
	return useQuery({
		queryKey: ['fake-user', id],
		queryFn: () => userApi.fetchFakeUser(id),
	});
};
