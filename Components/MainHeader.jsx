import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function MainHeader({ text }) {
  return (
    <Box my={2}>
      <Divider />
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "7.4vw", md: "6.5vw" },
          fontWeight: 300,
          textAlign: { xs: "center", md: "left" },
          paddingY: "1rem",
        }}
      >
        {text}
      </Typography>
      <Divider />
    </Box>
  );
}

export default MainHeader;
