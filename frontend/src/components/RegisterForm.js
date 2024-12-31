import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext"; // Import AuthContext
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

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      // Call the registration API endpoint
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      const userData = {
        name: response.data.name,
        email: response.data.email,
        token: response.data.token,
      };

      // Set user data in context and localStorage
      login(userData);

      // After successful registration, redirect to the dashboard
      navigate("/HomePage");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          minHeight: "calc(100vh)",
          display: "flex",
          flexDirection: "column",
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
            boxShadow: "0px 4px 10px rgb(0, 0, 0)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Sign In
          </Typography>
          <TextField
            fullWidth
            type="Name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            Register
          </Button>
          <Typography variant="body2" sx={{ mt: 3 }}>
            have an account?{" "}
            <Link href="#" underline="hover">
              Login here
            </Link>
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default RegisterForm;
