import React from "react";
import { faBookmark, faChartBar, faChartPie, faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






export default function HeaderStats() {
    return (
      <>
        {/* Header */}
        <div className="relative bg-yellow-300 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              <div className="flex flex-wrap">
                {/* Card stats Attendance */}
                <div className="mx-1">
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
                                  "text-white p-3 text-center ml-8 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 "
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

                {/* Card stats Leave today*/}
                <div className="mx-5">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
                              <h5 className="text-gray-500 uppercase font-bold text-xs">
                              <span>Leave today</span>
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
                              </div>
                            </div>
                          </div>
                            <p className="text-sm text-gray-500 mt-4">
                              <span>Since to Day</span>
                            </p>
                      </div>
                    </div>
                  </div>

                 {/* Card stats Other Leave*/}
                 <div className="mx-4">
                    <div className="relative flex flex-col min-w-0 ml-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-500 uppercase font-bold text-xs">
                                <span>Other Leave</span>
                                </h5>
                                <span className="font-semibold text-xl text-gray-800">
                                  <span>5</span>
                                </span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial ">
                                <div
                                  className={
                                    "text-white p-3 text-center ml-10 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-500 "
                                  }
                                >
                                <FontAwesomeIcon icon={faBookmark} className=" " transform="grow-7"/>
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
                                <span>performance</span>
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
                                <FontAwesomeIcon icon={faChartPie} className=" " transform="grow-7"/>
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
  