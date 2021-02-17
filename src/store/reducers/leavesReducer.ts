import ActionType, { IAction } from "../../types/constant"
import Leaves from "../../types/leaves"

interface LeaveReducerState {
    name: string,
    subject: string,
    team: string,
    description: string,
    dateLeave: string,
    dateLeaveTo: string,
    loading: boolean,
    error: '',

}

const initialSate: LeaveReducerState ={
    
    name:'',
    subject: '',
    team: '',
    description: '',
    dateLeave: '',
    dateLeaveTo: '',
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
                error: ''
            }
        case ActionType.GET_LEAVE_MONTH  :
            return{
                ...state,
                loading:true,
                error: ''
            }
        case ActionType.GET_LEAVE_30_DAY:
            return{
                ...state,
                loading:true,
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
