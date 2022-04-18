import { combineReducers, createStore } from "redux";
import { stateNumber } from "./reducer/numberReducer.js";
import { stateImage } from "./reducer/imageReducer.js";
import { gioHangReducer } from "./reducer/gioHangReducer.js";
import { gameXucXacReducer } from "./reducer/gameXucXacReducer.js";
import { quanLyNguoiDungReducer } from "./reducer/quanLyNguoiDungReducer.js";

const rootReducer = combineReducers({
  // các state dự án khai báo tại đây
  stateNumber,
  stateImage,
  gioHangReducer,
  gameXucXacReducer,
  quanLyNguoiDungReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
