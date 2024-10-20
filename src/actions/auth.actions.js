'use server';

import { Buffer } from 'buffer';
import { signIn } from '@/helpers/cookie.helpers';
import { loginService, signupService } from '@/services/auth.service';
import config from '@/config/app.config';
import { postDefaultCurrencyService } from '@/services/gameSetting.service';
import { redirect } from 'next/navigation';
import ErrorMessage from '@/app/api/messages/errorMessages';
import { CURRENT_LAYOUT } from '@/constants';
import { cookies } from 'next/headers';
import { loginUserSchema, signupSchema } from '../form/schemas/auth.schema';
import { errorHandler } from './helpers/error.handler';

export async function loginUserAction(prevState, formData) {
  const layout = cookies().get(CURRENT_LAYOUT);

  const validatedFields = loginUserSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      apiErrors: null,
      message: 'Missing Fields. Failed to Register.',
    };
  }
  let shouldRedirect = false;

  try {
    const responseData = await loginService({
      email: validatedFields.data?.email,
      password: Buffer.from(validatedFields.data?.password).toString('base64'),
    });
    const { data: resultData } = responseData;

    if (resultData.data?.accessToken) {
      signIn({
        authToken: resultData.data?.accessToken,
        res: resultData?.data?.user,
      });
      shouldRedirect = true;
    }
  } catch (err) {
    console.log('errors ++', err);
    return {
      ...prevState,
      apiErrors: ErrorMessage[err?.errors?.[0]?.description],
      data: null,
      zodErrors: null,
      message: 'Failed to Register.',
    };
  }
  if (shouldRedirect) {
    if (layout?.value === '/layout2') {
      return {
        ...prevState,
        data: null,
        zodErrors: null,
        apiErrors: '',
        message: 'Successfull',
      };
    }
    redirect(layout?.value || '/layout1');
  }

  return {
    ...prevState,
    data: null,
    zodErrors: null,
    apiErrors: '',
    message: '',
  };
}

export async function signupUserAction(prevState, formData) {
  const validatedFields = signupSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    dateOfBirth: formData.get('dateOfBirth'),
    gender: formData.get('gender'),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      success: false,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: 'Missing Fields. Failed to Register.',
    };
  }
  let shouldRedirect = false;

  try {
    const responseData = await signupService(validatedFields.data);
    shouldRedirect = true;
    console.log('Signup Successful: ', responseData);
  } catch (err) {
    console.log('errors ++', err);
    return {
      ...prevState,
      success: false,
      apiErrors: ErrorMessage[err?.errors?.[0]?.description],
      data: null,
      zodErrors: null,
      message: 'Failed to Register.',
    };
  }

  if (shouldRedirect) redirect('/');
  return {
    ...prevState,
    data: null,
    zodErrors: null,
    apiErrors: '',
    message: '',
  };
}

export default async function getUserDataAction(authToken) {
  const data = await fetch(`${config.apiGateways.BASE_URL_1}user/get-user`, {
    headers: { Authorization: `AccessToken=${authToken}` },
  });
  if (!data?.ok) {
    console.log('err++++', data);
    errorHandler(data);
    return null;
  }
  const userData = await data.json();
  if (userData.data) return JSON.stringify(userData);
  return null;
}

export async function postDefaultCurrencyAction(data) {
  try {
    const res = await postDefaultCurrencyService(data);
    return JSON.stringify(res?.data);
  } catch (error) {
    console.log('error', error);
    return null;
  }
}
