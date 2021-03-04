import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
            getSummaryofWorkDispatch,
        } 
        from '../store/actions/summaryofwork'

function useDashboardAction() {
    const dispatch = useDispatch()
    
    const getSummaryofWork = useCallback(
        () => {
            dispatch(getSummaryofWorkDispatch())
        },
        [dispatch],
    )
    return {
        getSummaryofWork,
    }
}

export default useDashboardAction