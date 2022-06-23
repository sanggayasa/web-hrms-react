import HeadTb from "./head-tb";
import BodyTb from "./body-tb";

function Table({judul, data}){
    return (
        <div className="row sub-content shadow p-3 m-1 bg-body rounded">
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <HeadTb data={judul}></HeadTb>
                    <BodyTb data={data}></BodyTb>
                </table>   
            </div>
        </div>
    )
}

export default Table;