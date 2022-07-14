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
    const [nik, setNik] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [update, setUpdate] = useState(true);
    const [client, setClient ] = useState('');
    const [organization, setOrg ] = useState('');
    const [departemen, setDepartemen ] = useState('');
    const [role, setRole ] = useState('');
    const [isActive, setIsActive] = useState('');
    const [alert, setAlert] = useState();

    const [optionClient, setOptionClient ] = useState([]);
    const [optionOrganization, setOptionOrganization ] = useState([]);
    const [optionDepartemen, setOptionDepartemen ] = useState([]);
    const [optionRole, setOptionRole ] = useState([]);

    //handle onChange Select
    const handleClient = (newValue)=>{setClient(newValue)};
    const handleOrg = (newValue)=>{setOrg(newValue)};
    const handleDepartemen = (newValue)=>{setDepartemen(newValue)};
    const handleRole = (newValue)=>{setRole(newValue)};

    //set first data from api
    useEffect(()=>{
        loadDetailUser()
    },[]);

    //get option client
    useEffect(() => {
        async function listClient(){ 
            const dataClient= ((await Data.Clients()).data).clients;
            setOptionClient(dataClient);
        }
        listClient();

    }, []);

    //get option organization base on client
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
                    filter.unshift({name:'All', 'org ID': '0'});
                }
             }else{
                filter.unshift({name:'-', 'org ID': ''})
             }
            setOptionOrganization(filter);
        }

        listClient();

    },[client]);

    //get option departemen base on organization
    useEffect(() => {
        async function listOrganization(){ 
            const dataOrganization= ((await Data.Departemen()).data).departemens;
            const filter = dataOrganization.filter(e => e['organization ID']  === organization);
            setOptionDepartemen(filter);

        }
        listOrganization();
    },[organization]);
    
    //get option role base on client
    useEffect(() => {
            async function listRole(){ 
                const dataOrganization= ((await Data.Roles()).data).roles;
                const filter = dataOrganization.filter(e => e['client_id']  === client);
                setOptionRole(filter);
            }
            listRole();
    },[client]);

    //load first detail user
    async function loadDetailUser(){
        const listUser = await Data.Detail('users/',params); 
        const detail = listUser.data.user[0];
        setNik(detail.nik);
        setName(detail.name);
        setUsername(detail.username);
        setDetailUser(detail);
        setClient(detail.client_id);
        setOrg(detail.org_id);
        setDepartemen(detail.dept_id);
        setRole(detail.role_id);
        setIsActive(detail.is_active);
    }

    //update data
    async function updateDetailUser(e){
            e.preventDefault()
            const body = {
                name:name,
                username:username,  
                client_id:client,
                org_id:organization,
                dept_id:departemen,
                role_id:role,
                nik:nik,
                is_active:isActive
            }
            console.log(detailUser.user_id);
            const respon = await Data.Update('users',JSON.stringify(body), detailUser.user_id);
            // console.log(respon);
            if(respon.status === 'fail'){
                setAlert(<div className="alert alert-warning" role="alert">
                    {respon.message}
                </div>);
            }else if(respon.status === 'success'){
                setAlert(<div className="alert alert-info" role="alert">
                    {respon.message}
                </div>);
            }else{
                setAlert();
            }
    }
    
    console.log(detailUser);
    return (<Main>
        <div className="card">
        {alert}
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
                                    <Input label='Nik' value={nik ? nik : 'silahkan masukan name'} onChange={e=>setNik(e.target.value)} disabled={update}></Input>
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
                                            <SelectClient value={client} optionClient={optionClient} onChange={handleClient}></SelectClient>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Input label='Name' value={name ? name : 'silahkan masukan name'} onChange={e=>setName(e.target.value)}disabled={update}></Input>
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
                                                        <option>{detailUser.name_org === 'SYSTEM'? 'All': detailUser.name_org }</option>
                                                    </select>
                                                </div> : 
                                                <SelectOrganization main={client} value={organization} optionOrganization={optionOrganization} onChange={handleOrg}></SelectOrganization>
                                        }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Input label='Username' value={username ? username : 'silahkan masukan username'} onChange={e=>setUsername(e.target.value)} disabled={update}></Input>    
                                </div>
                                <div className="col">
                                    {
                                        update?
                                            <Input label='Departemen' value={detailUser.dept_name ? detailUser.dept_name : 'silahkan masukan departemen'} disabled={update}></Input>    
                                        :
                                            <SelectDepartemen  
                                            main={organization} 
                                            optionDepartemen={optionDepartemen}
                                            value={departemen}
                                            onChange={handleDepartemen}>
                                            </SelectDepartemen>
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
                                       <label htmlFor="isactive" className="form-label">Is Active</label> 
                                       <select id="isactive"className="form-select" value={isActive} onChange={e=>setIsActive(e.target.value)} disabled={update}>
                                            <option value="true">true</option>
                                            <option value="false">false</option>
                                       </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {
                                    update?
                                        <button className="btn btn-primary" type="submit" onClick={(e)=>{
                                            e.preventDefault();
                                            return setUpdate(false)}} >Update</button>:
                                        <div>
                                            <button type="button" className="btn btn-secondary m-2" onClick={()=>{ loadDetailUser(); return setUpdate(true) }}>Cancel</button>
                                            <button className="btn btn-primary m-2" type="submit" onClick={updateDetailUser} >Save changes</button>
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