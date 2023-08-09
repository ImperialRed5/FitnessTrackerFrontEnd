import React, { useEffect, useState } from "react";
import { getActivities, postActivities } from "../api";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const Activities = ({ activities, setActivities, token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const activitiesResult = await getActivities();
      setActivities(activitiesResult);
    };
    fetchData();
  }, []);

  const handleNewActivity = async (e) => {
    e.preventDefault();
    const response = await postActivities(token, name, description);
    if (response.error) {
      setError(response.error);
      setSuccessMessage(null); 
    } else {
      setError(null);
      setName(""); 
      setDescription(""); 
      setActivities((prevActivities) => [...prevActivities, response]);
      setSuccessMessage("Activity created successfully!");
    }
  };
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Activities
      </Typography>
      {error && (
        <Alert severity="error" style={{ margin: "10px 0" }}>
          {error}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" style={{ margin: "10px 0" }}>
          {successMessage}
        </Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}

      {token && (
        <Paper
          component="form"
          style={{ padding: "20px", marginBottom: "20px" }}
          onSubmit={handleNewActivity}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Create Activity
          </Button>
        </Paper>
      )}

      {activities.map((activity) => (
        <Paper
          elevation={2}
          style={{ padding: "15px", margin: "10px 0" }}
          key={activity.id}
        >
          <Typography variant="h4">Activities</Typography>
          <Typography variant="h6">Name: {activity.name}</Typography>
          <Typography variant="h6">
            Description: {activity.description}
          </Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default Activities;
