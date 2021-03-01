import React from "react";

// components

import TableOtherleaveToday from '../../components/Cards/CardLeaves/TableLeaveToday'
import TableOtherleaveMonth from '../../components/Cards/CardLeaves/TableLeaveMonth'
import TableOtherleave30Today from '../../components/Cards/CardLeaves/TableLeave30day'
import PersonRequestmonth from '../../components/Cards/CardLeaves/TableRequestMonth'
import PersonRequestoday from '../../components/Cards/CardLeaves/TableRequestToday'

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
