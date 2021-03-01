import { combineReducers } from 'redux'
import DashboardAtt from './dashboardReducer'
import Leaves from './leavesReducer'
const rootReducer = combineReducers({
    DashboardAtt,
    Leaves

    
})

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer