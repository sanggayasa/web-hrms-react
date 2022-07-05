import { useParams } from "react-router-dom";
import Input from "../component/form/input";
import Main from "../component/template/main";
import Logo from "../images/profile-man.png";
import React, {useState, useEffect} from "react";
import Data from "../data/api";
import SelectClient from "../component/template/helper/selectClient";
import SelectDepartemen from "../component/template/helper/selectDepartemen";
import SelectOrganization from "../component/template/helper/selectOrganization";
import SelectRole from "../component/template/helper/selectRole";
import {Link} from 'react-router-dom';

function Profile(){
    const params = (useParams()).id;
    const [detailUser, setDetailUser] = useState({});
    const [update, setUpdate] = useState(true);
    const [client, setClient ] = useState('');
    const [organization, setOrg ] = useState('');
    const [departemen, setDepartemen ] = useState('');
    const [role, setRole ] = useState('');
    const [optionOrganization, setOptionOrganization ] = useState([]);
    const [optionDepartemen, setOptionDepartemen ] = useState([]);
    const [optionRole, setOptionRole ] = useState([]);

    const handleClient = (newValue)=>{setClient(newValue)};
    const handleOrg = (newValue)=>{setOrg(newValue)};
    const handleDepartemen = (newValue)=>{setDepartemen(newValue)};
    const handleRole = (newValue)=>{setRole(newValue)};

    useEffect(()=>{
        async function detailUser(){
            const listUser = await Data.Detail('users/',params); 
            const detail = listUser.data.user[0];
            setDetailUser(detail);
            setClient(detail.name_client);
        }

        detailUser()
    },[]);

    useEffect(() => {
        async function listClient(){ 
            const dataOrganization= ((await Data.Organizations()).data).organizations;
            let cekAllHaveSystem = false;
            dataOrganization.map((e) => {
               if( e['client ID']  === '0'){
                cekAllHaveSystem = true;
               } 
               return e;
            });
            
            const filter = dataOrganization.filter(e => e['client ID']  === client);
            let cekPerClient = false;
            filter.map((e) => {
                if( e['client ID']  === '0'){
                 cekPerClient = true;
                }
                return e;
             }); 

             if(cekAllHaveSystem){
                if(!cekPerClient){
                    filter.unshift({name:'All', 'org ID': '0'})
                }
             }else{
                filter.unshift({name:'-', 'org ID': ''})
             }

            if(filter){
                if(filter[0]){
                    setOrg(filter[0]['org ID']);
                }
            } 
            setOptionOrganization(filter);
        }

        listClient();

    },[client]);

    useEffect(() => {
        async function listOrganization(){ 
            const dataOrganization= ((await Data.Departemen()).data).departemens;
            const filter = dataOrganization.filter(e => e['organization ID']  === organization);
            if(filter && filter[0]){
                    setDepartemen(filter[0]['departemen ID']);
            } 
            setOptionDepartemen(filter);

        }
        listOrganization();
    },[organization]);
    
        //get List Role base from Client
    useEffect(() => {
            async function listRole(){ 
                const dataOrganization= ((await Data.Roles()).data).roles;
                const filter = dataOrganization.filter(e => e['client_id']  === client);
                if(filter && filter[0]){
                        setRole(filter[0]['role ID']);
                } 
                setOptionRole(filter);
            }
            listRole();
    },[client]);
    
    // console.log(client);
    return (<Main>
        <div className="card">
            <div className="card-body">
                <div className="row ">
                        <div className="row">
                            <Link to='/user'><button className="btn btn-outline-primary">Back</button></Link>
                        </div>
                    <div className="col-2 text-center">
                        <img src={Logo} alt="logo" width="100%" />
                    </div>
                    <div className="col-10">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <Input label='Nik' value={detailUser.nik ? detailUser.nik : 'silahkan masukan name'} disabled={update}></Input>
                                </div>
                                <div className="col">
                                    {
                                       update? <div className="mb-3">
                                                    <label htmlFor='client' className="form-label">Client</label> 
                                                    <select  
                                                    id='client' 
                                                    value='tes'
                                                    className="form-control" 
                                                    aria-describedby="emailHelp"
                                                    disabled='disabled' >
                                                        <option>{detailUser.name_client}</option>
                                                    </select>
                                                </div> : 
                                            <SelectClient value={client} onChange={handleClient}></SelectClient>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Input label='Name' value={detailUser.name ? detailUser.name : 'silahkan masukan name'} disabled={update}></Input>
                                </div>
                                <div className="col">
                                {
                                        update? <div className="mb-3">
                                                    <label htmlFor='client' className="form-label">Organization</label> 
                                                    <select  
                                                    id='client' 
                                                    value='tes'
                                                    className="form-control" 
                                                    aria-describedby="emailHelp"
                                                    disabled='disabled' >
                                                        <option>{detailUser.name_org}</option>
                                                    </select>
                                                </div> : 
                                                <SelectOrganization main={client} value={organization} optionOrganization={optionOrganization} onChange={handleOrg}></SelectOrganization>
                                        }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Input label='Username' value={detailUser.username ? detailUser.username : 'silahkan masukan username'} disabled={update}></Input>    
                                </div>
                                <div className="col">
                                    {
                                        update?
                                            <Input label='Departemen' value={detailUser.dept_name ? detailUser.dept_name : 'silahkan masukan departemen'} disabled={update}></Input>    
                                        :
                                            <SelectDepartemen  main={organization} optionDepartemen={optionDepartemen} value={departemen}  onChange={handleDepartemen}></SelectDepartemen>
                                    }
                                   
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {
                                            update?
                                                <Input label='Roles' value={detailUser.role_name ? detailUser.role_name : 'silahkan masukan roles'} disabled={update}></Input>    
                                            :
                                                <SelectRole main={client} optionRole={optionRole} value={role}  onChange={handleRole} ></SelectRole>
                                    }       
                                 </div>
                                <div className="col">
                                       
                                </div>
                            </div>
                            <div className="modal-footer">
                                {
                                    update?
                                        <button className="btn btn-primary" type="submit" onClick={(e)=>{
                                            e.preventDefault();
                                            return setUpdate(false)}} >Update</button>:
                                        <div>
                                            <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal"  onClick={(e)=>{
                                            e.preventDefault();
                                            return setUpdate(true)}}>Cancel</button>
                                            <button className="btn btn-primary m-2" type="submit" >Save changes</button>
                                        </div>
                                }
                                
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </Main>)
}

export default Profile;