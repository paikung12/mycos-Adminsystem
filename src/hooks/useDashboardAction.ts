import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
        getDashbordAttendanceDispatch,
        putTimeAttendanceDispatc,        
        } 
        from '../store/actions/dasboard'

function useDashboardAction() {
    const dispatch = useDispatch()

    const getDashbordAttendace = useCallback(
        () => {
            dispatch(getDashbordAttendanceDispatch())
        },
        [dispatch],
    )
    const putTimeAttDispatch = useCallback(
        () => {
            dispatch(putTimeAttendanceDispatc())
        }, [dispatch],
    )
    return {
        putTimeAttDispatch,
        getDashbordAttendace,
    }
}

export default useDashboardAction