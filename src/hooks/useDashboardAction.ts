import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
        getDashbordAttendanceDispatch,
        putTimeAttendanceDispatch,        
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
    const putTimeAtt = useCallback(
        (timeEmp? ) => {
            dispatch(putTimeAttendanceDispatch(timeEmp))
        }, [dispatch],
    )
    return {
        putTimeAtt,
        getDashbordAttendace,
    }
}

export default useDashboardAction