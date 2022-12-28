import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

function Task() {
  const [todo, setTodo] = useState({
    title: "Build UI for onboarding flow onboarding flow",
    descrition: "Take me home",
  });

  return (
    <Grid item xs={12} p={1}>
      <Box
        sx={{
          background: "#2c2c38",
          padding: "1.24rem",
          borderRadius: "0.5em",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "18px", fontWeight: 400, opacity: 0.9 }}
        >
          {todo.title}
        </Typography>
        <Typography sx={{ opacity: 0.6, fontWeight: 300 }} variant="body1">
          0 of 3 subtasks
        </Typography>
      </Box>
    </Grid>
  );
}

export default Task;
