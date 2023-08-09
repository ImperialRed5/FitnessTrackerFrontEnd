import React, { useEffect, useState } from "react";
import {
  getRoutines,
  getMyRoutines,
  postRoutines,
  patchRoutines,
  deleteRoutines,
  createRoutine,
  addActivityToRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  getUserRoutines
} from "../api";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  Divider,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const Myroutines = ({ token, username, setUsername }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [userRoutines, setUserRoutines,] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const routinesResult = await getMyRoutines();
      const myroutinesResult = await getUserRoutines(token, username);
      setUserRoutines(routinesResult);
    };
    fetchData();
  }, []);

  const handleNewRoutine = async (e) => {
    e.preventDefault();
    try {
        const response = await createRoutine(name, goal, isPublic, token);
        console.log(response);

        if (response.error) {
            setError(response.error);
            setSuccessMessage(null);
        } else {
            setError(null);
            setName("");
            setGoal("");
            setIsPublic(false);;
            setSuccessMessage("Routine created successfully!");
        }
    } catch (error) {
        console.error('Error during createRoutine:', error);
        setError("An unexpected error occurred. Please try again.");
    }
};
  const handleUpdateRoutine = async (e, routineId) => {
    e.preventDefault();
    const response = await patchRoutines(
      token,
      routineId,
      name,
      goal,
      isPublic
    );
    if (response.error) {
      setError(response.error);
      setSuccessMessage(null);
    } else {
      setError(null);
      setName("");
      setGoal("");
      setIsPublic(false);
      setSuccessMessage("Routine updated successfully!");
    }
  };
  const handleDeleteRoutine = async (e, routineId) => {
    e.preventDefault();
    const response = await deleteRoutines(token, routineId);
    if (response.error) {
      setError(response.error);
      setSuccessMessage(null);
    } else {
      setError(null);
      setName("");
      setGoal("");
      setIsPublic(false);
      setSuccessMessage("Routine deleted successfully!");
    }
  };
  const handleAddActivityToRoutine = async (
    e,
    routineId,
    activityId,
    count,
    duration
  ) => {
    e.preventDefault();
    const response = await addActivityToRoutine(
      token,
      routineId,
      activityId,
      count,
      duration
    );
    if (response.error) {
      setError(response.error);
      setSuccessMessage(null);
    } else {
      setError(null);
      setCount("");
      setDuration("");
      setSuccessMessage("Activity added to routine successfully!");
    }
  };
  const handleUpdateRoutineActivity = async (
    e,
    routineActivityId,
    count,
    duration
  ) => {
    e.preventDefault();
    const response = await updateRoutineActivity(
      token,
      routineActivityId,
      count,
      duration
    );
    if (response.error) {
      setError(response.error);
      setSuccessMessage(null);
    } else {
      setError(null);
      setCount("");
      setDuration("");
      setSuccessMessage("Routine activity updated successfully!");
    }
  };
  const handleDeleteRoutineActivity = async (e, routineActivityId) => {
    e.preventDefault();
    const response = await destroyRoutineActivity(token, routineActivityId);
    if (response.error) {
      setError(response.error);
      setSuccessMessage(null);
    } else {
      setError(null);
      setCount("");
      setDuration("");
      setSuccessMessage("Routine activity deleted successfully!");
    }
  };
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        My Routines
      </Typography>
      <Paper elevation={3} style={{ padding: "10px" }}>
        {error && (
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" onClose={() => setSuccessMessage(null)}>
            {successMessage}
          </Alert>
        )}
        <form onSubmit={handleNewRoutine}>
          <TextField
            fullWidth
            label="Name"
            id="standard-basic"
            variant="outlined"
            type="text"
            name="name"
            required
            size="medium"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Goal"
            id="standard-basic"
            variant="outlined"
            type="text"
            name="goal"
            required
            size="medium"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
    
          <Button variant="contained" type="submit">
            Create Routine
          </Button>
        </form>
      </Paper>
      {userRoutines && userRoutines.length > 0 ? (
        <List>
          {userRoutines.map(
            (routine) =>
              routine &&
              routine.length > 0 && (
                <Paper
                  elevation={3}
                  style={{ margin: "10px 0", padding: "10px" }}
                  key={routine.id}
                >
                  <Typography variant="h4">{routine.creatorName}</Typography>
                  <Typography variant="h6">Routine: {routine.name}</Typography>
                  <Typography variant="h6">Goal: {routine.goal}</Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  {routine.activities.map((activity) => (
                    <div key={activity.id}>
                      <Typography variant="subtitle1" gutterBottom>
                        Activity
                      </Typography>
                      <Typography variant="body1">
                        Activity Name: {activity.name}
                      </Typography>
                      <Typography variant="body1">
                        Description: {activity.description}
                      </Typography>
                      <Typography variant="body1">
                        Duration: {activity.duration}
                      </Typography>
                    </div>
                  ))}
                </Paper>
              )
          )}
        </List>
      ) : (
        <Typography variant="h5">No routines available.</Typography>
      )}
    </Container>
  );
};

export default Myroutines;