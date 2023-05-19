import React, { useState } from "react";
import backgroundFront from "../assets/img_background/img_background_front.jpg"
import backgroundBack from "../assets/img_background/img_background_back.jpg"
import { Route,Routes, Link } from "react-router-dom"

const Homepage = () => {
    const [src, setSrc] = useState(backgroundFront);
    const [clr, setClr] = useState("white");
    return(
        <div
        style={{backgroundImage: `url(${src})`}}
        className="homepage">
            <div className="homepage-content">
            <aside style={{color: clr}} >
            <p>"Everyone looks at your watch and it represents who you are, your values and your personal style."</p>
            <h2>Kobe Bryant</h2>
            </aside>
            <Link to="/catalog">
                <button            
            onMouseEnter={()=> {
                setSrc(backgroundBack);
                setClr("black");
            }
            } 
            onMouseLeave={()=> {
                setSrc(backgroundFront);
                setClr("white");
            }} 
            >Find now</button>
            </Link>
            </div>           
        </div>
    )
}


export default Homepage