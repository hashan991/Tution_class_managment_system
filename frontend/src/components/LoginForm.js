import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext"; // Import the AuthContext
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate hook
  const { login } = useContext(AuthContext); // Get the login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const userData = {
        email: response.data.email,
        name: response.data.name,
        token: response.data.token,
      };

      login(userData); // Store user data in context and localStorage
      navigate("/HomePage"); // Redirect to dashboard after successful login
    } catch (error) {
      console.error(
        "Error logging in:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          minHeight:"calc(100vh)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              background: "white",
              borderRadius: "20px",
              width: "350px",
              padding: "30px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              Sign In
            </Typography>
            <TextField
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
              }}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remember me"
                sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
              />
              <Link href="#" variant="body2" underline="hover">
                Forgot Password
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "30px",
                fontWeight: "bold",
                py: 1,
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              LOGIN
            </Button>
            <Typography variant="body2" sx={{ mt: 3 }}>
              Don't have an account?{" "}
              <Link href="#" underline="hover">
                Register here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default LoginForm;
