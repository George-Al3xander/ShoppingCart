import React  from "react"
import signAdd from "../assets/icons/icon_sign_add.svg"
import signRemove from "../assets/icons/icon_sign_remove.svg"
import { Link } from "react-router-dom"
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
                        <h2 className="price">{item.price.toLocaleString()}</h2>                                
                    <div id={"cart_buttons_" + props.order.indexOf(item)} className="buttons">
                    <img onClick={props.removeQuantity} src={signRemove} alt="" />     {item.quantity}
                    <img onClick={props.addQuantity} src={signAdd} alt="" />
                    </div>
                    </div>
                </div>
            </li>
         })}
        </>
        
    )
}

const Cart = (props) => {
    let total = props.order.reduce((total,curr) => {
                return total + (curr.price * curr.quantity);
            },0);
    return(
        <div onClick={props.hideCart} id="background"  className="cart-div">
            <div className="cart">
                <h1>Your shopping cart</h1>
                <ul className="cart-items">
                <CartItems removeQuantity={props.removeQuantity} addQuantity={props.addQuantity} order={props.order}/>

                </ul>
            <div>
                <h1 clas>Total: <span className="price">{total.toLocaleString()}</span>
                </h1>
            </div>  
            <Link to="/" onClick={props.hideCart}><button  className="checkout" >Checkout</button></Link>

            </div>
        </div>
    )
}

export default Cart