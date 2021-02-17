import ActionType, { IAction } from "../../types/constant"
import ITimeToday from "../../types/ITimeToday"

interface CheckInReducerState {
    password: string
    note: string
    todayEmps: ITimeToday[]
    extratimeStart: string
    extratimeFinish: string
    latest?: ITimeToday
    loading: boolean
    error: string
    
}

const initialState: CheckInReducerState = {
    password: '',
    note: '',
    todayEmps: [],
    extratimeStart: '',
    extratimeFinish: '',
    latest: undefined,
    loading: false,
    error: '',
}


function CheckInReducer(state: CheckInReducerState = initialState, action: IAction<any>) {

    switch (action.type) {
        case ActionType.GET_EMPLOYEES_TIME_TODAY_START: {
            return {
                ...state,
                loading: true
                
            }
        }
        case ActionType.GET_EMPLOYEES_TIME_TODAY_SUCCESS: {
            return {
                ...state,
                loading: false,
                todayEmps: action.payload as ITimeToday[],
                error: ''
            }
        }
        case ActionType.GET_EMPLOYEES_TIME_TODAY_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case ActionType.POST_TIME_TODAY_START: {
            return {
                ...state,
                loading: true
            }
        }
        case ActionType.POST_TIME_TODAY_SUCCESS:{
            const payload = action.payload as ITimeToday
            const remainEmps = state.todayEmps.filter(t => t.employeeId !== payload.employeeId)
            return{
                ...state,
                todayEmps: [...remainEmps, payload],
                latest: payload,
                loading: false
            }
        }        
        case ActionType.POST_TIME_TODAY_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case ActionType.PUT_TIME_TODAY_START:{
            return{
                ...state,
                loading: true
            }
        }
        case ActionType.PUT_TIME_TODAY_SUCCESS:{
            const payload = action.payload as ITimeToday
            const remainEmps = state.todayEmps.filter(t => t.employeeId !== payload.employeeId)
            return{
                ...state,
                todayEmps: [...remainEmps, payload],
                loading: true
            }
        }
        case ActionType.PUT_TIME_TODAY_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: return state
    }
}

export default CheckInReducer