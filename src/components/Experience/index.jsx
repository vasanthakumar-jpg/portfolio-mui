import React from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Chip,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { experienceStyles } from "../../styles/Experience/index";
import { common, fontFamily, colors } from "../../styles/theme/index";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Parkqwik",
    duration: "July 2024 – Aug 2024",
    description:
      "Contributed to the UI development of Parkqwik, a leading EV parking mobile application. Focused on building responsive mobile-first components, enhancing user experience, and ensuring cross-device compatibility.",
    techStack: ["React", "Tailwind CSS"],
  },
  {
    role: "Junior Frontend Developer",
    company: "ByClarityTech",
    duration: "Sep 2024 – Jul 2025",
    description:
      "Worked on multiple real-world projects such as Dubai Realest, CCO Central Coast Orthodontics, and Berry Studio platforms using React, and Material UI. Focused on UI development, API integration, and performance optimization.",
    techStack: [
      "React",
      "MUI",
      "Tailwind CSS",
      "Framer Motion",
      "Unit Testing",
      "Git",
      "API Integration",
      "Chart",
    ],
  },
];

const Experience = () => {
  const theme = useTheme();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box sx={experienceStyles.sectionContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            ...common.sectionTitle,
            color: "inherit",
            fontFamily: fontFamily.fontFamily,
          }}
          gutterBottom
        >
          Experience
        </Typography>
        <Divider sx={common.sectionDivider} />
      </motion.div>

      <Stack spacing={4} mt={4}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card
              elevation={3}
              sx={{
                ...experienceStyles.card,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? colors.verydarkgray
                    : colors.White,
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    ...experienceStyles.roleText,
                    fontFamily: fontFamily.fontFamily,
                  }}
                  color={theme.palette.text.primary}
                >
                  {exp.role}
                </Typography>
                <Typography
                  sx={{
                    ...experienceStyles.subtitleText,
                    fontFamily: fontFamily.fontFamily,
                    color: theme.palette.text.primary,
                  }}
                >
                  {exp.company} • {exp.duration}
                </Typography>

                <Box my={2}>
                  <Typography
                    sx={{
                      ...experienceStyles.descriptionText,
                      fontFamily: fontFamily.fontFamily,
                    }}
                    color={theme.palette.text.primary}
                  >
                    {exp.description}
                  </Typography>
                </Box>

                <Grid container spacing={1}>
                  {exp.techStack.map((tech, i) => (
                    <Grid key={i}>
                      <Chip
                        label={tech}
                        variant="outlined"
                        sx={{
                          ...experienceStyles.chip,
                          color: theme.palette.text.primary,
                          fontFamily: fontFamily.fontFamily,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;