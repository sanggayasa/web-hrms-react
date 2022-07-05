/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function SelectRole(props){

    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div className="mb-3">
            <label htmlFor="Role" className="form-label">Roles</label> 
            <select  
            id="Role"
            className="form-control" 
            value={props.value}
            onChange={handleChange}
            aria-describedby="emailHelp">
                {
                    props.optionRole.map((a)=>{
                        return (
                            <option key={a['role ID']} value={a['role ID']}>{a.name}</option>
                        )
                        
                    }) 
                }
            </select>
        </div>
    )
}

export default SelectRole;