import { instance } from './instance';

const Service = {
    online: () => instance.get('online'),
    featured: () => instance.get('featured'),
}
export default Service;