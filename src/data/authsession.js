/* eslint-disable no-useless-concat */
class AuthSession {
    // CHECK SESSION AND COOKIES

    async checkAuth(){
        const refreshToken = await this.getSession();
        const refreshTokenCookies = await this.getCookies();
        
        if(refreshToken.refreshToken === null && refreshTokenCookies.refreshToken === null){
            window.location.replace("http://localhost:8081/"); 
        }
    }
    // SESSION
    async setSession(accessToken, refreshToken){
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        window.location.replace("http://localhost:8081/#/dashboard"); 
    }

    async getSession(){
        const accessToken = sessionStorage.getItem("accessToken");
        const refreshToken = sessionStorage.getItem("refreshToken");
        const session = {accessToken,refreshToken}
        return session;
    }
    
    // COOOKIES
    async setCookies(accessToken, refreshToken){
        const d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = 'accessToken' + "=" + accessToken + ";" + expires + ";path=/";
        document.cookie = 'refreshToken' + "=" + refreshToken + ";" + expires + ";path=/";
    }

    async getCookies() { 
        let cookies = {
            accessToken:null,
            refreshToken:null
        };
        let ca = document.cookie.split(';');
        let accessToken =  "accessToken=";
        let refreshToken =  "refreshToken=";
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(accessToken) === 0) {
            cookies.accessToken = c.substring(accessToken.length, c.length);
          }

          if (c.indexOf(refreshToken) === 0) {
            cookies.refreshToken = c.substring(refreshToken.length, c.length);
          }
        }
        return cookies;
    }
}

export default AuthSession;