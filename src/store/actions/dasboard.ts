import { notDeepEqual } from "assert"
import ActionType from "../../types/constant"
import timeAttendanceService from '../services/timeAttendanceService'

export const getDashbordAttendaceDispatch = () => async (dispatch : any) =>{
    try{
        dispatch(({
            type: ActionType.GET_SICK_LEAVE_TO_DAY
        }))
        dispatch(({
            type: ActionType.GET_OTHER_LEAVE_TODAY
        }))
        dispatch(({
            type: ActionType.GET_ARRIVED
        }))
        dispatch(({
            type: ActionType.GET_TOTAL_EMPLOYEES 
        }))
    }catch (err){
        console.log('getDashbordAttendace err: ', err)
        dispatch(({
            type: ActionType.GET_DASHBOARD_ERROR,
            payload: err
        }))
    }
    
}


