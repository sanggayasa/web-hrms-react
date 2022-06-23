import Bglogin from "../../images/login.png";

function CardCenter({element}){
    return (
        <div className = "container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col col-lg-6">
                                        <img src={Bglogin} height="100%" alt="bg-login" />
                                    </div>
                                    <div className="col col-lg-6">
                                        <div className = "container-form p-3">
                                            {element}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCenter;