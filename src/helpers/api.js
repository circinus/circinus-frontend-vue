import axios from "axios";
import {environment} from "../../config"

export default axios.create({
    baseURL: environment.API.base_url
});
