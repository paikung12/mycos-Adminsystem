import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
        getLeavesAttendaceDispatch,
        getLeavesMonthAttendaceDispatch,
        getLeaves30NextDayAttendaceDispatch        
        } 
        from '../store/actions/leaves'

function useLeavesAction() {
    const dispatch = useDispatch()

    const getLeaves = useCallback(
        () => {
            dispatch(getLeavesAttendaceDispatch())
        },
        [dispatch],
    )
    const getLeavesMonth = useCallback(
        () => {
            dispatch(getLeavesMonthAttendaceDispatch())
        },
        [dispatch],
    )
    const getLeaves30NextDay = useCallback(
        () => {
            dispatch(getLeaves30NextDayAttendaceDispatch())
        },
        [dispatch],
    )
    return {
        getLeaves,
        getLeavesMonth,
        getLeaves30NextDay,
    }
}

export default useLeavesAction