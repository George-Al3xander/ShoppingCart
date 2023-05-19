import watch1 from "./assets/img_products/img_watch_1.jpg"
import watch2 from "./assets/img_products/img_watch_2.jpg"
import watch3 from "./assets/img_products/img_watch_3.jpg"
import watch4 from "./assets/img_products/img_watch_4.jpg"
import watch5 from "./assets/img_products/img_watch_5.jpg"
import watch6 from "./assets/img_products/img_watch_6.jpg"
import watch7 from "./assets/img_products/img_watch_7.jpg"
import watch8 from "./assets/img_products/img_watch_8.jpg"
import watch9 from "./assets/img_products/img_watch_9.jpg"

import React, { useState } from 'react'
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import { Route,Routes, Link } from "react-router-dom"
import Catalog from "./components/Catalog"
import Homepage from "./components/Homepage"
import { useEffect } from "react"




function App() {
    const [products, setProducts] = useState([
      {
        name: "Bulova Lunar Pilot",
        price: 425,
        quantity: 1,
        id: "watch1",
        hadBeenAdded: false,
        img: watch1
      },
      {
        name: "Tissot PRX Chrono",
        price: 1825,
        quantity: 1,
        id: "watch2",
        hadBeenAdded: false,
        img: watch2
      },
      {
        name: "Breitling Premier B01",
        price: 2245,
        quantity: 1,
        id: "watch3",
        hadBeenAdded: false,
        img: watch3
      },
      {
        name: "Frederique Constant Flyback Chronograph Manufacture",
        price: 4295 ,
        quantity: 1,
        id: "watch4",
        hadBeenAdded: false,
        img: watch4
      },
      {
        name: 'Omega Speedmaster Professional "Moonwatch"',
        price: 5250,
        quantity: 1,
        id: "watch5",
        hadBeenAdded: false,
        img: watch5
      },
      {
        name: "Hamilton Intra-Matic Auto Chrono ",
        price: 8500,
        quantity: 1,
        id: "watch6",
        hadBeenAdded: false,
        img: watch6
      },
      {
        name: "Tissot Seastar 2000 Powermatic 80",
        price: 1025,
        quantity: 1,
        id: "watch7",
        hadBeenAdded: false,
        img: watch7
      },
      {
        name: "Citizen Promaster Diver Gold Edition",
        price: 1050,
        quantity: 1,
        id: "watch8",
        hadBeenAdded: false,
        img: watch8
      },
      {
        name: "Zodiac Super Sea Wolf World Time",
        price: 1795,
        quantity: 1,
        id: "watch9",
        hadBeenAdded: false,
        img: watch9
      },
    ]);

       
    const[order, setOrder] = useState([]);
    const[isCartShown, setIsCartShown] = useState(false);

    const showMsg = (obj) => {
      let tempArray = [...products];
      // setTimeout(()=> {   

      //   for(let product of tempArray) {
      //     if(obj.id == product.id) {
      //       product.hadBeenAdded = false;
      //     }
      //   }
      // setProducts(tempArray);
      // console.log(2);
      // },1000)

      console.log(1);


      for(let product of tempArray) {
        if(obj.id == product.id) {
          product.hadBeenAdded = true;
        }
      }
      setProducts(tempArray);      
      
    }

    useEffect(()=>{
      let obj = order[order.length-1];
      if(obj != undefined) {
        let tempArray = [...products];
      setTimeout(()=> {   

        for(let product of tempArray) {
          if(obj.id == product.id) {
            product.hadBeenAdded = false;
          }
        }
      setProducts(tempArray);
      console.log(2);
      },1000)
      }
    },products)

    

    const addToCart = (e) => {
      let isSameProduct = false;
      let num = e.target.id;
      num = num.split("-")[1];
      let tempArray = [...order];

      for(let item of tempArray) {
          if(products[num].id == item.id) {
            item.quantity += 1;
            isSameProduct = true;
          }        
      }

      if(isSameProduct == false) {
        tempArray.push(products[num]);
      }
      showMsg(products[num]);
      setOrder(tempArray);      
    }

    const addQuantity = (e) => {
      let num = e.target.parentElement.id;
      num = num.split("_")[2];
      let tempArray = [...order];
      tempArray[num].quantity += 1;
      setOrder(tempArray);  
    }

    const removeQuantity = (e) => {
      let num = e.target.parentElement.id;
      num = num.split("_")[2];
      let tempArray = [...order];
      tempArray[num].quantity -= 1;
      tempArray = tempArray.filter((item) => item.quantity > 0);
      setOrder(tempArray);
    }
    
    const hideCart = (e) => {
      if(e.target.id == "background") {
        setIsCartShown(false);
      }
    }

    

    return(
      <div className="main">
        <NavBar showCart={()=>{setIsCartShown(true)}} order={order} />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/catalog" element={<Catalog products={products} onclick={addToCart} />} />
        </Routes>       
        {isCartShown ? <Cart 
          order={order} 
          removeQuantity={removeQuantity} 
          addQuantity={addQuantity} 
          hideCart={hideCart}/> : null}
      </div>
      
    )


}

export default App
