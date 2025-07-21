import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { layout } from "../../styles/Home/index";
import { useTheme } from "@mui/material/styles";

const Logo = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box>
        {/* <Typography
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
        </Typography> */}
        <Box
              component="img"
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              // src={
              //   theme.palette.mode === 'dark'
              //     ? `${import.meta.env.BASE_URL}images/logo.jpg`
              //     : `${import.meta.env.BASE_URL}images/logo.jpg`
              // }
              alt="Logo"
              sx={layout.logo}
            />
      </Box>
    </Stack>
  );
};

export default Logo;
