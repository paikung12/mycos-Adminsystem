import React from "react";

// components

import CardBarLine from '../../components/Cards/CardOtherleaves/OtherBarChart'
import CardPieChart from '../../components/Cards/CardOtherleaves/OtherPieChart'
import TableOtherleaveToday from '../../components/Cards/CardOtherleaves/TableOtherleaveToday'
import TableOtherleaveMonth from '../../components/Cards/CardOtherleaves/TableOthereaveMonth'
import TableOtherleave30Today from '../../components/Cards/CardOtherleaves/TableOtherleave30day'

import HeaderOtherleavrs from '../../components/Headerstats/HeaderOtherleave'
import NavbarOtherleave from '../../components/Navbar/OtherLeave'

export default function Settings() {
  return (
    <>
    <NavbarOtherleave/>
    <HeaderOtherleavrs/>
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap">
              <div className="w-full  px-4">
                <CardBarLine />
              </div>
              <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                <TableOtherleaveToday />
              </div>
              <div className="w-full xl:w-6/12 px-4">
                <TableOtherleaveMonth />
              </div>
              <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                <TableOtherleave30Today />
              </div>
        </div>
    </div>
    </>
  );
}
