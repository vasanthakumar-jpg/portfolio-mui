import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box>
        <Typography
          variant="h5"
          fontWeight="500"
          sx={{
            fontFamily: "'Goudy Bookletter 1911', serif",
            letterSpacing: "0.5px",
          }}
        >
          vasanthakumar
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: "serif",
            fontWeight: 300,
            letterSpacing: "1.2px",
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          Frontend Developer
        </Typography>
      </Box>
    </Stack>
  );
};

export default Logo;
