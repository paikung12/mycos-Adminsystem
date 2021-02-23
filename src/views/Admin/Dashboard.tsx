import React from "react";

// components

import TableTimeAttendace from '../../components/Cards/CardDashboard/TableTimeAttendace'

import HeaderDashboard from "../../components/Headerstats/HeaderDashboard"
import AdminNavbar from "../../components/Navbar/DashboardNavbar"

export default function Dashboard() {
  return (
    <>
    {/* Header */}
        <AdminNavbar />
          <HeaderDashboard />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <TableTimeAttendace/>
          </div>
    </>
  );
}
