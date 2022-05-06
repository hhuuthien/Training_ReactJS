import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksAPIAction } from "../../redux/actions/toDoListAction";

export default function ToDoListApp() {
  const { tasks } = useSelector((root) => root.toDoListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getTasksAPIAction;

    dispatch(action);
  }, []);

  return (
    <div className="container p-5">
      <h4 className="mb-5">To do list app</h4>

      <table className="table w-50">
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.taskName}</td>
                <td>
                  <span className="badge badge-warning">In progress</span>
                </td>
                <td>
                  <button className="btn btn-success">Xong</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
