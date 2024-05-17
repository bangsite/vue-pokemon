import type { AxiosResponse } from "axios";
import {onLoading} from "@/composables/useLoading";
// import { showNotifySuccess } from "@/services/config/notify.axios";

const onResponse = (response: AxiosResponse): AxiosResponse => {
  onLoading("end");
  // showNotifySuccess(response);

  return response;
};

export { onResponse };
