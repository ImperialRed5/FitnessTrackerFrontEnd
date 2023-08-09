import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api";

import {Alert, Button, TextField, Box, Typography, Paper } from "@mui/material";

const Register = ({ username, setUsername, setPassword, password }) => {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(username, password);
      if (response.token) {
        localStorage.setItem("token", response.token);
        setAlertMessage("User registered successfully!");
        setAlertType("success");
      } else if (response.error && response.name === "UserExistsError") {
        setAlertMessage(response.message);
        setAlertType("error");
      } else {
        setAlertMessage("Unknown error occurred. Please try again.");
        setAlertType("error");
      }
    } catch (error) {
      setAlertMessage("Error occurred. Please try again later.");
      setAlertType("error");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Typography variant="h2" gutterBottom>
        Register
      </Typography>

      <Paper elevation={5} style={{ padding: "40px", width: "400px" }}>
      {alertMessage && (
          <Alert severity={alertType} onClose={() => setAlertMessage("")}>
            {alertMessage}
          </Alert>
        )}
        <form onSubmit={handleRegistration}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Username"
              id="standard-basic"
              variant="outlined"
              type="text"
              name="username"
              required
              size="medium"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              required
              size="medium"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              Register
            </Button>
          </Box>
        </form>
        <Box mt={3}>
          <Link to="/login">Already Have an Account? Login!</Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
