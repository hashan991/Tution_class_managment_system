import { useNavigate } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import photo1 from "../assets/ppp.jpg";
import pngwing from "../assets/pngwing.png";
import pngwing1 from "../assets/qqq.png";
import pngwing2 from "../assets/www.png";
import pngwing3 from "../assets/eee.png";
import pngwing4 from "../assets/rrr.png";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Navbar />
     
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${photo1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "Black",
          textAlign: "center",
        }}
      >
        {/* Main Heading */}
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Achieve Your Goals Today
        </Typography>

        {/* Subtext */}
        <Typography variant="h5" sx={{ mb: 4, maxWidth: "600px" }}>
          Unlock your potential with personalized learning experiences. Start
          your journey today.
        </Typography>

        {/* Call-to-Action Buttons */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="balck"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Light gray background for contrast
          color: "#000",

          padding: 4, // Reduced padding for consistency
          textAlign: "center",
          marginBottom: 4, // Added margin for spacing below
        }}
      >
        {/* Title of Section */}
        <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
          Our Learning Library
        </Typography>

        {/* Subtext */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          With thousands of digital and printable resources, find the best
          resource for your student.
        </Typography>

        {/* Two Boxes in One Line */}
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
            mb: 4,
          }}
        >
          {/* First Box */}
          <Container
            maxWidth="sm"
            sx={{
              backgroundColor: "#fff", // White background for each item

              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              textAlign: "left",
              flex: 1, // Ensure both boxes take equal width
              width: "45%", // Set the width of the box (you can adjust this percentage or use a fixed value like '300px')
              marginLeft: "200px", // Set the height of the box (you can adjust this value as per requirement)
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Lesson Plans
            </Typography>
            <Typography variant="body1">
              Free, ready-made lesson plans make it easy to provide meaningful,
              standards-aligned instruction in both classroom and homeschool
              settings.
            </Typography>
          </Container>

          {/* Second Box */}
          <Container
            maxWidth="sm"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              textAlign: "left",
              flex: 1,
              marginRight: "200px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Worksheets
            </Typography>
            <Typography variant="body1">
              We've got a worksheet for anything your student is learning! Our
              printables make it easy to practice everything from handwriting to
              multiplication to sight words, and much more!
            </Typography>
          </Container>
        </Grid>

        {/* Two more Boxes in One Line */}
        <Grid sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
          {/* Third Box */}
          <Container
            maxWidth="sm"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              textAlign: "left",
              flex: 1,
              marginLeft: "200px", // Set the height of the box (you can adjust this value as per requirement)
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Games
            </Typography>
            <Typography variant="body1">
              Transform study time into an adventure! Sharpen math fluency and
              learn letters with immersive games like Flipping Pancakes
              Fractions and Irregular Nouns Ski Race.
            </Typography>
          </Container>

          {/* Fourth Box */}
          <Container
            maxWidth="sm"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              textAlign: "left",
              flex: 1,
              marginRight: "200px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Activities
            </Typography>
            <Typography variant="body1">
              Our curated activities bring topics to life through hands-on
              science experiments, creative art projects, inspirational writing
              prompts, and more!
            </Typography>
          </Container>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(75, 15, 90)",
          color: "#fff",
          textAlign: "left",
        }}
      >
        <Grid sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
            Unlock every student's true potential
          </Typography>

          <Typography>
            A premium membership gives you unlimited access to all of
            Education.com's resources and tools like playlists of guided
            lessons, progress insights for each student, and more!
          </Typography>
        </Grid>

        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
            mt: 5,
          }}
        >
          <Grid sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mt: 5 }}>
              Guided lessons
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Follow our expertly-
              <br />
              designed pathways of fun <br />
              games that help learners <br />
              practice and build upon <br />
              skills in math, reading, <br />
              writing, and typing!
            </Typography>
          </Grid>
          <Box
            component="img"
            src={pngwing} // Notice the leading slash
            alt="Sample Image"
            sx={{
              width: "500px",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              marginBottom: 2,
              flex: 1,
            }}
          />

          <Grid sx={{ flex: 1, ml: 10 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mt: 15,
                paddingTop: "100px",
              }}
            >
              Support for individual learners
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Create assignments for
              <br />
              individual learners, an entire <br />
              household, or a classroom–
              <br />
              each student's
              <br />
              achievements and <br />
              milestones
            </Typography>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4A90E2", // Updated to a vibrant blue
          color: "#fff",
          textAlign: "center",
          padding: 6, // More padding for a spacious layout
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h3"
          sx={{
            mt: 3,
            mb: 4,
            fontWeight: "bold",
            fontSize: "2.5rem",
            letterSpacing: "2px",
          }}
        >
          Join the Education.com Community!
        </Typography>

        {/* Grid Layout for Content */}
        <Grid
          container
          spacing={4} // Increased spacing for a clean layout
          justifyContent="center"
          alignItems="center"
        >
          {/* First Item */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              component="img"
              src={pngwing1} // Ensure this variable points to a valid image path
              alt="44 million served"
              sx={{
                width: "120px", // Slightly larger image for better visibility
                height: "auto",
                borderRadius: "10px", // Rounded corners for a modern look
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)", // Soft shadow for depth
                backgroundColor: "#E6F1FF", // Light background for contrast
                padding: 2, // More padding around the image
              }}
            />
            <Typography sx={{ fontWeight: "bold", mt: 2, fontSize: "1.2rem" }}>
              44 million parents,
              <br />
              teachers, and students served
            </Typography>
          </Grid>

          {/* Second Item */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              component="img"
              src={pngwing2}
              alt="Global community"
              sx={{
                width: "120px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                backgroundColor: "#E6F1FF",
                padding: 2,
              }}
            />
            <Typography sx={{ fontWeight: "bold", mt: 2, fontSize: "1.2rem" }}>
              190 countries represented,
              <br />
              shaping global education
            </Typography>
          </Grid>

          {/* Third Item */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              component="img"
              src={pngwing3}
              alt="Innovative tools"
              sx={{
                width: "120px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                backgroundColor: "#E6F1FF",
                padding: 2,
              }}
            />
            <Typography sx={{ fontWeight: "bold", mt: 2, fontSize: "1.2rem" }}>
              Thousands of tools
              <br />
              to empower educators
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: "calc(100vh )", // Adjust height to account for the navbar
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${pngwing4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            mt: 10,
            fontWeight: "bold",
            fontSize: "6rem",
            color: "rgb(12, 0, 3)", // Sets font color
          }}
        >
          Get access today!
        </Typography>

        {/* Add extra spacing just for the button */}
        <Box
          sx={{
            mt: 10, // Pushes the button down without affecting Typography
          }}
        >
          <Button
            sx={{
              fontSize: "1.5rem",
              padding: "15px 35px",
              borderRadius: "50px",
              backgroundColor: "#007bff",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
            }}
            variant="contained"
            color="primary"
            component={Link}
            to="/LoginPage"
          >
            GET START
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};
export default HomePage;
