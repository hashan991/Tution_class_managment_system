import React, { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgb(3, 55, 118)" }}>
      <Toolbar>
        {/* App title/logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <RouterLink
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Edu Lanka
          </RouterLink>
        </Typography>

        {/* Right-aligned buttons */}
        <Box>
          {!user ? (
            <>
              <Button
                component={RouterLink}
                to="/LoginPage"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to="/RegisterPage"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Register
              </Button>
              <Button
                component={RouterLink}
                to="/RegisterPage"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                ABOUT
              </Button>
              <Button
                component={RouterLink}
                to="/RegisterPage"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                CONTACT
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1" sx={{ marginRight: "1rem" }}>
                Welcome, {user.name}
              </Typography>
              <Button
                onClick={handleLogout}
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
