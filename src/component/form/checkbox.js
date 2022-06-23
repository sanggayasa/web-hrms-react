function checkbox({label, value, name,type, onChange, className}){
    return (
        <div className="mb-3">
            <input type={type} id={name} className={className?className:"form-control"} value={value} onChange = {onChange}/>
            <label htmlFor={name} className="form-label ">{label}</label>
        </div>
    )
}

export default checkbox;