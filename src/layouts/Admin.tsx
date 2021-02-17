import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// components
import Sidebar from "../components/Sidebar/sidebar";

// views
import Dashboard from "../views/Admin/Dashboard";
import Tables from "../views/Admin/TableTimeAttendace";
import Otherleave from "../views/Admin/Otherleave";
import Export from "../views/Admin/Export"
import SummaryofEmployees from "../views/Admin/SummaryofEmployees"
import SummaryofWork from "../views/Admin/SummaryofWork"



export default function Admin() {
    return(
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-100">               
                        <Switch>
                            <Route path="/admin/dashboard" exact component={Dashboard} />
                            <Route path="/admin/otherleaves" exact component={Otherleave} />
                            <Route path="/admin/tables" exact component={Tables} />
                            <Route path="/admin/export" exact component={Export} />
                            <Route path="/admin/Summary of employees" exact component={SummaryofEmployees} />
                            <Route path="/admin/Summary of work" exact component={SummaryofWork} />
                        </Switch>
                
            </div>
        </>
    )
}

