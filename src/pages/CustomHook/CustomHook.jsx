import React, { useState } from "react";
import useForm from "./useForm";
import useCounter from "./useCounter";
import useAxios from "../API/useAxios";

export default function CustomHook() {
  // const [values, setValues] = useState({ username: "", email: "", password: "" });

  // const handleChange = (event) => {
  //   const { value, name } = event.target;
  //   setValues({ ...values, [name]: value });
  // };

  const { values, handleChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { number, increase, decrease } = useCounter(0);

  const { data } = useAxios({
    url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    method: "GET",
  });

  console.log(data);

  return (
    <div className="container p-5">
      <div>
        <div className="display-4 mb-5">Count: {number}</div>
        <button className="btn btn-primary" onClick={decrease}>
          Giảm
        </button>
        <button className="btn btn-primary ml-2" onClick={increase}>
          Tăng
        </button>
      </div>
      {/* <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={values.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={values.password} onChange={handleChange} />
        </div>
      </div> */}
    </div>
  );
}
