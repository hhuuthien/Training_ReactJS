import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function API_Redux_Hook() {
  const { data, isLoading, error } = useSelector((rootState) => rootState.tasksReducer); // chứa dữ liệu trên store
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({
          type: "GET_TASK_PENDING",
        });

        const result = await axios.get("http://svcy.myclass.vn/api/ToDoList/GetAllTask");

        dispatch({
          type: "GET_TASK_FULFILLED",
          data: result.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "GET_TASK_REJECTED",
          error: error.response.data,
        });
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container p-5">
      {data.map((item, index) => {
        return <p key={index}>{item.taskName}</p>;
      })}
    </div>
  );
}
