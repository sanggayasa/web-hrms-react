import React from "react";
import Table from "../component/table/table";
import HeadSubContent from "../template/head-sub-content";
import Main from "../template/main";
import AccessToken from "../utils/accessToken";
import Api from "../data/api";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataTable:[],
            judul:[],
        };

    }

    async dataTable(){
        const accessToken = await AccessToken.getToken();
        const getAllData = await Api.All(accessToken,"users");
        const dataTable = getAllData.data["users"];
        
        const judul = [];
        for(let key in dataTable[0]){
            judul.push(key.replace('_',' '));
        }
        
        this.setState({judul: judul});
        this.setState({dataTable: Object.keys(dataTable)});

    }

    render(){
        this.dataTable();
        return(
            <Main>
                <HeadSubContent></HeadSubContent>
                <Table judul={this.state.judul} data={this.state.dataTable}></Table>
            </Main>
        );
    }
       
}

export default User;