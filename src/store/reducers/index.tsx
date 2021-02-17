import { combineReducers } from 'redux'
import tableAtt from './tableAttReducer'

const rootReducer = combineReducers({
    tableAtt,
    
})

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer