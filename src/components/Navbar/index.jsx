import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
  useMediaQuery,
  Switch,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "About", icon: <InfoIcon /> },
  { label: "Education", icon: <SchoolIcon /> },
  { label: "Course", icon: <FolderIcon /> },
  { label: "Experience", icon: <WorkIcon /> },
  { label: "Contact Us", icon: <ContactMailIcon /> },
];

const Navbar = ({ mode, toggleColorMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const lastScrollY = useRef(0);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 64) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: mode === "dark" ? "#000" : "#fff",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{ color: mode === "dark" ? "#ffffff" : "#1E293B" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    color: mode === "dark" ? "#ffffff" : "#1E293B",
                    fontFamily: `'Poppins', 'Inter', sans-serif`,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
      <Box sx={{ px: 2, py: 1, display: "flex", alignItems: "center" }}>
        <IconButton color="inherit">
          {mode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <Typography
          variant="body2"
          sx={{
            ml: 1,
            color: mode === "dark" ? "#ffffff" : "#1E293B",
            fontFamily: `'Poppins', 'Inter', sans-serif`,
          }}
        >
          {mode === "dark" ? "Dark" : "Light"} Mode
        </Typography>
        <Switch
          checked={mode === "dark"}
          onChange={toggleColorMode}
          sx={{ ml: "auto" }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={3}
        sx={{
          transition: "transform 0.3s ease-in-out",
          transform: hideOnScroll ? "translateY(-100%)" : "translateY(0)",
          backdropFilter: "blur(8px)",
          backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
          color: mode === "dark" ? "#ffffff" : "#1E293B",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontFamily: `'Poppins', 'Inter', sans-serif`,
                color: mode === "dark" ? "#ffffff" : "#1E293B",
              }}
            >
              Vasanthakumar
            </Typography>
          </motion.div>

          {!isMobile ? (
            <Stack direction="row" alignItems="center" spacing={2}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Button
                    startIcon={item.icon}
                    sx={{
                      color: mode === "dark" ? "#ffffff" : "#1E293B",
                      textTransform: "none",
                      fontWeight: 500,
                      fontFamily: `'Poppins', 'Inter', sans-serif`,
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <IconButton
                color="inherit"
                onClick={toggleColorMode}
                sx={{
                  transition: "transform 0.5s ease",
                  transform:
                    mode === "dark" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {mode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Stack>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon
                sx={{ color: mode === "dark" ? "#ffffff" : "#1E293B" }}
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;