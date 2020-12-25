export const initState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = state.basket.filter((item) => {
        return item.id != action.id;
      });
      return {
        ...state,
        basket: [...newBasket],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

export default reducer;
