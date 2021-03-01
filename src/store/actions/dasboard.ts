import { notDeepEqual } from "assert"
import ActionType from "../../types/constant"
import timeAttendanceService from '../services/timeAttendanceService'
import ITimeToday from "../../types/ITimeToday"


export const getDashbordAttendanceDispatch = () => async (dispatch : any) =>{
    try{
        dispatch(({
            type: ActionType.GET_EMPLOYEES_TIME_TODAY_START,
        }))
        const result = await timeAttendanceService.getTimeOfEmpsToday()
        dispatch(({
            type: ActionType.GET_EMPLOYEES_TIME_TODAY_SUCCESS,
            payload: result.data
        }))
        
    }catch (err){
        console.log('getDashbordAttendace err: ', err)
        dispatch(({
            type: ActionType.GET_DASHBOARD_ERROR,
            payload: err
        }))
    }
    
}
export const getDashbordAttendaceHeader = () => async (dispatch : any)=> {
    try {
        const result = await timeAttendanceService.getHeaderDashboard()
        dispatch(({
            type: ActionType.GET_TOTAL_EMPLOYEES,
            payload: result.data
        }))
        dispatch(({
            type: ActionType.GET_LEAVE_TODAY,
            payload: result.data
        }))
        dispatch(({
            type: ActionType.GET_ARRIVED,
            payload: result.data
        }))
        dispatch(({
            type: ActionType.GET_COMMING,
            payload: result.data
        }))
        dispatch(({
            type: ActionType.GET_LEAVE_TODAY,
            payload: result.data
        }))
    }catch (err){
    console.log('getDashbordAttendaceHeader err: ', err)
    dispatch(({
        type: ActionType.GET_DASHBOARD_ERROR,
        payload: err
    }))
}
}

export const putTimeAttendanceDispatc = (empTime?:ITimeToday) => async (dispatch:any) => {
    try{
        dispatch(({
            type: ActionType.PUT_TIME_TODAY_START
        }))
        const result = await timeAttendanceService.putTimeToday(empTime)
        dispatch(({
            type: ActionType.PUT_TIME_TODAY_SUCCESS,
            payload: result.data
        }))
    }
    catch (err) {
        console.log('putEmployeeTimesDispatch err: ', err)
        dispatch(({
            type: ActionType.PUT_TIME_TODAY_ERROR,
            payload: err
        }))
    }
}



