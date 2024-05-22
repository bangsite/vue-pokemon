import type { InternalAxiosRequestConfig } from "axios";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {

  const { headers } = config;
  const token = localStorage.getItem("token");

  if (token) headers.Authorization = token;

  // if (i18n.global.locale) {
  //   // headers.locale = i18n.global.locale.value;
  //   headers["Accept-Language"] = i18n.global.locale;
  // }

  // if (config?.data instanceof FormData) {
  //   headers["Content-Type"] = "multipart/form-data";
  // } else {
  //   headers["Content-Type"] = "application/json";
  // }

  return config;
};

export { onRequest };
