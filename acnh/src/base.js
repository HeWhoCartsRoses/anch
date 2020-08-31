import axios from 'axios';
export const auth = () => {
    return axios.create({
        baseURL: 'http://acnhapi.com/v1/'
    });
};
export default auth;