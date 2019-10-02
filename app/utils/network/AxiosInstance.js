import axios from 'axios'

const instance = axios.create({
    baseURL: 'Urls.baseUrl',
    timeout: 60000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

instance.interceptors.request.use(
    async (config) => {
        /*
        const token = store.getState().authReducer.authToken;
        if (token) {
            // console.log('redux token');
            config.headers.Authorization = token;
        } else {
            // console.log('storage token');
            config.headers.Authorization = await AsyncStorage.getItem(authTokenKey);
        }
        // console.log('config', config)
        return config;
        */
    },
    (error) => {
        console.log('interceptor error ', error)
        return Promise.reject(error);
    }
);

export default instance;