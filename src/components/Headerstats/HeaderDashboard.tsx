import React, { useEffect, useState } from "react";
import {  faCarSide, faChartBar,   faClinicMedical,   faUser, faUserCheck, faUserMinus, faUsers, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector} from 'react-redux'
import useDashboardAction from '../../hooks/useDashboardAction'
import {RootState} from '../../store/reducers'
import INumHeaderDashboard from '../../types/INumHeaderDashboard'




function HeaderDashboard() {
  const {getHeaderDashbord}  = useDashboardAction()
  const HeaderDashboard = useSelector((state: RootState) => state.HeaderDashboard.INumHeaderDashboard)
  ///// Hook ///////
  useEffect(() => {
    getHeaderDashbord();
}, [getHeaderDashbord])
console.log(HeaderDashboard)
  return(
    <>
        <div className="relative bg-yellow-300 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
          {HeaderDashboard.map(( items : any , index: number) =>(    
            <div>
              
              <div className="flex flex-wrap" >
                             
                <div className="mx-4"  >   
                    <div className="relative  min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg ">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                              <h5 className="text-gray-500 uppercase font-bold text-xs">
                              <span>arrived</span>
                              </h5>
                              <span className="font-semibold text-xl text-gray-800" >
                                <span>{items.arrived}</span>
                              </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial ">
                              <div
                                className={

                                  "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500 "
                                  
                                }
                              >
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
                  
                {/* Card stats Check-In*/}
                <div className="mx-4">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
                              <h5 className="text-gray-500 uppercase font-bold text-xs">
                              <span>Coming</span>
                              </h5>
                              <span className="font-semibold text-xl text-gray-800">
                                <span>{items.coming}</span>
                              </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial  ">
                              <div
                                className={
                                  "text-white p-3 text-center ml-10 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500  "
                                }
                              >
                              <FontAwesomeIcon icon={faCarSide} className=" " transform="grow-7"/>

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
                                <span>Sick Leave</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>{items.sickLeave}</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-10 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faClinicMedical} className=" " transform="grow-7"/>
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
                                <span>Orther leave</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>{items.otherLeave}</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500 "
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


                    {/* Card stats performance*/}
                <div className="mx-4">
                  <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase font-bold text-xs">
                                <span>All Employees</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>{items.totalEmployees}</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faUsers} className=" " transform="grow-7"/>
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
              ))} 
          </div>
          
        </div>
        
      </>
      )  
  }
  
  export default HeaderDashboard