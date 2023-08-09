import React, { useState } from "react";
import {
  Alert,
  Button,
  TextField,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { loginUser } from "../api";

const Login = ({ username, setUsername, password, setPassword }) => {
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
  const [loginAlertOpen, setLogingAlertOpen] = useState(false);
  const [loginErrorAlertOpen, setLoginErrorAlertOpen] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(username, password);
    if (result && result.token) {
      localStorage.setItem("token", result.token);
      setLogingAlertOpen(true);
    } else {
      console.log("ERROR NO TOKEN");
      setLoginErrorAlertOpen(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsername("");
    setPassword("");
    console.log("user logged out");
    setLogoutAlertOpen(true);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Typography variant="h2" gutterBottom>
        Login
      </Typography>

      {/* Alerts */}
      {logoutAlertOpen && (
        <Alert severity="info" onClose={() => setLogoutAlertOpen(false)}>
          User logged out successfully!
        </Alert>
      )}
      {loginAlertOpen && (
        <Alert severity="info" onClose={() => setLogingAlertOpen(false)}>
          User logged in successfully!
        </Alert>
      )}
      {loginErrorAlertOpen && (
        <Alert severity="error" onClose={() => setLoginErrorAlertOpen(false)}>
          Login unsuccessful. Incorrect username or password.
        </Alert>
      )}

      <Paper elevation={5} style={{ padding: "40px", width: "400px" }}>
        <form onSubmit={handleLogin}>
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
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              Login
            </Button>
            <Button variant="outlined" onClick={handleLogout} size="large">
              Logout
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
