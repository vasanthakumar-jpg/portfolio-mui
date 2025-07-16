import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import LandingPage from "./pages/Landingpage";

function App() {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //         primary: {
  //           main: mode === "dark" ? "#90caf9" : "#1976d2",
  //         },
  //         background: {
  //           default: mode === "dark" ? "#121212" : "#f5f5f5",
  //           paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
  //         },
  //       },
  //       typography: {
  //         fontFamily: "Inter, Roboto, sans-serif",
  //       },
  //     }),
  //   [mode]
  // );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#90caf9" : "#1976d2",
          },
          background: {
            default: mode === "dark" ? "#000000" : "#f5f5f5",  // Force black
            paper: mode === "dark" ? "#121212" : "#ffffff",
          },
          text: {
            primary: mode === "dark" ? "#ffffff" : "#1E293B",  // White text in dark mode
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
            path="/"
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
