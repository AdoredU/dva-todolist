import request from '../utils/request';

export function initItem() {
  return request('/api/initItem.json');
}
