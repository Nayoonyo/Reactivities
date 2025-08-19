import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, ScrollRestoration } from "react-router";
import HomePage from "../../features/activities/home/HomePage";

function App() {
  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <ScrollRestoration />
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container maxWidth="xl" sx={{ pt: 14 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
