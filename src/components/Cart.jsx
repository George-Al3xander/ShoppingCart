import React from 'react'


const Cart = (props) => {
    return(
        <ul className="cart" >
            {props.order.map((product) => {
                return <li key={product.name}>
                    <ul>
                        <li>{product.name}</li>
                        <li className="price">{product.price}</li>
                        <li>{product.quantity}</li>
                        <li>{product.description}</li>
                        <li><img src={product.img} alt="Pic" /></li>
                    </ul>
                </li>
            })}
        </ul>
    )
}

export default Cart