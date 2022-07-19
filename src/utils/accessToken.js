/* eslint-disable new-parens */
import UpdateRefreshToken from "./refreshToken";
import AuthSession from "../data/authsession";

class accessToken{
    static async getToken(){
        const checkToken = new UpdateRefreshToken;
        await checkToken.update();
        const authSession = new AuthSession;
        const getCookies = await authSession.getCookies();
        const getSession = await authSession.getSession();
        const getNewToken = getCookies.accessToken ? getCookies : getSession ;
        const accessToken = (getNewToken).accessToken;
        return accessToken;
    }
} 

export default accessToken;