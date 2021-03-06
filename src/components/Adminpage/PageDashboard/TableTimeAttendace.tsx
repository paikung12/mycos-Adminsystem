import React,{useEffect} from 'react'
import { useSelector} from 'react-redux'
import useDashboardAction from '../../../hooks/useDashboardAction'
import {RootState} from '../../../store/reducers'
import TableCell from '@material-ui/core/TableCell';
import ITimeToday from "../../../types/ITimeToday";
import classNames from 'classnames'
import styled from "styled-components";
import ShowMomentTime  from "./ShowMomentTime"
import ShowMomentExtratimeStart  from "./ShowExtratimeStart"
import ShowMomentExtratimeFinish  from "./ShowExtratimeFinish"
import BtnPutAttendance from './Button'
import { Table, TableContainer } from '@material-ui/core';


const LayoutDashboard = styled.div`
  flex: 7 1 0%;
  display: flex;
  .table-container{
    max-height: 90vh;
    scroll-behavior: smooth;
  }
  flex-direction: column;
  .selected-row {
    background-color: #F0F0F0;
  }
`;

const EMP_TIME_TODAY_ID = 'emp-time-today-'
function empsTodayByCheckInSelector(state: RootState) {
  const todayEmps = state.DashboardAtt.todayEmps || []
  return todayEmps.sort((a: ITimeToday, b: ITimeToday) => {
    if (a.checkIn && b.checkIn) {
      if (a.checkIn < b.checkIn)
        return -1
    }
    return 0
  })
}

function TableTimeAttendace() {
    const {getDashbordAttendace}  = useDashboardAction()
    const emps = useSelector(empsTodayByCheckInSelector)
    const latestEmpCheckIn = useSelector((state: RootState) => state.DashboardAtt.latest)
  


    ///// Hook ///////
    useEffect(() =>{
        getDashbordAttendace()
    },[getDashbordAttendace])

    useEffect(() => {
        if (latestEmpCheckIn) {
          const curEle = document.getElementById(`${EMP_TIME_TODAY_ID}${latestEmpCheckIn.employeeId}`)
          if (curEle){
            curEle.scrollIntoView()
          }
        }
      }, [latestEmpCheckIn])
        return(
            <>
            <LayoutDashboard className="h-screen">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0 bg-gray-800">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-white">
                                    Table : TimeAttendance
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        {/* table */}
                        <TableContainer className="table-container ">
                          <Table className="items-center w-full bg-transparent border-collapse" stickyHeader aria-label="sticky table">
                              <thead>
                                  <tr>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      No
                                      </th>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      Name
                                      </th>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      Check-In
                                      </th>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      Check-Out
                                      </th>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      Extratime-start
                                      </th>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      Extratime-finish
                                      </th>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      Note
                                      </th>
                                      <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                      Detail
                                      </th>
                                  </tr>
                              </thead>
                                <tbody className="text-gray-700  ">
                                                {emps.length > 0 ? emps.map((emp: ITimeToday, index: number) => {
                                                  return (
                                                    <tr
                                                      tabIndex={-1} 
                                                      key={emp.employeeId}
                                                      id={`${EMP_TIME_TODAY_ID}${emp.employeeId?.toString()}`}
                                                      className={classNames({"selected-row": emp.employeeId === latestEmpCheckIn?.employeeId})}
                                                    >
                                                      <TableCell className="text-left py-3 px-4">{index + 1}</TableCell>
                                                      <TableCell className="text-left py-3 px-4">{emp.nickName}</TableCell>
                                                      <TableCell className="text-left py-3 px-4"><ShowMomentTime time={emp.checkIn} /></TableCell>
                                                      <TableCell className="text-left py-3 px-4"><ShowMomentTime time={emp.checkOut} /></TableCell>
                                                      <TableCell className="text-left py-3 px-4"><ShowMomentExtratimeStart extratimeStart={emp.extratimeStart} /></TableCell>
                                                      <TableCell className="text-left py-3 px-4"><ShowMomentExtratimeFinish extratimeFinish={emp.extratimeFinish} /></TableCell>
                                                      <TableCell className="text-left py-3 px-4">{emp.note}</TableCell>
                                                      <TableCell className="text-left py-3 px-4">
                                                        <BtnPutAttendance/>
                                                      </TableCell>
                                                    </tr>
                                                  );
                                                }) : <tr>
                                                      <TableCell colSpan={5} className="justify-center">{'No Employee Today'}</TableCell>
                                                    </tr>}
                                  </tbody>   
                              </Table>
                          </TableContainer>
                          </div>
                  </div>
                </LayoutDashboard>
            </>
    )   

}
export default TableTimeAttendace
