import axiosInstanceService from '@/app/api/axios';
import { microServices } from '@/app/api/axios/microservice';
import { METHOD_TYPES } from '@/constants';

export const getCasinoCategoriesService = () => axiosInstanceService(
  METHOD_TYPES.get,
  '/casino/get-categories',
  {},
  {
    server: microServices.SERVICE_URL_1,
  },
);

export const getSiteSettingDataService = () => axiosInstanceService(
  METHOD_TYPES.get,
  '/common/get-settings',
  {},
  {
    server: microServices.SERVICE_URL_1,
  },
);
