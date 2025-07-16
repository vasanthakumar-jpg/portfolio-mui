import { colors } from "../theme/index";
export const commonStyles = {
    sectionContainer: {
      px: 2,
      py: 8,
      maxWidth: '1200px',
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: { xs: '1.8rem', sm: '2rem', md: '2.4rem' },
      fontWeight: 'bold',
    },
    sectionDivider: {
      width: 100,
      height: 4,
      mx: 'auto',
      background: 'linear-gradient(to bottom right, #CBD5E1,rgb(208, 213, 219))',
      borderRadius: 2,
      mb: 6,
    },
    certificateImage: (isMobile) => ({
      width: isMobile ? '100%' : 400,
      height: isMobile ? 'auto' : 540,
      maxWidth: 400,
      borderRadius: 2,
      boxShadow: 4,
      mt: isMobile ? 2 : 0,
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
      },
    }),
  };
  