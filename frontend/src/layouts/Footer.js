import React from 'react';
import { Box, Button, Container } from '@mui/material';

const Footer = ({ user, handleFirstClick, handleQQQClick, handleWWWClick }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        py: 2,
        textAlign: 'center',
        boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        {/* Conditionally render the First button only for first@email.com */}
        {user?.email === 'first@email.com' && (
          <Button variant="contained" color="primary" onClick={handleFirstClick}>
            First
          </Button>
        )}

        <Button variant="contained" color="secondary" onClick={handleQQQClick} sx={{ ml: 2 }}>
          QQQ
        </Button>
        <Button variant="contained" color="success" onClick={handleWWWClick} sx={{ ml: 2 }}>
          WWW
        </Button>
      </Container>
    </Box>
  );
};

export default Footer;
