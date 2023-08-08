import React from "react";
import { Button, TextField } from "@mui/material";
import { loginUser } from "../api";

const Login = ({username, setUsername, password, setPassword}) =>{
    
    const handleLogin = async (e) => {
        e.preventDefault();
        await loginUser(username, password)
        const token = localStorage.getItem('token')
        if (token) {
         console.log('TOKEN', token)
        }
        else {
          console.log('ERROR NO TOKEN')
        }
      }

    return(<div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label> Username:
                <TextField id="standard-basic" label="Standard" variant="standard" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}required />
            </label>
            <br/>
            <label>
                Password: 
                <input type="password" name="password"  value={password}onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <br/>
            <Button variant="outlined " type="submit">Login</Button>
            <Button variant="outlined">Logout</Button>
        </form> 
    </div>)
}

export default Login;