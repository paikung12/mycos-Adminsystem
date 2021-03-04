import React from "react";

// components

import TableOtherleaveToday from '../../components/Adminpage/PageLeaves/TableLeaveToday'
import TableOtherleaveMonth from '../../components/Adminpage/PageLeaves/TableLeaveMonth'
import TableOtherleave30Today from '../../components/Adminpage/PageLeaves/TableLeave30day'
import PersonRequestmonth from '../../components/Adminpage/PageLeaves/TableRequestMonth'
import PersonRequestoday from '../../components/Adminpage/PageLeaves/TableRequest30nextday'

import HeaderOtherleavrs from '../../components/Headerstats/HeaderLeave'
import NavbarOtherleave from '../../components/Navbar/Leave'

export default function Settings() {
  return (
    <>
    <NavbarOtherleave/>
      <HeaderOtherleavrs/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
                  <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
                    <TableOtherleaveToday />
                  </div>
                  <div className="w-full xl:w-4/12 px-4">
                    <TableOtherleaveMonth />
                  </div>
                  <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
                    <TableOtherleave30Today />
                  </div>
                  <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                    <PersonRequestmonth />
                  </div>
                  <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                    <PersonRequestoday />
                  </div>
            </div>
        </div>
    </>
  );
}
