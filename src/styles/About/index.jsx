import { colors } from "../theme/index";
export const typographySizes = {
    sectionTitle: {
      fontSize: {
        xs: "1.8rem",
        sm: "2.2rem",
        md: "2.5rem",
      },
      fontWeight: 700,
      color: colors.textPrimary,
    },
    bodyText: {
      fontSize: {
        xs: "1rem",
        sm: "1.1rem",
        md: "1.2rem",
      },
      color: colors.textPrimary,
      lineHeight: 1.8,
    },
  };
  
  // Fade Variants
  export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  // Avatar + Section Reveal
  export const scaleFadeIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  // Social Icon Hover
  export const iconHoverEffect = {
    whileHover: { scale: 1.2, rotate: 5 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300 },
  };
  