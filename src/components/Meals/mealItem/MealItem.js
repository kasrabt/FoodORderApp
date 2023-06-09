import MealItemForm from "./mealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import Cartctx from "../../../store/CartCtx";
const MealITem = (props) => {
  const { name, description, price } = props;
  const Myprice = `$${price.toFixed(2)}`;
  const ctx = useContext(Cartctx);
  const addToCart = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount:amount,
      price : props.price
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.descirption}>{description}</div>
        <div className={classes.price}>{Myprice}</div>
      </div>
      <div>
        <MealItemForm onAddamount={addToCart} />
      </div>
    </li>
  );
};
export default MealITem;
