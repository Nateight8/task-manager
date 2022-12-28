import React from "react";
import { FormControl, InputBase, InputLabel, styled } from "@mui/material";
import { useField } from "formik";

function CustomInputComp({ name, label, placeholder, ...otherProps }) {
  const [field, meta] = useField(name);

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

  return (
    <FormControl variant="standard" sx={{ width: "100%", marginY: "0.5rem" }}>
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
      <InputBase
        {...field}
        {...otherProps}
        fullWidth
        placeholder={placeholder}
        sx={styles}
      />
    </FormControl>
  );
}

export default CustomInputComp;
