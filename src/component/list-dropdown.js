import React from "react";
import List from "./list";


function ListDropdown({judul,list}){
        return (
           
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                    {judul}
                    </button>
                    <div className="collapse show" id="home-collapse" >
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small slide-dropdown">
                            {
                                list.map((element) => 
                                    <List key={element} name={element} link={element}></List>
                                )
                            }
                        </ul>
                    </div>
                </li>
            
        )
    }


export default ListDropdown;