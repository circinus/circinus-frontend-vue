import axios from 'axios';

export default axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: process.env.VUE_APP_API
});
