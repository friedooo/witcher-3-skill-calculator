import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload: payload,
});

export const fetchPizzas = (category, sortBy) => {
  return (dispatch) => {
    let url;
    let sortType;
    let order = "desc";

    switch (sortBy) {
      case "popular":
        sortType = "rating";
        break;
      case "price":
        sortType = "price";
        break;
      case "alphabet":
        sortType = "name";
        order = "asc";
        break;
      default:
        sortType = "rating";
    }

    // if (category === 0) {
    //     url = `http://localhost:3001/pizzas?_sort=${sortType}&_order=${descOrAsc}`;
    // }
    // else {
    //     url = `http://localhost:3001/pizzas?category=${category - 1}&_sort=${sortType}&_order=${descOrAsc}`;
    // }

    url = `http://localhost:3000/pizzas?${
      category === 0 ? "" : `category=${category - 1}`
    }&_sort=${sortType}&_order=${order}`;
    dispatch(setLoaded(false));
    axios.get(url).then((res) => {
      dispatch(setPizzas(res.data));
    });
  };
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
