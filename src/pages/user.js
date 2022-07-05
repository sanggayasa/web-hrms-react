import React from "react";
import HeadSubContent from "../component/template/head-sub-content";
import Main from "../component/template/main";
import AccessToken from "../utils/accessToken";
import Api from "../data/api";
import BasicTable from "../component/table/BasicTable";
import FormUser from "../component/template/form/FormUser";
import {Link} from 'react-router-dom';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            initTable:[],
            searchTable:[],
            judul:[],
            search:'',
        };

        
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    
    async componentDidMount(){
        
            const accessToken = await AccessToken.getToken();
            const getAllData = await Api.All(accessToken,"users");
            // console.log(getAllData);
            const dataTable = getAllData.data["users"].map((e)=>{
                const addAction = {
                    Action:<Link to={e['user ID']}><button className="btn btn-outline-primary">Detail</button></Link>,
                    ...e,
                }               
                return addAction;
            });
            
            const judul = [];
            for(let key in dataTable[0]){
                const newKey = key.replace('_',' ')
                    judul.push(
                        {
                            Header: newKey ,
                            Footer: newKey ,
                            accessor: newKey 
                        });
            }   

            console.log(dataTable);
            this.setState({initTable : dataTable});
            this.setState({judul : judul});
    };
    

    onChangeSearch(event){
        this.setState((prevState) => {
            const dataFind = [];
            for(let i = 0; i < prevState.initTable.length ; i++){

                    const data = (Object.values(prevState.initTable[i]).toString()).match(event.target.value);
                    if(data != null){
                        dataFind.push(prevState.initTable[i]);
                    }
            }

            return {
              ...prevState,
              search: event.target.value,
              searchTable: dataFind
            }
        });
    }
    

    render(){
        return(
            <Main>
                <HeadSubContent 
                    value={this.state.search} 
                    onChangeSearch={this.onChangeSearch} 
                    contentCreate={<FormUser></FormUser>}
                    contentFilter={<h1>content filter</h1>}
                    >
                </HeadSubContent>
                <BasicTable 
                    allData = {this.state.search ?  this.state.searchTable : this.state.initTable} 
                    judul = {this.state.judul}>
                </BasicTable>
            </Main>
        );
    }
}

export default User;