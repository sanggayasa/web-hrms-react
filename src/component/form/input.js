function Input({label, value, name,type, onChange, className}){
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type} id={name} className={className?className:"form-control"} value={value} onChange = {onChange}aria-describedby="emailHelp" />
        </div>
    )
}

export default Input;