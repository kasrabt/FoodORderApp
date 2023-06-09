import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [show , setShow ] = useState(false)
  const showCartHandler = () =>{
    setShow(true)
  }
  const HideCartHanlder =()=>{
    setShow(false)
  }
  return (
  <CartProvider>
  {show && <Cart onHide={HideCartHanlder} />}
    <Header onShowCart={showCartHandler}/>
    <main>
    <Meals />

    </main>
  </CartProvider>
  );
}

export default App;