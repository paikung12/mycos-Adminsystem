import ActionType from "../../types/constant"
import timeAttendanceService from '../services/timeAttendanceService'



export const getSummaryofTeamDispatch = () => async (dispatch : any) =>{
    try{
        const result = await timeAttendanceService.getTeams()
        dispatch(({
            type: ActionType.GET_SUMMARY_OF_TEAM,
            payload: result.data
        }))
    }catch (err){
        console.log('getSummaryofteam err: ', err)
        dispatch(({
            type: ActionType.GET_SUMMARY_OF_TEAM_ERROR,
            payload: err
        }))
    }    
}