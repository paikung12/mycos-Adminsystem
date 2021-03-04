import React from "react";
import { Link } from "react-router-dom";

// get our fontawesome imports
import {   faBookmark, faStream, faChartLine,faChartArea, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return(
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    <span className="text-center">
                        Mycos: AdminSystem
                    </span>
                    <div
                        className={
                        "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                        collapseShow
                        }
                        >     
                        <hr className="my-4 md:min-w-full" />
                            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline ">
                                Admin Layout Pages
                            </h6>
                        {/* Navigation */}
                            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                                {/* Dashboard */}
                                <li className="mb-2 px-1 py-1 text-gray-100 flex flex-row  border-yellow-300 hover:text-black   hover:bg-yellow-200  hover:font-bold rounded rounded-lg">

                                    <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/dashboard") !== -1
                                        ? "text-blue-500 hover:text-blue-600"
                                        : "text-gray-800 hover:text-gray-600")
                                    }
                                    to="/admin/dashboard"
                                    >
                                    <FontAwesomeIcon icon={faStream}  className=" ml-2" transform="grow-7" />
                                        <span className=" ml-3 ">Dashboard</span>
                                    </Link>
                                </li>
                                {/* Other Leaves */}
                                <li className="mb-2 px-1 py-1 text-gray-100 flex flex-row  border-yellow-300 hover:text-black   hover:bg-yellow-200  hover:font-bold rounded rounded-lg">
                                    <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/Overviewleave") !== -1
                                        ? "text-blue-500 hover:text-blue-600"
                                        : "text-gray-800 hover:text-gray-600")
                                    }
                                    to="/admin/Overviewleave"
                                    >
                                        <FontAwesomeIcon icon={faBookmark} className="ml-2" transform="grow-7"/>
                                        <span className=" ml-3">Overview Leaves</span>                       
                                    </Link>
                                </li>
                    
                            </ul>
                            <hr className="my-4 md:min-w-full" />
                                <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline ">
                                    Export & summary
                                </h6>
                                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                                    {/* Export */}
                                        <li className="mb-2 px-1 py-1 text-gray-100 flex flex-row  border-yellow-300 hover:text-black   hover:bg-yellow-200  hover:font-bold rounded rounded-lg">
                                            <Link
                                            className={
                                                "text-xs uppercase py-3 font-bold block " +
                                                (window.location.href.indexOf("/admin/export") !== -1
                                                ? "text-blue-500 hover:text-blue-600"
                                                : "text-gray-800 hover:text-gray-600")
                                            }
                                            to="/admin/export"
                                            >
                                                <FontAwesomeIcon icon={faChartLine} className="ml-2" transform="grow-7"/>
                                                <span className=" ml-3">Export Attendace</span>                       
                                            </Link>
                                        </li>
                                    {/* summary of employees */}
                                        <li className="mb-2 px-1 py-1 text-gray-100 flex flex-row  border-yellow-300 hover:text-black   hover:bg-yellow-200  hover:font-bold rounded rounded-lg">
                                            <Link
                                            className={
                                                "text-xs uppercase py-3 font-bold block " +
                                                (window.location.href.indexOf("/admin/summary of employees") !== -1
                                                ? "text-blue-500 hover:text-blue-600"
                                                : "text-gray-800 hover:text-gray-600")
                                            }
                                            to="/admin/summary of employees"
                                            >
                                                <FontAwesomeIcon icon={faUsers} className="ml-2" transform="grow-7"/>
                                                <span className=" ml-3">Summary of Team</span>                       
                                            </Link>
                                        </li>
                                    {/* summary of work */}
                                        <li className="mb-2 px-1 py-1 text-gray-100 flex flex-row  border-yellow-300 hover:text-black   hover:bg-yellow-200  hover:font-bold rounded rounded-lg">
                                            <Link
                                            className={
                                                "text-xs uppercase py-3 font-bold block " +
                                                (window.location.href.indexOf("/admin/summary of work") !== -1
                                                ? "text-blue-500 hover:text-blue-600"
                                                : "text-gray-800 hover:text-gray-600")
                                            }
                                            to="/admin/summary of work"
                                            >
                                                <FontAwesomeIcon icon={faChartArea} className="ml-2" transform="grow-7"/>
                                                <span className=" ml-3">summary of work</span>                       
                                            </Link>
                                        </li>
                                </ul>
                        </div> 
               </div>     
            </nav>
        </>
    )
}

