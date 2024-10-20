import axiosInstanceService from '@/app/api/axios';
import { microServices } from '@/app/api/axios/microservice';
import { METHOD_TYPES } from '@/constants';

const loginService = (data) => axiosInstanceService(METHOD_TYPES.post, 'user/login', data, {
  server: microServices.SERVICE_URL_1,
  handlerEnabled: false,
});

const signupService = (data) => axiosInstanceService(METHOD_TYPES.post, 'user/signup', data, {
  server: microServices.SERVICE_URL_1,
  handlerEnabled: false,
});

export { loginService, signupService };
