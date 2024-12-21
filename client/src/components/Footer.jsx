import React from "react";
import { Box, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0d47a1",
        color: "white",
        padding: "16px 0",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontSize: "0.85rem", color: "#e3f2fd" }}>
          &copy; 2024 Blog App. All rights reserved.
        </Typography>
      </Container>
    </Box>

  );
}

export default Footer;
