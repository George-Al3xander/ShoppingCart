import React from 'react'


const Cart = (props) => {
    return(
        <div>
            {props.order.map((item)=> {
                return <h1>{item.name}</h1> 
            })}

        </div>
    )
}

export default Cart