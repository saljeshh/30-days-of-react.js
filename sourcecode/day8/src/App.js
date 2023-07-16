import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCart = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCartToggle={toggleCart} />}
      <Header onCartToggle={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
