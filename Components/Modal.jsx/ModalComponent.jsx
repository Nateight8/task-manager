import {
  Box,
  Modal,
  Typography,
  Button,
  MenuItem,
  Select,
  Stack,
  Chip,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import CustomInputComp from "./CustomInputComp";
import TextFieldCom from "./TextFieldCom";
import AddIcon from "@mui/icons-material/Add";
import SelectComp from "./SelectComp";
import { Form, Field, Formik, FieldArray } from "formik";
import { FormControl, InputBase, InputLabel, styled } from "@mui/material";
import ChildModal from "./ChildModal";
import { Scrollbars } from "react-custom-scrollbars";

function ModalComponent({ isSubmitting, open, setOpen, subTask, setsubTask }) {
  const [openSubTask, setOpenSubTask] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",

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

  return (
    // <Form>
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.15rem", fontWeight: 400 }}
          >
            Add New Task
          </Typography>

          <Form>
            <CustomInputComp
              label="title"
              placeholder="e.g make coffee"
              name="title"
              type="text"
            />
            <CustomInputComp
              label="description"
              placeholder="e.g it is always good to take a coffee break..."
              name="description"
              type="text"
              multiline
              minRows={3}
            />

            {/* <Scrollbars autoHeight> */}
            <FieldArray name="subtasks">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { subtasks } = values;

                return (
                  // <Scrollbars autoHeight style={{ width: "100%" }}>
                  <Box
                    sx={{
                      maxHeight: "8rem",
                      width: "100%",
                      background: "",
                      // overflowY: "scroll",
                      marginBottom: "1rem",
                    }}
                  >
                    {subtasks.map((task, idx) => (
                      <div key={idx}>
                        <Chip
                          sx={{
                            color: "white",
                            border: "1px solid  rgba(255, 255, 255, 0.1)",
                            marginRight: "8px",
                            marginY: "8px",
                          }}
                          label={task}
                          variant="outlined"
                        />

                        <ChildModal
                          subtasks={subtasks}
                          openSubTask={openSubTask}
                          setOpenSubTask={setOpenSubTask}
                          idx={idx}
                          push={push}
                        />
                      </div>
                    ))}
                  </Box>
                  // </Scrollbars>
                );
              }}
            </FieldArray>
            {/* </Scrollbars> */}

            <Button
              variant="contained"
              sx={{ ...btnStyle }}
              fullWidth
              onClick={() => {
                setOpenSubTask(true);
              }}
            >
              add subtask
            </Button>
            <SelectComp name="status" />
            <Button
              type="submit"
              variant="contained"
              sx={{ ...btnStyle, marginTop: "1rem", background: "#645fc6" }}
              fullWidth
            >
              Create Task
            </Button>
          </Form>
        </Box>
      </Modal>
    </>
    // </Form>
  );
}

export default ModalComponent;

// <ChildModal
//   subtasks={subtasks}
//   openSubTask={openSubTask}
//   setOpenSubTask={setOpenSubTask}
//   idx={idx}
//   push={push}/>
