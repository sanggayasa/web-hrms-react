/* eslint-disable new-parens */
import UpdateRefreshToken from "./refreshToken";
import AuthSession from "../data/authsession";

class accessToken{
    static async getToken(){
        const checkToken = new UpdateRefreshToken;
        await checkToken.update();
        const authSession = new AuthSession;
        const accessToken = (await authSession.getCookies()).accessToken;
        return accessToken;
    }
} 

export default accessToken;