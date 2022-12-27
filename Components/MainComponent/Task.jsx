import { Box, Grid } from "@mui/material";
import React from "react";

function Task() {
  return (
    <Grid item xs={12} p={1}>
      <Box sx={{ background: "#2c2c38", height: "10rem" }}></Box>
    </Grid>
  );
}

export default Task;
