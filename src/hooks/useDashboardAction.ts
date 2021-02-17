import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
        getDashbordAttendaceDispatch,        
        } 
        from '../store/actions/dasboard'

function useDashboardAction() {
    const dispatch = useDispatch()

    const getDashbordAttendace = useCallback(
        () => {
            dispatch(getDashbordAttendaceDispatch())
        },
        [dispatch],
    )
    return {
        getDashbordAttendace,
    }
}

export default useDashboardAction