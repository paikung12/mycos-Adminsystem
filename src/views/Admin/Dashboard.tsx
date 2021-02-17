import React from "react";

// components

import CardPieChart from "../../components/Cards/CardDashboard/CardPieChart"
import CardBarChart from "../../components/Cards/CardDashboard/CardBarChart"
import TableOtherleaveToday from "../../components/Cards/CardDashboard/TableOtherleaveToday"
import TablesickleaveToday from "../../components/Cards/CardDashboard/TableSickleaveToday"
import TableRequestMonth from "../../components/Cards/CardDashboard/TableRequestMonth"
import TableRequestToday from "../../components/Cards/CardDashboard/TableRequestToday"

import HeaderDashboard from "../../components/Headerstats/HeaderDashboard"
import AdminNavbar from "../../components/Navbar/DashboardNavbar"

export default function Dashboard() {
  return (
    <>
    {/* Header */}
        <AdminNavbar />
          <HeaderDashboard />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
                <CardPieChart />
              </div>
              <div className="w-full xl:w-7/12 px-4">
                <CardBarChart />
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                <TableOtherleaveToday />
              </div>
              <div className="w-full xl:w-6/12 px-4">
                <TablesickleaveToday />
              </div>
              <div className="w-full xl:w-6/12 px-4">
                <TableRequestMonth />
              </div>
              <div className="w-full xl:w-6/12 px-4">
                <TableRequestToday />
              </div>
            </div>
          </div>
    </>
  );
}
