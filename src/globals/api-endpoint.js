import CONFIG from './config';
 
const API_ENDPOINT = {
  AUTHENTICATIONS: `${CONFIG.BASE_URL_API}authentications`,
  USERS: `${CONFIG.BASE_URL_API}users`,
//   DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}`,
};
 
export default API_ENDPOINT;