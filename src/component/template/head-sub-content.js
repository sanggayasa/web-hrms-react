import Btn from "../form/btn";
import Modal from "../modal";

function HeadSubContent ({value, onChangeSearch, contentCreate, contentFilter}){


    return (
        <div>
            <div className="row container-search shadow p-3 m-1  bg-body rounded">                        
                <div className="row content-top">
                    <div className="col-4">
                        <Btn type="button" className="btn btn-outline-primary btn-add"  label="+ Create users" modal="#search"></Btn>
                    </div>
                    <div className="col-4 text-center">
                        <input type="text" placeholder="Search ....." value={value} onChange={onChangeSearch} className="input-search form-control"/>
                    </div>
                    <div className="col-4 text-end">
                        <Btn type="button" className="btn btn-outline-primary btn-add"  label="Filter" modal="#filter"></Btn>
                    </div>
                </div>
                <div className="row content-menu">
                </div>
                <Modal id="search" judul="Create User" content={contentCreate}/>
                <Modal id="filter" judul="Filter" content={contentFilter} />
            </div>
        </div>
        
    )
}

export default HeadSubContent;