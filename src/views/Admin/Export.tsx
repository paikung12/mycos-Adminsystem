import React from "react";

// components
import Export from "../../components/Adminpage/PageExport/Export"

import HeaderExport from "../../components/Headerstats/HeaderExport"
import ExportNavbar from "../../components/Navbar/Export"


export default function Dashboard() {
    return(
        <> 
        <HeaderExport/>
        <ExportNavbar/>
         {/* Header */}
         <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
                <span> Test </span>
            </div>
         </div>
        </>
    )
}