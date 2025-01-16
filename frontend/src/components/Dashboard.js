import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Divider,
} from "@mui/material";

const DashboardPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          "http://localhost:8080/api/submissions",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSubmissions(data);
        setFilteredSubmissions(data); // Initialize filtered submissions
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = submissions.filter((submission) =>
      submission.company.toLowerCase().includes(query)
    );
    setFilteredSubmissions(filtered);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Submissions
      </Typography>

      <TextField
        label="Search by Company"
        variant="outlined"
        fullWidth
        sx={{ mb: 4 }}
        value={searchQuery}
        onChange={handleSearch}
      />

      <Grid container spacing={3}>
        {filteredSubmissions.map((submission) => (
          <Grid item xs={12} key={submission._id}>
            <Card
              sx={{
                border: "1px solid #ccc",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)", // Slight zoom-in effect
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Increased shadow for hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {submission.name}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Country:
                    </Typography>
                    <Typography variant="body2">{submission.country}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Company:
                    </Typography>
                    <Typography variant="body2">{submission.company}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Submitted by:
                    </Typography>
                    <Typography variant="body2">
                      {submission.userId.email}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Questions:
                  </Typography>
                  <Box
                    component="ul"
                    sx={{ listStyleType: "disc", pl: 2, mb: 0 }}
                  >
                    {submission.questions.map((question, index) => (
                      <li key={index} style={{ marginBottom: "4px" }}>
                        {question}
                      </li>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
