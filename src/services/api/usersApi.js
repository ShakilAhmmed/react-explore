import axios from "axios"

export const getUsersService = () => {
    return axios.get('https://api.github.com/users');
}

export const getUserReposService = (user) => {
    return axios.get(`https://api.github.com/users/${user}/repos`);
}