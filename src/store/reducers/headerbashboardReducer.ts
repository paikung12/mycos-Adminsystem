import ActionType, { IAction } from "../../types/constant"
import INumHeaderDashboard from "../../types/INumHeaderDashboard"


interface HeaderDashboardReducerState {
    INumHeaderDashboard: INumHeaderDashboard[],
    sickLeave?:number,
    otherLeave?:number,
    arrived?:number,
    coming?:number,
    totalEmployees?:number,   
    loading:boolean,
    error: '',
}

const initialSate: HeaderDashboardReducerState = {
    INumHeaderDashboard:[],
    sickLeave: 0,
    otherLeave: 0,
    arrived: 0,
    coming: 0,
    totalEmployees: 0,
    loading: false,
    error: '',
}

function HeaderDashboardReducer(state :HeaderDashboardReducerState = initialSate, action: IAction<any>){
    switch (action.type) {
        case ActionType.GET_NUM_OF_DASHBOARD :
            return {
                ...state,
                loading:true,
                INumHeaderDashboard: action.payload as INumHeaderDashboard[],
                error: ''
            }
        case ActionType.GET_NUM_OF_DASHBOARD_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
    default: return state
    }

}

export default HeaderDashboardReducer
