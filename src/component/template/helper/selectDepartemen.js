/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function SelectDepartemen(props){

    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div className="mb-3">
            <label htmlFor="Departemen" className="form-label">Departemens</label> 
            <select  
            id="Departemen"
            className="form-control" 
            value={props.value}
            onChange={handleChange}
            aria-describedby="emailHelp"
            disabled={props.disabled? true:false}>
                {
                    props.optionDepartemen.map((a)=>{
                        return (
                            <option key={a['departemen ID']} value={a['departemen ID']}>{a.name}</option>
                        )
                        
                    }) 
                }
            </select>
        </div>
    )
}

export default SelectDepartemen;