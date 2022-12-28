import {
  Box,
  Modal,
  Typography,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import CustomInputComp from "./CustomInputComp";
import TextFieldCom from "./TextFieldCom";
import AddIcon from "@mui/icons-material/Add";
import SelectComp from "./SelectComp";
import { Form, Field, Formik } from "formik";
import { FormControl, InputBase, InputLabel, styled } from "@mui/material";

function ModalComponent({ isSubmitting, open, setOpen }) {
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

  const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
      color: "white",
    },

    "& .MuiInputBase-input": {
      border: "1px solid  rgba(255, 255, 255, 0.1)",
      padding: "10px 12px",
      borderRadius: 4,
    },
  }));

  const CustomSelect = styled(Select)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
      color: "white",
    },

    "& .MuiInputBase-input": {
      border: "1px solid  rgba(255, 255, 255, 0.2)",
      padding: "10px 12px",
      borderRadius: 4,
    },
  }));

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
              placeholder="e.g it is always good to take a break..."
              name="description"
              type="text"
              multiline
              minRows={3}
            />

            <Button
              // type="submit"
              variant="contained"
              sx={{ ...btnStyle }}
              fullWidth
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
          {/* )}
        </Formik> */}
        </Box>
      </Modal>
    </>
    // </Form>
  );
}

export default ModalComponent;
