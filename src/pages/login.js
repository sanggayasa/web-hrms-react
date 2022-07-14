import CardCenter from "../component/login/cardCenter";
import FormLogin from "../component/login/formLogin";
import AuthenticationsSource from '../data/authentications';
import AuthSession from '../data/authsession';
import UserInfo from '../data/userinfo-idb';
import React, {useState} from "react";

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clientId, setClientId] = useState('');
  const [remember, setRemember] = useState(false);
  const [alert, setAlert] = useState();

    async function prosesLogin(e){
      e.preventDefault();
      const authsession = new AuthSession();
      const authentications = await AuthenticationsSource.authentications(username,password,clientId);
      
      if(authentications.status === 'fail'){
        setAlert(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Failed Login!</strong> {authentications.message}
          <button type="button" className="btn-close" onClick={()=>setAlert()}></button>
        </div>);
      }else{
        const accessToken = authentications.data.accessToken;
        const refreshToken = authentications.data.refreshToken;

        if(authentications.status === 'success' && remember === false){
            const userInfo = {
              id: '0',
              data: authentications.data.getInfoUser,
            }

            await UserInfo.putUserInfo(userInfo);
            await authsession.setSession(accessToken,refreshToken);

          }else if(authentications.status === 'success' && remember === true){
            const userInfo = {
              id: '0',
              data: authentications.data.getInfoUser,
            }

            await UserInfo.putUserInfo(userInfo);
            await authsession.setCookies(accessToken,refreshToken);
            window.location.replace("http://localhost:3000/user");
          }
      }
    }

    return (
      <div>
        {alert}
        <CardCenter 
        element={
          <FormLogin 
            onSubmit={prosesLogin} 
            username={username} 
            password={password} 
            clientId={clientId}
            remember={remember}
            usernameEH={e=>setUsername(e.target.value)} 
            passwordEH={e=>setPassword(e.target.value)}
            clientIdEH={e=>setClientId(e.target.value)}
            rememberEH={e=>setRemember(e.target.checked)}
            />
        }
      />
      </div>);

}
    
export default Login;