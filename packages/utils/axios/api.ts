import http from './http';

export const appData = function (params: any): Promise<any> {
  return http.request({
    url: 'http://localhost',
    method: 'POST',
    params
  });
};