import React from "react";
import { Box, Typography, IconButton, Stack, Divider } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { iconHoverEffect, fontFamily, colors } from "../../styles/theme/index";
import { useTheme } from "@mui/material/styles";

const Footer = ({ mode }) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        px: 2,
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent={{ xs: "center", md: "center" }}
          sx={{ mt: 4 }}
        >
          {[
            {
              icon: <InstagramIcon />,
              link: "https://instagram.com",
              color: "#E4405F",
            },
            {
              icon: <TwitterIcon />,
              link: "https://twitter.com",
              color: "#1DA1F2",
            },
            {
              icon: <LinkedInIcon />,
              link: "https://linkedin.com",
              color: "#0A66C2",
            },
            {
              icon: <GitHubIcon />,
              link: "https://github.com",
              color: colors.primary,
            },
          ].map((item, i) => (
            <motion.div key={i} {...iconHoverEffect}>
              <IconButton
                href={item.link}
                target="_blank"
                sx={{
                  color: item.color,
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: item.color,
                    transform: "scale(1.2)",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            </motion.div>
          ))}
        </Stack>

        <Divider sx={{ mb: 2,bgcolor:theme.palette.text.primary }} />

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ fontFamily: fontFamily.fontFamily }}
        >
          © {new Date().getFullYear()} Vasanthakumar. All rights reserved.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;