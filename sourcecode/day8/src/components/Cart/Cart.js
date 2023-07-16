import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "../Cart/CartItem";

const Cart = (props) => {
  const cartData = useContext(CartContext);
  console.log(cartData);

  const totalAmount = `$${cartData.totalAmount.toFixed(2)}`;

  const hasItems = cartData.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartData.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartData.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartData.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          // .bind(thisArg, args)
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCartToggle}>
      {cartItems}
      <div>
        <span className={classes.total}>{totalAmount}</span>
        <span>54</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartToggle}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
