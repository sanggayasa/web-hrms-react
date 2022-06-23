
function Modal({judul,id,btn, content}){
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
                            <div className="modal-footer">
                                {btn}
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button className="btn btn-primary" type="submit">Save changes</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
    )
}

export default Modal;