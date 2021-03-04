import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
    getSummaryofTeamDispatch,
        } 
        from '../store/actions/summaryofteam'

function useDashboardAction() {
    const dispatch = useDispatch()
    
    const getSummaryofTeam = useCallback(
        () => {
            dispatch(getSummaryofTeamDispatch())
        },
        [dispatch],
    )
    return {
        getSummaryofTeam,
    }
}

export default useDashboardAction