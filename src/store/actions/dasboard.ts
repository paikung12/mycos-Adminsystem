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
export const putTimeAttendanceDispatch = (attId: string,  empTime?:ITimeToday) => async (dispatch:any) => {
    try{
        const result = await timeAttendanceService.putTimeToday(attId,empTime)
        dispatch(({
            type: ActionType.POST_TIME_TODAY_SUCCESS,
            payload: result.data
        }))
    }
    catch (err) {
        console.log('postTimesAttDispatch err: ', err)
        dispatch(({
            type: ActionType.PUT_TIME_TODAY_ERROR,
            payload: err
        }))
    }
}



