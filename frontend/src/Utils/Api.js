import axios from 'axios';

export const fetchData = async (path) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}${path}`;
        const { data } = await axios.get(url);

        return data;
    } catch (error) {
        return null;
    }
};