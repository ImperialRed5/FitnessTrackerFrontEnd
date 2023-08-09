import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Routines from "./components/routines";
import Myroutines from "./components/myRoutines";
import Activities from "./components/activities";
import Login from "./components/login";
import Register from "./components/register";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'

const NavBar = () =>{
return(<nav>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/routines">Routines</Button>
        <Button color="inherit" component={Link} to="/myroutines">My Routines</Button>
        <Button color="inherit" component={Link} to="/activities">Activities</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
      </Toolbar>
    </AppBar>
</nav>)
}

const App = () => {
    const [loading, setLoading ] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [routineWithActivities, setRoutineWithActivities] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword ] = useState("");

    
    useEffect(()=>{
        localStorage.setItem('token',token)
    },[token]);
    
return(
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/routines" element={<Routines routines={routines} setRoutines={setRoutines} loading={loading} setLoading={setLoading} routineWithActivities={routineWithActivities} setRoutineWithActivities={setRoutineWithActivities}/>}/>
            <Route path="/myroutines" element={<Myroutines token={token} username={username} setUsername={setUsername} />}/>
            <Route path="/activities" element={<Activities activities={activities} setActivities={setActivities} loading={loading} setLoading={setLoading} token={token} />}/>
            <Route path="/login" element={<Login token={token} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}/>
            <Route path="/register" element={<Register token={token} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
        </Routes>
        <div className="app"></div>
    </BrowserRouter>
)
}   

const Home = () => {
    return(<div><h1>Fitness Tracker</h1></div>)
}


export default App;