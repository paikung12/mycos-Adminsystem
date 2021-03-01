import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
        getLeavesAttendaceDispatch,        
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
    return {
        getLeaves,
    }
}

export default useLeavesAction