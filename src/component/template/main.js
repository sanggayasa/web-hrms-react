import Navbar from "../navbar";
import Sidenav from "./sidenav";
import SubContent from "./sub-content";

function Main(props){

    const getCookie = document.cookie;
    const getSession = sessionStorage.getItem("accessToken");
    if(!getCookie && !getSession ){
        window.location.replace("http://localhost:3000/");
    }

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