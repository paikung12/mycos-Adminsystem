import React from "react";
import {  faCalendar, faCalendarAlt, faCalendarWeek, faChartBar, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";






export default function HeaderOtherleave() {
  const leavesmonth = useSelector((state: RootState) => state.Leaves.Leavemonth)
  const leavestoday = useSelector((state: RootState) => state.Leaves.Leavetoday)
  const leaveIn30day = useSelector((state: RootState) => state.Leaves.Leave30day)

  const countleavemonth = leavesmonth.length;
  const countleavetoday = leavestoday.length;
  const countleavenextday = leaveIn30day.length;

    return (
      <>
        <div className="relative bg-yellow-300 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              <div className="flex flex-wrap">
                
                {/* Card stats Leave today*/}
                <div className="mx-4">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
                              <h5 className="text-gray-500 uppercase font-bold text-xs">
                              <span>Leave today</span>
                              </h5>
                              <span className="font-semibold text-xl text-gray-800">
                                <span>{countleavetoday}</span>
                              </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial  ">
                              <div
                                className={
                                  "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500 "
                                }
                              >
                              <FontAwesomeIcon icon={faCalendarWeek} className=" " transform="grow-7"/>
                              </div>
                            </div>
                          </div>
                            <p className="text-sm text-gray-500 mt-4">
                              <span>Since to Day</span>
                            </p>
                      </div>
                    </div>
                  </div>

                 {/* Card stats Leaves month*/}
                 <div className="mx-5">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase font-bold text-xs">
                                <span>Leaves month</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>{countleavemonth}</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faCalendar} className=" " transform="grow-7"/>
                                </div>
                              </div>
                            </div>
                              <p className="text-sm text-gray-500 mt-4">
                                <span>Since in month</span>
                              </p>
                        </div>
                      </div>
                    </div>
                {/* Card stats Leave in 30 day*/}
                <div className="mx-5">
                  <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase font-bold text-xs">
                                <span>Leave in 30 next day</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>{countleavenextday}</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faCalendarAlt} className=" " transform="grow-7"/>
                                </div>
                              </div>
                            </div>
                              <p className="text-sm text-gray-500 mt-4">
                                <span>Since in 30 next day</span>
                              </p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }