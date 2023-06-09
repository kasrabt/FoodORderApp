import { useReducer } from "react";
import Cartctx from "./CartCtx";
const defaultCartstate = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.amount;
    
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
        
      }
      if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
      }
    
  return defaultCartstate;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartaction] = useReducer(
    CartReducer,
    defaultCartstate
  );
  const addCartHandler = (item) => {
    dispatchCartaction({
      type: "ADD",
      item: item,
    });
  };
  const removeCarthandler = (id) => {
    dispatchCartaction({ type: 'REMOVE', id: id });
  };
  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartHandler,
    removeItem: removeCarthandler,
  };
  return (
    <Cartctx.Provider value={cartcontext}>{props.children}</Cartctx.Provider>
  );
};
export default CartProvider;
