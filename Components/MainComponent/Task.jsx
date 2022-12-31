import {
  Box,
  Button,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import ViewModal from "../ViewModal/ViewModal";

function Task({ title, subtasks, description }) {
  const [open, setOpen] = useState(false);
  const [checkedTasks, setcheckedTasks] = useState(0);

  return (
    <Grid item xs={12} p={1}>
      {/* <Box
        sx={{
          background: "#2c2c38",
          padding: "1.24rem",
          borderRadius: "0.5em",
        }}
      > */}
      <ListItemButton
        onClick={() => {
          setOpen(true);
        }}
        sx={{
          background: "#2c2c38",
          padding: "1.24rem",
          borderRadius: "0.5em",
          border: "1px solid #2c2c38",
          "&:hover": {
            background: "#2c2c38",
            border: "1px solid #645fc6",
            // color: "#2c2c38",
          },
        }}
      >
        <ListItemText
          sx={{
            // "	.MuiListItemText-root": {
            //   color: "black",
            // },

            ".MuiListItemText-primary": {
              fontSize: "18px",
              fontWeight: 400,
              opacity: 0.9,
            },
            "	.MuiListItemText-secondary": {
              opacity: 0.6,
              fontWeight: 300,
              color: "white",
            },
          }}
          primary={title}
          secondary={`${checkedTasks} subtasks of ${subtasks.length} subtasks`}
        />
      </ListItemButton>
      <ViewModal
        setOpen={setOpen}
        open={open}
        subtasks={subtasks}
        description={description}
        title={title}
        checkedTasks={checkedTasks}
        setcheckedTasks={setcheckedTasks}
      />
    </Grid>
  );
}

export default Task;
