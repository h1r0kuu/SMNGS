import axios from 'axios';

axios.interceptors.request.use((config) => {
    return config
});

export { axios };
