/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function SelectOrganization(props){
    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div className="mb-3">
            <label htmlFor="organization" className="form-label">Organization</label> 
            <select  
            id="organization"
            className="form-control" 
            onChange={handleChange}
            value={props.value}
            aria-describedby="emailHelp"
            disabled={props.disabled? true:false}>
                {
                    props.optionOrganization.map((a)=>{
                        return (
                            <option key={a['org ID']} value={a['org ID']}>{a.name}</option>
                        )
                    }) 
                }
            </select>
        </div>

    )
}

export default SelectOrganization;