import React, { useState } from "react";
import backgroundFront from "../assets/img_background/img_background_front.jpg"
import backgroundBack from "../assets/img_background/img_background_back.jpg"
import { Route,Routes, Link } from "react-router-dom"

const Homepage = () => {
    const [src, setSrc] = useState(backgroundFront);
    return(
        <div className="homepage">
            <div className="homepage-content"><button            
            onMouseEnter={()=>setSrc(backgroundBack)} 
            onMouseLeave={()=>setSrc(backgroundFront)} 
            ><Link to="/catalog">Click me</Link> </button></div>
            <img src={src} style={{position: "absolute"}} alt="Background image" className="img-background"/>
        </div>
    )
}


export default Homepage