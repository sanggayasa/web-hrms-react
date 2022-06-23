import AuthSession from '../data/authsession';
import AuthenticationsSource from '../data/authentications';

class UpdateRefreshToken{
    async update(){
        try{
            const authSession = new AuthSession();
            const refreshToken = (await authSession.getCookies()).refreshToken;
            const getNewToken = await AuthenticationsSource.updateToken(refreshToken);  
            await authSession.setCookies(getNewToken.data.accessToken, refreshToken);
        }catch(e){
            console.log('refresh token gagal');
        }
    }
    
}

export default UpdateRefreshToken;