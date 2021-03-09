import React,{useEffect} from 'react'
import { useSelector} from 'react-redux'
import useLeavesAction from '../../../hooks/useLeavesAction'
import {RootState} from '../../../store/reducers'
import Moment from 'react-moment';
import styled from 'styled-components';
import {  Table, TableContainer } from '@material-ui/core';


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



export default function TableRequestToday() {
    const {getLeaves30NextDay} = useLeavesAction()
    const leaveIn30day = useSelector((state: RootState) => state.Leaves.Leave30day)

    useEffect(() => {
        getLeaves30NextDay();
    }, [getLeaves30NextDay])
    console.log("leaveIn30day" ,leaveIn30day)
    return(
        <>
        <LayoutDashboard>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0 bg-gray-800">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-white">
                                Persons who request leave in 30-next day
                            </h3>
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
                                projectName
                                </th>
                                <th className="sticky top-0 px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Subject
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Description
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Detail
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {leaveIn30day.map((items : any, index: number) =>(
                                    <tr key ={items.employeeId}>
                                        <td className=" text-left py-3 px-4">{index+1}</td>
                                        <td className="text-left py-3 px-4">{items.name}</td>
                                        <td className="text-left py-3 px-4">{items.projectName}</td>
                                        <td className="text-left py-3 px-4">{items.subject}</td>
                                        <td className="text-left py-3 px-4"><Moment format="YYYY/MM/DD">{items.dateLeave}</Moment></td>
                                        <td className="text-left py-3 px-4"><Moment format="YYYY/MM/DD">{items.dateLeaveTo}</Moment></td>
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


