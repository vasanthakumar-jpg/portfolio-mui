import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  IconButton,
  Collapse,
} from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { common , fontFamily} from "../../styles/theme/index";

const educationDetails = [
  {
    image: `${import.meta.env.BASE_URL}images/clg.jpg`,
    institution: "Nandha Engineering College",
    degree: "B.Tech – Computer Science and Engineering",
    year: "2017 - 2021",
    description:
      "Nandha Engineering College (NEC) is private, established in 2001 Erode, Tamil Nadu.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/scl2.avif`,
    institution: "Vidhya Vikas Matric Hr. Sec. School, Tirupur",
    degree: "HSC – Computer Science",
    year: "2017",
    description:
      "The school is known for its academic excellence and commitment to holistic education.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/scl1.jpg`,
    institution: "Vidhya Vikas Matric Hr. Sec. School, Tirupur",
    degree: "SSLC",
    year: "2015",
    description:
      "The school is known for its academic excellence and commitment to holistic education.",
  },
];

const useScrollFade = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView]);

  return { ref, controls };
};

const Card = ({ edu, index }) => {
  const { ref, controls } = useScrollFade();
  const theme = useTheme();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      style={{ width: "100%" }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          width: "100%",
          backgroundColor: "theme.palette.background.paper",
          color: theme.palette.text.primary,
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            gap: 3,
          }}
        >
          <Box
            component="img"
            src={edu.image}
            alt={edu.institution}
            sx={{
              width: { xs: "100%", sm: 180 },
              height: { xs: 180, sm: 140 },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 2,
            }}
          />

          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" color={theme.palette.text.primary} sx={{fontFamily: fontFamily.fontFamily}}>
                {edu.institution}
              </Typography>
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconButton color={theme.palette.text.primary}>
                  <SchoolIcon />
                </IconButton>
              </motion.div>
            </Box>

            <Typography variant="subtitle1" color={theme.palette.text.primary} sx={{fontFamily: fontFamily.fontFamily}}>
              {edu.degree}
            </Typography>
            <Typography variant="subtitle2" color={theme.palette.text.Accent} sx={{fontFamily: fontFamily.fontFamily}}>
              {edu.year}
            </Typography>
            <Typography variant="body2" color={theme.palette.text.primary} sx={{fontFamily: fontFamily.fontFamily}}>
              {edu.description}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default function Education() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: 2,
        maxWidth: "1200px",
        mx: "auto",
        position: "relative",
        py: 6,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          color="primary"
          textAlign="center"
          gutterBottom
          sx={{...common.sectionTitle, color: "inherit", fontFamily: fontFamily.fontFamily }}
        >
          Education
        </Typography>
        <Divider
          sx={common.sectionDivider}
        />
      </motion.div>

      <Grid container direction="column" spacing={6}>
        {!isMobile && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 700 }} // Adjust this based on number of items
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              left: "32px",
              top: 120, // reduced from 100 → pushes line start slightly down
              width: "2px",
              backgroundColor: theme.palette.text.primary,
              zIndex: 0,
              borderRadius: 1,
            }}
          />
        )}

        {educationDetails.map((edu, index) => (
          <Grid
            key={index}
            container
            spacing={2}
            wrap="nowrap"
            alignItems="flex-start"
            sx={{
              flexDirection: isMobile ? "column" : "row",
              position: "relative",
            }}
          >
            {!isMobile && (
              <Box
                sx={{
                  minWidth: "64px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.text.primary,
                    zIndex: 2,
                    mt: "2px",
                  }}
                />
                <Box
                  sx={{
                    width: 40,
                    height: 2,
                    backgroundColor: theme.palette.text.primary,
                    position: "absolute",
                    top: "8px",
                    left: "16px",
                  }}
                />
              </Box>
            )}

            <Grid size={{xs:12}}>
              <Card edu={edu} index={index} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}