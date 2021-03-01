import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// components
import Sidebar from "../components/Sidebar/sidebar";

// views
import Dashboard from "../views/Admin/Dashboard";
import Otherleave from "../views/Admin/Leave";
import Export from "../views/Admin/Export"
import SummaryofTeam from "../views/Admin/SummaryofTeam"
import SummaryofWork from "../views/Admin/SummaryofWork"



export default function Admin() {
    return(
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-100">               
                        <Switch>
                            <Route path="/admin/dashboard" exact component={Dashboard} />
                            <Route path="/admin/otherleaves" exact component={Otherleave} />
                            <Route path="/admin/export" exact component={Export} />
                            <Route path="/admin/Summary of employees" exact component={SummaryofTeam} />
                            <Route path="/admin/Summary of work" exact component={SummaryofWork} />
                        </Switch>
                
            </div>
        </>
    )
}

