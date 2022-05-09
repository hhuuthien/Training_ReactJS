import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAPIAction, doneTask, getTasksAPIAction, rejectTask, xoaTask } from "../../redux/actions/toDoListAction";

export default function ToDoListApp() {
  const { tasks } = useSelector((root) => root.toDoListReducer);

  const taskRef = useRef({ taskName: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getTasksAPIAction;

    dispatch(action);
  }, []);

  const handleChange = (event) => {
    let { id, value } = event.target;
    taskRef.current[id] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // post lên
      const actiontion = addTaskAPIAction(taskRef.current);
      dispatch(actiontion);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDelete = (taskName) => {
    const action = xoaTask(taskName);
    dispatch(action);
  };

  const handleDone = (taskName) => {
    const action = doneTask(taskName);
    dispatch(action);
  };

  const handleReject = (taskName) => {
    const action = rejectTask(taskName);
    dispatch(action);
  };

  return (
    <div className="container p-5">
      <h4 className="mb-5">To do list app</h4>

      <form className="input-group mb-5" onSubmit={handleSubmit}>
        <input type="text" className="form-control" id="taskName" name="taskName" onChange={handleChange} />
        <button className="btn btn-success" type="submit">
          Thêm
        </button>
      </form>

      <table className="table w-50">
        <tbody>
          {tasks
            .filter((t) => t.status !== true)
            .map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>
                    <span className="badge badge-warning">In progress</span>
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleDone(task.taskName)}>
                      Xong
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(task.taskName)}>
                      Xoá
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          {tasks
            .filter((t) => t.status === true)
            .map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleReject(task.taskName)}>
                      Undo
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(task.taskName)}>
                      Xoá
                    </button>
                  </td>
                </tr>
              );
            })}
        </tfoot>
      </table>
    </div>
  );
}
