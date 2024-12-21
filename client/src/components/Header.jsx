import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
  <AppBar position="sticky" sx={{ backgroundColor: "#0d47a1", boxShadow: "none" }}>
    <Container maxWidth="lg">
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#ffffff" }}
        >
          Blog App
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ fontSize: "1rem", textTransform: "none", marginRight: "1rem", "&:hover": { backgroundColor: "#1976d2" } }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/create"
          sx={{ fontSize: "1rem", textTransform: "none", "&:hover": { backgroundColor: "#1976d2" } }}
        >
          Create Post
        </Button>
      </Toolbar>
    </Container>
  </AppBar>

  );
}

export default Header;
