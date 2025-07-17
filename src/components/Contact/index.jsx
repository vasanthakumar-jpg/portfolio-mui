import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { contactStyles } from "../../styles/Contact/index";
import { common, inputStyles, fontFamily } from "../../styles/theme/index";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_mgre1dp",
        "template_20ayj9l",
        {
          name: data.name,
          email: data.email,
          message: data.message,
          title: "Contact Form Message",
        },
        "GKZm7xj6m5yOXE1FG"
      );
      setSuccessMessage("Message sent successfully!");
      reset();
    } catch (error) {
      setSuccessMessage("Failed to send. Please try again.");
    }

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <Box sx={contactStyles.sectionContainer}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{...common.sectionTitle, color: "inherit", fontFamily: fontFamily.fontFamily}}
          gutterBottom
          textAlign="center"
        >
          Contact Me
        </Typography>
        <Divider sx={common.sectionDivider} />
      </motion.div>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={contactStyles.form}
      >
        <TextField
          label="Name"
          fullWidth
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={inputStyles}
        />

        <TextField
          label="Email"
          fullWidth
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={inputStyles}
        />

        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          {...register("message", { required: "Message is required" })}
          error={!!errors.message}
          helperText={errors.message?.message}
          sx={inputStyles}
        />

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
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {successMessage && (
          <Alert
            severity={
              successMessage.includes("successfully") ? "success" : "error"
            }
          >
            {successMessage}
          </Alert>
        )}
      </Box>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box sx={contactStyles.mapContainer}>
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.128860529806!2d77.36455824881698!3d11.103772792061099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907c353428c3d%3A0x547ac42eaa04c6af!2sBhavani%20Nagar%20Rd%2C%20Bavani%20Nagar%2C%20Tiruppur%2C%20Tamil%20Nadu%20641604!5e0!3m2!1sen!2sin!4v1654250506387!5m2!1sen!2sin"
          ></iframe>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;