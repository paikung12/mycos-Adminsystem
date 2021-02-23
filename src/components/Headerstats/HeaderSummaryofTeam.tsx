import React from "react";
import { faBookmark, faBuilding, faChartBar, faChartPie, faCoffee, faHouseUser, faUser, faUserClock } from "@fortawesome/free-solid-svg-icons";
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






export default function HeaderSummaryofEmp() {
    return (
      <>
        {/* Header */}
        <div className="relative bg-yellow-300 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              <div className="flex flex-wrap">
                {/* Card stats Standard hour */}
                <div className=" ">
                    <div className="relative  min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg ">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                              <h5 className="text-gray-500 uppercase  text-xs">
                              <span>Standard hour</span>
                              </h5>
                              <span className="font-semibold text-xl text-gray-800">
                                <span>8</span>
                              </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial ">
                              <div
                                className={
                                  "text-white p-3 text-center ml-4 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 "
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

                {/* Card stats Office hour*/}
                <div className="mx-4">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
                              <h5 className="text-gray-500 uppercase  text-xs">
                              <span>Office hour</span>
                              </h5>
                              <span className="font-semibold text-xl text-gray-800">
                                <span>5</span>
                              </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial  ">
                              <div
                                className={
                                  "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500 "
                                }
                              >
                              <FontAwesomeIcon icon={faBuilding} className=" " transform="grow-7"/>
                              </div>
                            </div>
                          </div>
                            <p className="text-sm text-gray-500 mt-4">
                              <span>Since to Day</span>
                            </p>
                      </div>
                    </div>
                  </div>

                 {/* Card stats Extratime*/}
                 <div className="mx-4">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase  text-xs">
                                <span>Extratime</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>5</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-16 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faUserClock} className=" " transform="grow-7"/>
                                </div>
                              </div>
                            </div>
                              <p className="text-sm text-gray-500 mt-4">
                                <span>Since to Day</span>
                              </p>
                        </div>
                      </div>
                    </div>
                {/* Card stats Work from home*/}
                <div className="mx-4">
                  <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase  text-xs">
                                <span>Work from home</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>5.23</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faHouseUser} className=" " transform="grow-7"/>
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
    );
  }
  