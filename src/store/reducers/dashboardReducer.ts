import ActionType, { IAction } from "../../types/constant"
import ITimeToday from "../../types/ITimeToday"

interface DashboardReducerState {
    note: string
    todayEmps: ITimeToday[]
    extratimeStart: string
    extratimeFinish: string
    latest?: ITimeToday
    loading: boolean 
    error: string
}

const initialSate: DashboardReducerState ={
    note: '',
    todayEmps: [],
    extratimeStart: '',
    extratimeFinish: '',
    latest: undefined,
    loading: false,
    error: '',
}

function DashboardReducer(state :DashboardReducerState = initialSate, action: IAction<any>){
    switch (action.type) {
            case ActionType.GET_USERS: 
                return{
                    ...state,
                    loading: true
                }
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
            case ActionType.GET_SICK_LEAVE_TO_DAY:{
                return{
                    ...state,
                    loading : false,
                }
            }
            case ActionType.GET_TOTAL_EMPLOYEES:{
                return{
                    ...state,
                    loading : false
                }
            }
            case ActionType.GET_ARRIVED:{
                return{
                    ...state,
                    loading : false
                }
            }
            case ActionType.GET_COMMING:{
                return{
                    ...state,
                    loading : false,
                }
            }

            case ActionType.GET_DASHBOARD_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: action.payload

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
        default: return state
    }
}

export default DashboardReducer
