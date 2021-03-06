import React, { Component } from "react";
import axios from "axios";

export default class DemoAPI_Class extends Component {
  state = {
    arrayTasks: [],
  };

  getAllTasks = async () => {
    // let promise = axios({
    //   url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    //   method: "GET",
    // });

    // promise.then((result) => {
    //   console.table(result.data);
    //   this.setState({
    //     arrayTasks: result.data,
    //   });
    // });

    // promise.catch((error) => {
    //   console.log(error);
    // });

    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });

      this.setState({
        arrayTasks: result.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getAllTasks();
  }

  render() {
    return (
      <div className="container p-3">
        <h4 className="mb-5">To do list app</h4>
        <table className="table w-50">
          <tbody>
            {this.state.arrayTasks
              .filter((task) => task.status === false)
              .map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className="badge badge-warning">In progress</span>
                    </td>
                    <td>
                      <button className="btn btn-success">
                        <span className="fa fa-check"></span>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            {this.state.arrayTasks
              .filter((task) => task.status === true)
              .map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className="badge badge-success">Complete</span>
                    </td>
                    <td></td>
                  </tr>
                );
              })}
          </tfoot>
        </table>
      </div>
    );
  }
}

/*
    Promise:
        Call API ?????c l???p
    Async Await:
        Call API tu???n t??? (d??? li???u t??? API 1 g???i ti???p API 2, 3,...)
    Promise.all:
        3 c??i ?????c l???p ch???y ?????ng th???i xong t???i c??i th??? 4 tu???n t???
*/
