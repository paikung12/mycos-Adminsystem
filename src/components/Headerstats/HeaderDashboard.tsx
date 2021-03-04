import React, { useEffect, useState } from "react";
import {  faChartBar,   faUser, faUserCheck, faUserMinus, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector} from 'react-redux'
import useDashboardAction from '../../hooks/useDashboardAction'
import {RootState} from '../../store/reducers'



function HeaderDashboard() {
  const {getDashbordAttendace}  = useDashboardAction()
  ///// Hook ///////
  useEffect(() => {
    getDashbordAttendace();
}, [getDashbordAttendace])
  return(
    <>
        {/* Header */}
        <div className="relative bg-yellow-300 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
            
              <div className="flex flex-wrap" >
                
                {/* Card stats Attendance */}
                <div className="mx-5">
                    <div className="relative  min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg ">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                              <h5 className="text-gray-500 uppercase font-bold text-xs">
                              <span>Attendance</span>
                              </h5>
                              <span className="font-semibold text-xl text-gray-800">
                                <span>38</span>
                              </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial ">
                              <div
                                className={

                                  "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500 "
                                  
                                }
                              >
                              <FontAwesomeIcon icon={faChartBar} className=" " transform="grow-7"/>
                              </div>
                            </div>
                          </div>
                            <p className="text-sm text-gray-500 mt-4">
                              <span>Since to Day</span>
                            </p>
                      </div>
                    </div>
                  </div>
                {/* Card stats Check-In*/}
                <div className="mx-5">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
                              <h5 className="text-gray-500 uppercase font-bold text-xs">
                              <span>Check-In</span>
                              </h5>
                              <span className="font-semibold text-xl text-gray-800">
                                <span>5</span>
                              </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial  ">
                              <div
                                className={
                                  "text-white p-3 text-center ml-10 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500 "
                                }
                              >
                              <FontAwesomeIcon icon={faUser} className=" " transform="grow-7"/>

                              <FontAwesomeIcon icon={faUserCheck} className=" " transform="grow-7"/>
                              </div>
                            </div>
                          </div>
                            <p className="text-sm text-gray-500 mt-4">
                              <span>Since to Day</span>
                            </p>
                      </div>
                    </div>
                  </div>
                 {/* Card stats Check-out*/}
                 <div className="mx-4">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase font-bold text-xs">
                                <span>Check-out</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>5</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-10 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faUserMinus} className=" " transform="grow-7"/>
                                </div>
                              </div>
                            </div>
                              <p className="text-sm text-gray-500 mt-4">
                                <span>Since to Day</span>
                              </p>
                        </div>
                      </div>
                    </div>
                {/* Card stats performance*/}
                <div className="mx-4">
                  <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase font-bold text-xs">
                                <span>Leave to day</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>5.23</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faUserTimes} className=" " transform="grow-7"/>
                                </div>
                              </div>
                            </div>
                              <p className="text-sm text-gray-500 mt-4">
                                <span>Since to Day</span>
                              </p>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>      
          </div>
        </div>
      </>
      )  
  }
  
  export default HeaderDashboard
