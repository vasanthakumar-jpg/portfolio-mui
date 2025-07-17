import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import {
  fadeUpVariant,
  iconHoverEffect,
  buttonMotion,
  layout,
} from "../../styles/Home/index";
import { Typewriter } from "react-simple-typewriter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { colors, common, fontFamily } from "../../styles/theme/index";

const Home = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const refLeft = useRef(null);
  const refRight = useRef(null);
  const isInViewLeft = useInView(refLeft, { once: true });
  const isInViewRight = useInView(refRight, { once: true });

  return (
    <Box
      sx={{
        ...layout.container,
        color: mode === "dark" ? "#ffffff" : "#1E293B",
        transition: "background-color 0.3s ease, color 0.3s ease",
        pt: { xs: 10, sm: 12 },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            ref={refLeft}
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInViewLeft ? "visible" : "hidden"}
          >
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                px: { xs: 2, sm: 4, md: 0 },
              }}
            >
              <Typography
                sx={{
                  ...common.sectionTitle,
                  color: "inherit",
                  fontFamily: fontFamily.fontFamily,
                }}
                gutterBottom
              >
                Hello, I'm{" "}
                <Box
                  component="span"
                  sx={{
                    ...common.heading,
                    color: "inherit",
                    fontFamily: fontFamily.fontFamily,
                  }}
                >
                  Vasanthakumar
                </Box>
              </Typography>

              <Typography
                sx={{
                  ...common.sectionTitle,
                  color: "inherit",
                  fontFamily: fontFamily.fontFamily,
                }}
                gutterBottom
              >
                <Typewriter
                  words={[
                    "Front-End Developer",
                    "React Enthusiast",
                    "UI/UX Explorer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </Typography>

              <Typography
                sx={{
                  ...common.body,
                  color: "inherit",
                  fontFamily: fontFamily.fontFamily,
                }}
                gutterBottom
              >
                I create responsive and modern web interfaces using React and
                Material UI.
              </Typography>

              {/* Social Icons */}
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
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
                    color: mode === "dark" ? "#ffffff" : "#171717",
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

              {/* Button */}
              <motion.div {...buttonMotion}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2563EB" : "#3B82F6", // Tailwind-inspired blue
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#1D4ED8" : "#2563EB",
                    },
                  }}
                >
                  Download CV
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Image Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            ref={refRight}
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInViewRight ? "visible" : "hidden"}
          >
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}images/e3.png`}
              alt="Profile"
              sx={layout.image}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;