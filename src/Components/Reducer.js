export const reducer = (state, action) => {
  if (action.type === "send-data") {
    let getdata = state.shoesdata.filter((elements) => {
      return elements.id === action.payload;
    });
    return { ...state, cartdetail: getdata };
  }
  return state;
};
