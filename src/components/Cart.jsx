import React from "react"

const CartItems = (props) => {

    return(
        <>
        
        {props.order.map((item) => {
            return <li key={"item" + props.order.indexOf(item)}>
                <div  className="cart-item">
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div className="cart-item-right">
                        <h1>{item.name}</h1>
                        <h2 className="price">{item.price}</h2>                                
                    <div className="buttons">
                        <button>-</button>{item.quantity}<button>+</button>
                    </div>
                    </div>
                </div>

            </li>
         })}
        </>
        
    )
}

const Cart = (props) => {
    return(
        <div onClick={props.hideCart} id="background"  className="cart-div">
            <div className="cart">
                <h1>Your shopping cart</h1>
                <ul className="cart-items">
                <CartItems order={props.order}/>

                </ul>
            </div>

        </div>
    )
}

export default Cart