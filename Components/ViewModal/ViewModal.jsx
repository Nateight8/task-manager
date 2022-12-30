import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

function ViewModal({ setOpen, open, title, description, subtasks }) {
  const [checked, setChecked] = useState([0]);

  //   const handleToggle = () => {
  //     const currentIndex = checked.indexOf(subtasks);
  //     const newChecked = [...checked];
  //     currentIndex === -1
  //       ? newChecked.push(subtasks)
  //       : newChecked.splice(currentIndex, 1);
  //     setChecked(newChecked);
  //   };

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

  //   console.log(formValues);
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

        <Box sx={{ paddingY: "0.8rem" }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "16px", fontWeight: 400, marginBottom: "0rem" }}
          >
            Sub Tasks (3 of 3)
          </Typography>
          <List sx={{ paddingY: "1rem" }}>
            {subtasks.map((subtasks) => (
              <ListItem
                key={subtasks}
                sx={{ paddingBottom: "0.5rem" }}
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  //   onClick={handleToggle(value)}
                  dense
                  sx={{ background: "#21212d", width: "100%" }}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      //   checked={checked.indexOf(subtasks) !== -1}
                      tabIndex={-1}
                      disableRipple
                      //   onChange={handleToggle(subtasks)}
                      // inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: 0.6 }} primary={subtasks} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

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
                Doing
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ViewModal;
