import ActionType from "../../types/constant"
import timeAttendanceService from '../services/timeAttendanceService'



export const getSummaryofWorkDispatch = () => async (dispatch : any) =>{
    try{
        const result = await timeAttendanceService.getleavestoday()
        dispatch(({
            type: ActionType.GET_SUMMARY_OF_WORK,
            payload: result.data
        }))
    }catch (err){
        console.log('getSummaryofwork err: ', err)
        dispatch(({
            type: ActionType.GET_SUMMARY_OF_WORK_ERROR,
            payload: err
        }))
    }    
}