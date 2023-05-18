import React from "react";



const Catalog = (props) => {
    return(
        <ul className="catalog" >
            {props.products.map((product) => {
                return <li className="watch" id={`watch_${props.products.indexOf(product) + 1}`} key={product.name}>                    
                        <img src={product.img} alt="Pic" />                    
                        <div className="watch-text">
                        <h1 className="watch-name">{product.name}</h1>
                        <span className="price">{product.price}</span>
                        </div>
                        <button id={"btn-"+props.products.indexOf(product)} onClick={props.onclick} className="btn-add">Add to cart</button>
                        </li>
            })}
        </ul>
    )
}



export default Catalog