import axios from "axios";

export const getTasksAPIAction = async (dispatch2) => {
  try {
    const result = await axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });

    dispatch2({
      type: "GET_TASK_TODO",
      data: result.data,
    });
  } catch (e) {
    console.log(e);
  }
};
