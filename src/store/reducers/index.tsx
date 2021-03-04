import { combineReducers } from 'redux'
import DashboardAtt from './dashboardReducer'
import Leaves from './leavesReducer'
import SummaryofTeam from './summaryofTeamReduser'
import SummaryofWork from './summaryofworkReduser'


const rootReducer = combineReducers({
    DashboardAtt,
    Leaves,
    SummaryofTeam,  
    SummaryofWork,  
})

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer