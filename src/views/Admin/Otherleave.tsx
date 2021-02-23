import React from "react";

// components
import TableOtherleaveToday from '../../components/Cards/CardOtherleaves/TableOtherleaveToday'
import TableOtherleaveMonth from '../../components/Cards/CardOtherleaves/TableOthereaveMonth'
import TableOtherleave30Today from '../../components/Cards/CardOtherleaves/TableOtherleave30day'
import TableRequestMonth from '../../components/Cards/CardOtherleaves/TableRequestMonth'
import TableRequestToday from '../../components/Cards/CardOtherleaves/TableRequestToday'


import HeaderOtherleavrs from '../../components/Headerstats/HeaderOtherleave'
import NavbarOtherleave from '../../components/Navbar/OtherLeave'

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
                <TableRequestMonth />
              </div>
              <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                <TableRequestToday />
              </div>
        </div>
    </div>
    </>
  );
}
