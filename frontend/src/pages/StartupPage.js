import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container,Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const StartupPage = () => {
  return (


    <Box>
      {/* Navbar */}
      
      <AppBar position="static" 
      sx={{ backgroundColor: 'rgb(3, 55, 118)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            First Edu Lanka
          </Typography>
          <Button color="inherit" component={Link} to="/HomePage">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/AboutPage">
            About
          </Button>
          <Button color="inherit" component={Link} to="/ContactPage">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          height: 'calc(100vh - 64px)', // Adjust height to account for the navbar
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(to bottom right, #4a90e2, #9013fe)',
          color: '#fff',
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          {/* Main Heading */}
          <Typography component="h1" variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            Welcome First Edu Lanka
          </Typography>

          {/* Subheading */}
          <Typography variant="h6" sx={{ mb: 3 }}>
            Your gateway to quality education and a brighter future.
          </Typography>

          {/* Buttons */}
          <Box>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/LoginPage"
              sx={{ margin: 1 }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/RegisterPage"
              sx={{ margin: 1 }}
            >
              Register
            </Button>
          </Box>
        </Container>
      </Box>


      <Box
        sx={{
          backgroundColor: '#f5f5f5', // Light gray background for contrast
          color: '#000',
          borderRadius: 2,
          boxShadow: 3,
          padding: 4, // Reduced padding for consistency
          textAlign: 'center',
          marginBottom: 4, // Added margin for spacing below
        }}
      >
        {/* Title of Section */}
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold' }}>
          Our Learning Library
        </Typography>

        {/* Subtext */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          With thousands of digital and printable resources, find the best resource for your student.
        </Typography>

        {/* Two Boxes in One Line */}
        <Grid sx={{ display: 'flex', justifyContent: 'space-between', gap: 3, mb: 4 }}>
          {/* First Box */}
          <Container
           sx={{
            backgroundColor: '#fff', // White background for each item
            borderRadius: 2,
            boxShadow: 3,
            padding: 3,
            textAlign: 'left',
            flex: 1, // Ensure both boxes take equal width
            width: '45%', // Set the width of the box (you can adjust this percentage or use a fixed value like '300px')
            marginLeft: '200px' // Set the height of the box (you can adjust this value as per requirement)
          }}
          
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Lesson Plans
            </Typography>
            <Typography variant="body1">
              Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings.
            </Typography>
          </Container>

          {/* Second Box */}
          <Container
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              textAlign: 'left',
              flex: 1,
              marginRight: '200px'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Worksheets
            </Typography>
            <Typography variant="body1">
              We've got a worksheet for anything your student is learning! Our printables make it easy to practice everything from handwriting to multiplication to sight words, and much more!
            </Typography>
          </Container>
        </Grid>

        {/* Two more Boxes in One Line */}
        <Grid sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          {/* Third Box */}
          <Container
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              textAlign: 'left',
              flex: 1,
              marginLeft: '200px' // Set the height of the box (you can adjust this value as per requirement)

            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Games
            </Typography>
            <Typography variant="body1">
              Transform study time into an adventure! Sharpen math fluency and learn letters with immersive games like Flipping Pancakes Fractions and Irregular Nouns Ski Race.
            </Typography>
          </Container>

          {/* Fourth Box */}
          <Container
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              textAlign: 'left',
              flex: 1,
              marginRight: '200px'

            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Activities
            </Typography>
            <Typography variant="body1">
              Our curated activities bring topics to life through hands-on science experiments, creative art projects, inspirational writing prompts, and more!
            </Typography>
          </Container>
        </Grid>
      </Box>


      <Box>

            





      </Box>
    </Box>
  );
};

export default StartupPage;
