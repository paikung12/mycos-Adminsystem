import React from "react";

// components

import TableAttendace from "../../components/Cards/CardTimeAttendace/TableTimeAttendace";

import TableTimeAttendace from "../../components/Navbar/TableTimeAtt";
import Headertable from "../../components/Headerstats/HeadertableAtt";

export default function Tables() {
  return (
    <>
     {/* Header */}
     <TableTimeAttendace/>
     <Headertable/>
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
