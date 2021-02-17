import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
        getLeavesAttendaceDispatch,        
        } 
        from '../store/actions/leaves'

function useLeavesAction() {
    const dispatch = useDispatch()

    const getLeavesAttendace = useCallback(
        () => {
            dispatch(getLeavesAttendaceDispatch())
        },
        [dispatch],
    )
    return {
        getLeavesAttendace,
    }
}

export default useLeavesAction