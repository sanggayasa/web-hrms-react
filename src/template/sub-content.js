
function SubContent(props){
    return (
        <div className="col-10">
            <div className="m-3 content">
                {props.children}
            </div>
        </div>
    )
}
    
export default SubContent;