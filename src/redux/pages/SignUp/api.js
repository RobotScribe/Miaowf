// @flow

import config from 'utils/config';
import { request } from 'utils/request';

export function requestSignUp(data: SubmitDataType) {
  const requestURL = `${config.MIAOWF_PROFILES_API}/sign-up`;

  return request(requestURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: {
      ...data,
      first_name: data.firstName,
      last_name: data.lastName,
    },
  });
}
