import React, { useEffect } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, MenuItem, Theme } from "@material-ui/core";
import useSummaryOfWorkAction from '../../../hooks/useSummaryOfWorkAction'

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
  const {getSummaryofWork} = useSummaryOfWorkAction()
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
      getSummaryofWork()
  }, [getSummaryofWork])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
    return (
        <>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h2 className="text-gray-800 text-xl font-semibold">
                    Summary of Work
                  </h2>
                </div>
              </div>
              <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label">Select Date</InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                            </MenuItem>
                              <MenuItem value={10}>Team1</MenuItem>
                              <MenuItem value={20}>Team2</MenuItem>
                              <MenuItem value={30}>Team3</MenuItem>
                      </Select>
                    </FormControl>
            </div>
            <div className="p-4 flex-auto">  
              {/* Chart */}
              <div className="relative h-350-px">
                <canvas id="bar-chart"></canvas>
              </div>
            </div>
          </div>
          
        </>
      );

}