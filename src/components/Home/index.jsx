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

  const bgColor =
    mode === "dark" ? colors.DarkBackground : colors.OffWhite;
  const waveColor =
    mode === "dark" ? colors.saturatedblue : colors.Secondary;

  return (
    <Box
      sx={{
        ...layout.container,
        position: "relative",
        color: mode === "dark" ? colors.White : colors.textPrimary,
        transition: "background-color 0.3s ease, color 0.3s ease",
        pt: { xs: 10, sm: 12 },
        pb: 10,
      }}
    >  
{/* <Box
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: -1,
    overflow: "hidden",
    lineHeight: 0,
  }}
>
  <svg
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{ width: "100%", height: "100%" }}
  >
    <path
      fill={waveColor}
      fillOpacity="1"
      d="M0,160 C360,320 1080,0 1440,160 L1440,0 L0,0 Z"
    />
  </svg>
</Box> */}

<Box sx={{ position: "absolute", top: 0, width: "100%", zIndex: -1 }}>
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: "100%" }}>
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={waveColor} />
        <stop offset="100%" stopColor={bgColor} stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      fill="url(#fade)"
      d="M0,160 C360,320 1080,0 1440,160 L1440,0 L0,0 Z"
    />
  </svg>
</Box>



      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left Text Section */}
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

              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ mt: 4 }}
              >
                {[
                  {
                    icon: <InstagramIcon />,
                    link: "https://www.instagram.com/vasanth_vasu_vv/",
                    color: colors.vividpinkishred,
                  },
                  {
                    icon: <TwitterIcon />,
                    link: "https://twitter.com",
                    color: colors.vividblue,
                  },
                  {
                    icon: <LinkedInIcon />,
                    link:
                      "https://www.linkedin.com/in/vasanthakumar-rajendran-83993422b/",
                    color: colors.professionalblue,
                  },
                  {
                    icon: <GitHubIcon />,
                    link: "https://github.com/vasanthakumar-jpg",
                    color: mode === "dark" ? colors.White : colors.JetBlack,
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

              <motion.div {...buttonMotion}>
                <a
                  href={`${import.meta.env.BASE_URL}images/Vasanthakumar.docx`}
                  download="Vasanthakumar_Resume.docx"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      mt: 4,
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? colors.boldblue
                          : colors.Secondary,
                      color: colors.White,
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? colors.saturatedblue
                            : colors.boldblue,
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </a>
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
