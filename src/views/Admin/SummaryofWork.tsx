import React from "react";

// components
import SummaryofWork from "../../components/Cards/CardSummaryofwork/SummaryofWork"

import HeaderSummaryofWork from "../../components/Headerstats/HeaderSummaryofWork"
import SummaryofWorkNavbar from "../../components/Navbar/SummaryofWork"

export default function Dashboard() {
    return(
        <> 
        <HeaderSummaryofWork/>
        <SummaryofWorkNavbar/>
         {/* Header */}
         <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="w-full ml-4 mb-12 xl:mb-0 px-4">
                <SummaryofWork />
            </div>
         </div>
        </>
    )
}