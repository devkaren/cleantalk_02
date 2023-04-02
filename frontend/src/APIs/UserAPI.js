import { fetchData } from '@utils/Api';

export const getUserInfo = async (filter) => {
    return await fetchData(`?user_data=${filter}`);
};