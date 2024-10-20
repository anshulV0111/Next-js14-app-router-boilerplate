'use server';

import config from '@/config/app.config';

import { revalidatePath } from 'next/cache';

// import { revalidatePath } from 'next/cache';

export async function getProductListAction(page, limit, search = '') {
  let data = null;
  const baseUrl = `${config.apiGateways.BASE_URL_1}products`;
  // const favBaseUrl = `${config.apiGateways.BASE_URL_1}casino/get-favorite-games`;
  // const key = category === 'Favorites' ? 'favoriteGames' : 'casinoGames';
  // const providerParams = provider?.length ? JSON.stringify(provider?.split(',')) : null;

  const offset = page === 1 ? 0 : (page - 1) * limit;

  let url = `${baseUrl}?limit=${limit}&offset=${offset}`;

  if (search.length) {
    url += `&title=${search}`;
  }

  const options = {
    cache: 'no-store',
  };
  // const authToken = cookies().get(TOKEN);

  // if (category === 'Favorites' || authToken) {
  //   options.headers = { Authorization: `AccessToken=${authToken?.value}` };
  // }
  data = await fetch(url, options);

  if (!data?.ok) {
    console.log('err++', data);
    return null;
  }
  const productData = await data.json();
  const filteredData = {
    data: productData,
    // count: casinoData?.data?.[key]?.count,
    count: 200,
  };
  return filteredData;
}

export async function getSingleProduct(id) {
  const data = await fetch(`${config.apiGateways.BASE_URL_1}products/${id}`);
  if (!data?.ok) {
    console.log('error', data);
    return null;
  }
  const productData = await data.json();
  return productData;
}

export async function revalidateAction(path) {
  revalidatePath(path);
}
