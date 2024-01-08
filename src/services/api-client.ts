import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6cb9184206a749048e4fc2111da680a6'
    }
});