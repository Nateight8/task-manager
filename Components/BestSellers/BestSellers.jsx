import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function BestSellers() {
  return (
    <Box my={2} sx={{ height: "100vh", width: "100%" }}>
      <Typography variant="h3">Best Sellers</Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ padding: "0.4rem" }}>
          <Box sx={{ height: "25rem", background: "red" }}></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ padding: "0.4rem" }}>
          <Box sx={{ height: "25rem", background: "red" }}></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ padding: "0.4rem" }}>
          <Box sx={{ height: "25rem", background: "red" }}></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ padding: "0.4rem" }}>
          <Box sx={{ height: "25rem", background: "red" }}></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.5} sx={{ padding: "0.4rem" }}>
          <Box sx={{ height: "25rem", background: "red" }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BestSellers;
