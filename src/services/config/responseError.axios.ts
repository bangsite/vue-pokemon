import type { AxiosError } from "axios";

const onResponseError = (error: AxiosError): Promise<AxiosError> => {

  return Promise.reject(error.response);
};

export { onResponseError };
