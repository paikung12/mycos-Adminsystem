import ActionType, { IAction } from "../../types/constant"
import Leaves from "../../types/Leaves/leaves"
import Leavetoday from '../../types/Leaves/leavetoday'
import Leavemonth from "../../types/Leaves/leavemonth"
import Leave30day from "../../types/Leaves/leave30day"


interface LeaveReducerState {
    Leavetoday: Leavetoday[],
    Leavemonth:Leavemonth[],
    Leave30day:Leave30day[],

    name: string,
    subject: string,
    team: string,
    projectId: number,
    description: string,
    dateLeave: string,
    dateLeaveTo: string,
    leaveType:number,
    loading: boolean,
    error: '',

}

const initialSate: LeaveReducerState ={
    Leavetoday:[],
    Leavemonth:[],
    Leave30day:[],
    
    name:'',
    subject: '',
    team: '',
    projectId:0,
    description: '',
    dateLeave: '',
    dateLeaveTo: '',
    leaveType:0,
    loading: false,
    error: '',
}
function LeavesReducer(state :LeaveReducerState = initialSate, action: IAction<any>){
    switch (action.type) {
        case ActionType.GET_LEAVE:
            return {
                ...state,
                loading:true,
                error: ''
            }
        case ActionType.GET_LEAVE_TODAY:
            return{
                ...state,
                loading:true,
                Leavetoday:action.payload as Leavetoday[],
                error: ''
            }
        case ActionType.GET_LEAVE_MONTH  :
            return{
                ...state,
                loading:true,
                Leavemonth:action.payload as Leavemonth[] ,
                error: ''
            }
        case ActionType.GET_LEAVE_30_DAY:
            return{
                ...state,
                loading:true,
                Leave30day:action.payload as Leave30day[],
                error: ''
            }
        case ActionType.GET_LEAVE_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload

            }
        default: return state
    }
}

export default LeavesReducer
