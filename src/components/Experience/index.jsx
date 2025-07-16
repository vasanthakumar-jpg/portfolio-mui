// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Stack,
//   Card,
//   CardContent,
//   Chip,
//   Divider,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { experienceStyles } from "../../styles/Experience/index"; // Adjust path

// const experiences = [
//   {
//     role: "Frontend Developer Intern",
//     company: "Parkqwik",
//     duration: "July 2024 – Aug 2024",
//     description:
//       "Contributed to the UI development of Parkqwik, a leading EV parking mobile application. Focused on building responsive mobile-first components, enhancing user experience, and ensuring cross-device compatibility.",
//     techStack: ["React", "Tailwind CSS"],
//   },
//   {
//     role: "Junior Frontend Developer",
//     company: "ByClarityTech",
//     duration: "Sep 2024 – Jul 2025",
//     description:
//       "Worked on multiple real-world projects such as Dubai Realest, CCO Central Coast Orthodontics, and Berry Studio platforms using React, and Material UI. Focused on UI development, API integration, and performance optimization.",
//     techStack: [
//       "React",
//       "MUI",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Unit Testing",
//       "Git",
//       "API Integration",
//       "Chart",
//     ],
//   },
// ];

// const Experience = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <Box sx={experienceStyles.sectionContainer}>
//       {/* Section Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <Typography
//           variant="h4"
//           color="primary"
//           textAlign="center"
//           sx={experienceStyles.sectionTitle}
//           gutterBottom
//         >
//           Experience
//         </Typography>
//         <Divider sx={experienceStyles.sectionDivider} />
//       </motion.div>

//       {/* Experience Cards */}
//       <Stack spacing={4}>
//         {experiences.map((exp, idx) => (
//           <motion.div
//             key={idx}
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <Card elevation={3} sx={experienceStyles.card}>
//               <CardContent>
//                 <Typography sx={experienceStyles.roleText}>
//                   {exp.role}
//                 </Typography>
//                 <Typography sx={experienceStyles.subtitleText}>
//                   {exp.company} • {exp.duration}
//                 </Typography>
//                 <Box my={2}>
//                   <Typography sx={experienceStyles.descriptionText}>
//                     {exp.description}
//                   </Typography>
//                 </Box>
//                 <Grid container spacing={1} mt={1}>
//                   {exp.techStack.map((tech, i) => (
//                     <Grid item key={i}>
//                       <Chip
//                         label={tech}
//                         color="primary"
//                         variant="outlined"
//                         sx={experienceStyles.chip}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </Stack>
//     </Box>
//   );
// };

// export default Experience;

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
import { experienceStyles } from "../../styles/Experience/index"; // Your central style
import { common, fontFamily } from "../../styles/theme/index";

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
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ ...common.sectionTitle, color: "inherit", fontFamily: fontFamily.fontFamily }}
          gutterBottom
        >
          Experience
        </Typography>
        <Divider sx={common.sectionDivider} />
      </motion.div>

      {/* Experience Cards */}
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
                  theme.palette.mode === "dark" ? "#121212" : "#fff",
              }}
            >
              <CardContent>
                <Typography
                  sx={{...experienceStyles.roleText, fontFamily: fontFamily.fontFamily}}
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
                    sx={{...experienceStyles.descriptionText, fontFamily: fontFamily.fontFamily}}
                    color={theme.palette.text.primary}
                  >
                    {exp.description}
                  </Typography>
                </Box>

                <Grid container spacing={1}>
                  {exp.techStack.map((tech, i) => (
                    <Grid item key={i}>
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