import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Welcome to Interview Taiyari 
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
            Discover insider insights into interview processes with our collaborative platform. Share your personal interview experiences, gain valuable perspectives from others, and strategically prepare yourself for upcoming career opportunities. Connect with a community of professionals who are committed to helping each other succeed in their job search journey.
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Create an account to contribute and access a growing database of
              interview experiences from top companies worldwide.
            </Typography>
            <Box mt={4}>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate("/login")}
                sx={{ ml: 2 }}
              >
                Login
              </Button>
             
            </Box>
          </Grid>
          {/* Right Section: Illustration or Image */}
          <Grid item xs={12} md={6}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220805183149/image16.png"
              alt="Interview Platform Illustration"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
