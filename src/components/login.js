import React, {useState} from "react";
import { Alert, Button, TextField } from "@mui/material";
import { loginUser } from "../api";

const Login = ({username, setUsername, password, setPassword}) =>{
    const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
    const [loginAlertOpen, setLogingAlertOpen] = useState(false);
    const [loginErrorAlertOpen, setLoginErrorAlertOpen] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await loginUser(username, password);
        if (result && result.token) {
            localStorage.setItem('token', result.token);
            setLogingAlertOpen(true);
        } else {
            console.log('ERROR NO TOKEN');
            setLoginErrorAlertOpen(true);
        }
    };
    
    const handleLogout =() => {
        localStorage.removeItem('token');
        setUsername('');
        setPassword('');
        console.log('user logged out')
        setLogoutAlertOpen(true);
    };

    return(<div>
        <h1>Login</h1>
        {logoutAlertOpen && (
            <Alert severity="info" onClose={()=> setLogoutAlertOpen(false)}>
                User logged out successfully!
            </Alert>
        )}
        {loginAlertOpen && (
            <Alert severity="info" onClose={()=> setLogoutAlertOpen(false)}>
                User logged in successfully!
            </Alert>
        )}
        {loginErrorAlertOpen && (
            <Alert severity="info" onClose={()=> setLoginErrorAlertOpen(false)}>
                Login unsuccessful. Incorrect username or password.
            </Alert>
        )}
        <form onSubmit={handleLogin}>
            <label> Username:
                <TextField id="standard-basic"  variant="standard" type="text" name="username"  required value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br/>
            <label>
                Password: 
                <input type="password" name="password"  required value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <br/>
            <Button variant="outlined " type="submit">Login</Button>
            <Button onClick={handleLogout}>Logout</Button>
        </form> 
    </div>)
}

export default Login;