import Navbar from "../navbar";

function SubContent(props){
    return (
        <div className="col-10">
            <Navbar></Navbar>
            <div className="m-3 content">
                {props.children}
            </div>
        </div>
    )
}
    
export default SubContent;