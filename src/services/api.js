import axios from 'axios';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.registerInterceptWithStore = store => {
  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        store.dispatch(signOut());
      }
    }
  );
};

export default api;
