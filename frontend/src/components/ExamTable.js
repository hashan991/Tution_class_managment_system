import React from "react";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../layouts/Navbar";
import { Box } from "@mui/material";

const ExamTable = ({ exams, onEdit, onDelete }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar />
      <Box sx={{ minHeight: "calc(100vh - 64px)", mt: 7 }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 3, borderRadius: 2 }}
        >
          <Typography
            variant="h6"
            sx={{
              //display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              padding: "16px",
              backgroundColor: "rgb(8, 104, 221)",
              color: "white",
              borderRadius: "8px 8px 0 0",
              textAlign: "center",
            }}
          >
          
            Exam Schedule
            {user && user.email === "teacher@email.com" && (
              <Button
                variant="contained"
                onClick={() => navigate("/ExamFormPage")}
                sx={{
                  backgroundColor: "rgb(255, 193, 7)",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "rgb(255, 255, 0)",
                  },
                }}
              >
                Add Shaduule
              </Button>
            )}
          </Typography>

          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgb(3, 55, 118)" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Exam Name
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam._id} hover>
                  <TableCell>{exam.name}</TableCell>
                  <TableCell>{exam.date}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "rgb(255, 193, 7)",
                        color: "black",
                        textTransform: "none",
                        marginRight: 1,
                        "&:hover": {
                          backgroundColor: "rgb(255, 255, 0)",
                        },
                      }}
                      onClick={() => onEdit(exam)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "rgb(220, 53, 69)",
                        color: "white",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "rgb(255, 69, 89)",
                        },
                      }}
                      onClick={() => onDelete(exam._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ExamTable;
