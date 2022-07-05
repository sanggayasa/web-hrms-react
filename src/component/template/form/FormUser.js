import Input from "../../form/input";
import React, {useState, useEffect} from "react";
import SelectClient from "../helper/selectClient";
import SelectOrganization from "../helper/selectOrganization";
import SelectDepartemen from "../helper/selectDepartemen";
import SelectRole from "../helper/selectRole";
import Data from "../../../data/api";

function FormUser(props){
    const [name, setName] = useState(props.name);
    const [username, setUsername] = useState(props.username?props.username:'');
    const [password, setPassword] = useState(props.password?props.password:'');
    const [verifyPassword, setVerifyPassword] = useState(props.verifyPassword?props.verifyPassword:'');
    const [organization, setOrg ] = useState('');
    const [departemen, setDepartemen ] = useState('');
    const [role, setRole ] = useState('');
    const [nik, setNik] = useState('');
    const [alert, setAlert] = useState();

    const [client, setClient ] = useState('');
    const [optionOrganization, setOptionOrganization ] = useState([]);
    const [optionDepartemen, setOptionDepartemen ] = useState([]);
    const [optionRole, setOptionRole ] = useState([]);

    const handleClient = (newValue)=>{setClient(newValue)};
    const handleOrg = (newValue)=>{setOrg(newValue)};
    const handleDepartemen = (newValue)=>{setDepartemen(newValue)};
    const handleRole = (newValue)=>{setRole(newValue)};

    //get List Organization base from client
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

    //get List Departemen base from Organization
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

    async function handlerSave(e){
        e.preventDefault();
        
        const body = {
            name:name,
            username:username,
            password:password,
            client_id:client,
            org_id:organization,
            dept_id:departemen,
            role_id:role,
            nik:nik,
        }

        const respon = await Data.Add('users',JSON.stringify(body));
        console.log(respon);
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

    return (
            <div>
                {alert}
                <div className="row">
                    <div className="col">
                        <Input label="name" value={name} onChange = {e => setName (e.target.value)} disabled={props.disabled}></Input>
                    </div>
                    <div className="col">
                        <Input label="NIK" value={nik} onChange = {e => setNik (e.target.value)} disabled={props.disabled}></Input>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col">
                            <Input label="username" value={username} onChange ={e => setUsername (e.target.value)} disabled={props.disabled}></Input>
                        </div>
                        <div className="col">
                            <Input label="password" type="password" value={password} onChange = {e => setPassword(e.target.value)} disabled={props.disabled}></Input>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col">
                            <Input label="password" type="password" value={verifyPassword} onChange = {e => setVerifyPassword(e.target.value)} disabled={props.disabled}></Input>  
                        </div>
                        <div className="col">
                            <SelectClient value={client} onChange={handleClient} disabled={props.disabled}></SelectClient>
                        </div>
                    </div>
                </div> 
                <div>
                    <div className="row">
                        <div className="col">
                            <SelectOrganization main={client} value={organization} optionOrganization={optionOrganization} onChange={handleOrg} disabled={props.disabled}></SelectOrganization>
                        </div>
                        <div className="col">
                            <SelectDepartemen  main={organization} optionDepartemen={optionDepartemen} value={departemen}  onChange={handleDepartemen} disabled={props.disabled}></SelectDepartemen>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col">
                            <SelectRole main={client} optionRole={optionRole} value={role}  onChange={handleRole} disabled={props.disabled}></SelectRole>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button className="btn btn-primary" type="submit" onClick={handlerSave}>Save changes</button>
                </div>
            </div>
        )
}

export default FormUser;