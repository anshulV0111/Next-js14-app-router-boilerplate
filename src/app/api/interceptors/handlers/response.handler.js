// import { openSuccessToaster } from "../../../helpers/toaster.helpers";
// import { SuccessMessage } from "../../messages/SuccessMessage";

const responseSuccessHandler = (response) => {
  const {
    responseType = 'json',
    // successMessage,
    // loader,
  } = response.config || {};
  if (responseType === 'blob') {
    return { file: response.data, headers: response.headers };
  }
  // Open Success Toaster
  // eslint-disable-next-line no-unused-expressions
  // successMessage &&
  // openSuccessToaster({ message: SuccessMessage. });
  return response;
};

export default responseSuccessHandler;
