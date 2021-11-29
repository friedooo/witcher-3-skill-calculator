import axios from "axios";

export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_TO_CART",
  payload: pizzaObj,
});

export const addPizzaInfo = (infoObj, id) => ({
  type: "ADD_PIZZA_INFO",
  payload: infoObj,
  id,
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  id,
});

export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  id,
});

export const removeDetailedItem = (id, index) => ({
  type: "REMOVE_DETAILED_ITEM",
  id,
  index,
});

export const editDetailedItem = (value, id, index, property, priceList) => ({
  type: "EDIT_DETAILED_ITEM",
  value,
  id,
  index,
  property,
  priceList,
});
