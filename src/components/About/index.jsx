import React from "react";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Stack,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  typographySizes,
  fadeInUp,
  scaleFadeIn,
  iconHoverEffect,
} from "../../styles/About/index";
import { common, fontFamily } from "../../styles/theme/index";

const skills = [
  "React.js",
  "JavaScript",
  "Material UI",
  "Tailwind CSS",
  "GitHub",
  "API Integration",
  "Unit Testing",
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        pb: 10,
        px: 2,
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography sx={{...common.sectionTitle, color: "inherit"}} textAlign="center" gutterBottom>
          About Me
        </Typography>
        <Divider sx={common.sectionDivider} />
      </motion.div>

      <Grid container spacing={4}>
        {/* Avatar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <motion.div
            variants={scaleFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box
              sx={{
                width: isMobile ? 192 : 350,
                height: isMobile ? 192 : 430,
                mx: "auto",
                // background:
                  // "linear-gradient(to bottom right, #1e40af, #93c5fd)",
                // borderRadius: "50%",
                p: "4px",
              }}
            >
              <Avatar
                src="/images/3.webp"
                alt="Avatar"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "4px solid white",
                  boxShadow: 4,
                  p: 1,
                }}
              />
            </Box>
          </motion.div>
        </Grid>

        {/* Content */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box textAlign={{ xs: "center", md: "left" }} sx={{p: 2}}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography sx={{...typographySizes.bodyText, color: "inherit", fontFamily: fontFamily.fontFamily}} paragraph>
                I'm a passionate and detail-oriented Front-End Developer with 1
                year of hands-on experience crafting responsive, accessible, and
                modern web applications. My core strength lies in building
                elegant user interfaces using React.js, Tailwind CSS, Material
                UI, and JavaScript. I strive to deliver pixel-perfect designs
                that not only look good but also offer great usability and
                performance.
              </Typography>

              <Typography sx={{...typographySizes.bodyText, color: "inherit", fontFamily: fontFamily.fontFamily}} paragraph>
                I enjoy collaborating with cross-functional teams, solving
                real-world UI/UX challenges, and bringing ideas to life through
                code. I believe great user experiences come from a mix of
                thoughtful design and strong front-end architecture—and I’m
                excited to contribute to teams that value both.
              </Typography>

              {/* Horizontal Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    mt: 4,
                    height: "4px",
                    width: { xs: "100%", md: "30%" },
                    backgroundColor: theme.palette.text.primary,
                    borderRadius: "2px",
                  }}
                />
              </motion.div>

              {/* Skills */}
              <Stack
                direction="row"
                flexWrap="wrap"
                spacing={1}
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ mt: 2, gap: 1 }}
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    sx={{ mb: 1, color: theme.palette.text.primary, fontFamily: fontFamily.fontFamily }}
                  />
                ))}
              </Stack>

            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;