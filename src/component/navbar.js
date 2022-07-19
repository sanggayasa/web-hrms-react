import profilman from "../images/profile-man.png";
import React,{useState} from "react";
import "../style/navbar.css";

function Navbar(){
    const [dropdown,setDropdown] = useState(-300);
    
    function deleteCookies(){
        document.cookie = "accessToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        window.location.replace("http://localhost:3000/");
    }
    
    return(
        <nav className="navbar content-top bg-body shadow">
            <div className="col-12 text-end">
                <img id="profil-icon" src={profilman} alt="" width="70px" height="70px" onClick={()=>dropdown===-300?setDropdown(90):setDropdown(-300)} />
                <div className="dropdown bg-body shadow text-start" style={{top:dropdown, zIndex:'3'}}>
                    <div className="d-grid gap-2 p-1">
                        <button type="button" className="btn btn-light">Profile</button> 
                        <button type="button" className="btn btn-light" onClick={deleteCookies}>Logout</button> 
                    </div> 
                </div>
            </div>
        </nav>)
}

export default Navbar;