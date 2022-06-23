import React from "react";
// import Input from "../form/input";
// // import Alert from "./alert";
// import Btn from "../form/btn";
import CardCenter from "../component/login/cardCenter";
import FormLogin from "../component/login/formLogin";
import AuthenticationsSource from '../data/authentications';
import AuthSession from '../data/authsession';
import UserInfo from '../data/userinfo-idb';

class Login extends React.Component{
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          username: '',
          password:'',
          clientId:'',
          remember:false,
          alert:'',
        }
      
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onPassChangeEventHandler = this.onPassChangeEventHandler.bind(this);
        this.onClientIdEventHandler = this.onClientIdEventHandler.bind(this);
        this.onCheckBoxEventHandler = this.onCheckBoxEventHandler.bind(this);
        this.onResetSubmitEventHandler = this.onResetSubmitEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }

    onNameChangeEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          username: event.target.value,
        }
      });
    }

    onPassChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            password: event.target.value,
          }
        });
      }
    
    onClientIdEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          clientId: event.target.value,
        }
      });
    }

    onCheckBoxEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          remember: event.target.checked?true:false,
          
        }
      });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.prosesLogin(this.state);
    }

    async prosesLogin(data) {
      const toArr = Object.entries(data)
      const filterData = toArr.filter(([key])=>key !== 'alert');
      const authsession = new AuthSession();
      console.log(data);
      const authentications = await AuthenticationsSource.authentications(data.username,data.password,data.clientId);
      const accessToken = authentications.data.accessToken;
      const refreshToken = authentications.data.refreshToken;

      if(authentications.status === 'success' && data.remember === false){
          const userInfo = {
            id: '0',
            data: authentications.data.getInfoUser,
          }

          await UserInfo.putUserInfo(userInfo);
          await authsession.setSession(accessToken,refreshToken);

        }else if(authentications.status === 'success' && data.remember === true){
          const userInfo = {
            id: '0',
            data: authentications.data.getInfoUser,
          }

          await UserInfo.putUserInfo(userInfo);
          await authsession.setCookies(accessToken,refreshToken);
          window.location.replace("http://localhost:8081/#/dashboard");
        }
      console.log(filterData);
    }

    onResetSubmitEventHandler(event) {
        event.preventDefault();
        this.setState((prevState) => {
            return {
              ...prevState,
              alert: '' ,
            }
          });
        // this.props.addContact(this.state);
    }

    render(){ 
        return (
          <div>
            <h2>{this.state.remember}</h2>
            <CardCenter 
            element={
              <FormLogin 
                onSubmit={this.onSubmitEventHandler} 
                username={this.state.username} 
                password={this.state.password} 
                clientId={this.state.clientID}
                remember={this.state.remember}
                usernameEH={this.onNameChangeEventHandler} 
                passwordEH={this.onPassChangeEventHandler}
                clientIdEH={this.onClientIdEventHandler}
                rememberEH={this.onCheckBoxEventHandler}
                />
            }
          />
          </div>
          
                                    
        );
    }
}
    
export default Login;