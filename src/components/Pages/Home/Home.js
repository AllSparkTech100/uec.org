import React from "react";
import Nav from "../Navigation/Nav";
import "./home.css"
function Home (){
    return(
        <>
        <div className="main">
        <Nav/>

        <div className="need">
        <h3>Needing <span>Jesus Christ</span> Together</h3> 
        </div>  
        
        <div className="mid">
        <h5>Our Bible Study</h5>
        <h6>Join us on our awesome Bible study class every <span>Wednesdays</span></h6>
        </div>
        </div>

        </>
    )
}

export default Home