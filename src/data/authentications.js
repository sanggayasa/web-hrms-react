import API_ENDPOINT from '../globals/api-endpoint';


class AuthenticationsSource {
  
  static async authentications(username,password,client) {
    const response = await fetch(API_ENDPOINT.AUTHENTICATIONS,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username:username,
        password:password,
        client_id:client
      })
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async updateToken(refreshToken) {
    const response = await fetch(API_ENDPOINT.AUTHENTICATIONS,{
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken:refreshToken,
      })
    });
    const responseJson = await response.json();
    return responseJson;
  }
}
 
export default AuthenticationsSource;