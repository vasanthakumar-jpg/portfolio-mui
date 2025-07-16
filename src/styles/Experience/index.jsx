import { colors } from "../theme/index";

export const experienceStyles = {
    sectionContainer: {
      flexGrow: 1,
      px: 2,
      maxWidth: '1200px',
      mx: 'auto',
    },
    card: {
      p: 3,
      borderRadius: 3,
      backgroundColor: colors.Accent,
      transition: '0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 6,
      },
    },
    roleText: {
      fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
      fontWeight: 600,
    },
    subtitleText: {
      fontSize: { xs: '0.9rem', sm: '1rem' },
      color: colors.Accent,
    },
    descriptionText: {
      fontSize: { xs: '0.95rem', sm: '1.05rem' },
    },
    chip: {
      fontSize: { xs: '0.75rem', sm: '0.85rem' },
      color: colors.textPrimary,
      borderColor: colors.Accent,
    },
  };
  