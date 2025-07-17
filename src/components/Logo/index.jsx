import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {/* Icon SVG */}
      {/* <Box width={30} height={30}>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <path d="M18 2C10 2 4 10 4 18V42C4 50 10 58 18 58" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="22" y="10" width="22" height="16" rx="2" stroke="black" strokeWidth="2" />
          <path d="M24 40L34 50L54 30" stroke="black" strokeWidth="2" />
          <path d="M44 54C44 47 38 42 31 42C24 42 18 47 18 54" stroke="black" strokeWidth="2" />
        </svg>
      </Box> */}

      {/* Text */}
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
            color: "black",
          }}
        >
          Frontend Developer
        </Typography>
      </Box>
    </Stack>
  );
};

export default Logo;
