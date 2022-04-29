import React, { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "./useAxios";

export default function DemoAPI_Hook() {
  const [tasks, setTasks] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    async function getTasks() {
      try {
        const result = await axios({
          url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: "GET",
        });

        setTasks(result.data);
      } catch (e) {
        console.log(e);
      }
    }
    getTasks();
  }, []);

  const handleSearch = async () => {
    try {
      const result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetTask?taskName=" + keyword,
        method: "GET",
      });

      console.log(result.data);

      setTasks([result.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-5">
      <h4 className="mb-5">To do list app</h4>

      {/* Search */}
      <div className="form-inline pb-5">
        <label className=""></label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button className="ml-2 btn btn-primary" onClick={handleSearch}>
          Tìm kiếm
        </button>
      </div>

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
