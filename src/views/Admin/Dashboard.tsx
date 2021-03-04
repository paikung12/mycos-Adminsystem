import React from "react";

// components


import TableAttendace from "../../components/Adminpage/PageDashboard/TableTimeAttendace";


import HeaderDashboard from "../../components/Headerstats/HeaderDashboard"
import AdminNavbar from "../../components/Navbar/DashboardNavbar"

export default function Dashboard() {
  return (
    <>
    {/* Header */}
        <AdminNavbar />
          <HeaderDashboard />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <div className="flex flex-wrap mt-4">
                  <div className="w-full mb-12 px-4 ">
                    <TableAttendace />
                  </div>
                </div>
            </div>
    </>
  );
}
