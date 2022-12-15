import React from "react";
import Button from "../../Buttons/Button";
import { Link } from "react-router-dom";
import "./welcome.css";

function Welcome () {
    return(
        <>
        <div className="body">
        <h1>Welcome <br></br>We are United Evangelical Church - Diobu <br></br> The Cathedral of Grace, Mercy and Peace.</h1>

        <div className="btn-1"><Link to="/Home" target="_parent"><Button text='Continue'/></Link></div>
        </div>

        </>
    )
}

export default Welcome;