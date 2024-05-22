import type { AxiosError } from "axios";

const onRequestError = (error: Error | AxiosError): Promise<AxiosError> => {

  return Promise.reject(error);
};

export { onRequestError };
