// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

declare type Dispatch<A> = (action: A) => ReduxDispatch<A>;

declare type SagaType = Generator<*, *, *>;

type ApiErrorConfigType = {
  transformRequest: {},
  transformResponse: {},
  timeout: number,
  xsrfCookieName: string,
  xsrfHeaderName: string,
  maxContentLength: number,
  headers: {},
  method: string,
  url: string,
  data: {},
  request: {},
};

declare type ApiErrorType = {
  config: ApiErrorConfigType,
  response: {
    data: {
      key?: string,
      message?: string,
      value?: string,
      error_code?: string,
    },
    status: number,
    statusText: string,
    headers: {},
    config: ApiErrorConfigType,
  },
};

declare type RouterType = {
  location: LocationType,
  push: (path: string) => void,
  goBack: () => void,
};

declare type LocationType = {
  action: string,
  basename: string,
  hash: string,
  key: string,
  pathname: string,
  query: {
    [key: string]: string,
  },
  search: string,
  state: Object,
};
