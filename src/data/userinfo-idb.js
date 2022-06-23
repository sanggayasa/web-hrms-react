import { openDB } from 'idb';
import CONFIG from '../globals/config';
 
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const UserInfo = {
    async getUserInfo(id) {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAllMovies() {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async putUserInfo(userInfo) {
      return (await dbPromise).put(OBJECT_STORE_NAME, userInfo );
    },
    async deleteMovie(id) {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default UserInfo;