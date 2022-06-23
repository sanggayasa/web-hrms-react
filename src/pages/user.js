import React from "react";
// import Table from "../component/table/table";
import HeadSubContent from "../template/head-sub-content";
import Main from "../template/main";
import AccessToken from "../utils/accessToken";
import Api from "../data/api";
import BasicTable from "../component/table/BasicTable";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataTable:[],
            judul:[],
        };
    }

    async componentDidMount(){
        // console.log('runnning');
        const accessToken = await AccessToken.getToken();
        const getAllData = await Api.All(accessToken,"users");
        const dataTable = getAllData.data["users"];
        
        const judul = [];
        for(let key in dataTable[0]){
            judul.push(
                {
                    Header: key.replace('_',' '),
                    Footer: key.replace('_',' '),
                    accessor: key.replace('_',' ')
                });
        }   
        
        // console.log(dataTable);
        this.setState({judul: judul});
        this.setState({dataTable: dataTable});

    }


    render(){
        // console.log(this.state.dataTable);
        // console.log(this.state.dataTable)
        return(
            <Main>
                <HeadSubContent></HeadSubContent>
                    <BasicTable allData = {this.state.dataTable} judul = {this.state.judul}></BasicTable>
            </Main>
        );
    }
       
}

export default User;