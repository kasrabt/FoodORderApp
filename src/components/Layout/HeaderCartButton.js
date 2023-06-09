import { useContext } from "react";
import CartIcon from "../Cart/CartICon";
import classes from "./HeaderC.module.css";
import Cartctx from "../../store/CartCtx";
const HeaderCartButton = (props) => {
  const { onClick } = props;
  const Ctx = useContext(Cartctx)
  const numberofcartitems = Ctx.items.reduce((curNumber , item)=>{
    return curNumber + item.amount
  } , 0)
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofcartitems}</span>
    </button>
  );
};
export default HeaderCartButton;
