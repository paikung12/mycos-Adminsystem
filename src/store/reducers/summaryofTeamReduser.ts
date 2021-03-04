import ActionType, { IAction } from "../../types/constant"
import ITeams from "../../types/ITeams"


interface SummaryofTeamReducerState {
    ITeams: ITeams[],

    projectId?:number,
    projectName?:string,
    description?:string,
    isRequisition?:boolean,
    employeesProjects?:null,
    
    loading: boolean,
    error: '',
}

const initialSate: SummaryofTeamReducerState = {
    ITeams:[],
    
    projectId: 0,
    projectName:'',
    description:'',
    isRequisition:false,
    employeesProjects: null,

    loading: false,
    error: '',
}

function SummaryofTeamReducer(state :SummaryofTeamReducerState = initialSate, action: IAction<any>){
    switch (action.type) {
        case ActionType.GET_SUMMARY_OF_TEAM:
            return {
                ...state,
                loading:true,
                ITeams: action.payload as ITeams[],
                error: ''
            }
        case ActionType.GET_SUMMARY_OF_TEAM_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }

}

export default SummaryofTeamReducer
