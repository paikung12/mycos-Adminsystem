import React,{useEffect} from 'react'
import { useSelector} from 'react-redux'
import styled from 'styled-components'
import useLeavesAction from '../../../hooks/useLeavesAction'
import {RootState} from '../../../store/reducers'
import Leavetoday from '../../../types/Leaves/leavetoday'
import { Table, TableContainer } from '@material-ui/core';


const LayoutDashboard = styled.div`
.table-container{
    max-height: 30vh;
    scroll-behavior: smooth;
  }
  flex-direction: column;
  .selected-row {
    background-color: #F0F0F0;
  }
`;

export default function TableleaveToday() {
    const {getLeaves} = useLeavesAction()
    const leavestoday = useSelector((state: RootState) => state.Leaves.Leavetoday)
    const [data, setData] = React.useState([]); 

    useEffect(() => {
        getLeaves();
    }, [getLeaves])
    console.log("leavestoday" ,leavestoday)
    return(
        <>
        <LayoutDashboard>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0 bg-gray-800" >
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-white ">
                               Leave Today
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                <TableContainer className="table-container">
                        <Table className="items-center w-full bg-transparent border-collapse" stickyHeader aria-label="sticky table">
                        <thead>
                            <tr>
                                <th className="sticky top-0 px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    No
                                </th>
                                <th className="sticky top-0 px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Name
                                </th>
                                <th className="sticky top-0 px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Team
                                </th>
                                <th className="sticky top-0 px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Subject
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leavestoday.map((leavestoday: Leavetoday , index: number) =>(
                                <tr key ={leavestoday.employeeId}>
                                    <td className=" text-left py-3 px-4">{index+1}</td>
                                    <td className="text-left py-3 px-4">{leavestoday.name}</td>
                                    <td className="text-left py-3 px-4">{leavestoday.team}</td>
                                    <td className="text-left py-3 px-4">{leavestoday.subject}</td>
                                </tr>   
                            ))}           
                        </tbody>
                    </Table>
                    </TableContainer>
                </div>
            </div>
            </LayoutDashboard>
        </>
    )   
}