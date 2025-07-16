export const commonStyles = {
    card: {
      padding: 3,
      borderRadius: 3,
      backgroundColor: '#f9fafb',
      transition: '0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 6,
      },
    },
    image: {
      width: 200,
      height: 200,
      objectFit: 'cover',
      borderRadius: 2,
    },
    titleText: {
      fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
      fontWeight: 'bold',
    },
    degreeText: {
      fontSize: { xs: '0.9rem', sm: '1rem' },
    },
    yearText: {
      fontSize: { xs: '0.8rem', sm: '0.95rem' },
      marginBottom: 1,
    },
    descriptionText: {
      fontSize: { xs: '0.85rem', sm: '1rem' },
    },
    timelineLine: {
      position: 'absolute',
      left: '32px',
      top: 0,
      width: '4px',
      background: 'linear-gradient(to bottom, #1e40af, #93c5fd)',
      borderRadius: '2px',
      zIndex: 0,
    },
  };
  