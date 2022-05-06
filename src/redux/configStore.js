import { combineReducers, createStore, applyMiddleware } from "redux";
import { stateNumber } from "./reducer/numberReducer.js";
import { stateImage } from "./reducer/imageReducer.js";
import { gioHangReducer } from "./reducer/gioHangReducer.js";
import { gameXucXacReducer } from "./reducer/gameXucXacReducer.js";
import { quanLyNguoiDungReducer } from "./reducer/quanLyNguoiDungReducer.js";
import { tasksReducer } from "./reducer/tasksReducer.js";
import { toDoListReducer } from "./reducer/toDoListReducer.js";
// thunk
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  // các state dự án khai báo tại đây
  stateNumber,
  stateImage,
  gioHangReducer,
  gameXucXacReducer,
  quanLyNguoiDungReducer,
  tasksReducer,
  toDoListReducer,
});

const middleware = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
