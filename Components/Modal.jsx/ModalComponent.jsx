import { Box, Modal, Typography, Button } from "@mui/material";
import React from "react";
import CustomInputComp from "./CustomInputComp";
import TextFieldCom from "./TextFieldCom";
import AddIcon from "@mui/icons-material/Add";

function ModalComponent() {
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

  return (
    <Modal open={true}>
      <Box sx={style}>
        <Typography variant="h6" sx={{ fontSize: "1.15rem", fontWeight: 400 }}>
          Add New Task
        </Typography>
        <form style={{ marginTop: "1.25rem" }}>
          <CustomInputComp label="Title" placeholder="e.g take coffea break" />
          <CustomInputComp
            label="Description"
            placeholder="e.g it is always good to ..."
          />

          <TextFieldCom />

          <form>
            <Button
              variant="contained"
              sx={btnStyle}
              fullWidth
              startIcon={<AddIcon />}
            >
              Add Sub Task
            </Button>
          </form>
        </form>
      </Box>
    </Modal>
  );
}

export default ModalComponent;
