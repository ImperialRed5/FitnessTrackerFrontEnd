import React from "react";
import { Button, TextField } from "@mui/material";

const Login = () =>{
    return(<div>
        <h1>Login</h1>
        <form>
            <label> Username:
                <TextField id="standard-basic" label="Standard" variant="standard" type="text" name="username"required />
            </label>
            <br/>
            <label>
                Password: 
                <input type="password" name="password" required />
            </label>
            <br/>
            <Button variant="outlined " type="submit">Login</Button>
            <Button variant="outlined">Logout</Button>
        </form> 
    </div>)
}

export default Login;