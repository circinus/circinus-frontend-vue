import axios from "axios";

export default axios.create({
    baseURL: 'http://api.ares.circinus.data/api/en',
});