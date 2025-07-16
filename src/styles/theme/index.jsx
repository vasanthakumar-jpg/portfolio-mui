import { createTheme } from '@mui/material/styles';
      
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export const colors = {
  
  Primary: '#4ADEDE',
  Secondary: '#3B82F6', 
  Accent: '#64748B', 
  Background: '#F1F5F9',
  White: '#fff',
  Black: '#000',
  footer:'#1E293B',
  textPrimary:'#1E293B',
  Underline:'#CBD5E1',
  button:'#38BDF8',
}

export const buttonStyles = {
  backgroundColor: colors.textPrimary,
  color: colors.White,
  '&:hover': {
    backgroundColor: colors.Accent,
  },
}
export const fontFamily = {
  fontFamily: `'Poppins', 'Inter', sans-serif`
}
export const common = {
  sectionTitle: {
    fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
    fontWeight: 'bold',
    color: colors.textPrimary,
     fontFamily: fontFamily.fontFamily
  },
  heading: {
    fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
    fontWeight: 'bold',
    color: colors.Accent,
    fontFamily: fontFamily.fontFamily
  },
  sectionDivider: {
    width: 100,
    height: 4,
    mx: 'auto',
    background: 'linear-gradient(to bottom right, #CBD5E1,rgb(208, 213, 219))',
    borderRadius: 2,
    mb: 6,
  },
  body: {
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      md: "1.2rem",
    },
    fontWeight: 400,
    lineHeight: 1.8,
    fontFamily: fontFamily.fontFamily
  },

}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    },
  },
});

export { lightTheme, darkTheme };

export const inputStyles = (theme) => ({
  
    // Label color when focused
    '& label.Mui-focused': {
      color: theme.palette.text.primary
    },
    // Border bottom color (for standard variant)
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.text.primary,
    },
    // For outlined variant border
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.text.primary,
      },
    },
    // Optional: input text color
    '& input': {
      color: theme.palette.text.primary,
      fontFamily: fontFamily.fontFamily
    },
  })

export const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  export const iconHoverEffect = {
    whileHover: {
      scale: 1.3,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };
  
  export const buttonMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300 },
  };


export const typographySizes = {
    heading: {
      fontSize: {
        xs: "1.8rem",
        sm: "2.2rem",
        md: "2.8rem",
      },
      fontWeight: "bold",
      fontFamily: fontFamily.fontFamily
    },
    subheading: {
      fontSize: {
        xs: "1.1rem",
        sm: "1.3rem",
        md: "1.6rem",
      },
      fontWeight: "bold",
      fontFamily: fontFamily.fontFamily
    },
    body: {
      fontSize: {
        xs: "0.9rem",
        sm: "1rem",
        md: "1.1rem",
      },
      fontFamily: fontFamily.fontFamily
    },
    sectionTitle: {
        fontSize: {
          xs: "1.8rem",
          sm: "2.2rem",
          md: "2.8rem",
        },
        fontWeight: "bold",
        fontFamily: fontFamily.fontFamily
      },
      paragraph: {
        fontSize: {
          xs: "0.95rem",
          sm: "1rem",
          md: "1.1rem",
        },
        fontFamily: fontFamily.fontFamily 
      },
  };
  
