function Select({ label, value, name, onChange, className, disabled}){
    // console.log(value);
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label> 
            <select  
            id={name} 
            value={value}
            className={className?className:"form-control"} 
            aria-describedby="emailHelp"
            disabled={disabled}>
                {
                    value.map((a)=>{
                        return (
                            <option key={a.key} value={a.key}>{a.value}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select;