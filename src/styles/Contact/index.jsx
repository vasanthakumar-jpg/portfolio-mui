export const contactStyles = {
    sectionContainer: {
      px: 2,
      pt: { xs: 4, md: 8 },
      maxWidth: '1200px',
      mx: 'auto',
      position: 'relative',
    },
    sectionTitle: {
      fontSize: { xs: '1.8rem', sm: '2rem', md: '2.4rem' },
      fontWeight: 'bold',
      textAlign: 'center',
    },
    
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
    },
    button: {
      fontSize: { xs: '0.9rem', sm: '1rem' },
      textTransform: 'none',
      transition: '0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: 4,
      },
    },
    mapContainer: {
      mt: 5,
      height: { xs: 300, sm: 300 },
      width: '100%',
      borderRadius: 3,
      overflow: 'hidden',
      boxShadow: 3,
    },
  };
  