import CONFIG from '../globals/config'; 
import AccessToken from "../utils/accessToken";

class Api {
  static async All(token,route, query='') {
    const response = await fetch(CONFIG.BASE_URL_API+route+query,{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
    
  }

  static async Detail(route, query='') {
    const accessToken = await AccessToken.getToken();
    // console.log(route+query);
    const response = await fetch(CONFIG.BASE_URL_API+route+query,{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
    
  }

  static async Add(menu, data) {
    // console.log(data);
    const accessToken = await AccessToken.getToken();
    try{
      const response = await fetch(CONFIG.BASE_URL_API+menu,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
        body: data,
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      return responseJson;
    } catch (e){
      // console.log(e);
    }
  }

  static async Update(menu, data,id) {
    const accessToken = await AccessToken.getToken();
    try{
      const response = await fetch(CONFIG.BASE_URL_API+menu+'/'+id,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
        body: data,
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      return responseJson;
    } catch (e){
      // console.log(e);
    }
  }

  static async Delete(token, menu,id) {
    // console.log(CONFIG.BASE_URL_API+menu+'/'+id);

    try{
      const response = await fetch(CONFIG.BASE_URL_API+menu+'/'+id,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      return responseJson;
    } catch (e){
      // console.log(e);
    }
  }

  static async Clients() {
    const accessToken = await AccessToken.getToken();
    const response = await fetch(CONFIG.BASE_URL_API+'clients',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async Organizations() {
    const accessToken = await AccessToken.getToken();
    const response = await fetch(CONFIG.BASE_URL_API+'organizations',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async Departemen() {
    const accessToken = await AccessToken.getToken();
    const response = await fetch(CONFIG.BASE_URL_API+'departemens',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async Roles() {
    const accessToken = await AccessToken.getToken();
    const response = await fetch(CONFIG.BASE_URL_API+'roles',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
  
}
 
export default Api;