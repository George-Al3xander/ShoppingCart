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




function App() {
    const [products, setProducts] = useState([
      {
        name: "Bulova Lunar Pilot",
        price: 425,
        quantity: 1,
        img: watch1
      },
      {
        name: "Tissot PRX Chrono",
        price: 1825,
        quantity: 1,
        img: watch2
      },
      {
        name: "Breitling Premier B01",
        price: 2245,
        quantity: 1,
        img: watch3
      },
      {
        name: "Frederique Constant Flyback Chronograph Manufacture",
        price: 4295 ,
        quantity: 1,
        img: watch4
      },
      {
        name: 'Omega Speedmaster Professional "Moonwatch"',
        price: 5250,
        quantity: 1,
        img: watch5
      },
      {
        name: "Hamilton Intra-Matic Auto Chrono ",
        price: 8500,
        quantity: 1,
        img: watch6
      },
      {
        name: "Tissot Seastar 2000 Powermatic 80",
        price: 1025,
        quantity: 1,
        img: watch7
      },
      {
        name: "Citizen Promaster Diver Gold Edition",
        price: 1050,
        quantity: 1,
        img: watch8
      },
      {
        name: "Zodiac Super Sea Wolf World Time",
        price: 1795,
        quantity: 1,
        img: watch9
      },
    ]);


    const[total, setTotal] = useState(0);
    const[order, setOrder] = useState([]);

    const addToCart = (e) => {
      let num = e.target.id;
      num = num.split("-")[1];
      console.log(num);
      let tempArray = [...order];

      tempArray.push(products[num]);
      setOrder(tempArray);
    }
    


    return(
      <div className="main">
        <NavBar quantity={0} />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/catalog" element={<Catalog products={products} onclick={addToCart} />} />
        </Routes>       
        <Cart order={order}/>
      </div>
      
    )


}

export default App
