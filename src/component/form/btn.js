function Btn ({value, type, name, label, className, modal}){

    if(modal){
        return(
            <button type={type} name={name} value={value} className={className?className : "btn btn-primary"} data-bs-toggle="modal" data-bs-target={modal}>{label}</button>
        )
    }else{
        return(
            <button type={type} name={name} value={value} className={className?className : "btn btn-primary"}>{label}</button>
        )
    }
    
}

export default Btn;