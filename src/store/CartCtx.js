import React from "react";

const Cartctx = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default Cartctx