import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
        getEmployeeTimesDispatch, 
        postTimeDispatch, 
        } 
        from '../store/actions/tableattendance'

function useCheckInAction() {
    const dispatch = useDispatch()

    const getTimeOfEmpsToday = useCallback(
        () => {
            dispatch(getEmployeeTimesDispatch())
        },
        [dispatch],
    )
    const postTimeToday = useCallback(
        (password, timeEmp?  ) =>{
            dispatch(postTimeDispatch(password, timeEmp))
        },
        [dispatch],
    )
    return {
        getTimeOfEmpsToday,
        postTimeToday,

    }
}

export default useCheckInAction