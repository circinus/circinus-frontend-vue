import axios from "axios";

export default axios.create({
    baseURL: 'https://ares.projectmeteor.online/api/en/',
});