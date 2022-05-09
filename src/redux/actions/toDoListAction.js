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

export const addTaskAPIAction = (taskData) => {
  return async (dispatch2) => {
    try {
      // post lên
      const result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        method: "POST",
        data: taskData,
      });

      const action = getTasksAPIAction;
      dispatch2(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

export const xoaTask = (taskName) => {
  return async (dispatch) => {
    try {
      // xoá
      const result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=" + taskName,
        method: "DELETE",
      });

      alert(result.data);

      const action = getTasksAPIAction;
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

export const doneTask = (taskName) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=" + taskName,
        method: "PUT",
      });

      const action = getTasksAPIAction;
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

export const rejectTask = (taskName) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=" + taskName,
        method: "PUT",
      });

      const action = getTasksAPIAction;
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};
