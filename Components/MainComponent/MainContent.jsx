import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Task from "./Task";
import TaskStateHeader from "./TaskStateHeader";

function MainContent({ formValues, subTask }) {
  return (
    <Box sx={{ width: "100%", height: "", background: "#21212d" }}>
      <Toolbar />
      <Grid container whiteSpace="nowrap" sx={{ overflowX: "scroll" }}>
        {/* todo */}
        <Grid item xs={4} p={2}>
          <TaskStateHeader status="Todo" color="#43c7e9" />
          {/* {console.log(formValues)} */}
          <Box
            sx={{
              height: "100vh",
              background: "",
              border: "1px solid rgba(255,255,255, 0.02)",
            }}
          >
            <Grid container>
              {formValues.map(({ title, subtasks, description }) => (
                <Task
                  key={title}
                  subtasks={subtasks}
                  description={description}
                  title={title}
                  // checkedTasks={checkedTasks}
                  // setcheckedTasks={setcheckedTasks}
                />
              ))}
            </Grid>
          </Box>
        </Grid>
        {/* doing */}
        <Grid item xs={4} p={2}>
          <TaskStateHeader status="Doing" color="#836ff3" />

          <Box
            sx={{
              minHeight: "100vh",
              background: "",
              border: "1px solid rgba(255,255,255, 0.02)",
            }}
          >
            <Grid container>
              {/* <Task />
              <Task />
              <Task />
              <Task />
              <Task /> */}
            </Grid>
          </Box>
        </Grid>
        {/* completed */}
        <Grid item xs={4} p={2}>
          <TaskStateHeader status="Completed" color="#68e6b0" />

          <Box
            sx={{
              height: "100vh",
              background: "",
              border: "1px solid rgba(255,255,255, 0.02)",
            }}
          >
            <Grid container>
              {/* <Task />
              <Task />
              <Task /> */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContent;
