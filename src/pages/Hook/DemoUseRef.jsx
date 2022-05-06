import React, { useRef, useState } from "react";

export default function DemoUseRef() {
  const [state, setState] = useState({ username: "", password: "" });
  console.log(state);

  // useRef có thể cache lại giá trị mỗi lần nhập liệu nhưng không render lại giao diện
  const userLoginRef = useRef({ username: "", password: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    // setState({
    //   ...state,
    //   [name]: value,
    // });

    userLoginRef.current[name] = value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userLoginRef.current);
  };

  return (
    <div className="container p-5">
      <h3>Login</h3>
      <form className="form-group" onSubmit={handleSubmit}>
        <p className="mt-3">Username</p>
        <input type="text" className="form-control" name="username" onChange={handleChange} />
        <p className="mt-3">Password</p>
        <input type="password" className="form-control" name="password" onChange={handleChange} />
        <button className="btn btn-primary mt-3" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
