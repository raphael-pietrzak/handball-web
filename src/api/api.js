// import axios from 'axios';

// const API_URL = 'http://localhost:3000';

// export default {
//     register(user) {
//         return axios.post(`${API_URL}/register`, user);
//     },
//     login(credentials) {
//         return axios.post(`${API_URL}/login`, credentials);
//     },
//     getMatches() {
//         return axios.get(`${API_URL}/matches`);
//     },
//     createMatch(match) {
//         return axios.post(`${API_URL}/matches`, match);
//     }
// };


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
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
    }
};