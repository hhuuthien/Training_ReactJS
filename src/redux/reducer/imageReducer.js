const DEFAULT_STATE = "./img/products/black-car.jpg";

export const stateImage = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      state = `./img/products/${action.color}-car.jpg`;
      return state;
    default:
      return state;
  }
};
