import React,{useEffect} from 'react'
import { useSelector} from 'react-redux'
import styled from 'styled-components';
import useLeavesAction from '../../../hooks/useLeavesAction'
import {RootState} from '../../../store/reducers'

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
export default function TableleaveMonth() {
    const {getLeavesMonth} = useLeavesAction()
    const leavesmonth = useSelector((state: RootState) => state.Leaves.Leavemonth)

    useEffect(() => {
        getLeavesMonth();
    }, [getLeavesMonth])
    console.log("leavesmonth" ,leavesmonth)
    return(
        <>
        <LayoutDashboard>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0 bg-gray-800">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                            <h3 className="font-semibold text-base text-white">
                                Table : Leave Month
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                No
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">

                                Name
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Subject
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leavesmonth.map((items : any , index: number) =>(
                                    <tr key ={items.employeeId}>
                                        <td className=" text-left py-3 px-4">{index+1}</td>
                                        <td className="text-left py-3 px-4">{items.name}</td>
                                        <td className="text-left py-3 px-4">{items.subject}</td>
                                    </tr>   
                                ))}       
                        </tbody>
                    </table>
                </div>
            </div>
            </LayoutDashboard>
        </>
    )   
}
