import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useDashboardAction from '../../../hooks/useDashboardAction'
import { RootState } from "../../../store/reducers"
import { useSelector } from "react-redux"

const BtnPutAttendance = () =>{
    const {putTimeAtt} = useDashboardAction()

    function postAttendance() {
        putTimeAtt()
    }

    return(
        <>
            <Button 
                    className=" "
                    variant="outlined" 
                    color="primary"
                    onClick = {postAttendance}
            >
              Check-Out
            </Button> 
        </>
    )

}

export default BtnPutAttendance
