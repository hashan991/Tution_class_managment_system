import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        p: 4,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* Logo and Description */}
      <Box sx={{ flex: "1 1 300px", mb: { xs: 3, sm: 0 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Appasaurus
        </Typography>
        <Typography variant="body2">
          Our comprehensive, standards-aligned supplemental program empowers
          <br />
          school administrators and teachers to help students build essential
          <br />
          skills in math, reading, writing, science, social studies, and more.
          <br />
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Stack
        direction="row"
        spacing={5}
        sx={{
          flex: "1 1 300px",
          justifyContent: "space-around",
        }}
      >
        {/* Our Service */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Our Service
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            About Us
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Our Work
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Pricing
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Help Center
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Login
          </Link>
        </Box>

        {/* Company */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Company
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            Terms of Use
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Contact Us
          </Link>
        </Box>

        {/* Follow Us */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Follow Us
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            Facebook
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            LinkedIn
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Instagram
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Dribbble
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
