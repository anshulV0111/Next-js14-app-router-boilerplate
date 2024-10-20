import axiosInstanceService from '@/app/api/axios';
import { microServices } from '@/app/api/axios/microservice';
import { METHOD_TYPES } from '@/constants';

export const postDefaultCurrencyService = (data) => axiosInstanceService(METHOD_TYPES.post, '/user/wallet/set-default', data, {
  server: microServices.SERVICE_URL_1,
  // loader: LOADER_HANDLER_TYPES.submit,
});
