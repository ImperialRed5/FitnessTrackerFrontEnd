import React from "react";
import { Link } from "react-router-dom";

const Register = () =>{
    return(<div>
        <h1>Register</h1>
        <form>
            <label> Username:
                <input type="text" name="username"required />
            </label>
            <br/>
            <label>
                Password: 
                <input type="password" name="password" required />
            </label>
            <br/>
            <label>
                Re-Enter Password:
                <input type="password" name="password" required />
            </label>
            <br/>
            <button type="submit">Login</button>
            <button>Logout</button>
        </form> 
        <Link to='/login'>Already Have an Account? Login!</Link>
    </div>)
}

export default Register;