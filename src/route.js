import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import User from "./pages/user";
import Role from "./pages/role";
import Client from "./pages/client";
import Organization from "./pages/organization";
import Departemen from "./pages/departemen";
import NotFound from "./notfound";
import Profil from "./profil";

class Content extends React.Component{

    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>} />
                    <Route path="/dashboard" element={<Dashboard></Dashboard>} >
                        <Route path=":username" element={<Profil></Profil>} /> 
                    </Route>
                    <Route path="/user" element={<User></User>} >
                    </Route>
                    <Route path="/role" element={<Role></Role>} >
                    </Route>
                    <Route path="/client" element={<Client></Client>} >
                    </Route>
                    <Route path="/organization" element={<Organization></Organization>} >
                    </Route>
                    <Route path="/departemen" element={<Departemen></Departemen>} >
                    </Route>
                    <Route path="*" element={<NotFound></NotFound>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Content;