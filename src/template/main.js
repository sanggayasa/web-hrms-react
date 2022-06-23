import Sidenav from "./sidenav";
import SubContent from "./sub-content";

function Main(props){
    return (
        <div className="container-fluid overflow-auto">
                <div className="row">
                    <Sidenav></Sidenav>
                    <SubContent>{props.children}</SubContent>
                </div>
        </div>
    )
}

export default Main;