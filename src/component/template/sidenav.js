/* eslint-disable react/style-prop-object */
import React from "react";
import Logo from "../../images/logo.png";
import UserInfo from "../../data/userinfo-idb";
import ListDropdown from "../list-dropdown";

class Sidenav extends React.Component{

    constructor(props){
        super(props);
        this.state = { menulistAdministrator:[]};
    }

    async menulist(){
        const list =await UserInfo.getUserInfo('0');

        const listArr = list.data.role_code;
        const listArrName = [];
        for(let i=0; i < listArr.length; i++){
            let getName = listArr[i].split('.');
            listArrName.push(getName[0]);
        }

        const menulist = [...new Set(listArrName)];
        
        this.setState({menulistAdministrator: menulist});
    }

    render(){
       
        this.menulist();
        
        return (

                    <div className="col-2 shadow p-3 mb-5 bg-white rounded ">
                        <div className="header-sidebar">
                            <img src={Logo} alt="logo" width="100%" />
                        </div>
                        <div className="flex-shrink-0 p-3 bg-white content-sidebar "  >
                        <ul className="list-unstyled ps-0">
                            <ListDropdown judul={'Administration'} list={this.state.menulistAdministrator}></ListDropdown>
                        </ul> 
                        </div>
                    </div>
                    
        )
    }

}

export default Sidenav;


