import {useState} from "react";
import Header from "./components/Layout/Header";
import Phones from "./components/Phones/Phones";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Layout/Footer";
function App() {
const[cartIsShown,setCartIsShown]=useState(false);
  
const showCartHandler=()=>{
  setCartIsShown(true);
};

const hideCartHandler=()=>{
  setCartIsShown(false);
};

  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
    
    <Phones/>
    </main>
    <Footer/>
    </CartProvider>
  );
}

export default App;
