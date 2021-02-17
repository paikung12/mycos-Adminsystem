import { notDeepEqual } from "assert"
import ActionType from "../../types/constant"
import ITimeToday from "../../types/ITimeToday"
import timeAttendanceService from '../services/timeAttendanceService'


export const getEmployeeTimesDispatch = () => async (dispatch: any) => {
    try {
        dispatch(({
            type: ActionType.GET_EMPLOYEES_TIME_TODAY_START
        }))
        const result = await timeAttendanceService.getTimeOfEmpsToday()
        dispatch(({
            type: ActionType.GET_EMPLOYEES_TIME_TODAY_SUCCESS,
            payload: result.data
        }))
    } catch (err) {
        console.log('getEmployeeTimesDispatch err: ', err)
        dispatch(({
            type: ActionType.GET_EMPLOYEES_TIME_TODAY_ERROR,
            payload: err
        }))
    }
}

export const postTimeDispatch = (password: string, empTime?: ITimeToday ,  note?: ITimeToday ) => async (dispatch: any) => {
    try {
        dispatch(({
            type: ActionType.POST_TIME_TODAY_START
        }))
        const result = await timeAttendanceService.postTimeToday(password, empTime )
        dispatch(({
            type: ActionType.POST_TIME_TODAY_SUCCESS,
            payload: result.data
        }))
    } catch (err) {
        console.log('postEmployeeTimesDispatch err: ', err)
        dispatch(({
            type: ActionType.POST_TIME_TODAY_ERROR,
            payload: err
        }))
    }
}

export const putTimeDispatch = (empTime?:ITimeToday) => async (dispatch:any) => {
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
