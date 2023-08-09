import React, { useEffect, useState } from "react";
import { getRoutines } from "../api";
import { Container, Typography, Paper, List, ListItem, Divider } from '@mui/material';

const Routines = ({ routines, setRoutines }) => {
  useEffect(() => {
    const fetchData = async () => {
      const routinesResult = await getRoutines();
      setRoutines(routinesResult);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Routines</Typography>
      
      {routines && routines.length > 0 ? (
        <List>
          {routines.map((routine) => (
            routine.activities && routine.activities.length > 0 && (
              <Paper elevation={3} style={{ margin: '10px 0', padding: '10px' }} key={routine.id}>
                <Typography variant="h4">{routine.creatorName}</Typography>
                <Typography variant="h6">Routine: {routine.name}</Typography>
                <Typography variant="h6">Goal: {routine.goal}</Typography>
                <Divider style={{ margin: '10px 0' }} />

                {routine.activities.map((activity) => (
                  <div key={activity.id}>
                    <Typography variant="subtitle1" gutterBottom>Activity</Typography>
                    <Typography variant="body1">Activity Name: {activity.name}</Typography>
                    <Typography variant="body1">Description: {activity.description}</Typography>
                    <Typography variant="body1">Duration: {activity.duration}</Typography>
                  </div>
                ))}
              </Paper>
            )
          ))}
        </List>
      ) : (
        <Typography variant="h5">No routines available.</Typography>
      )}
    </Container>
  );
};

export default Routines;
