/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function SelectClient(props){
    // const [optionClient, setOptionClient ] = useState([]);
    function handleChange(event) {
        props.onChange(event.target.value);
    }
    
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
                    props.optionClient.map((a)=>{
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