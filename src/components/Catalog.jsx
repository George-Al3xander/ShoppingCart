import React, { useState } from "react";
import addedSvg from  "../assets/icons/icon_added.svg"

const AddedMsg = (props) => {
    return(
        <div key={"msg_" + props.divKey} className="msg">
            <img key={"msg_img_" + props.divKey} src={addedSvg} alt="" />
            <h1 key={"msg_h_" + props.divKey} >Added to your cart!</h1>
        </div>
    )
}


const Catalog = (props) => {
    
    return(
        <ul className="catalog" >
            {props.products.map((product) => {
                return product.hadBeenAdded == true ? 
                <AddedMsg divKey={product.id} /> 
                    :                 
                <li  className="watch" id={`watch_${props.products.indexOf(product) + 1}`} key={product.id}>                    
                <img src={product.img} alt="Pic" />                    
                <div className="watch-text">
                <h1 className="watch-name">{product.name}</h1>
                <span className="price">{product.price.toLocaleString()}</span>
                </div>
                <button 
                    id={"btn-"+props.products.indexOf(product)} 
                    className="btn-add"
                    onClick={props.onclick} 
                    onMouseEnter={(e)=> {                                
                        let num = e.target.id;
                        num = num.split("-")[1];
                        num = parseInt(num, 10) + 1;
                        document.getElementById("watch_"+num).style.opacity = ".7"                               
                    }
                    } 
                    onMouseLeave={(e)=> {
                        let num = e.target.id;
                        num = num.split("-")[1];
                        num = parseInt(num, 10) + 1;
                        document.getElementById("watch_"+num).style.opacity = "1"
                    }} 
                    
                    >Add to cart</button>
                </li>
            })}
        </ul>
    )
}



export default Catalog