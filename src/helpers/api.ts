import axios from 'axios';
import { environment } from '../../environment';

export default axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: environment.SITE.API
});
