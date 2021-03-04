import React, { useEffect } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, Divider, makeStyles, MenuItem, Theme } from "@material-ui/core";
import useSelectorTeamAction from '../../../hooks/useSummaryOfTeamAction'
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import ChartTeam from "./ChartTeam"
import TableTeamToday from "./TableTeamToday"
import TableTeamMonth from "./TableTeamMonth"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }),
);


export default function SummaryofTeam() {

  const {getSummaryofTeam} = useSelectorTeamAction()
  const teamname = useSelector((state: RootState) => state.SummaryofTeam.ITeams)
  const classes = useStyles();

  useEffect(() => {
    getSummaryofTeam()
  }, [getSummaryofTeam])
  console.log("selectteam" , teamname)
    return (
        <>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent ">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h2 className="text-gray-800 text-xl font-semibold">
                    Summary of Team
                  </h2>
                </div>
              </div>
              <br/>
            </div>
            {teamname.map((items : any) => (
                <div className="p-4 flex flex-wrap">  
                  {/* Chart */}
                      <div className="w-full xl:w-4/12 px-4">
                          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800">
                            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                <div className="flex flex-wrap items-center">
                                  <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h6 className="uppercase text-gray-200 mb-1 text-xs font-semibold">
                                      Team Attandance
                                    </h6>
                                    <h2 className="text-white text-xl font-semibold">{items.projectName}</h2>
                                  </div>
                                </div>
                              </div>
                                <div className="p-4 flex-auto">
                                  <div className="relative h-350-px">
                                    <ChartTeam/>
                                  </div>
                                </div>
                          </div>
                      </div>
                    {/* Table */}
                      <div className="w-full xl:w-4/12 px-4">
                        <TableTeamToday/>
                      </div>
                      <div className="w-full xl:w-4/12 px-4">
                        <TableTeamMonth/>
                      </div>
                      <hr className="my-5 md:min-w-full" />
                </div>
                ))}
                
          </div>
         
        </>
      );

}