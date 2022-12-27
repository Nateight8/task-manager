import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <Stack
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        justifyContent="space-between"
        alignItems="center"
        my={2}
      >
        <Box my={2}>
          <Button
            variant="outlined"
            sx={{
              paddingY: { md: "0.8rem" },
              textTransform: "capitalize",
              borderRadius: 0,
              paddingX: { md: "2rem" },
            }}
          >
            Get Started
          </Button>
        </Box>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "18rem",
            textTransform: "capitalize",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Whether you choose to rent or buy, Classico offers flexible ways to
          get the furnitures you love
        </Typography>
      </Stack>
      <Box
        sx={{
          height: "80vh",
          width: "100%",
          background: "#f5f4f6",
          position: "relative",
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </>
  );
}

export default Hero;
