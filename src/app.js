import React from "react";
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
return(
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/routines" element={<Routines />}/>
            <Route path="/myroutines" element={<Myroutines />}/>
            <Route path="/activities" element={<Activities/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        <div className="app"></div>
    </BrowserRouter>
)
}   

const Home = () => {
    return(<div><h1>HELLO world</h1></div>)
}


export default App;