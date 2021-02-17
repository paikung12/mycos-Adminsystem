import { notDeepEqual } from "assert"
import ActionType from "../../types/constant"
import timeAttendanceService from '../services/timeAttendanceService'

export const getLeavesAttendaceDispatch = () => async (dispatch : any) =>{
    try{
        dispatch(({
            type: ActionType. GET_LEAVE
        }))
        dispatch(({
            type: ActionType.GET_LEAVE_TODAY
        }))
        dispatch(({
            type: ActionType.GET_LEAVE_MONTH
        }))
        dispatch(({
            type: ActionType.GET_LEAVE_30_DAY 
        }))
    }catch (err){
        console.log('getDashbordAttendace err: ', err)
        dispatch(({
            type: ActionType.GET_LEAVE_ERROR,
            payload: err
        }))
    }    
}


