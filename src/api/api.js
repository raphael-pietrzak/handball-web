import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default {
    getMatches() {
        return api.get('/matches');
    },
    login(credentials) {
        return api.post('/login', credentials);
    },
    register(user) {
        return api.post('/register', user);
    },
    getProfile(token) {
        return api.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
};