import { colors } from "../theme/index";

export const typographySizes = {
  heading: {
    fontSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3rem",
    },
    fontWeight: 700,
    lineHeight: 1.3,
    color: colors.Primary,
  },
  subheading: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.5rem",
      md: "2rem",
    },
    fontWeight: 500,
    color: colors.Primary,
  },
};

export const fadeUpVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const iconHoverEffect = {
  whileHover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  whileTap: { scale: 0.95 },
};

export const buttonMotion = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const layout = {
  container: {
    flexGrow: 1,
    py: { xs: 10, md: 10 },
    px: 2,
    maxWidth: "1200px",
    mx: "auto",
  },
  image: {
    width: "100%",
    height: "100%",
    maxHeight: 450,
    // objectFit: "cover",
    borderRadius: 2,
  },
  logo: {
    padding: "6px 0px",
    width: {xs: "200px", md: "240px"},
    height: {xs: "60px", md: "100px"},
    objectFit: "cover",
    borderRadius: 2,
  },
};