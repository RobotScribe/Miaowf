// @flow

import axios, { type AxiosXHRConfig } from 'axios';

export function request(url: string, options: AxiosXHRConfig<*, *>) {
  // $FlowFixMe I cannot figure out how to make flow work here
  return axios.request(url, options);
}
