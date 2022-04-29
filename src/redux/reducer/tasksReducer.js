const DEFAULT_STATE = {
  data: [], // danh sách các tasks
  isLoading: false, // hiển thị trạng thái loading khi đang gọi API
  error: null,
};

export const tasksReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_TASK_PENDING": {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case "GET_TASK_FULFILLED": {
      return { ...state, data: action.data, isLoading: false, error: null };
    }
    case "GET_TASK_REJECTED": {
      return { ...state, isLoading: false, error: action.error };
    }
    default:
      return { ...state };
  }
};
