import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
} from "@mui/material";
import axios from "axios";

const ViewSubmissionsPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/submissions/user",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/api/submissions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubmissions(submissions.filter((submission) => submission._id !== id));
    } catch (error) {
      console.error("Error deleting submission:", error);
    }
  };

  const handleEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.put(
        `http://localhost:8080/api/submissions/${selectedSubmission._id}`,
        selectedSubmission,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSubmissions(
        submissions.map((submission) =>
          submission._id === data._id ? data : submission
        )
      );
      setOpenEditDialog(false);
    } catch (error) {
      console.error("Error updating submission:", error);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Submissions
      </Typography>

      {/* Show a message if no submissions are available */}
      {submissions.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No submissions available. Please create a new submission.
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {submissions.map((submission) => (
            <Grid item xs={12} sm={6} md={4} key={submission._id}>
              <Card
                sx={{
                  border: "1px solid #ccc",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)", // Slight zoom-in effect
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6">{submission.name}</Typography>
                  <Typography variant="body2">{submission.country}</Typography>
                  <Typography variant="body2">{submission.company}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 1 }}
                  >
                    Questions:
                  </Typography>
                  <ul>
                    {submission.questions.map((question, index) => (
                      <li key={index}>{question}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                    onClick={() => {
                      setSelectedSubmission(submission);
                      setOpenEditDialog(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#d32f2f",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#c62828",
                      },
                    }}
                    onClick={() => handleDelete(submission._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Edit Dialog */}
      {selectedSubmission && (
        <Dialog
          open={openEditDialog}
          onClose={() => setOpenEditDialog(false)}
          fullWidth
        >
          <DialogTitle>Edit Submission</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              value={selectedSubmission.name}
              onChange={(e) =>
                setSelectedSubmission({
                  ...selectedSubmission,
                  name: e.target.value,
                })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Country"
              value={selectedSubmission.country}
              onChange={(e) =>
                setSelectedSubmission({
                  ...selectedSubmission,
                  country: e.target.value,
                })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Company"
              value={selectedSubmission.company}
              onChange={(e) =>
                setSelectedSubmission({
                  ...selectedSubmission,
                  company: e.target.value,
                })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Questions (Comma-separated)"
              value={selectedSubmission.questions.join(", ")}
              onChange={(e) =>
                setSelectedSubmission({
                  ...selectedSubmission,
                  questions: e.target.value.split(","),
                })
              }
              fullWidth
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
            <Button onClick={handleEdit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default ViewSubmissionsPage;
