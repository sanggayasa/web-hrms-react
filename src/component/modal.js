
function Modal({judul,id, content, handlerSave}){
    return (
                <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-scrollable">
                        <form className="form-add pt-4">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{judul}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {content}
                            </div>
                            
                            </div>
                        </form>
                    </div>
                </div>
    )
}

export default Modal;