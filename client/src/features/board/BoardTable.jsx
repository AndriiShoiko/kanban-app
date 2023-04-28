import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { TaskCard } from "../task-card/TaskCard";
import { HeaderColumn } from "./HeaderColumn";
import { NewColumn } from "./NewColumn";
import { ViewTask } from "../task-card/ViewTask";
import { STATUS_LOADING, getBoardData, getBoardSelector } from "./board-slice";
import LoadingSpiner from "../loading/LoadingSpiner";
import { useParams } from "react-router-dom";

export const BoardTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { boardRefId } = useParams();

  React.useEffect(() => {
    const promiseBoardData = dispatch(getBoardData(boardRefId));
    return () => {
      promiseBoardData.abort();
    };
  }, [boardRefId]);

  const boardState = useSelector((state) => getBoardSelector(state));

  if (boardState.loading === STATUS_LOADING) {
    return <LoadingSpiner />;
  }

  if (!boardState.entities.columns) {
    return null;
  }

  return (
    <>
      <ViewTask open={open} onClose={handleClose}></ViewTask>
      <Grid container columnGap={3} padding="24px" height="100%" wrap="nowrap">
        {boardState.entities.columns.map((column) => {
          return (
            <Grid item key={column.id}>
              <Grid container direction="column" rowGap={2}>
                <Grid item>
                  <HeaderColumn
                    count={column.tasks.length}
                    name={column.name}
                  />
                </Grid>

                {column.tasks.map((task) => {
                  return (
                    <Grid item key={task.id}>
                      <TaskCard task={task} onClick={handleOpen} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}

        <Grid item>
          <NewColumn />
        </Grid>
      </Grid>
    </>
  );
};
