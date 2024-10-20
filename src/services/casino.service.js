import axiosInstanceService from '@/app/api/axios';
import { microServices } from '@/app/api/axios/microservice';
import SuccessMessage from '@/app/api/messages/SuccessMessage';
import { METHOD_TYPES } from '@/constants';

export const getCasinoGamesService = (data) => axiosInstanceService(METHOD_TYPES.get, '/products', {}, {
  server: microServices.SERVICE_URL_1,
  handlerEnabled: false,
  params: data,
  successMessage: SuccessMessage.login,
});

export const getGameDataServices = (data) => axiosInstanceService(METHOD_TYPES.post, '/casino/init-game', data, {
  server: microServices.SERVICE_URL_1,
  handlerEnabled: true,
});

export const addFavouriteGameService = (data) => axiosInstanceService(METHOD_TYPES.post, '/casino/toggle-favorite-game', data);
