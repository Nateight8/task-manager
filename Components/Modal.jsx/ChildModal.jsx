import {
  Box,
  Modal,
  Button,
  InputBase,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Field, Form, Formik, useField } from "formik";
import React, { useState } from "react";
import CustomInputComp from "./CustomInputComp";

function ChildModal({
  name,
  label,
  placeholder,
  subTask,
  setsubTask,
  openSubTask,
  setOpenSubTask,
  subtasks,
  idx,
  push,
  ...otherProps
}) {
  // const [field, meta] = useField(name);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    background: "#2c2c38",
    borderRadius: "0.5rem",
  };

  const btnStyle = {
    borderRadius: "2rem",
    background: "#2c2c38",
    border: "1px solid  rgba(255, 255, 255, 0.1)",
    textTransform: "capitalize",
    fontWeight: 400,

    "&:hover": {
      background: "white",
      color: "#2c2c38",
    },
  };
  const styles = {
    "label + &": {
      marginTop: "1.5rem",
      color: "white",
    },

    "& .MuiInputBase-input": {
      border: "1px solid  rgba(255, 255, 255, 0.1)",
      padding: "10px 12px",
      borderRadius: 1,
    },
  };

  // console.log(subtasks);
  return (
    <Modal
      open={openSubTask}
      onClose={() => {
        setOpenSubTask(false);
      }}
    >
      <Box sx={style}>
        <FormControl
          variant="standard"
          sx={{ width: "100%", marginY: "0.5rem" }}
        >
          <InputLabel
            shrink
            sx={{
              color: "white",
              fontSize: "16px",
              textTransform: "capitalize",
            }}
          >
            {label}
          </InputLabel>

          <Field name={`subtasks[${idx}]`}>
            {({ field }) => (
              <InputBase
                {...field}
                // {...otherProps}
                name={`subtasks[${idx}]`}
                fullWidth
                placeholder={placeholder}
                sx={styles}
              />
            )}
          </Field>
        </FormControl>
        <Button
          sx={btnStyle}
          onClick={() => push("")}
          variant="contained"
          type="submit"
        >
          Submit subtask
        </Button>
      </Box>
    </Modal>
  );
}

export default ChildModal;
