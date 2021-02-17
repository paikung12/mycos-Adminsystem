import React from "react";

// components
import SummaryofEmployees from "../../components/Cards/CardSummaryofEmployees/SummaryofEmp"

import HeaderSummaryofEmp from "../../components/Headerstats/HeaderSummaryofEmp"
import SummaryofEmp from "../../components/Navbar/SummaryofEmp"


export default function Dashboard() {
    return(
        <> 
        <HeaderSummaryofEmp/>
        <SummaryofEmp/>
         {/* Header */}
         <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
                <SummaryofEmployees/>
            </div>
         </div>
        </>
    )
}