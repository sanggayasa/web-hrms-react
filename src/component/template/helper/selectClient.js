/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect}  from "react";
import DataClient from "../../../data/api";

function SelectClient(props){
    const [optionClient, setOptionClient ] = useState([]);
    function handleChange(event) {
        props.onChange(event.target.value);
    }

    useEffect(() => {
        async function listClient(){ 
            const dataClient= ((await DataClient.Clients()).data).clients;
            setOptionClient(dataClient);
            props.onChange(dataClient[0]['client ID']);
        }
        listClient();

    }, []);
    
    return (
        <div className="mb-3">
            <label htmlFor="client" className="form-label">Client</label> 
            <select 
            id="client"
            className="form-control" 
            value={props.value}
            onChange={handleChange}
            aria-describedby="emailHelp" 
            disabled={props.disabled? true:false}>
                {
                    
                    optionClient.map((a)=>{
                            return (
                                <option key={a['client ID']} value={a['client ID']}>{a.name}</option>
                            )
                        
                    })
                }
            </select>
        </div>
    )
}

export default SelectClient;