import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const deleteLeague = async (id) => {
    try {
        await api.delete(`/leagues/${id}`);
    } catch (error) {
        throw error;
    }
};

export default api;