import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function TaskStateHeader({ status, color }) {
  return (
    <Stack direction="row" alignItems="center" p={1} mb={2}>
      <Box
        sx={{
          height: "16px",
          width: "16px",
          background: `${color}`,
          borderRadius: "50%",
          marginRight: "0.7em",
        }}
      />
      <Typography variant="body1" textTransform="uppercase">
        {status}
      </Typography>
    </Stack>
  );
}

export default TaskStateHeader;
