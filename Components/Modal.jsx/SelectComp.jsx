import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React, { useState } from "react";

function SelectComp({ name, label, placeholder, ...otherProps }) {
  const [field, meta] = useField(name);
  // const [status, setStatus] = useState("Todo");
  // const { setFieldValue } = useFormikContext();

  const options = [
    { value: "todo", label: "Todo" },
    { value: "doing", label: "Doing" },
    { value: "completed", label: "Completed" },
  ];

  const CustomSelect = {
    "label + &": {
      marginTop: 3,
      color: "white",
    },

    "& .MuiInputBase-input": {
      border: "1px solid  rgba(255, 255, 255, 0.2)",
      padding: "10px 12px",
      borderRadius: 1,
    },
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <FormControl fullWidth sx={{ marginTop: "0.8rem" }}>
      <InputLabel
        shrink
        htmlFor="title"
        sx={{
          color: "white",
          fontSize: "16px",
          left: -15,
          top: 5,
        }}
      >
        Status
      </InputLabel>
      <Select
        {...field}
        {...otherProps}
        sx={CustomSelect}
        // value={status}
        // onChange={handleChange}
      >
        {options.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComp;
