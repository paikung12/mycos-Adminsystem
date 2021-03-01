import React,{useEffect} from 'react'
import { useSelector} from 'react-redux'
import useLeavesAction from '../../../hooks/useLeavesAction'
import {RootState} from '../../../store/reducers'
import TableCell from '@material-ui/core/TableCell';
import Leaves from "../../../types/leaves";
import classNames from 'classnames'


export default function TableOtherleaveToday() {
    const {getLeaves} = useLeavesAction()
    const leaves = useSelector((state: RootState) => state.Leaves.overviewleaves)
    const [data, setData] = React.useState([]); 

    useEffect(() => {
        getLeaves();
    }, [getLeaves])
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
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Detail
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaves.map((items : any , index: number) =>(
                                <tr key ={items}>
                                    <td className=" text-left py-3 px-4">{index+1}</td>
                                    <td className="text-left py-3 px-4">{items.name}</td>
                                    <td className="text-left py-3 px-4">{items.subject}</td>
                                    <td className="text-left py-3 px-4">{items.projectId}</td>
                                    <td className="text-left py-3 px-4">{items.team}</td>
                                    <td className="text-left py-3 px-4">{items.leaveType}</td>
                                </tr>   
                            ))}           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )   
}
