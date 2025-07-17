import React from "react";
import { Box, Typography, Grid, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { commonStyles } from "../../styles/Course/index";
import { common, fontFamily } from "../../styles/theme/index";

const Course = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box id="course" sx={commonStyles.sectionContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          color="primary"
          textAlign="center"
          gutterBottom
          sx={{
            ...common.sectionTitle,
            color: "inherit",
            fontFamily: fontFamily.fontFamily,
          }}
        >
          Completed Courses
        </Typography>
        <Divider sx={common.sectionDivider} />
      </motion.div>

      <Grid container spacing={4}>
        {[1, 2].map((index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6 }}
            display="flex"
            justifyContent="center"
          >
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}images/cert${index}.jpg`}
                alt={`Certificate ${index}`}
                sx={commonStyles.certificateImage(isMobile)}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Course;