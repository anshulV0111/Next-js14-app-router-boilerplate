import axiosInstanceService from '@/app/api/axios';
import { microServices } from '@/app/api/axios/microservice';
import { METHOD_TYPES } from '@/constants';

const updateProfileDetailsService = (data) => axiosInstanceService(METHOD_TYPES.post, 'user/update', data, {
  server: microServices.SERVICE_URL_1,
});

export { updateProfileDetailsService };
