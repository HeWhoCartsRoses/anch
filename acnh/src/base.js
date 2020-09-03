import axios from 'axios';
export const base = () => {
    return axios.create({
        baseURL: 'http://acnhapi.com/v1/'
    });
};
export default base;