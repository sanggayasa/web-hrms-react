import CONFIG from '../globals/config'; 

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

  static async Add(token, menu, data) {
    console.log(data);
    try{
      const response = await fetch(CONFIG.BASE_URL_API+menu,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: data,
      });
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (e){
      console.log(e);
    }
  }

  static async Update(token, menu, data,id) {
    console.log(CONFIG.BASE_URL_API+menu+'/'+id);
    
    try{
      const response = await fetch(CONFIG.BASE_URL_API+menu+'/'+id,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: data,
      });
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (e){
      console.log(e);
    }
  }

  static async Delete(token, menu,id) {
    console.log(CONFIG.BASE_URL_API+menu+'/'+id);

    try{
      const response = await fetch(CONFIG.BASE_URL_API+menu+'/'+id,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
      });
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (e){
      console.log(e);
    }
  }

  static async Clients(token) {
    const response = await fetch(CONFIG.BASE_URL_API+'clients',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async Organizations(token) {
    const response = await fetch(CONFIG.BASE_URL_API+'organizations',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async Departemen(token) {
    const response = await fetch(CONFIG.BASE_URL_API+'departemens',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async Roles(token) {
    const response = await fetch(CONFIG.BASE_URL_API+'roles',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
  
}
 
export default Api;