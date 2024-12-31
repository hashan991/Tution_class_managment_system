import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import Navbar from "../layouts/Navbar";

const ExamForm = ({ onSubmit, existingExam }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  // Pre-fill the form with existing exam data if available
  useEffect(() => {
    if (existingExam) {
      setName(existingExam.name);
      setDate(existingExam.date);
    }
  }, [existingExam]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, date });
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          background: "linear-gradient(to right,rgb(237, 230, 221), #2575fc)",
          minHeight: "calc(100vh)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 3,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              {existingExam ? "Update Exam" : "Create Exam"}
            </Typography>

            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": { color: "primary.main" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "primary.main" },
                  "&:hover fieldset": { borderColor: "primary.dark" },
                },
              }}
            />

            <TextField
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": { color: "primary.main" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "primary.main" },
                  "&:hover fieldset": { borderColor: "primary.dark" },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              {existingExam ? "Update Item" : "Create Item"}
            </Button>
          </Box>
        </Container>
        <Button
          variant="contained"
          onClick={() => navigate("/ExamTablePage")}
          sx={{
            backgroundColor: "rgb(255, 193, 7)",
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "14px",
            padding: "6px 16px",
            borderRadius: "8px",
            ml: 2,
            mt: 2,
            "&:hover": {
              backgroundColor: "rgb(255, 255, 0)",
            },
          }}
        >
          view Shaduule
        </Button>
      </Box>
    </Box>
  );
};

export default ExamForm;
