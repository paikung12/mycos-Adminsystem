import { notDeepEqual } from "assert"
import ActionType from "../../types/constant"
import timeAttendanceService from '../services/timeAttendanceService'

export const getLeavesAttendaceDispatch = () => async (dispatch : any) =>{
    try{
        const result = await timeAttendanceService.getleavestoday()
        dispatch(({
            type: ActionType.GET_LEAVE_TODAY,
            payload: result.data
        }))
    }catch (err){
        console.log('getLeavestoday err: ', err)
        dispatch(({
            type: ActionType.GET_LEAVE_ERROR,
            payload: err
        }))
    }    
}
export const getLeavesMonthAttendaceDispatch = () => async (dispatch : any) =>{
    try{
        const result = await timeAttendanceService.getleavesmonth()
        dispatch(({
            type: ActionType.GET_LEAVE_MONTH,
            payload: result.data
        }))
    }
    catch (err){
        console.log('LeavesMonth err: ', err)
        dispatch(({
            type: ActionType.GET_LEAVE_ERROR,
            payload: err
        }))
    }    
}
export const getLeaves30NextDayAttendaceDispatch = () => async (dispatch : any) =>{
    try{
        const result = await timeAttendanceService.getleavesto30nextday()
        dispatch(({
            type: ActionType.GET_LEAVE_30_DAY,
            payload: result.data
        }))
    }
    catch (err){
        console.log('Leaveso30nextday err: ', err)
        dispatch(({
            type: ActionType.GET_LEAVE_ERROR,
            payload: err
        }))
    }    
}


