import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import LandingPage from "./pages/Landingpage";
import { colors } from "./styles/theme/index";

function App() {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#90caf9" : "#1976d2",
          },
          background: {
            default: mode === "dark" ? "#000000" : "#f5f5f5",
            paper: mode === "dark" ? "#121212" : colors.white,
          },
          text: {
            primary: mode === "dark" ? colors.white : "#1E293B",
            secondary: mode === "dark" ? "#cccccc" : "#4B5563",
          },
        },
        typography: {
          fontFamily: "Inter, Roboto, sans-serif",
        },
      }),
    [mode]
  );
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/portfolio-mui/"
            element={
              <LandingPage mode={mode} toggleColorMode={toggleColorMode} />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
