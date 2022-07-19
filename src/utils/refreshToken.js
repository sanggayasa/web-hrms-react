import AuthSession from '../data/authsession';
import AuthenticationsSource from '../data/authentications';

class UpdateRefreshToken{
    async update(){
        try{
            const authSession = new AuthSession();
            // console.log(await authSession.getSession());
            const getCookies = await authSession.getCookies();
            const getSession = await authSession.getSession();
            const refreshToken  = getCookies.refreshToken ? getCookies.refreshToken : getSession.refreshToken;
            const getNewToken = await AuthenticationsSource.updateToken(refreshToken); 
            if(getCookies.refreshToken){
                await authSession.setCookies(getNewToken.data.accessToken, refreshToken);
            }else{
                await authSession.setSession(getSession.accessToken, getSession.refreshToken); 
            }
        }catch(e){
            console.log('refresh token gagal');
        }
    }
    
}

export default UpdateRefreshToken;