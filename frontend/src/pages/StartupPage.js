import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StartupPage = () => {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <h1>welcome first edu lanka </h1>
        <Button variant="contained" color="primary" component={Link} to="/LoginPage" sx={{ margin: 1 }}>
          Login
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/RegisterPage" sx={{ margin: 1 }}>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default StartupPage;
