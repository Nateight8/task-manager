import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Modal,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";

import React, { useEffect, useState } from "react";

function ViewModal({
  setOpen,
  open,
  title,
  description,
  subtasks,
  setcheckedTasks,
}) {
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

  const labelStyle = {
    background: "#21212d",
    width: "100%",
    border: "1px solid #21212d",
    marginY: "0.3rem",
    "&:hover": {
      background: "#21212d",
      border: "1px solid #645fc6",
    },
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
  //   console.log(checkedTasks);
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          sx={{ fontSize: "18px", fontWeight: 400, paddingY: "1.24rem" }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: "16px", fontWeight: 300, opacity: 0.6 }}
        >
          {description}
        </Typography>
        <Formik
          initialValues={{
            tasks: [""],
          }}
          onSubmit={(values) => {
            setcheckedTasks(values.tasks.length);
            setOpen(false);
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form>
              <FormControl sx={{ paddingY: "0.8rem", width: "100%" }}>
                <FormLabel
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    marginBottom: "0rem",
                    color: "white",
                  }}
                >
                  {` Sub Tasks (${values.tasks.length} of ${subtasks.length})`}
                </FormLabel>
                <FormGroup
                  sx={{ paddingY: "1rem", width: "100%", paddingX: "0.5rem" }}
                >
                  {subtasks.map((value) => (
                    <FormControlLabel
                      key={value}
                      sx={labelStyle}
                      label={value}
                      control={
                        <Field name="tasks" type="checkbox" value={value}>
                          {({ field }) => (
                            <Checkbox
                              //   value={value}
                              {...field}
                              checked={values.tasks.includes(value)}
                              onChange={(event) => {
                                handleChange(event);
                                // If the checkbox is checked, add the value to the favoriteColors array
                                if (event.target.checked) {
                                  setFieldValue("tasks", [
                                    ...values.tasks,
                                    event.target.value,
                                  ]);
                                }
                                // If the checkbox is not checked, remove the value from the favoriteColors array
                                else {
                                  setFieldValue(
                                    "tasks",
                                    values.tasks.filter(
                                      (value) => value !== event.target.value
                                    )
                                  );
                                }
                              }}
                            />
                          )}
                        </Field>
                      }
                    />
                  ))}
                </FormGroup>

                <Box>
                  <Typography variant="body1">Status</Typography>
                  <Box
                    mt={1}
                    sx={{
                      border: "1px solid  rgba(255, 255, 255, 0.1)",
                      width: "100%",
                      // height: "3rem",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ padding: "0.5rem", opacity: 0.7 }}
                    >
                      {values.tasks.length === 0
                        ? "Todo"
                        : values.tasks.length === subtasks.length
                        ? "Complete"
                        : "Doing"}
                    </Typography>
                  </Box>
                </Box>
              </FormControl>
              <Button
                fullWidth
                sx={{ ...btnStyle, marginTop: "1rem", background: "#645fc6" }}
                type="submit"
                variant="contained"
              >
                Update Status
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

export default ViewModal;
