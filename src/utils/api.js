import { API_END_POINT, API_KEY } from './constant';

const makeQueryString = (params) => {
  return `&${Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')}`;
};

export const request = async (params) => {
  return await fetch(
    `${API_END_POINT}?apikey=${API_KEY}${makeQueryString(params)}`,
  ).then((res) => res.json());
};
