import ActionType, { IAction } from "../../types/constant"


interface SummaryofWorkReducerState {


    loading: boolean,
    error: '',
}

const initialSate: SummaryofWorkReducerState ={


    loading: false,
    error: '',
}

function SummaryofWorkReducer(state :SummaryofWorkReducerState = initialSate, action: IAction<any>){
    switch (action.type) {
        case ActionType.GET_SUMMARY_OF_WORK:
            return {
                ...state,
                loading:true,
                error: ''
            }
        case ActionType.GET_SUMMARY_OF_WORK_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }

}
export default SummaryofWorkReducer
