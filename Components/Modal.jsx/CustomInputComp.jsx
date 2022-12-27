import React from "react";
import { FormControl, InputBase, InputLabel, styled } from "@mui/material";

function CustomInputComp({ placeholder, label }) {
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

  return (
    <FormControl variant="standard" sx={{ width: "100%", marginY: "0.5rem" }}>
      <InputLabel
        shrink
        htmlFor="title"
        sx={{ color: "white", fontSize: "16px" }}
      >
        {label}
      </InputLabel>
      <CustomInput fullWidth placeholder={placeholder} />
    </FormControl>
  );
}

export default CustomInputComp;
