import ActionType, { IAction } from "../../types/constant"
import Dashboard from "../../types/Dashboard"

interface DashboardReducerState {
    sickLeave?: number
    otherLeave?: number
    arrived?: number
    coming?: number
    totalEmployees?: number
    loading: boolean
    error: string
}

const initialSate: DashboardReducerState ={
    sickLeave: 0,
    otherLeave: 0,
    arrived: 0,
    coming: 0,
    totalEmployees: 0,
    loading: false,
    error: '',
}

function DashboardReducer(state :DashboardReducerState = initialSate, action: IAction<any>){
    switch (action.type) {
        case ActionType.GET_SICK_LEAVE_TO_DAY:
            return {
                ...state,
                loading:true,
            }
        case ActionType.GET_OTHER_LEAVE_TODAY:
            return{
                ...state,
                loading:true,
            }
        case ActionType.GET_ARRIVED :
            return{
                ...state,
                loading:true,
            }
        case ActionType.GET_COMMING:
            return{
                ...state,
                loading:true,
            }
        case ActionType.GET_TOTAL_EMPLOYEES:
            return{
                ...state,
                loading:true,
            }
        case ActionType.GET_DASHBOARD_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload

            }
        default: return state
    }
}

export default DashboardReducer
