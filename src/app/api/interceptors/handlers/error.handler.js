// import { openErrorToaster } from '../../../helpers/toaster.helpers'

import { signOut } from '@/helpers/cookie.helpers';

const errorHandler = (error) => {
  if (error?.response?.status === 500) {
    // Snackbar Internal Server Error
    // openErrorToaster({
    //   message: 'Internal Server error'
    // })
    // store.dispatch(stopLoader(error.response.config.loader))
    return Promise.reject(error?.response?.data?.errors);
  } if (error?.response?.status === 401) {
    // Snackbar UnAuthed
    // openErrorToaster({
    //   message:
    //     (error.response.data &&
    //       error.response.data?.errors &&
    //       error.response.data?.errors[0]?.description) ||
    //     (error.response.data && error.response.data?.non_field_errors
    //  && error.response.data?.non_field_errors[0]) ||
    //     'Invalid credentials'
    // })
    signOut();
    // store.dispatch(stopLoader(error.response.config.loader))
    return Promise.reject(error?.response?.data);
  } if (error?.response?.status === 404) {
    // Snackbar UnAuthed
    // openErrorToaster({
    //   message:
    //  error?.response?.data?.error || error?.response?.data?.message || 'Endpoint Not found',
    // })
    // store.dispatch(stopLoader(error.response.config.loader))
    return null;
  } if (error?.response?.status === 403) {
    // window.location.href = '/'
    signOut();
    // store.dispatch(stopLoader(error.response.config.loader))
    return null;
  } if (error?.response?.config?.loader) {
    // Other errors
    // store.dispatch(stopLoader(error.response.config.loader))
  }
  // Open Error Toaster
  // const errorMessage = (error.response.data
  //     && error.response.data?.errors
  //     && error.response.data?.errors[0]?.description)
  //   || (error.response.data && error.response.data?.error)
  //   || 'Internal Server error';
  // openErrorToaster({ message: errorMessage })
  return Promise.reject(error?.response?.data);
};

export default errorHandler;
