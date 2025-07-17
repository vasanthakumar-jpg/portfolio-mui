import React, { useState, useMemo } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
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
            main: mode === "dark" ? colors.lightshade : colors.mediumshade,
          },
          background: {
            default: mode === "dark" ? colors.Black : colors.verylightgray,
            paper: mode === "dark" ? colors.verydarkgray : colors.White,
          },
          text: {
            primary: mode === "dark" ? colors.White : colors.textPrimary,
            secondary: mode === "dark" ? colors.mediumgray : colors.grayishblue,
          },
        },
        typography: {
          fontFamily: "Inter, Roboto, sans-serif",
        },
      }),
    [mode]
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/portfolio-mui/"
        element={<LandingPage mode={mode} toggleColorMode={toggleColorMode} />}
      />
    ),
    {
      // 👇 Enables v7 future flags
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      },
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;