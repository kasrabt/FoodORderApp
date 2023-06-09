import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import Cartctx from "../../store/CartCtx";
import CartItem from "./CartItem";
const Cart = (props) => {
  const { onHide } = props;
  const Ctx = useContext(Cartctx);
  const hasItem = Ctx.items.length > 0;
  const totalAmount = `$${Ctx.totalAmount.toFixed(2)}`;
  const onRemoveHandler = (id) => {
    Ctx.removeItem(id)
  };
  const addHandler = (item) => {
    Ctx.addItem(item)
  };
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {Ctx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={addHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onHide}>
      {cartitems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={onHide}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
