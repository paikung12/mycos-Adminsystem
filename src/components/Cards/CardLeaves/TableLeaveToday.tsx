import React,{useEffect} from 'react'
import { useSelector} from 'react-redux'
import useLeavesAction from '../../../hooks/useLeavesAction'
import {RootState} from '../../../store/reducers'
import Leavetoday from '../../../types/Leaves/leavetoday'



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
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-800">
                                Table : Leave Today
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
                                    Team
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
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
                    </table>
                </div>
            </div>
        </>
    )   
}
