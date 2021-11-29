import produce from "immer";
import { act } from "react-dom/test-utils";
import { current } from "immer";

const initialState = {
  cartItems: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((akk, { price }) => price + akk, 0);

const cart = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PIZZA_TO_CART": {
        // эту поеботу мы не будем в immer переписывать потому что страшно

        const currentPizzaItems = !state.cartItems[action.payload.id]
          ? [action.payload]
          : [...state.cartItems[action.payload.id].items, action.payload];
        const newItems = {
          ...state.cartItems,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems),
          },
        };

        const items = Object.values(newItems).map((obj) => obj.items);
        const allPizzas = items.flat();
        const totalPrice = getTotalPrice(allPizzas);

        return {
          ...state,
          cartItems: newItems,
          totalCount: allPizzas.length,
          totalPrice: totalPrice,
        };
      }

      case "ADD_PIZZA_INFO": {
        draft.cartItems[action.id].pizzaInfo = action.payload;

        break;
      }

      case "REMOVE_CART_ITEM": {
        draft.totalPrice -= draft.cartItems[action.id].totalPrice;
        draft.totalCount -= draft.cartItems[action.id].items.length;

        delete draft.cartItems[action.id];
        break;
      }

      case "CLEAR_CART":
        return initialState;

      case "PLUS_CART_ITEM": {
        const pizzaItems = draft.cartItems[action.id].items;
        const addedItem = pizzaItems[pizzaItems.length - 1];
        draft.cartItems[action.id].items.push(addedItem);
        draft.cartItems[action.id].totalPrice += addedItem.price;
        draft.totalPrice += addedItem.price;
        draft.totalCount += 1;

        break;
      }

      case "MINUS_CART_ITEM": {
        const pizzaItems = draft.cartItems[action.id].items;
        const deletedItem = pizzaItems[pizzaItems.length - 1];
        draft.cartItems[action.id].items.pop();
        draft.cartItems[action.id].totalPrice -= deletedItem.price;
        draft.totalPrice -= deletedItem.price;
        draft.totalCount -= 1;

        break;
      }

      case "REMOVE_DETAILED_ITEM": {
        const cartItem = draft.cartItems[action.id];
        const removedItem = cartItem.items[action.index];

        draft.totalPrice -= removedItem.price;
        draft.totalCount -= 1;
        cartItem.totalPrice -= removedItem.price;

        if (cartItem.items.length > 0) {
          //удаляем элемент с выбранным индексом
          cartItem.items = cartItem.items.filter((e) => {
            return e !== removedItem;
          });
        }

        if (cartItem.items.length === 0) {
          delete draft.cartItems[action.id];
        }

        break;
      }

      case "EDIT_DETAILED_ITEM": {
        const typesConv = {
          тонкое: 0,
          традиционное: 1,
        };

        const sizeConv = {
          26: 0,
          30: 1,
          40: 2,
        };

        const pastSize = draft.cartItems[action.id].items[action.index].size;
        const pastType = draft.cartItems[action.id].items[action.index].type;
        const pastPrice = draft.cartItems[action.id].items[action.index].price;
        let newPrice;

        if (action.property === "type") {
          newPrice =
            draft.cartItems[action.id].pizzaInfo.price[typesConv[action.value]][
              sizeConv[pastSize]
            ];
        } else {
          newPrice =
            draft.cartItems[action.id].pizzaInfo.price[typesConv[pastType]][
              sizeConv[action.value]
            ];
        }

        draft.totalPrice -= pastPrice;
        draft.totalPrice += newPrice;

        draft.cartItems[action.id].totalPrice -= pastPrice;
        draft.cartItems[action.id].totalPrice += newPrice;

        draft.cartItems[action.id].items[action.index].price = newPrice;

        draft.cartItems[action.id].items[action.index][action.property] =
          action.value;

        break;
      }

      default:
        return state;
    }
  });

export default cart;
