function Alert ({reset, status, description, className}){
    return (
        <div className={className? className:"alert alert-primary alert-dismissible fade show"} role="alert">
            <strong>{status? status : "Berhasil"}</strong> {description}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={reset}></button>
        </div>
    )
}

export default Alert;