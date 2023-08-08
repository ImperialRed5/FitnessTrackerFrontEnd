import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Routines from "./components/routines";
import Myroutines from "./components/myRoutines";
import Activities from "./components/activities";
import Login from "./components/login";
import Register from "./components/register";

const NavBar = () =>{
return(<nav>
    <Link to="/">Home</Link>
    <Link to="/routines">Routines</Link>
    <Link to="/myroutines">My Routines</Link>
    <Link to="/activities">Activities</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
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
    
return(
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/routines" element={<Routines routines={routines} setRoutines={setRoutines} loading={loading} setLoading={setLoading} routineWithActivities={routineWithActivities} setRoutineWithActivities={setRoutineWithActivities}/>}/>
            <Route path="/myroutines" element={<Myroutines />}/>
            <Route path="/activities" element={<Activities activities={activities} setActivities={setActivities} loading={loading} setLoading={setLoading}/>}/>
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