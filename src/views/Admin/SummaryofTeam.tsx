import React from "react";

// components
import SummaryofEmployees from "../../components/Adminpage/PageSummaryofTeam/SummaryofTeam"

import HeaderSummaryofEmp from "../../components/Headerstats/HeaderSummaryofTeam"
import SummaryofEmp from "../../components/Navbar/SummaryofTeam"


export default function Dashboard() {
    return(
        <> 
        <HeaderSummaryofEmp/>
        <SummaryofEmp/>
         {/* Header */}
         <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="w-full  mb-12 xl:mb-0 px-4">
                <SummaryofEmployees/>
            </div>
         </div>
        </>
    )
}