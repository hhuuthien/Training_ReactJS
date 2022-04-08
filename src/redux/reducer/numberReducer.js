const DEFAULT_STATE = 1;

export const stateNumber = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "TANG_GIAM_SO_LUONG":
      state = state + action.soLuong;
      return state;
    default:
      return state;
  }
};
