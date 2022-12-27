import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import Task from "./Task";
import TaskStateHeader from "./TaskStateHeader";

function MainContent() {
  return (
    <Box sx={{ width: "100%", height: "", background: "#21212d" }}>
      <Toolbar />
      <Grid container>
        {/* todo */}
        <Grid item xs={4} p={2}>
          <TaskStateHeader status="Todo" color="#43c7e9" />

          <Box sx={{ height: "100vh", background: "" }}>
            <Grid container>
              <Task />
              <Task />
              <Task />
            </Grid>
          </Box>
        </Grid>
        {/* doing */}
        <Grid item xs={4} p={2}>
          <TaskStateHeader status="Doing" color="#836ff3" />

          <Box sx={{ height: "100vh", background: "" }}>
            <Grid container>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </Grid>
          </Box>
        </Grid>
        {/* completed */}
        <Grid item xs={4} p={2}>
          <TaskStateHeader status="Completed" color="#68e6b0" />

          <Box sx={{ height: "100vh", background: "" }}>
            <Grid container>
              <Task />
              <Task />
              <Task />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContent;
