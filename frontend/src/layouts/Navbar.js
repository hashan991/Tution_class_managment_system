import React, { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Footer from "./Footer";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgb(3, 55, 118)",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section: App Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          <RouterLink
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Edu Lanka
          </RouterLink>
        </Typography>

        {/* Center Section: Navigation Buttons */}
        {user && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexGrow: 1,
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/ExamTablePage")}
              sx={{
                backgroundColor: "rgb(3, 55, 118)",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
                minWidth: "140px",
                height: "50px",
                fontSize: "14px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                },
              }}
            >
              Exam Schedule
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/ResultPage")}
              sx={{
                backgroundColor: "rgb(3, 55, 118)",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
                minWidth: "140px",
                height: "50px",
                fontSize: "14px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                },
              }}
            >
              Result
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/LectureSchedulePage")}
              sx={{
                backgroundColor: "rgb(3, 55, 118)",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
                minWidth: "140px",
                height: "50px",
                fontSize: "14px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                },
              }}
            >
              Lecture Schedule
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/LectureRecordPage")}
              sx={{
                backgroundColor: "rgb(3, 55, 118)",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
                minWidth: "140px",
                height: "50px",
                fontSize: "14px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                },
              }}
            >
              Lecture Record
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/AssignmentPage")}
              sx={{
                backgroundColor: "rgb(3, 55, 118)",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
                minWidth: "140px",
                height: "50px",
                fontSize: "14px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                },
              }}
            >
              Assignment
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/LectureResourcesPage")}
              sx={{
                backgroundColor: "rgb(3, 55, 118)",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
                minWidth: "140px",
                height: "50px",
                fontSize: "14px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                },
              }}
            >
              Lecture Resources
            </Button>
          </Box>
        )}

        {/* Right Section: Authentication Links */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!user ? (
            <>
              <Button
                component={RouterLink}
                to="/LoginPage"
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "white",
                  marginRight: 2,
                }}
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to="/RegisterPage"
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "white",
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <Typography
                variant="body1"
                sx={{
                  marginRight: 2,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Welcome, {user.name}
              </Typography>
              <Button
                onClick={handleLogout}
                color="inherit"
                sx={{ textTransform: "none", color: "white" }}
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
