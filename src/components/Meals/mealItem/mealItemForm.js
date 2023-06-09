import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const inputValue = useRef();
  const [amountisValid , setAmountisValid ] = useState(true)
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAMOUNT =  inputValue.current.value ; 
    const enteredAmountNumber  = +enteredAMOUNT ; 
    if( enteredAMOUNT.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
       setAmountisValid(false)
       return
    }
     props.onAddamount(enteredAmountNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputValue}
        label="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ add</button>
      {!amountisValid && <p> pls enter a valid amount </p>}
    </form>
  );
};
export default MealItemForm;
